import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';


function App() {
  const [transactions, setTransactions] = useState([]);
  // add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:8001/transactions');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTransactions(data); 
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <h2>Add your latest transaction here</h2>
      <TransactionForm onAddTransaction={addTransaction} />
      <h2>See all your transactions below</h2>
      <TransactionTable transactions={transactions} />
    </div>
  );
  
}

export default App;
