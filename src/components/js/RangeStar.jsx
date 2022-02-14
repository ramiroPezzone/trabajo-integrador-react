import React from 'react';
import '../css/RangeStar.css'

export const RangeStar = (props) => {
    return (
        <div className='container-gral-range'>
            <div className='container-range'>
                <div className='range'
                    style={{
                        width: `${props.range}%`
                    }}></div>
            </div>
        </div>
    );
};
