import LeftBlock from './LeftBlock/LeftBlock';
import RightBlock from './RightBlock/RightBlock';

function Experiment(props) {
    return (
        <section className={`ssl-content-blk`}>
            <RightBlock/>
            <LeftBlock expSide={props.expSide} expResult={props.expResult}/>
        </section>
    )
}

export default Experiment
