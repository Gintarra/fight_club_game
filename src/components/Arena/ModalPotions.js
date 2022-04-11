import React, { useEffect, useState } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemPotion } from '../../features/items';
import { setDrink } from '../../features/player';

const ModalPotions = ({ setIsOpen, drinkProp }) => {
    const itemsState = useSelector((state => state.items.value))
    const [getPotions, setPotions] = useState([]);
    const dispatch = useDispatch();
    let newArray = [];


    useEffect(() => {
        itemsState.map((x, i) => Object.keys(x).includes("title") && newArray.push(x));
        setPotions([...newArray]);
    }, [])


    function drinkPotion(pot, i) {
        dispatch(setDrink(pot));
        dispatch(removeItemPotion(i));
        setIsOpen(false);
    }

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Potions</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent d-flex justify-center">
                        {getPotions.length > 0 ? getPotions.map((x, i) => <div key={i} className='smallBox2'>
                            <img src={x.image} alt="" />
                            <h6> {itemsState[i].title.includes("Energy") ? <div><p>Energy:</p>{itemsState[i].effect.energy}</div> : <div><p>Health:</p>{itemsState[i].effect.health}</div>}</h6>
                            <button onClick={() => drinkPotion(x, i)} className='btn'>Drink</button>
                        </div>) : <div><h4>You don't have any potions</h4></div>}
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalPotions;