import React from 'react';
import Slider from "react-slick";
class ExpSlick extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){    
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider ref={slider => (this.slider = slider)}  {...settings} className='ssl-exp-slider'>
                {/* <section className="ssl-exp-step-blk start">
                    <h5>Click START button to follow Procedure</h5>
                    <a href="javascript:;" className='btn-start' onClick={this.slicGoTo}>Start</a>
                </section> */}
                <section className="ssl-exp-step-blk">
                    <h6>Step 1</h6>
                    <aside className='ssl-exp-img'>
                        <aside className='jar-water'></aside>
                    </aside>
                    <p>Take a glass full of water</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 2</h6>
                    <aside className='ssl-exp-img'>                        
                        <aside className='jar-water-oil'></aside>
                    </aside>
                    <p>Take a glass with half oil and half water in it.</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 3</h6>
                    <aside className='ssl-exp-img'>
                        <aside className='jar-oil'></aside>                        
                    </aside>
                    <p>Take a glass full of oil.</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 4</h6>
                    <aside className='ssl-exp-img'>                        
                        <aside className='jar-water-rod'><span>&nbsp;</span></aside>
                    </aside>
                    <p>Now add rod in water contained glass</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 5</h6>
                    <aside className='ssl-exp-img'>                        
                        <aside className='jar-water-oil-rod'><span>&nbsp;</span></aside>
                    </aside>
                    <p>Now add rod in water and oil contained glass</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 6</h6>
                    <aside className='ssl-exp-img'>                        
                        <aside className='jar-oil-rod'><span>&nbsp;</span></aside>
                    </aside>
                    <p>Now add rod in oil contained glass</p>
                </section>
                <section className="ssl-exp-step-blk">
                    <h6>Step 7</h6>
                    <aside className='ssl-exp-img result'>                        
                        <aside className='jar-water-rod'><span>&nbsp;</span></aside>
                        <aside className='jar-water-oil-rod'><span>&nbsp;</span></aside>
                        <aside className='jar-oil-rod'><span>&nbsp;</span></aside>
                    </aside>
                    <p>Now check the result</p>
                </section>
            </Slider>
        )
    }
}

export default ExpSlick
