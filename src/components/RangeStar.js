import React from 'react';
import './RangeStar.css'

export const RangeStar = (props) => {
    return (
        <div className='container-gral-range'>
            <div className='container-range'>
                <div className='range'
                    style={{
                        background: 'orange',
                        width: `${props.range}%`
                    }}></div>
            </div>
        </div>
    );
};
