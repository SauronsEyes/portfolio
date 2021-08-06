import { useEffect } from 'react';
import BgVideo from '../video/bg_comp.mp4';
var otherClass;
const Banner = () => {
    useEffect(()=>{
        setTimeout(()=>{
            otherClass = 'startMovingAnim';
        },4000)
    },[]);
    return (  
        <div className={`Banner container-fluid ${otherClass}`}>
            <video autoPlay muted loop>
                <source src={BgVideo} type="video/mp4" id="video"/>
                Your browser does not support the video tag.
            </video>
            <div className="maskingLayer d-flex justify-content-center align-items-center">
               
                    Sudesh <br></br>Bhuju
                
            </div>
            <div className="container-fluid overlay">
	        </div>
            <div className="Welcometext container-fluid">
               <h2>Welcome to My Portfolio </h2>
            </div>
        </div>
    );
}
 
export default Banner;