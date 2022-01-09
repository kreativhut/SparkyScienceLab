import React,{ useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import DropContainer from './DropContainer';

function RequirementPanel(props) {
    
    const {step, setStep} = props.data;
    const [jwater,setJwater] = useState(false);
    const [joil,setJoil] = useState(false);
    const [jwateroil,setJwateroil] = useState(false);
    const [jwaterrod,setJwaterrod] = useState(false);
    const [joilrod,setJoilrod] = useState(false);
    const [jwateroilrod,setJwateroilrod] = useState(false);

    const Jar = (props) =>{
        console.log();
        let name = props.name
        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'myItem',
            item: {name},
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult();
                console.log('Item: ',item);
                console.log('monitor: ',monitor);
                console.log('dropResult: ',dropResult);
                if (item && dropResult) {
                    // alert(`You dropped ${item.name} into ${dropResult.name}!`);
                    let rod = item.name;
                    
                    switch(name){
                        case 'jarwater' : 
                            if(step == 0) {
                                setJwater(true);
                                // setStep(1);
                            } 
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'jarwateroil' : 
                            if(step == 1)    
                            {
                                setJwateroil(true);
                                // setStep(2);
                            }
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'jaroil' : 
                            if(step == 2)    
                            {
                                setJoil(true);
                                // setStep(3);
                            }
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'rod' : 
                            if(step == 3){
                                setJwaterrod(true);
                                setJwater(false);
                                // setStep(4);
                            }
                            else if(step == 4){
                                setJwateroilrod(true);
                                setJwateroil(false);
                                setStep(5);
                            }
                            else if(step == 5){
                                setJoilrod(true);
                                setJoil(false);
                                // setStep(6);
                            }else alert('Please check you step!');
                            break;    
                        
                    }
                }
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                handlerId: monitor.getHandlerId()
            })
            }));
        return (
            <aside ref={drag} role="jar" className='ssl-exp-img'>
                { props.name == 'jarwater' && <aside className='jar-water'></aside>}
                { props.name == 'jaroil' && <aside className='jar-oil'></aside>}
                { props.name == 'jarwateroil' && <aside className='jar-water-oil'></aside>}
                { props.name == 'rod' && <aside className='jar-rod'></aside>}
            </aside>
        );
    }

    return (
        <section>
            <section className="ssl-inventory-blk">
                <Jar name="jarwater"/>                
                <Jar name="jarwateroil"/>
                <Jar name="jaroil"/>
                <Jar name="rod"/>
            </section>
            <section className="ssl-exp-table">
                <section className="ssl-table-block">
                    <section className="ssl-exp-items">
                        <DropContainer jwater={jwater} joil={joil} jwateroil={jwateroil} jwaterrod={jwaterrod} joilrod={joilrod} jwateroilrod={jwateroilrod}/>
                    </section>
                    <section className="ssl-table">
                        &nbsp;
                    </section>
                </section>
            </section>
        </section>
    )
}

// const JarOil = () =>{
//     const [, drag] = useDrag(() => ({ type: 'jaroil' }));
//     return (
//         <aside className='ssl-exp-img'>
//             <aside className='jar-oil'></aside>
//         </aside>
//     );
// }
// const JarWaterOil = () =>{
//     const [, drag] = useDrag(() => ({ type: 'jarwateroil' }));
//     return (
//         <aside className='ssl-exp-img'>
//             <aside className='jar-water-oil'></aside>
//         </aside>
//     );
// }
// const JarWaterRod = () =>{
//     const [, drag] = useDrag(() => ({ type: 'jarwaterrod' }));
//     return (
//         <aside className='ssl-exp-img'>
//             <aside className='jar-water-rod'><span>&nbsp;</span></aside>
//         </aside>
//     );
// }
// const JarOilRod = () =>{
//     const [, drag] = useDrag(() => ({ type: 'jaroilrod' }));
//     return (
//         <aside className='ssl-exp-img'>
//             <aside className='jar-oil-rod'><span>&nbsp;</span></aside>
//         </aside>
//     );
// }
// const JarWaterOilRod = () =>{
//     const [, drag] = useDrag(() => ({ type: 'jarwateroilrod' }));
//     return (
//         <aside className='ssl-exp-img'>
//             <aside className='jar-water-oil-rod'><span>&nbsp;</span></aside>
//         </aside>
//     );
// }
export default RequirementPanel
