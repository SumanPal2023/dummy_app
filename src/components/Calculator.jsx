

import React, { useRef, useState, useEffect } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [result, setResult] = useState(''); // Store result
    const [input, setInput] = useState('');   // Store input
    const resultRef = useRef();               // Ref for the input field
    const [color,setColor]=useState('')
    const [bgcolor,setBgcolor]=useState('')

     const greenBg=(c)=>{
        setBgcolor(c)
        setColor("#fff")
     }
     const blackBg=(c)=>{
        setBgcolor(c)
        setColor("#fff")
     }
     const brownBg=(c)=>{
        setBgcolor(c)
        setColor("#fff")
     }
     const whiteBg=(c)=>{
        setBgcolor('')
        setColor('')
     }
    // Synchronize the resultRef value with input state when input changes
    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.value = input; // Sync input field with input state
        }
    }, [input]);

    // Handle button clicks for numbers and operators
    const takeVal = (e) => {
        
        setInput(prevVal => prevVal + e.target.textContent); // Update input state
    };

    // Calculate the result when "=" is clicked
    const calculateVal = () => {
        try {
            let evaluatedResult = eval(input); // Evaluate the input string
            setResult(evaluatedResult);        // Update the result
            // setInput(evaluatedResult.toString()); // Set input to the evaluated result
            // setInput("")

        } catch (error) {
            setResult('Error'); // Handle invalid expressions
        }
    };

    // Clear the input and result
    const resetVal = () => {
        setInput('');    // Clear the input
        setResult('');   // Clear the result
    };

    // Remove the last character from input
    const reduceOne = () => {
        let newInput = input.slice(0, -1); // Remove last character
        setInput(newInput);                // Update input with new value
    };

    return (
        <div style={{color:color,backgroundColor:bgcolor}} className={styles.calculator}>
            <div className={styles.up}>
                <div className={styles.left}>casio</div>
                <div className={styles.right}>
                    <div onClick={()=>{greenBg('green')}}></div>
                    <div  onClick={()=>{blackBg('black')}}></div>
                    <div  onClick={()=>{brownBg('brown')}}></div>
                    <div  onClick={()=>{whiteBg('white')}}></div>
                </div>
            </div>
            <div className={styles.center}>
                <input type="text" readOnly value={result} ref={resultRef} />
            </div>
            <div className={styles.down}>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>1</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>2</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>3</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>+</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>4</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>5</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>6</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>-</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>7</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>8</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>9</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>*</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>0</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>.</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>/</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={reduceOne}>X</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={resetVal}>AC</div>
                <div style={{color:bgcolor,backgroundColor:color}} onClick={takeVal}>M</div>
                <div
                    style={{ backgroundColor: 'yellow',  color:"black", fontWeight: '600', width: '130px' }}
                    onClick={calculateVal}
                >
                    =
                </div>
            </div>
        </div>
    );
};

export default Calculator;

