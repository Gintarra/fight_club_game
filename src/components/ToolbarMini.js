import React from 'react';

const ToolbarMini = ({ data }) => {
    function setLink(x) {
        data(x);
    }
    return (
        <div >
            <div className="toolbarMini d-flex align-center justify-center">
                <div onClick={() => setLink("w")} className='link2 grow1 d-flex justify-center align-center'>Weapons</div>
                <div onClick={() => setLink("p")} className='link2 grow1 d-flex justify-center align-center'>Potions</div>
            </div>


        </div>
    );
};

export default ToolbarMini;