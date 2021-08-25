import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpnese from './components/NewExpense/NewExpnese';

const App = () => {
    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 50,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 25000,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 15000,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 5000,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseDataHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpnese onAddExpense={addExpenseDataHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
