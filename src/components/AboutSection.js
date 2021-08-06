import { useEffect } from 'react';
import SelfPhoto from '../images/mes.jpg';

var xa,ya;
const AboutSection = () => {
    useEffect(()=>{
        let componentLoaded = true;
        function  HandleMouseMoveCanvas(event){
            xa = event.clientX;
            ya = event.clientY;
            
        }
        window.addEventListener('mousemove',HandleMouseMoveCanvas );
        const canvasRender = () =>{
            var c = document.getElementById("graph");
            var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
            c.width = dimension[0];


            var ctx = c.getContext("2d");
            
            var posx = [100,200,150,100,0];
            var posy = [100,200,300,100,-100];
            var posx2 = [600,400,200,600];
            var posy2 = [500,200,100,150,500,500];
            var posx3 = [];
            var posy3 = [];
            var i,j;
            /*Generate random values for array( random starting point ) */
            for(i=0; i<2;i++){
                posx2.push(500+Math.round(Math.random()*700));
                posy2.push(Math.round(Math.random()*900));
            }
            for(i=0; i<5;i++){
                posx3.push(1000+Math.round(Math.random()*300));
                posy3.push(0+Math.round(Math.random()*1000));
            }
            var posx_len = posx.length;
            var posx2_len = posx2.length;
            var posx3_len = posx3.length;
            
            var opa =1;
            var amount = 0.01;
            var sinang = 0;
            
           

           

            /*Render Lines */
            function draw(){
                
                
                
                ctx.clearRect(0, 0, 1920,1080);
                ctx.beginPath();
                ctx.moveTo(posx[0], posy[0]);
                for(i= 0; i<posx_len;i++){
                    ctx.lineTo(posx[i], posy[i]);
                    
                    ctx.arc(posx[i],posy[i], 5, 0, 2 * Math.PI, false);

                }
                
                
                if(opa>0.5){
                amount = -0.01*Math.random();
                }
                if(opa<0){
                    amount =0.01*Math.random();
                }
                opa =opa +amount;
                
                ctx.moveTo(posx2[0], posy2[0]);
                for(i = 0; i<posx2_len;i++){
                    ctx.lineTo(posx2[i], posy2[i]);
                    
                    ctx.arc(posx2[i],posy2[i], 5, 0, 2 * Math.PI, false);
                }
                ctx.moveTo(posx3[0], posy3[0]);
                for(i = 0; i<posx3_len;i++){
                    ctx.lineTo(posx3[i], posy3[i]);
                    
                    ctx.arc(posx3[i],posy3[i], 5, 0, 2 * Math.PI, false);
                }
                sinang = sinang+0.01;
                
                /*Frame Render Ends here*/

                /*Calculation for next frame*/
                for(i = 0;i<posx_len;i++){
                    posx[i] = posx[i]+ (Math.cos(sinang)*i)/2;/* Sin curve for smooth value transition. Smooth assss Butter */
                    posy[i] = posy[i]+ (Math.cos(sinang)*i)/2;
                    /* Can't believe Distance Formula is useful ahaha  */
                
                    

                
                    if(Math.abs(posx[i]-xa)<500 && Math.abs(posy[i]-ya)<500){
                        ctx.moveTo(posx[i],posy[i]);
                        ctx.lineTo(xa, ya);
                    }
                    
                    for(j = 0;j<posx2_len;j++){
                        
                        
                        if(Math.abs(posx[i]-posx2[j])<500 && Math.abs(posy[i]-posy2[j])<500){
                            ctx.moveTo(posx[i],posy[i]);
                            ctx.lineTo(posx2[j], posy2[j]);
                        }
                    }
                    for(j = 0;j<posx3_len;j++){
                        
                        
                        if(Math.abs(posx[i]-posx3[j])<500 && Math.abs(posy[i]-posy3[j])<500){
                            ctx.moveTo(posx[i],posy[i]);
                            ctx.lineTo(posx3[j], posy3[j]);
                        }
                    }

                }
                posx[posx.length-1]=posx[0];
                posy[posy.length-1] = posy[0];

                /*Repeat Above Steps. Should have done this in Multi-dimensional array. Ugh I feel sad now*/
                for(i = 0;i<posx2_len;i++){
                
                    posx2[i] = posx2[i]+ (Math.sin(sinang)*i)/2;
                    posy2[i] = posy2[i]-(Math.sin(sinang)*i)/2;
                    
                    
                    
                    if(Math.abs(posx2[i]-xa)<500 && Math.abs(posy2[i]-ya)<500){
                        ctx.moveTo(posx2[i],posy2[i]);
                        ctx.lineTo(xa, ya);
                    }
                
                    
                    for(j = 0;j<posx3_len;j++){
                        
                        
                        if(Math.abs(posx2[i]-posx3[j])<500 && Math.abs(posy2[i]-posy3[j])<500){
                            ctx.moveTo(posx2[i],posy2[i]);
                            ctx.lineTo(posx3[j], posy3[j]);
                        }
                    }
                    
                    
                }

                posx2[posx2.length-1]=posx2[0];
                posy2[posy2.length-1] = posy2[0];
                
                for(i = 0;i<posx3_len;i++){
                
                    posx3[i] = posx3[i]- (Math.sin(sinang)*i)/1.2;
                    posy3[i] = posy3[i]-(Math.sin(sinang)*i)/1.2;
                    
                    
                    if(Math.abs(posx3[i]-xa)<500 && Math.abs(posy3[i]-ya)<500){
                        ctx.moveTo(posx3[i],posy3[i]);
                        ctx.lineTo(xa, ya);
                    }
                    

                    
                    
                    
                }
                posx3[posx3.length-1]=posx3[0];
                posy3[posy3.length-1] = posy3[0];
                

                // ctx.restore();
                ctx.strokeStyle = 'rgba(255,255,255,'+opa+')';
                ctx.stroke();
                ctx.closePath();
                if(componentLoaded){
                    window.requestAnimationFrame(draw);
                }
               
            
            
                
            }

            window.requestAnimationFrame(draw);
        }
        canvasRender();
        
        window.addEventListener('resize',canvasRender);
        return () =>{
             window.removeEventListener('resize',canvasRender);
             componentLoaded = false;
             window.removeEventListener('mousemove',HandleMouseMoveCanvas);
        }
    },[]);
    return ( 
        <div className="container-fluid about  d-flex flex-column align-items-center justify-content-center">
            <canvas height="1000px" width="1100px" id="graph" >
            </canvas>
            <div className="container-fluid abtdesc ">
                <div className="abtimg">
                    <img src={SelfPhoto} alt="Sudesh Bhuju"/>
                    <div className="shape"></div>
                </div>
                <h1>About me</h1>
                <p>
                    Motivated Web Designer adept at 
                    conceptualizing, designing and maintaining product interfaces to foster exceptional user experiences. Dedicated 
                    creator of extremely accessible user 
                    interfaces and aesthetically pleasing 
                    visual designs. Skilled in generating sites 
                    for both desktop and mobile browsers. 
                    Combines accepted best practices with 
                    creative innovation to produce beautiful 
                    and functional results.
                </p>
            </div>
            
            
        </div>
     );
}
 
export default AboutSection;