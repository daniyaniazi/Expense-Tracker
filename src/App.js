import './App.css';
import React from "react";
import Header from "./component/header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";

import { GlobalProvider } from "./component/GlobalState";

function App() {
  return (
    <GlobalProvider
    ><div className="main-container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
