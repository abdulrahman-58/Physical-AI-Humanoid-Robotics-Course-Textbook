import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './FloatingChatbot.module.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserOnly>
      {() => {
        // Only render on client side to avoid SSR issues
        const location = window.location;
        const isChatbotPage = location.pathname.includes('/chatbot');

        if (isChatbotPage) {
          // Don't show the floating button on the chatbot page itself
          return null;
        }

        return (
          <div className={clsx(styles['floating-chatbot'])}>
            {!isOpen ? (
              <button
                className={clsx(styles['chatbot-toggle-button'])}
                onClick={toggleChat}
                aria-label="Open chatbot"
              >
                💬
              </button>
            ) : (
              <div className={clsx(styles['chatbot-popup'])}>
                <div className={clsx(styles['chatbot-header'])}>
                  <span>Textbook Assistant</span>
                  <button
                    className={clsx(styles['close-button'])}
                    onClick={toggleChat}
                    aria-label="Close chatbot"
                  >
                    ×
                  </button>
                </div>
                <div className={clsx(styles['chatbot-content'])}>
                  <p>Need help with Physical AI & Humanoid Robotics content?</p>
                  <Link to="/chatbot" className={clsx(styles['chatbot-link'])}>Open Full Chat</Link>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default FloatingChatbot;