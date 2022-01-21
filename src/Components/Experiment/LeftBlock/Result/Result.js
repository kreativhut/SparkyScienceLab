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
        <aside className='btn-group'>
            <a href="https://learnwithcomics.org/" title="Watch Comic">Watch Comic</a>
        </aside>
    </section>
  )
}

export default Result;
