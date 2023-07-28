import React, { Component } from 'react';
import styles from './img.css';
import me1 from './images/hpy.jpeg';
import me2 from './images/hpyme.jpeg';
import me3 from './images/hpyyy.jpeg';
import me4 from './images/mehpy.jpeg';
import vdo1 from './images/kdvdo.mp4';
class Kdapp extends Component{
  render(){
    return(
      <div className='body'>
        <div className="imgbor">
        <div className="grid">
            <div className="im">
            <img alt='image' className="hpy1" src={me1}/>
            </div>
            <div className="im">
            <img alt='image' className="hpy2" src={me2}/>
            </div>
        </div>
        <div>
            <video controls className='vdo'>
                <source src={vdo1}/>
            </video>
        </div>
        <div className="grid">
            <div className="im">
            <img alt='image' className="hpy3" src={me3}/>
            </div>
            <div className="im">
            <img alt='image' className="hpy4" src={me4}/>
            </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Kdapp;