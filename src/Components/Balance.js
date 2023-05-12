import React,{useContext} from "react";
import {GlobalContext} from '../Context/GlobalState'
export const Balance=()=>{
    const {transactions}=useContext(GlobalContext)
    // balance = Number;
    // transactions.forEach(transaction => {
    //     balance+=transaction.amount;
    // });
    const amounts=transactions.map(transaction=>(transaction.amount))
    const total = amounts.reduce((InitAmt,currAmt)=>(InitAmt+=currAmt),0);
    return(
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>       
        </>
    )
}