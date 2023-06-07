import React, { useEffect, useState } from 'react';
import data from '../data.json';
import './css/messages.css';

function Messages() {
  const [chatData, setChatData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

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

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    renderMessages();
  };

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

  const renderMessages = () => {
  if (!selectedChat || !selectedChat.messages) {
    return null;
  }

  const messages = sortByTime(selectedChat.messages);

  return (
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
  );
};


  return (
    <div className="messages-container">
      <div className="left-column">
        <div className="header-bar">Header</div>
        <div className="user-profile-scroll">
          <div className="member-list-section">{renderMemberCards()}</div>
        </div>
        <div className="footer-bar">Footer</div>
      </div>

      <div className="chat-window">
        <div className="maximized-chat">
          {selectedChat && <h2>{selectedChat.name}</h2>}
          {renderMessages()}
        </div>
      </div>
    </div>
  );
}

export default Messages;
