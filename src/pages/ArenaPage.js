import React from 'react';
import { useSelector } from 'react-redux';
import Arena from '../components/Arena/Arena';

const ArenaPage = () => {
    const stateWeapon = useSelector((state)=> state.player.value.weapon)
    return (
        <div>
            {stateWeapon === null ? <div><h2 className='text-center mt-40'>You must choose weapon</h2></div> : <Arena/>}
        </div>
    );
};

export default ArenaPage;