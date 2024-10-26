
import React, { useEffect, useRef, useState } from 'react';
import styles from './Guessing.module.css';

const GuessingGame = () => {
    const [result, setResult] = useState('');
    const [random, setRandom] = useState(0);
    const inpRef = useRef();

    useEffect(() => {
        const randNum = 10 + Math.ceil(Math.random() * 90);
        setRandom(randNum);
        console.log(randNum);
    }, []);

    const checkNum = () => {
        const userGuess = Number(inpRef.current.value);

        // Validate the input
        if (inpRef.current.value.trim() === '' || isNaN(userGuess)) {
            setResult('Please enter a valid number');

        }
        const difference = Math.abs(random - userGuess);
        if (difference === 0) {
            setResult('Value matched!');
        }
        else if (difference <= 5) {
            if (userGuess < random) {
                setResult('You are almost close, enter a greater value');
            } else {
                setResult('You are almost close, enter a lesser value');
            }
        }
         else {
            if (userGuess < random) {
                setResult('Enter a greater value');
            } else {
                setResult('Enter a lesser value');
            }
        }
    };

    return (
        <div className={styles.game}>
            <input type="text" placeholder="Enter number between 10 and 100" ref={inpRef} />
            <button onClick={checkNum}>Submit</button>
            <p>{result}</p>
        </div>
    );
};

export default GuessingGame;
