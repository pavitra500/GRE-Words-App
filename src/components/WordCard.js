import React, { useState } from 'react';
import '../App.css';

const WordCard = ({ word, meaning, notes, isRotated }) => {;

  let sent = "https://sentencedict.com/" + word + ".html";

  return (
    <div
      className={`word-card ${isRotated ? 'rotated' : ''}`}
    >
      <div className="text-box">
        <h2 className="word">{word}</h2>
        <p className="meaning">Meaning: {meaning}</p>
        <p className="notes">Notes: {notes}</p>
        <a className="notes" href={sent}>Click here to see sentences with word "{word}"</a>
      </div>
   </div>
  );
};

export default WordCard;