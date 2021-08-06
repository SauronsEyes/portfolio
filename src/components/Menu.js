import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MyCV from '../documents/final_cv.pdf';
var menuExitTm;
var renderGrid;
const Menu = (props) => {
    const [displayMenuSec,setDisplayMenuSec] = useState(false);
    const [startExitMenu , setStartExitMenu] = useState(false);
    useEffect(()=>{
        var mouseX = 0,mouseY = 0;
        const mouseMoveGrid = (event) =>{
            mouseX = event.clientX;
            mouseY = event.clientY;
            requestAnimationFrame(renderGrid);
        }
        window.addEventListener('mousemove', mouseMoveGrid);
        const startGridRender  = () =>{
            var gridCanvas = document.getElementById('gridCanvas');
            var wH = window.innerHeight+50;
            var wW = window.innerWidth+50;
            var i,j;
            gridCanvas.height = wH;
            gridCanvas.width = wW;
            var red = 255;
            var green = 255;
            var blue =255;
            var slope;
            var npx,npy;
            var lineLength = 50;
            var gcanv2D = gridCanvas.getContext('2d');	
            renderGrid = () =>{
                gcanv2D.clearRect(0,0,wW,wH);
                
                for(i=0;i<=wW;i=i+	100){
                    for(j=0;j<=wH;j=j+100){
                        gcanv2D.beginPath();
                        gcanv2D.moveTo(i,j);
                        if(Math.abs(mouseX-i)<100 && Math.abs(mouseY-j)<100){
                            gcanv2D.fillStyle = `rgba(${red},${green},${blue},0.5)`	;
                            gcanv2D.strokeStyle= `rgba(${red},${green},${blue},0.5)`;
                    
                        }else{
                            gcanv2D.fillStyle = `rgba(${red},${green},${blue},0.2)`	;
                            gcanv2D.strokeStyle= `rgba(${red},${green},${blue},0.2)`;
                        }
                        gcanv2D.arc(i,j, 3, Math.PI*2, 0);
                        slope = (mouseY-j)/(mouseX-i);
                        if(mouseX - i>0){
                            npx = i+(lineLength/Math.sqrt((1+Math.pow(slope,2))));
                        }else{
                            npx = i-(lineLength/Math.sqrt((1+Math.pow(slope,2))));
                        }

                        npy =slope*(npx-i)+j
                        gcanv2D.moveTo(i,j);
                        gcanv2D.arc(npx,npy, 3, Math.PI*2, 0);
                        gcanv2D.fill();
                        gcanv2D.stroke();
                        gcanv2D.closePath();
                                    
                    }
                }
                

                gcanv2D.fillStyle = `rgba(${red},${green},${blue},0.2)`	;
            
                gcanv2D.strokeStyle= `rgba(${red},${green},${blue},0.2)`;
                


                
        
                
            }

            
            
            renderGrid();
        }
        startGridRender();
        window.addEventListener('resize',startGridRender)
        return ()=>{
            window.removeEventListener('mousemove', mouseMoveGrid);
            window.removeEventListener('resize',startGridRender);
            clearTimeout(menuExitTm);
        }
    },[])
    const openMenuSec = (menuState) =>{
        if(displayMenuSec && menuState){
            setStartExitMenu(true);
            menuExitTm = setTimeout(()=>{
                setDisplayMenuSec(false);
                setStartExitMenu(false);
            },1000)
            
        }
        else{
            setDisplayMenuSec(true);
        }
        
    }
    const menuCloseHandler = () =>{
        props.setOpenStatus(false);
        props.navStat('menuIcon');
    }
    return ( 
        <div className="menu">
            <div className="innerMenu d-flex justify-content-center align-items-center" >
                <div className={`menuList d-flex align-items-end ${displayMenuSec && 'displaySec'} ${startExitMenu && 'startMenuExit'}`}>
                    <div className="MenuI">
                        <Link to="/" onClick={()=>menuCloseHandler()}>Home</Link>
                        <a href={MyCV} target="_blank" rel="noreferrer" onClick={()=>menuCloseHandler()}>Resume</a>
                        <a href="#" onClick={()=>openMenuSec(true)}>Portfolio</a>
                        <Link to="/" onClick={()=>menuCloseHandler()}>Contact</Link>
                    </div>
                    { displayMenuSec &&
                        <div className={`MenuII ms-5 `}>
                            <Link to="/web" onClick={()=>menuCloseHandler()}>Web</Link>
                            
                           
                            <Link to="/unity" onClick={()=>menuCloseHandler()}>Unity</Link>
                            <Link to="/python" onClick={()=>menuCloseHandler()}>Python</Link>
                            <Link to="/" onClick={()=>menuCloseHandler()}>Mobile Dev</Link>
                            <Link to="/photography" onClick={()=>menuCloseHandler()}>Photography</Link>
                        </div>
                    }   
                </div>
                <canvas id="gridCanvas"></canvas>
            </div>
        </div>
     );
}
 
export default Menu;