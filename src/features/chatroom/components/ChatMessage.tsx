import React from 'react';
import styles from './ChatMessage.module.scss';

const ChatMessage = () => {
  return (
    <div className={styles.chatMessage}>
      <div className={styles.nameDateWrapper}>
        <h4>Username</h4>
        <span>Date</span>
      </div>
      <p>This is a dummy message.</p>
    </div>
  );
};

export default ChatMessage;
