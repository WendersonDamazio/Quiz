import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const inicialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
};

const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type){
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };
        
        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderedQuestions,
            };
        
        case "CHANGER_QUESTION":
            const nexQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nexQuestion]){
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nexQuestion,
                gameStage: endGame ? STAGES[2]: state.gameStage,
            };

        case "NEW_GAME":
            return inicialState;
        
        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvide = ({children}) => {
    const value = useReducer(quizReducer, inicialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};