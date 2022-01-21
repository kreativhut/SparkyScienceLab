import React, { useState } from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RequirementPanel from './RequirementPanel.js';

function LabBlock() {
 const [step, setStep] = useState(0);
  return (
    <section className="ssl-exp-lab-block">
        <DndProvider backend={HTML5Backend}>
            <RequirementPanel data={{step, setStep}} />
        </DndProvider>    
    </section>
  )
}

export default LabBlock;
