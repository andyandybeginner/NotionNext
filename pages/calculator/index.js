// pages/calculator.js
import React from 'react';

const Calculator = () => (
  <div className="calculator">
    <input type="text" id="display" disabled />
    <div className="buttons">
      <button onClick={() => appendToDisplay('1')}>1</button>
      <button onClick={() => appendToDisplay('2')}>2</button>
      <button onClick={() => appendToDisplay('3')}>3</button>
      <button onClick={() => operate('/')}>/</button>
      <button onClick={() => appendToDisplay('4')}>4</button>
      <button onClick={() => appendToDisplay('5')}>5</button>
      <button onClick={() => appendToDisplay('6')}>6</button>
      <button onClick={() => operate('*')}>*</button>
      <button onClick={() => appendToDisplay('7')}>7</button>
      <button onClick={() => appendToDisplay('8')}>8</button>
      <button onClick={() => appendToDisplay('9')}>9</button>
      <button onClick={() => operate('-')}>-</button>
      <button onClick={() => appendToDisplay('0')}>0</button>
      <button onClick={() => clearDisplay()}>C</button>
      <button onClick={() => calculate()}>=</button>
      <button onClick={() => operate('+')}>+</button>
    </div>
    <style jsx>{`
      .calculator { display: inline-block; padding: 20px; border: 1px solid #ccc; border-radius: 10px; }
      .calculator input { width: 100%; padding: 10px; margin: 5px 0; font-size: 20px; }
      .buttons { display: flex; flex-wrap: wrap; }
      .buttons button { flex: 1 0 21%; padding: 20px; margin: 5px; font-size: 20px; }
    `}</style>
    <script>
      {`
      function appendToDisplay(value) { document.getElementById('display').value += value; }
      function clearDisplay() { document.getElementById('display').value = ''; }
      function operate(operator) { document.getElementById('display').value += ' ' + operator + ' '; }
      function calculate() { const display = document.getElementById('display'); display.value = eval(display.value); }
      `}
    </script>
  </div>
);

export default Calculator;

