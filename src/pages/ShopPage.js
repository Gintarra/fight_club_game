import React from 'react';
import Shop from '../components/Shop';
import Toolbar from '../components/Toolbar';

const ShopPage = () => {
    return (
        <div>
            <Toolbar data={""} />
            <Shop />
        </div>
    );
};

export default ShopPage;