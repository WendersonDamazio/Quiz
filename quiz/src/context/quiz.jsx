import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STATES = ['Start', 'Playing', 'End']

const inicialState = {
    gameStage: STATES[0],
    questions,
    currentQuestion: 0,
};

const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type){
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STATES[1],
            };
        
        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };
        
        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvide = ({children}) => {
    const value = useReducer(quizReducer, inicialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};