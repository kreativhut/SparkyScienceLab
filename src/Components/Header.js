import React, { useState } from 'react';
import UserIcon from '../assets/images/user.png';

function Header(props) {    
    const [menu, setMenu] = useState(false)
    const openMenu =()=>{
        setMenu(!menu)
    }
    return (
        <section className={`ssl-header ${props.expSide ? 'expopen' : ''} expopen`}>
            <section className='ssl-header-inner'>
                <section className='ssl-logo-blk'>
                    <h1>Sparky Science Lab</h1>
                </section>
                <section className='ssl-head-desktop'>
                    <aside className='ssl-menu-blk'>
                        <ul>
                            <li><a href="javascript:;">Experiments</a></li>
                            <li><a href="javascript:;">About Us</a></li>
                            <li><a href="javascript:;">Contact Us</a></li>
                        </ul>
                    </aside>
                    <aside className='ssl-useropt-blk'>
                        <div>
                            <h2><img src={UserIcon} /><span>Mohan</span></h2>
                            <ul>
                                <li><a href="javascript:;">My Profile</a></li>
                                <li><a href="javascript:;">My Experiments</a></li>
                                <li><a href="javascript:;">Logout</a></li>
                            </ul>
                        </div>
                    </aside>
                </section>    
                <section className='ssl-head-responsive'>
                    <aside className={`ssl-hamburger ${menu ? 'open':''}`} onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </aside>
                    <aside className={`ssl-hamburg-cont ${menu ? 'open':''}`}>
                        <h2><img src={UserIcon} /><span>Mohan</span></h2>
                        <ul>
                            <li><a href="javascript:;">My Profile</a></li>
                            <li><a href="javascript:;">My Experiments</a></li>
                            <li><a href="javascript:;">Logout</a></li>
                        </ul>
                    </aside>
                </section>
            </section>
        </section>
    )
}

export default Header
