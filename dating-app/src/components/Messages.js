import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './css/messages.css';



function Messages() {

    const [chatData, setChatData] = useState([]); 
    const [selectedChat, setSelectedChat] = useState(null);
    const [inputText, setInputText] = useState('');
    let chatMessages;


    //Set my data
    useEffect(() => {
        const fetchData = async () => {
          try {
            setChatData(data.users);
            if (data.users.length > 0) {
              setSelectedChat(data.users[0]);
            }
          } catch (error) {
            console.error('Error fetching chat data:', error);
          }
        };
    
        fetchData();
      }, []);


    //My Events 
    //Load chat messages when chat profile is clicked. 
    const handleChatClick = (chat) => {
        setSelectedChat(chat);
        renderMessages();
    };

    //Send message click event 
    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                //message: newMessageInput,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                type: 'sent',
            };
            
            chatMessages.push(newMessage)
            renderMessages();
        }

    };

    //Other functions
    //Function to sort my messages by time
    function sortByTime(array) {
        return array.sort((a, b) => {
            const [aHour, aMinute, aPeriod] = a.time.split(/:|\s/);
            const [bHour, bMinute, bPeriod] = b.time.split(/:|\s/);

            const aHour24 = aPeriod === "AM" ? parseInt(aHour) % 12 : parseInt(aHour) % 12 + 12;
            const bHour24 = bPeriod === "AM" ? parseInt(bHour) % 12 : parseInt(bHour) % 12 + 12;

            if (aHour24 < bHour24) {
                return -1;
            } else if (aHour24 > bHour24) {
                return 1;
            }

            if (parseInt(aMinute) < parseInt(bMinute)) {
                return -1;
            } else if (parseInt(aMinute) > parseInt(bMinute)) {
                return 1;
            }

            return 0;
        });
    }


    //Function to set contact list
    const renderMemberCards = () => {
        return chatData.map((chat, index) => (
            <React.Fragment key={chat.id}>
                <div
                    className={`member-card ${selectedChat && selectedChat.id === chat.id ? 'active' : ''}`}
                    onClick={() => handleChatClick(chat)}
                >
                    <img src={chat.userProfilePhoto} alt="User Profile" className="avatar" />
                    <div className="member-details">
                        <span className="member-name">{chat.name}</span>
                        <span className="member-message">{chat.lastMessage}</span>
                        <span className="message-timestamp">{chat.lastMessageTimestamp}</span>
                    </div>
                </div>
                {index !== chatData.length - 1 && <div className="separator-line"></div>}
            </React.Fragment>
        ));
    };
    //Function to set chat messages 
    const renderMessages = () => {
        if (!selectedChat || !selectedChat.messages) {
            return null;
        }
        const messages = sortByTime(selectedChat.messages);

        return (
            <div className='chatbox-container'>
                <ul className="message-list">
                    {messages.map((message, index) => (
                        <li
                            key={index}
                            className={`message-item ${message.type === 'sent' ? 'sent' : 'received'}`}
                        >
                            <div className="message-content">{message.message}</div>
                            <div className="message-time">{message.time}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };




    //Main return funtion for the page
    return (
        <div className="page-container">
            <div className="left-column">
                <div>
                    <div className="header">
                        <h2 className="title">Chat Contacts</h2>
                    </div>
                    <div className="input-bar">
                        <input type="text" placeholder="Search user..." />
                    </div>
                </div>

                <div className="member-list-section">
                    {renderMemberCards()}
                </div>
                <div className="footer">
                    <p className="message">Your best choice for your dating life</p>
                </div>
            </div>

            <div className="right-column">
                <div className="chat-header">
                    <img src="#" alt="Avatar" className="avatar" />
                    {selectedChat && <h2>{selectedChat.name}</h2>}
                </div>
                <p className="status">Online</p>
                <div className="top-section">
                    <div className="scrollable-list">
                        {renderMessages()}
                    </div>
                </div>
                <div className="bottom-section">
                    <input type="text" placeholder="Type your message" className="input-field" /*value={newMessageInput}*//>
                    <button className="send-button" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;