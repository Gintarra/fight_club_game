import React from 'react';
import DrawPlayer from '../components/DrawPlayer';
import Inventory from '../components/Inventory';
import Toolbar from '../components/Toolbar';

const MainPage = () => {

    return (
        <div>
            <Toolbar data={"main"} />
            <div className='d-flex'>
                <div className='grow1'>
                    <DrawPlayer />
                </div>
                <div className='grow1'>
                    <Inventory />
                </div>

            </div>

        </div>
    );
};

export default MainPage;