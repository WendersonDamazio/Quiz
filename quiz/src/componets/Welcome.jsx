import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import quiz from '../img/quiz.svg';

import './Welcome.css';

const Wencone = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Wencone