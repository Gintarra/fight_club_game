import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = ({data}) => {

    return (
        <div >
            {data === "main" ? <div className="navBar d-flex space-ev align-center">
                <Link to="/shop" className='link'>Shop</Link>
                <Link to="/arena" className='link'>Arena</Link>
            </div> :
                <div className="navBar d-flex space-ev align-center">
                    <Link to="/main" className='link'>Main</Link>
                    <Link to="/arena" className='link'>Arena</Link>
                </div>}

        </div>
    );
};

export default Toolbar;