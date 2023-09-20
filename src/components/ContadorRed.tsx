import React, { useReducer } from 'react'

const initialState = {
    contador: 0,
}

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

//Stratergy to infer over the type of the object
const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            //with spreadoperator It will copy the values and create it a new reference
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
}

export const ContadorRed = () => {
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState);
    return (
        <>
            <h2>Contador: {contador}</h2>
            <button className='btn btn-outline-primary' onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
            <button className='btn btn-outline-primary' onClick={() => dispatch({ type: 'decrementar' })}>-1</button>
            <button className='btn btn-outline-danger' onClick={() => dispatch({ type: 'custom', payload: 100 })}>100</button>
        </>
    )
}
