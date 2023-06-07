import React, { useEffect, useState } from 'react';

function Messages() {
  const [chatData, setChatData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('db.json');
        const data = await response.json();
        setChatData(data);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const userProfilePhotos = chatData.map((chat) => (
    <img
      key={chat.id}
      src={chat.userProfilePhoto}
      alt="User Profile"
      onClick={() => handleChatClick(chat)}
    />
  ));

  return (
    <div className="messages-container">
      <div className="user-profile-photos">{userProfilePhotos}</div>
      <div className="chat-window">
        {selectedChat ? (
          <div className="maximized-chat">
            <h2>{selectedChat.name}</h2>
            {/* Render the messages between the two users */}
          </div>
        ) : (
          <div className="empty-chat">No chat selected</div>
        )}
      </div>
    </div>
  );
}

export default Messages;
