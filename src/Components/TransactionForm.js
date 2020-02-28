import React, { Component } from 'react'
import App from '../App';

var editindex = 0;
class TransactionForm extends Component {
    state = {
        benAcNo: "",
        IFSC: "",
        benName: "",
        amount: "",
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
        console.log(1)
        var url = window.location.href;
        var pos = url.search("Edit")
        if (pos === 22) {
            var split = url.split("/")
            var index = ((split[(split.length) - 1]))
            var list = JSON.parse(localStorage.getItem("transactions"))
            editindex = index;
            this.setState({ benAcNo: list[index].benAcNo, IFSC: list[index].IFSC, benName: list[index].benName, amount: list[index].amount })
        }
    }
    methodSubmit(e) {
        e.preventDefault();
        this.addOrEdit(this.state);
        this.refs.transactionForm.reset();
        this.setState({ benAcNo: '', IFSC: '', benName: '', amount: '' })
    }

    addOrEdit = (data) => {
        if ((localStorage.getItem("transactions") === null))
            localStorage.setItem("transactions", JSON.stringify([]))
        var list = JSON.parse(localStorage.getItem("transactions"))
        if (editindex != 0) {
            list[editindex] = data;
        }
        else {
            list.push(data);
        }
        localStorage.setItem("transactions", JSON.stringify(list))
        this.setState({ list })
    }

    render() {
        return (
            <div>
                <App />
                <form autoComplete="off" onSubmit={(e) => this.methodSubmit(e)} ref="transactionForm">
                    <label> Benifciary Account number</label><br />
                    <input type="text" placeholder="Ben Acc No" name="benAcNo" value={this.state.benAcNo} onChange={this.onChangeInput}></input><br />
                    <label> IFSC Number</label><br />
                    <input type="text" placeholder="IFSC No" name="IFSC" value={this.state.IFSC} onChange={this.onChangeInput}></input><br />
                    <label> Benifciary Name</label><br />
                    <input type="text" placeholder="Ben Name" name="benName" value={this.state.benName} onChange={this.onChangeInput}></input><br />
                    <label> Amount</label><br />
                    <input type="text" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.onChangeInput}></input><br />
                    <button type="submit" onSubmit={(e) => this.methodSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}
export default TransactionForm 