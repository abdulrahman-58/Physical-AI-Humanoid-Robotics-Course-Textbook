import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your Physical AI & Humanoid Robotics assistant. How can I help you with the textbook content?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate RAG-based response with relevant textbook content
      setTimeout(() => {
        let responseText = '';

        // Create a more intelligent response based on keywords
        const lowerInput = inputValue.toLowerCase();

        if (lowerInput.includes('ros') || lowerInput.includes('robot operating system')) {
          responseText = `ROS (Robot Operating System) is a flexible framework for writing robot software. In Chapter 1 of the textbook, you'll learn about ROS 2 basics including nodes, topics, and services. ROS 2 Kilted Kaiju provides the latest features for robot communication and control.`;
        } else if (lowerInput.includes('isaac') || lowerInput.includes('simulation') || lowerInput.includes('nvidia')) {
          responseText = `NVIDIA Isaac Sim is a powerful robot simulation environment. According to Chapter 2 of the textbook, Isaac Sim 2025 provides advanced physics simulation, realistic sensor modeling, and integration with ROS 2. It's essential for testing humanoid robot behaviors in a safe virtual environment before real-world deployment.`;
        } else if (lowerInput.includes('humanoid') || lowerInput.includes('walking') || lowerInput.includes('locomotion')) {
          responseText = `Humanoid locomotion is covered in Chapter 6 of the textbook. It discusses various walking algorithms, balance control, and gait patterns. The Unitree G1 humanoid robot is used as an example platform for implementing these locomotion strategies in real hardware.`;
        } else if (lowerInput.includes('vision') || lowerInput.includes('language') || lowerInput.includes('action') || lowerInput.includes('vla')) {
          responseText = `Vision-Language-Action (VLA) models are covered in Chapter 5 of the textbook. These models enable robots to understand natural language commands, perceive their environment visually, and execute appropriate actions. This is a key component of embodied intelligence.`;
        } else if (lowerInput.includes('hardware') || lowerInput.includes('setup') || lowerInput.includes('requirements')) {
          responseText = `For the Physical AI & Humanoid Robotics course, the recommended hardware includes: RTX 4070 Ti GPU, Ubuntu 22.04, ROS 2 Kilted Kaiju, and optionally a Unitree G1 robot or similar platform. Jetson Orin Nano Super is recommended for edge computing applications.`;
        } else if (lowerInput.includes('lab') || lowerInput.includes('exercise') || lowerInput.includes('practice')) {
          responseText = `The textbook includes hands-on lab exercises in each chapter. For example, Lab 1 covers basic ROS 2 communication with publisher/subscriber patterns. Lab 2 focuses on Isaac Sim integration. Each lab includes objectives, prerequisites, step-by-step instructions, and troubleshooting tips.`;
        } else {
          responseText = `I found several relevant topics in the Physical AI & Humanoid Robotics textbook that might help with your question about "${inputValue}":\n\n1. Chapter 1: ROS 2 Basics - Robot communication and control\n2. Chapter 2: Isaac Sim Setup - Robot simulation environments\n3. Chapter 5: Vision-Language-Action Integration - Connecting perception with intelligent action\n4. Chapter 6: Humanoid Locomotion - Making robots walk naturally\n\nWould you like more specific information about any of these topics?`;
        }

        const botResponse = {
          id: Date.now() + 1,
          text: responseText,
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error processing your request. Please try again.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Textbook Chatbot" description="RAG-powered chatbot for Physical AI & Humanoid Robotics textbook">
      <div className={clsx('container', styles.chatContainer)}>
        <div className={styles.chatHeader}>
          <h1>Textbook Assistant</h1>
          <p>Ask questions about Physical AI & Humanoid Robotics content</p>
        </div>

        <div className={styles.chatBox}>
          <div className={styles.messages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  styles.message,
                  message.sender === 'user' ? styles.userMessage : styles.botMessage
                )}
              >
                <div className={styles.messageContent}>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.message, styles.botMessage)}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question about the textbook..."
              className={styles.input}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;