import React, { Component } from 'react';
import OrderList from './OrderList';
import OrderForm from './OrderForm';

class MainContainer extends Component {
    state = {
        orderList: []
    }

    handleBeforeunload = e => {
        localStorage.setItem('lastState', JSON.stringify(this.state.orderList));
    }

    componentDidMount() {
        var lastState = localStorage.getItem('lastState');
        this.setState({orderList: JSON.parse(lastState)});

        window.addEventListener('beforeunload', this.handleBeforeunload)
    }
    
    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleBeforeunload)
    }

    addOrder = order => {
        this.setState({orderList: [...this.state.orderList, order]});
    }

    toggleEdit = targetIndex => {
        const newOrderList = [...this.state.orderList]
        newOrderList[targetIndex].editDisabled = !newOrderList[targetIndex].editDisabled;
        this.setState({orderList: newOrderList});
    }

    handleEditName = (e, index) => {
        const newOrderList = [...this.state.orderList];
        newOrderList[index].name = e.target.value;
        this.setState({orderList: newOrderList});
    }

    handleEditPrice = (e, index) => {
        const newOrderList = [...this.state.orderList];
        newOrderList[index].price = e.target.value;
        this.setState({orderList: newOrderList});
    }

    handleEditNote = (e, index) => {
        const newOrderList = [...this.state.orderList];
        newOrderList[index].note = e.target.value;
        this.setState({orderList: newOrderList});
    }

    deleteCard = targetIndex => {
        const newOrderList = this.state.orderList.filter((item, index) => {
            return index !== targetIndex;
        });
        this.setState({orderList: newOrderList});
    }

    render() {
        return (
            <div className="main-container">
				<OrderForm addOrder={this.addOrder} />
                <OrderList 
                    handleEditName={this.handleEditName}
                    handleEditPrice={this.handleEditPrice}
                    handleEditNote={this.handleEditNote}
                    orderList={this.state.orderList} 
                    deleteCard={this.deleteCard} 
                    toggleEdit={this.toggleEdit} />
			</div>
        )
    }
}

export default MainContainer;