import React, { useState } from 'react';
import words from '../data/words.js'

const Search = () => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredWords = words.filter((word) => 
    word.word.toLowerCase().includes(searchText.toLowerCase())
    );


    return(
        <div className="search-container">
         <h2>Search for the Word</h2>
         <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="Enter a word"
         />
        <p>(Click the word in first column to checkout its sentences)</p>
        <table className="word-table">
            <thead>
            <tr>
                <th>Word</th>
                <th>Meaning</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
            {filteredWords.map((word) => (
                <tr key={word.word}>
                <td><a href={"https://sentencedict.com/"+word.word+".html"}>{word.word}</a></td>
                <td>{word.meaning}</td>
                <td>{word.notes}</td>
                </tr>
            ))}
            </tbody>
        </table>

        </div>
    );
}

export default Search;