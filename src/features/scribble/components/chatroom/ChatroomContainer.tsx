import React from 'react';
import styles from './ChatroomContainer.module.scss';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const ChatroomContainer = () => {
  return (
    <section className={styles.chatroomContainer}>
      <h2>Chatroom</h2>
      <div className={styles.messageContainer}>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <ChatInput />
    </section>
  );
};

export default ChatroomContainer;
