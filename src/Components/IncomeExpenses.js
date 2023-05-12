import React,{useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpense = ()=>{
    const {transactions}=useContext(GlobalContext)
    const amounts = transactions.length>0? transactions.map(transaction=>(
        transaction.amount
    )):[]
    const income = amounts.length>0? amounts
        .filter(amt=>amt>0)
        .reduce((initamt,curramt)=>(initamt+=curramt),0):0

    const expense =amounts.length>0? (amounts
        .filter(amt=>amt<0)
        .reduce((initamt,curramt)=>(initamt+=curramt),0)
    *-1):0
//    console.log(expense)
    

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{expense}</p>
            </div>
        </div>
    )
}