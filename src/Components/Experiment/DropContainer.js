import { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:`myItem`,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => {
            // console.log(monitor);
            return{
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }            
        },
    }));   
    const isActive = canDrop && isOver;
    let backgroundColor = 'transparent';
    // if (isActive) {
    //     backgroundColor = 'bisque';
    // }
    // else 
    if (canDrop) {
        backgroundColor = 'beige';
    }
    return (
        <div ref={drop} role={'Dustbin'} className="ssl-expitm-drop" style={{backgroundColor}}>
            {/* <div style={{backgroundColor: backgroundColor, height: 20, width: 20}} /> */}
            { props.jwater && <aside className='jar-water'></aside>}            
            { props.jwaterrod && <aside className='jar-water-rod'><span>&nbsp;</span></aside>}            
            { props.jwateroil && <aside className='jar-water-oil'></aside>}
            { props.jwateroilrod && <aside className='jar-water-oil-rod'><span>&nbsp;</span></aside>}
            { props.joil  && <aside className='jar-oil'></aside>}
            { props.joilrod && <aside className='jar-oil-rod'><span>&nbsp;</span></aside>}
        </div>
    );
}

export default DropContainer
