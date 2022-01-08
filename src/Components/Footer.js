import React from 'react'

function Footer() {
    return (
        <section className='ssl-footer'>
            <section className='ssl-footer-content'>                
                <section className='ssl-footer-blk'>
                    <aside>
                        <h3>Spary Science Lab</h3>
                        <ul>
                            <li><a href='javascript:;'>Experiement</a></li>
                            <li><a href='javascript:;'>About Us</a></li>                            
                        </ul>
                    </aside>
                    <aside>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href='javascript:;'>Primary</a></li>
                            <li><a href='javascript:;'>Secondary</a></li>
                            <li><a href='javascript:;'>Senior</a></li>
                        </ul>
                    </aside>
                    <aside>
                        <h3>Show Your Interest</h3>                           
                        <aside className='form-block'>
                            <input type="text" placeholder="Your Email ID"/>
                            <button>Submit</button>
                        </aside>
                    </aside>
                    <aside>
                        <h3>Contact us</h3>                           
                        <aside className='info-block'>
                            <a href='mailto:user@sparkysciencelab.com'>user@sparkysciencelab.com</a>
                            <a href='tel:+917289926396'>+917289926396</a>
                        </aside>
                    </aside>
                </section>
            </section>
            <p className="poweredby">Powered by <span>Kreativhut</span></p>
        </section>
    )
}

export default Footer
