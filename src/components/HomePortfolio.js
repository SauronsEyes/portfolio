import { useState } from 'react';
import { FaGlobe,FaMobile, FaPython,FaUnity, FaCamera } from 'react-icons/fa';
import MarsGif from '../images/mars.gif';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
var hasEntered = false;
var oldScroll,scrollY;
const HomePortfolio = () => {
   const [ypos,setYPos] = useState(10);
   useEffect(()=>{
    const handler = (e) =>{
        
        scrollY = window.scrollY;
        if(oldScroll > scrollY){
           if(hasEntered && ypos>10){
                setYPos(ypos-1);
           }
        }else{
           if(hasEntered && ypos<70){
            setYPos(ypos+1);
           }
        }
        oldScroll = scrollY;
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
   })
    
    
    return (
        <div className="container-fluid homePortfolio" onMouseEnter={()=>{hasEntered=true}}>
            <img src={MarsGif} className="marsImage" style={{left:`${ypos}%`}} alt="Mars Background"/>
            <h2><span>My</span> Portfolio</h2>
            <div className="InnerPortfolio d-flex justify-content-center">
               <div className="itemWrapperHp">
                   
                   <Link to="/web" className="hpLink">
                        
                        <div className="hpItem"> 
                            <div className="circleHp"></div>
                             <div className="circleHp"></div>
                            <div className="hpIcon"><FaGlobe/></div>
                            <div className="hpDesc">
                            <h4>Web Dev</h4> 
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="itemWrapperHp">
                   <a className="hpLink">
                        <div className="hpItem"> 
                            <div className="circleHp"></div>
                            <div className="hpIcon"><FaMobile/></div>
                            <div className="hpDesc">
                            <h4>Mobile App</h4> 
                            </div>
                        </div>
                    </a>
                </div>
                <div className="itemWrapperHp">
                   <Link to="/python" className="hpLink">
                        <div className="hpItem"> 
                            <div className="circleHp"></div>
                            <div className="hpIcon"><FaPython/></div>
                            <div className="hpDesc">
                            <h4>Python</h4> 
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="itemWrapperHp">
                   <Link to="/unity" className="hpLink">
                        <div className="hpItem"> 
                            <div className="circleHp"></div>
                            <div className="hpIcon"><FaUnity/></div>
                            <div className="hpDesc">
                            <h4>Unity 2D/3D</h4> 
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="itemWrapperHp">
                    <Link to="/photography" className="hpLink">
                        <div className="hpItem"> 
                            <div className="circleHp"></div>
                            <div className="hpIcon"><FaCamera/></div>
                            <div className="hpDesc">
                            <h4>Photography</h4> 
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      );
}
 
export default HomePortfolio;