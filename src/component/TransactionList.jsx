import React, { useContext } from 'react'
import { GlobalContext } from "./GlobalState";
import TransactionComp from './TransactionComp';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    return (
        <div>
            <h3>
                History
            </h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map(transaction => (
                    <TransactionComp key={transaction.id} transaction={transaction} />
                ))}

            </ul>
        </div>
    )
}

export default TransactionList
