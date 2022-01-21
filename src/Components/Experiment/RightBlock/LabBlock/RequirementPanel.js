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

    const Labitem = (props) =>{
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
                                setStep(step+1);
                            } 
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'jarwateroil' : 
                            if(step == 1)    
                            {
                                setJwateroil(true);
                                setStep(step+1);
                            }
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'jaroil' : 
                            if(step == 2)    
                            {
                                setJoil(true);
                                setStep(step+1);
                            }
                            else alert('You have draggd wrong equipment')
                            break;
                        case 'rod' : 
                            if(step == 3){
                                setJwaterrod(true);
                                setJwater(false);
                                setStep(step+1);
                            }
                            else if(step == 4){
                                setJwateroilrod(true);
                                setJwateroil(false);
                                setStep(step+1);
                            }
                            else if(step == 5){
                                setJoilrod(true);
                                setJoil(false);
                                setStep(step+1);
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
                <Labitem name="jarwater"/>                
                <Labitem name="jarwateroil"/>
                <Labitem name="jaroil"/>
                <Labitem name="rod"/>
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

export default RequirementPanel
