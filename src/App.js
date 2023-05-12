import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header title={"Expense Tracker"}/>
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
