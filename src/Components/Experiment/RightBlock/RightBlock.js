import ExperimentInfo from './ExperimentInfo/ExperimentInfo.js';
import LabBlock from './LabBlock/LabBlock.js';


function RightBlock(props) {
  return (
    <section className="ssl-cont-rytblk in">
        <ExperimentInfo/>
        <LabBlock/>
    </section>
  );
}

export default RightBlock;
