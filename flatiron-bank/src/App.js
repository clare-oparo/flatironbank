import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:8001/transactions');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTransactions(data); // Adjust this if your data structure requires
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
  
}

export default App;
