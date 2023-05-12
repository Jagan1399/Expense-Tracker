import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// using context api
// defining initial state of the var
const InitialState={
    transaction:[
        
    ]
}

//creating context

export const GlobalContext=createContext(InitialState);



//creating provider
// children refers to all the components which wud be enclosed by this provider / components which wud be accessing the data from this provider
//state gets set to initialstate variable

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,InitialState)
    function deleteTransaction(id){ 
        console.log(id)
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    function addTransaction(newentry){ 
        console.log(newentry)
        console.log(state.transaction)
        dispatch({
            type:"ADD_TRANSACTION",
            payload:newentry
        })
        console.log(state.transaction)
    }
    return(
        <GlobalContext.Provider value={{transactions:state.transaction,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )

}