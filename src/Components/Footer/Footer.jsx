import React, {useEffect} from 'react';
import './footer.css'
import video from '../../Assets/video2.mov';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FiChevronRight} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <section className='footer'>

            <div className='videoDiv'>
                <video src={video} loop autoPlay muted type="video/mov"></video>
            </div>

            <div className='secContent container'>
                <div className='contactDiv flex'>
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>SEND <FiSend className="icon"/></button>
                    </div>
                </div>
                <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="" className='logo flex'>
                           <MdOutlineTravelExplore className="icon"/> Travel.
                        </a>
                    </div>

                    <div data-aos="fade-up" className="footerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Ullam inventore eos
                    fuga hic cum voluptatem minima, tempore
                    non odio provident nobis ipsam at,
                    doloremque sed cupiditate ipsum in, 
                    atque soluta?
                    </div>

                    <div data-aos="fade-up" className="footerSoc">
                        <AiOutlineTwitter className='icon' />
                        <AiFillYoutube className='icon' />
                        <AiFillInstagram className='icon' />
                    </div>
                </div>

                <div className="footerLinks grid">
                    <div data-aos="fade-up"  data-aos-duration="3000" className="linkGroup">
                        <span className="grouptitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Payment
                        </li>
                    </div>

                    <div data-aos="fade-up"  data-aos-duration="4000" className="linkGroup">
                        <span className="grouptitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Booking
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Rentacars
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            HosttelWorld
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Trivago
                        </li>
                    </div>

                    <div data-aos="fade-up"  data-aos-duration="5000" className="linkGroup">
                        <span className="grouptitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            London
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Europe
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Indonesia
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            California
                        </li>
                    </div>

                </div>
                <div className="footDiv">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHT RESERVED -ISRATECH 2023</small>
                </div>
            </div>

            </div>

            
           
        </section>
    )
}

export default Footer