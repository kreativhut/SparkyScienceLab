import React from 'react';
import ResultPoints from './ResultPoints';

function Result(props) {
  return (
    <section className="ssl-exp-result">
        {
            props.expResult && (
                <>
                    <h4>Result</h4>
                    <ResultPoints/>
                </>
            )
        }
    </section>
  )
}

export default Result;
