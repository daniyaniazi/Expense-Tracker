import React, { useContext } from 'react';
import { GlobalContext } from "./GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * (-1)
            .toFixed(2);
    return (
        <div className='expense-container text-center '>
            <div className='right-border'>
                <h4>INCOME</h4>
                <p className='income'>${income}</p>
            </div>
            <div>
                <h4>EXPENSE</h4>
                <p className='expense'>${expense}</p>
            </div>
        </div >
    )
}

export default IncomeExpenses
