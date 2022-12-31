import React from 'react';
import Header from '../header/Header';
import './mainBody.css';
import Design from "../../assets/designicon.png";
import MainImg from "../../assets/big-image.jpg";
import Swoosh from "../../assets/swoosh.png";
import Nodestat from "../../assets/design.png";
const MainBody = () => {
    return (
        <div className='main-body'>
            <div className='blur body-blur'></div>
            <div className='body-l'>
                <Header/>
            {/*Web design advert */}
                <div className='best-design-ad'>
                    <div></div>
                    <span>Best Web Designs for Your Company</span>
                </div>

            {/* Main body hearder text*/}
            <div className='body-text'>
                <div>
                    <span className='hollow-text'>Order</span>
                    <span> Today</span>
                </div>
                <div>
                    <span>We Design</span>
                    <span className='hollow-text'> It</span>
                </div>
                <div>
                    <span>Wynescent Web Creations offers you the best web Designs.
                        We deliver quality websites on budget, and according to your resuirements.
                    </span>
                </div>
            </div>

            {/*the statistics */}
            <div className='stats'>
                <div>
                    <span>+20</span>
                    <span>Happy Clients</span>
                </div>
                <div>
                    <span>+70</span>
                    <span>Hosted Websites</span>
                </div>
                <div>
                    <span>+12</span>
                    <span>Consultations</span>
                </div>
            </div>
            {/* Info buttons*/}
            <div className='info-buttons'>
                <button className='btn'>Order Now</button>
                <button className='btn'>Learn More</button>
            </div>
            </div>
            <div className='body-r'>
                <button className='btn'>Join Now</button>
                <div className='web-design'>
                    <img src={Design} alt="" className='web-img'/>
                    <span>Web Design</span>
                    <span>HTML & CSS</span>
                </div>

                {/*right side images*/}
                <img src={MainImg} alt="" className='main-img' />
                <img src={Swoosh} alt="" className='swoosh-img'/>
                <div className='node-stat'>
                    <img src={Nodestat} alt=''/>
                    <div>
                    <span>Purely React</span>
                    <span> Website</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default MainBody