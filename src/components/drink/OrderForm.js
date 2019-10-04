import React, { Component } from 'react';
import TextInput from '../ui/TextInput';
import NumberInput from '../ui/NumberInput';
import TextArea from '../ui/TextArea';

class OrderForm extends Component {
    state = {
        name: '',
        price: '',
        note: '',
        editDisabled: true
    }

    handleChangeName = e => {
        this.setState({name: e.target.value});
    }

    handleChangePrice = e => {
        this.setState({price: e.target.value});
    }

    handleChangeNote = e => {
        this.setState({note: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addOrder(this.state);
        const emptyState = {
            name: '',
            price: '',
            note: '',
            editDisabled: true
        }
        this.setState(emptyState);
    }

    render() {
        return (
            <div className="flex-50">
                <form onSubmit={this.onSubmit}>
                    <h2>Order drink:</h2>
                    <TextInput placeholder="Name" value={this.state.name} onChange={this.handleChangeName} />
                    <NumberInput placeholder="Price" value={this.state.price} onChange={this.handleChangePrice} />
                    <TextArea placeholder="Notes" value={this.state.note} onChange={this.handleChangeNote} />
                    <input type="submit" className="button display-block" value="Add order" />
                </form>
            </div>
        )
    }
}

export default OrderForm;