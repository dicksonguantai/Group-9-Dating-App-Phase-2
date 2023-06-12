
import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './css/messages.css';
import userIcon from './user-icon.png';




function Messages() {

    const [chatData, setChatData] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [messages, setMessages] = useState([sortByTime(data.users[0].messages)]);
    const [newMessageInput, setNewMessageInput] = useState("");
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
        console.log("Selected chat");
        console.log(chat);
        let newMessages = sortByTime(chat.messages);

        setSelectedChat(chat);
        setMessages([newMessages]);
        renderMessages();
    };

    //Search 
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    //Send message click event 
    const handleInputChange = (event) => {
        setNewMessageInput(event.target.value);
    };

    const handleSendMessage = () => {
        const newMessage = {
            message: newMessageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
            type: 'sent',
        };

        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            if (updatedMessages.length > 0) {
                if (!updatedMessages[0].messages) {
                    updatedMessages[0].messages = []; // Create messages array if it doesn't exist
                }
                updatedMessages[0] = [...updatedMessages[0], newMessage];
            }
            return updatedMessages;
        });

        setNewMessageInput("");
    };

    //Other functions
    //Function to sort my messages by time
    function sortByTime(array) {

        let newarray = array.sort((a, b) => {
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
        return newarray;
    }


    //Function to set contact list
    const renderMemberCards = () => {
        const filteredMembers = chatData.filter((chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

        return filteredMembers.map((chat, index) => (
            <React.Fragment key={chat.id}>
                <div
                    className={`member-card ${selectedChat && selectedChat.id === chat.id ? 'active' : ''}`}
                    onClick={() => handleChatClick(chat)}
                >
                    <img src={userIcon} alt="User Profile" className="avatar" />
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
        //const messages = sortByTime(selectedChat.messages);
        console.log("Display Message: ");
        console.log(messages);
        return (
            <div className='chatbox-container'>
                <ul className="message-list">
                    {messages[0].map((message, index) => (
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
                        <h2 className="title">Conversations</h2>
                    </div>
                    <div className="input-bar">
                        <input
                            type="text"
                            placeholder="Search profile"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
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
                    <img src={userIcon} alt="Avatar" className="avatar" />
                    {selectedChat && <h2>{selectedChat.name}</h2>}
                </div>
                <p className="status">Online</p>
                <div className="top-section">
                    <div className="scrollable-list">
                        {renderMessages()}
                    </div>
                </div>
                <div className="bottom-section">
                    <input type="text" placeholder="Type your message" className="input-field" value={newMessageInput} onChange={handleInputChange} onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            handleSendMessage();
                        }
                    }} />
                    <button className="send-button" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;
