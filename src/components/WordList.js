import React, { useState, useEffect } from 'react';
import WordCard from './WordCard';

const WordList = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  const handlePrevClick = () => {
    
    if(isRotated === true)
     setIsRotated(false)

    if(isRotated === false)
     setIsRotated(true)

     setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }, 1);
  };

  const handleNextClick = () => {
    
    if(isRotated === true)
     setIsRotated(false)

    if(isRotated === false)
     setIsRotated(true)

     setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1);


  };

  const currentWord = words[currentIndex];

  return (
    <div>
      <WordCard
        word={currentWord.word}
        meaning={currentWord.meaning}
        notes={currentWord.notes}
        isRotated={isRotated}
      />
      <div className="button-container">
        <button className="button" disabled={currentIndex === 0} onClick={handlePrevClick}>
          Previous
        </button>
        <button className="button" disabled={currentIndex === words.length - 1} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default WordList;