import React from 'react';
import addToDb from '../../utilities/Fakedb';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const addtoCart = (id) => {
        addToDb(id)
    }
    // const addtoCartwithParam = () => addtoCart(id);
    return (
        <div>
            <h3>The is cosmeic</h3>
            <h2>name:{name}</h2>
            <h2>Price:{price}</h2>
            <p>Id:{id}</p>
            <button onClick={() => addtoCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;