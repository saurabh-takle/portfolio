'use client';

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  sentences: string[];
  colors?: string[];
  typingSpeed?: number;   // Milliseconds per character when typing
  deletingSpeed?: number; // Milliseconds per character when deleting
  delay?: number;         // Delay (ms) after completing a sentence before deletion starts
}

const TypeAnimation: React.FC<TypingAnimationProps> = ({
  sentences,
  colors = ["#f5c156", "#e6616b", "#5cd3ad"],
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    if (colors && colors.length > 0) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }
  }, [currentSentenceIndex, colors]); 

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentSentence) {
      // Wait for a bit when the sentence is fully typed
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText === '') {
      // Once deleted, move to the next sentence
      setIsDeleting(false);
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText(currentSentence.substring(0, displayedText.length - 1));
        } else {
          setDisplayedText(currentSentence.substring(0, displayedText.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, sentences, currentSentenceIndex, typingSpeed, deletingSpeed, delay]);

  return (
    <h2 style={{ color: currentColor }} className="text-2xl p-3 rounded-lg font-semibold bg-[#0a0a0a]/60">
      {displayedText}
      <span className="border-r-2 border-gray-200 animate-blink" style={{ borderColor: currentColor }} />
    </h2>
  );
};

export default TypeAnimation;
