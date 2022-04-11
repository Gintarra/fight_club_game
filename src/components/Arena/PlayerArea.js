import React from 'react';
import { useSelector } from 'react-redux';
import ModalPotions from './ModalPotions';
import { useState } from 'react';
import { setDrink } from '../../features/player';
import { useDispatch } from 'react-redux';


const PlayerArea = ({ data, data2 }) => {
    const state = useSelector((state => state.player.value.player))
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();


    function modalPotionsOpen() {
        setIsOpen(true);
    }
    function drinkData(pot) {
        dispatch(setDrink(pot));
    }

    return (
        <div>
            {isOpen && <ModalPotions setIsOpen={setIsOpen} drinkProp={drinkData} />}
            <div className='characterBox3 ' >
                <h2 className='text-center mt-20'>{state.race}</h2>
                <div className='icon'>
                    <img className='hoverImg' onClick={modalPotionsOpen} src="https://cdn-icons-png.flaticon.com/512/3330/3330443.png" alt="" />
                </div>
                <div className='d-flex align-center column'>
                    <div>
                        <img src={state.image} alt="" />
                    </div>
                    <div className='d-flex mt-20'>
                        <h4 className='mr-30'>HP:</h4>
                        <div className="barBorder ">
                            <div className="barColor" style={{ width: `${100 - data}%` }}></div>
                        </div>
                    </div>
                    <div className='d-flex mt-20'>
                        <h4 style={{ marginRight: "2px" }}>Energy:</h4>
                        <div className="barBorder">
                            <div className="barColor" style={{ width: `${data2}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PlayerArea;