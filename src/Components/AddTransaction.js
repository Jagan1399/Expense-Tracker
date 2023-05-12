import React,{useState,useEffect,useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";


export const AddTransaction = ()=>{
    const [text,setText]=useState('');
    const {addTransaction} = useContext(GlobalContext)
    const [amount,setAmount]=useState(0);
    // useEffect(()=>{
    //     console.log(text)
    //     console.log(amount)
    // })   

    const onSubmit= e =>{
      e.preventDefault();
      const newentry={
        id:Math.floor(Math.random()*1000000),
        text:text,
        amount:+amount
      }
      addTransaction(newentry)
      setText('')
      setAmount(0)
    }

    return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <button className="btn"> Add transaction</button>
      </form>
    </>
    )
}