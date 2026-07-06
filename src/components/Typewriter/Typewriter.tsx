'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1800
}: TypewriterProps) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIdx];

    // Pause when the word is fully typed
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    // Switch to the next word once deleting is done
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx(prev => (prev + 1) % words.length);
      return;
    }

    // Handle character typing or deleting tick
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(() => {
      setCurrentText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return fullWord.slice(0, prev.length + 1);
        }
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {currentText}
      <span className="typewriter-cursor">|</span>
      <style jsx>{`
        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 0.8s infinite;
          color: var(--primary);
          font-weight: 400;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
