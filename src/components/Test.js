import React, { useState, useEffect } from 'react';
import words from '../data/words.js';

const Test = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [options, setOptions] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Generate options for the current question
    const currentWord = words[currentWordIndex];
    const shuffledOptions = generateRandomOptions(currentWordIndex);
    setOptions(shuffledOptions);

    // Reset selected option and answer state
    setSelectedOptionIndex(-1);
    setIsAnswered(false);
    setIsCorrect(false);
  }, [currentWordIndex]);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
    setIsAnswered(true);
    setIsCorrect(optionIndex === options.findIndex((option) => option === words[currentWordIndex].meaning));

    if (optionIndex === options.findIndex((option) => option === words[currentWordIndex].meaning)) {
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  function generateRandomOptions(currentWordIndex) {
    const currentWord = words[currentWordIndex];
    const options = [];
    const correctMeaning = currentWord.meaning;

    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];

      if (randomWord.meaning !== correctMeaning && !options.includes(randomWord.meaning)) {
        options.push(randomWord.meaning);
      }
    }

    const randomPosition = Math.floor(Math.random() * options.length);
    options.splice(randomPosition, 0, correctMeaning);

    return options;
  }

  return (
    <div className="test-container">
      <h2>Multiple Choice Test</h2>
      <p>Streak: {streak}</p>
      <div className="question-container">
        <div className="centered-question">
          <h3>Guess The Meaning Of</h3>
          <h4 className="word">{words[currentWordIndex].word}</h4>
        </div>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${isAnswered && index === selectedOptionIndex ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleOptionSelect(index)}
          >
            <input
              type="radio"
              name="option"
              id={`option${index}`}
              checked={index === selectedOptionIndex}
              readOnly
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      {isAnswered && (
        <div className="answer-container">
          <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
          {currentWordIndex === words.length - 1 ? (
            <button className="next-button" onClick={handleNextQuestion}>
              Finish Test
            </button>
          ) : (
            <button className="next-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;