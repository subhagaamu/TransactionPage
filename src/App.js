import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
// import TransactionForm from './Components/TransactionForm';

function App() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome to Transaction page</h3>
      <nav className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/Transaction-Form'>Transaction Form &nbsp;</Link>
            <Link to='/Transaction-History'>Transaction History</Link>
          </li>
        </ul>
      </nav>
    </div>
    // <TransactionForm/>
  );
}

export default App;
