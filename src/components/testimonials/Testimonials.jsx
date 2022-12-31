import React from 'react';
import './Testimonials.css';
import {testimonyData} from '../../data/testimonialData'
import rightArrow from '../../assets/arrow-right.png';
import leftArrow from '../../assets/arrow-left.png';
import { useState } from 'react';

function Testimonials() {
    const [selected, setSelected] = useState(0);
    const tesLength = testimonyData.length;
  return (
    <div className="testimonies">
        <div className="left-side">
            <span>Testimonials</span>
            <span className='hollow-text'>What Clients</span>
            <span>Say About Us</span>
            <span>
                {testimonyData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--deeporange)'}}>{testimonyData[selected].name}</span> {" "}
                 - {testimonyData[selected].status}
            </span>
        </div>
        <div className="right-side">
            <div></div>
            <div></div>
            <img src={testimonyData[selected].image} alt=''/>
            <div className='arrows-icon'>
                <img 
                onClick={() => {
                    selected=== 0 ? setSelected(tesLength - 1)
                    :setSelected((prev)=> prev - 1);
                }}
                src={leftArrow} alt="" />
                <img
                onClick={() => {
                    selected === tesLength -1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                 src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials;