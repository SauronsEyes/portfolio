import { useState } from "react";
import { useEffect } from "react";
import Logo from '../images/logo.png';
import {isMobile} from 'react-device-detect';

var finalText ='LOADING';
var asc  = 65;
var ascText;
var completedText ="";
let textChangeTimeout;


const LoadingScreen = () => {
    const [loadingtext,setLoadingText] = useState('');
    const [loadingDipslay,setLoadingDisplay] = useState();
    useEffect(()=>{
        let loadingDispTimeout = setTimeout(()=>{
            setLoadingDisplay("exitNow");
        },6000);
        return () =>  clearTimeout(loadingDispTimeout);
    },[])
    useEffect(()=>{
        if(completedText!=="LOADING"){
                textChangeTimeout = setTimeout(()=>{
                    ascText = String.fromCharCode(asc);
                    asc = asc+1;
                    setLoadingText(ascText+completedText);
                    if(ascText === finalText.slice(-1) ){
                        completedText = ascText+completedText ;
                        finalText = finalText.substr(0,finalText.length-1);
                    }              
                    if(asc >90){
                        asc=65
                    }
                
            }, 30)
        }
        return ()=> clearTimeout(textChangeTimeout);
    },[loadingtext])
    useEffect(()=>{
        const handleStarRender = () =>{
            var canvas = document.getElementById('space_box');
            var c = canvas.getContext('2d');
            
            var innerWidth = window.innerWidth - 20,
                innerHeight = window.innerHeight - 20,
                radius = 5,
                starsIndex = 0,
                stars = [],
                TWO_PI = Math.PI*2,
                centerX = innerWidth/2,
                centerY = innerHeight/2,
                focalLength = 100,
                starRadius = null,
                starX = null,
                starY = null,
                numStars = 100,
                starX_dir = 0,
                starY_dir = 0;
                if(isMobile){
                    radius =1;
                }
                canvas.width = innerWidth;
                canvas.height = innerHeight;
                
            
            
                
            // Function for create new start
            function star(x,y,z){
                this.x = x;
                this.y = y;
                this.z = z;
                this.radius = radius;
                this.color = "rgba(255,255,255,0.5)";
                starsIndex++;
                stars[starsIndex] = this;
                this.id = starsIndex;
                
                // Animate Stars
                this.update = function(){
                starX = (this.x - centerX) * (focalLength / this.z);
                starX += centerX;
                
                starY = (this.y - centerY) * (focalLength / this.z);
                starY += centerY;
                
                starRadius = radius * (focalLength / this.z);
                
                starX += starX_dir;
                starY += starY_dir;
                
                this.z += -5;
                
                if(this.z <= 0){
                    this.z = parseInt(innerWidth);
                }
                
                this.draw();
                
                }
                
                // Function for draw star
                this.draw = function(){
                    c.beginPath();
                    c.arc(starX,starY,starRadius, TWO_PI, false);
                    c.fillStyle = this.color;
                    c.fill();
                    c.closePath();
                }
                
            }	
            
            // X,Y,Z values
            var s;
            for(s = 0; s < numStars; s++){
                var x = Math.random() * innerWidth;
                var y = Math.random() * innerHeight;
                var z = Math.random() * innerWidth;
                new star(x,y,z);
            }
            
            // Function for animate canvas objects
            function animate(){
                requestAnimationFrame(animate);
                c.fillStyle = "#000";
                c.fillRect(0,0,innerWidth,innerHeight);
                
                for( var i in stars){
                stars[i].update();
                }
            }
            
            animate();
        }
        const handleHexRender = () =>{
            handleStarRender();
            var pentCanvas = document.getElementById('logHex');
            var winH= window.innerHeight-20;
            var winW = window.innerWidth-20;
            pentCanvas.height = winH;
            pentCanvas.width = winW
            var pctx = pentCanvas.getContext('2d');
            var i;
            var centY= winH/2;
            var centX =winW/2;
            var pentX = [140,260,140,-140,-260,-140];
            var pentY = [-200,0,200,200,0,-200];
            var currentSel = 0;
            var counter = 0;
            if(isMobile){
                pentX =pentX.map(x => x /1.5);
                pentY =pentY.map(x => x /1.5);
            }
            function renderHex(){
                requestAnimationFrame(renderHex);

                pctx.clearRect(0,0,winW,winH);
                pctx.beginPath();
                pctx.moveTo(centX+pentX[pentX.length-1],centY+pentY[pentY.length-1]);
                for(i=0;i<pentX.length;i++){
                    pctx.lineTo(centX+pentX[i],centY+pentY[i]);
                    pctx.arc(centX+pentX[i],centY+pentY[i],5,0,Math.PI*2);
                    if(i === currentSel ){
                        if(counter<10){
                            pentX[i]= pentX[i]+5;
                            pentY[i]= pentY[i]+5;
                    
                        }else{
                            pentX[i]= pentX[i]-5;
                            pentY[i]= pentY[i]-5;
                        }
                    }	


                }
                counter ++;
                if(counter>=20){
                    counter= 0 ;
                    currentSel++;
                    
                }
                if(currentSel>(pentX.length-1)){
                    currentSel = 0;
                }
                pctx.strokeStyle ="#ffffff";
                pctx.stroke();


            }
            renderHex();
        }
        handleHexRender();
       
        window.addEventListener('resize',handleHexRender);
        
        return ()=>{
            window.removeEventListener('resize',handleHexRender);
        }
    },[])
    return (
        <div className={`container-fluid LoadingScreen ${loadingDipslay}`}>
            <div className="LoadingScreenContainer d-flex justify-content-center align-items-center">
                <canvas id="space_box" ></canvas>
                <canvas id="logHex"></canvas>
                <div className="LoadingCenter d-flex justify-content-center align-items-center flex-column">
                    <img src={Logo} alt="Loading Screen Logo"/>
                    <h1>{loadingtext}</h1>
                </div>
            </div>
            
        </div>
      );
}
 
export default LoadingScreen;