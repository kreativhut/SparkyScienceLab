import React, { useEffect, useState } from 'react';
import ExpSlick from './ExpSlick';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RequirementPanel from './RequirementPanel';

function Experiment(props) {
    const [step, setStep] = useState(0);

    return (
        <section className={`ssl-content-blk ${props.expSide ? 'in' : ''}`}>
            <section className="ssl-cont-rytblk">
                <section className="ssl-exp-ttl">
                    <h3>Objective</h3>
                    <p>Experimenting with disappearing of objects</p>
                    <a href="javascript:;" title="Reset">Reset</a>
                </section>
                <section className="ssl-exp-lab-block">
                    <DndProvider backend={HTML5Backend}>
                        <RequirementPanel data={{step, setStep}} />
                    </DndProvider>    
                </section>
            </section>
            <section className={`ssl-cont-leftblk ${props.expResult == true ? 'rmpad':''}`}>
                <section className='ssl-exp-slider-blk'>
                    <section className='ssl-exp-procedure'>
                        <h4>Procedure</h4>
                        <h5>Click START button to follow Procedure</h5>
                        <a href="javascript:;" className='btn-start' onClick={props.experimentSideNav}>Start</a>
                    </section>
                    <ExpSlick step={step} setStep={setStep} />                    
                </section>
                {
                    props.expSide && (
                        <>
                            <section className="ssl-exp-result">
                                {
                                    props.expResult && (
                                        <>
                                            <h4>Result</h4>
                                            <ul>
                                                <li>You see a glass object because it both reflects and refracts light. When light traveling through air encounters a glass surface at an angle, some of the light reflects..</li>
                                                {/* <li>When light passes from air into glass, it slows down. It’s this change in speed that causes the light to reflect and refract as it moves from one clear material (air) to another (glass). Every material has an index of refraction that is linked to the speed of light in the material. The higher a material’s index of refraction, the slower light travels in that material.</li> */}
                                            </ul>
                                        </>
                                    )
                                }
                                
                                <aside className='btn-group'>
                                    <a href="https://beyondexams.org/p-y5eZufMzg" title="Watch Video">Watch Video</a>
                                    <a href="https://learnwithcomics.org/" title="Watch Comic">Watch Comic</a>
                                </aside>
                            </section>
                        </>
                    )
                }
                
            </section>
        </section>
    )
}

export default Experiment
