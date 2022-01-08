import { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:`jarwater`,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => {
            // console.log(monitor);
            return{
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }            
        },
    }));    
    return (
        <section ref={drop} role={'Dustbin'} className="ssl-expitm-drop">
            { props.jwater && <aside className='jar-water'></aside>}            
            { props.jwaterrod && <aside className='jar-water-rod'><span>&nbsp;</span></aside>}            
            { props.jwateroil && <aside className='jar-water-oil'></aside>}
            { props.jwateroilrod && <aside className='jar-water-oil-rod'><span>&nbsp;</span></aside>}
            { props.joil  && <aside className='jar-oil'></aside>}
            { props.joilrod && <aside className='jar-oil-rod'><span>&nbsp;</span></aside>}
        </section>
    );
}

export default DropContainer
