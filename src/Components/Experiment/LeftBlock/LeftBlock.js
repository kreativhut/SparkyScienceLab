import React from 'react';
import ExperimentSlider from './ExperimentSlider/ExperimentSlider.js';
import Result from './Result/Result.js';

function LeftBlock(props) {
  return (
    <section className={`ssl-cont-leftblk in`}>
        <section className='ssl-exp-slider-blk in'>
            <ExperimentSlider/>
        </section>
        {
            props.expSide && <Result expResult={props.expResult}/>
        }
    </section>
  )
}

export default LeftBlock;
