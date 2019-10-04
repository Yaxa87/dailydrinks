import React from 'react';
import TextInput from '../ui/TextInput';
import NumberInput from '../ui/NumberInput';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const OrderCard = ({
    index,
    disabled,
    name,
    price,
    note,
    handleEditName,
    handleEditPrice,
    handleEditNote,
    toggleEdit,
    deleteCard
}) => {
    return (
        <div className="order-card">
            <div className="form-field">
                <label className="list-label">Name:</label>
                <TextInput 
                    disabled={disabled}
                    value={name} 
                    onChange={(e) => handleEditName(e, index)} />
            </div>
            <div className="form-field">
                <label className="list-label">Price:</label>
                <NumberInput 
                    disabled={disabled}
                    value={price} 
                    onChange={(e) => handleEditPrice(e, index)} />
            </div>
            <div className="form-field">
                <label className="list-label">Note:</label>
                <TextArea 
                    disabled={disabled}
                    value={note} 
                    onChange={(e) => handleEditNote(e, index)} />
            </div>

            <Button text={disabled ? "Edit" : "Done"} onClick={(e) => toggleEdit(index)} />
            <Button text="Delete" onClick={(e) => deleteCard(index)} />
        </div>
    )
}

export default OrderCard;