import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './componets/Welcome';
import Question from './componets/Question';

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'});
  },[]);

  return (
    <div className="App">
      <h1>Quiz de Progamação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
