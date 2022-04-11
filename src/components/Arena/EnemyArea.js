import React from 'react';
import { useSelector } from 'react-redux';

const EnemyArea = ({data}) => {
    const stateMonster = useSelector((state) => state.monster.value);

    return (
        <div>
            <div>
                <div className='characterBox3 ' >
                    <h2 className='text-center mt-20'>{stateMonster.name}</h2>
                    <div className='d-flex align-center column'>
                        <div>
                            <img src={stateMonster.image} alt="" />
                        </div>
                        <div className='d-flex mt-20'>
                            <h4 className='mr-30'>HP:</h4>
                            <div className="barBorder ">
                                <div className="barColor" style={{width: `${100-data}%` }}></div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div >
        </div>
    );
};

export default EnemyArea;