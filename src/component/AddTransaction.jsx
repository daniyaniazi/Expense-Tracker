import React, { useContext, useState } from 'react';
import { GlobalContext } from "./GlobalState";

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { AddTrans } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTrans = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: Math.floor(amount)
        }
        console.log(newTrans)
        AddTrans(newTrans)

    }
    return (
        <div>
            <h3>
                Add new transaction
            </h3>
            <hr />
            <form onSubmit={onSubmit} className='transaction-form'>
                <div className='form-control'>
                    <label htmlFor="text">
                        Enter Description  <br /> </label>
                    <input type="text" required value={text}
                        onChange={(e) => setText(e.target.value)} />

                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Enter Ammount <span className='small'>  + income | - expense</span>  </label>
                    <input type="number" required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='Add-btn'>Add Transaction</button>
            </form>
        </div>
    )
}
export default AddTransaction
