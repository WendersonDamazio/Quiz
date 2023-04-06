import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STATES = ['Start', 'Playing', 'End']

const inicialState = {
    gameStage: STATES[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type){
        case 'CHANGE_STATE':
            return state;
        
        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvide = ({children}) => {
    const value = useReducer(quizReducer);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};