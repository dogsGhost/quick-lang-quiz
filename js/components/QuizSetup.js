import React from 'react';

const QuizSetup = () => (
  <div>
    <p>Which language would you like to be quizzed on?</p>
    <div>
      <input type="radio" name="lang" value="es" defaultChecked /> Spanish
      <input type="radio" name="lang" value="fr" /> French
    </div>
  </div>
);

export default QuizSetup;
