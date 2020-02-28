import React, { Component } from 'react'
import App from '../App'
import TransactionForm from './TransactionForm'
import { Link } from 'react-router-dom'

export default class TransactionHistory extends Component {
    state = {
        transactionHistory: JSON.parse(localStorage.getItem("transactions")) ? JSON.parse(localStorage.getItem("transactions")) : null,
        currentIndex: -1,
        EditClicked: false,
    }

    handleEdit(index) {
        this.setState({ EditClicked: true, currentIndex:index})
    }
    handleDelete(index) {
        this.setState({ currentIndex: index })
        var newHist = JSON.parse(localStorage.getItem("transactions"))
        newHist.splice(index, 1)
        localStorage.setItem("transactions", JSON.stringify(newHist))
        this.setState({ transactionHistory: newHist })
    }
    render() {
        return (
            <div>
                <App />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Benificary Account Number</th>
                            <th>IFSC Code</th>
                            <th>Beneficiary Name</th>
                            <th>Amount</th>
                            <th>Edit Action</th>
                            <th>Delete Action</th>
                        </tr>
                    </thead>
                    {this.state.transactionHistory !== null && <tbody>
                        {
                            this.state.transactionHistory.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.benAcNo}</td>
                                    <td>{item.IFSC}</td>
                                    <td>{item.benName}</td>
                                    <td>{item.amount}</td>
                                    {/* <td><button type="button" onClick={() => this.handleEdit(index)}>EDIT</button></td> */}
                                    <Link to={`/Edit/${index}`}> Edit</Link>
                                    <td><button type="button" onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>}

                </table>
<!--                 {this.state.EditClicked && <div>
                    <TransactionForm index={this.state.currentIndex} transactionHistory={this.state.transactionHistory}></TransactionForm>
                </div>} -->
            </div>
        )
    }
}
