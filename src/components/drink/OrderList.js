import React, { Component } from 'react';
import OrderCard from './OrderCard'

class OrderList extends Component {
    renderOrders() {
        return this.props.orderList.map((item, index) => {
            return (<OrderCard key={index} 
                               index={index}
                               disabled={item.editDisabled}
                               name={item.name} 
                               price={item.price} 
                               note={item.note}
                               handleEditName={this.props.handleEditName}
                               handleEditPrice={this.props.handleEditPrice}
                               handleEditNote={this.props.handleEditNote}
                               toggleEdit={this.props.toggleEdit} 
                               deleteCard={this.props.deleteCard} />)
        })
    }

    render() {
        return (
            <div className="flex-50">
                <h2>Drink list:</h2>
                {this.renderOrders()}
            </div>
        )
    }
}

export default OrderList;