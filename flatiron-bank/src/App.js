import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import Search from './components/Search';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  // Fetch data
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

  useEffect(() => {
    const result = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTransactions(result);
  }, [transactions, searchQuery]);

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <h2>Search</h2>
      <Search onSearchChange={setSearchQuery} />
      <h2>Add a transaction</h2>
      <TransactionForm onAddTransaction={addTransaction} />
      <h2>See all transactions</h2>
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
