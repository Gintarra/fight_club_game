import React from 'react';
import { useSelector } from 'react-redux';

const DrawPlayer = () => {
    const state = useSelector((state => state.player.value.player))
    const stateW = useSelector((state => state.player.value.weapon))
  
    return (
        <div>
      
            <div className='characterBox2 ' >
            <h2 className='text-center'>Player</h2>
                <div className='d-flex align-center space-ev'>
                <div>
                    <img src={state.image} alt="" />
                        <h2 className='text-center mt-20'>{state.race}</h2>
                </div>
            
                    <div className='card'>
                        <h2 className='text-center'>Stats:</h2>
                        <div className='d-flex'>
                            <ul>
                                <li>Damage: {state.damage}</li>
                                <li>Health: {state.health}</li>
                                <li>Energy: {state.energy}</li>
                                <li>Stamina: {state.stamina}</li>
                                <li>Strength: {state.strength}</li>
                                <li>Inventory slots: {state.inventorySlots}</li>
                                <li>Gold: {state.gold}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex column align-center card'>
                        <h2 className='text-center'>Weapon:</h2>
                        <div className='smallBox mt-40'>{!!stateW && <img src={stateW.image} alt=""/>}</div>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default DrawPlayer;