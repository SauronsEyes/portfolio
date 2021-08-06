
import {useState,useEffect } from 'react';

import {useKey} from 'react-use';
import {useUpdate } from 'react-use';
import { isMobile } from 'react-device-detect';
// Player Assets 
import BackLeg from '../images/assets/player/bleg.png';
import Body from '../images/assets/player/body.png';
import FrontLeg from '../images/assets/player/fleg.png';
import HandBottom from '../images/assets/player/handBot.png';
import HandTop from '../images/assets/player/handTop.png';
import Head from '../images/assets/player/head.png';

// Background Elements Assets 
import GameBg from '../images/assets/map2.png';
import GameSecBg from '../images/assets/scene2/mainScene.png';
import bgHillBack from '../images/assets/scene2/bgHillBack.png';
import bgHillFront from '../images/assets/scene2/bgHillFront.png';
import bgStar from '../images/assets/scene2/bgStar.png';


// BikeMan
import backHandle from '../images/assets/bikeman/backHandle.png';
import engine from '../images/assets/bikeman/Engine.png';
import engineFrame from '../images/assets/bikeman/engineFrame.png';
import frontHandle from '../images/assets/bikeman/frontHandle.png';
import fuelTank from '../images/assets/bikeman/FuelTank.png';
import handle from '../images/assets/bikeman/handle.png';
import headLight from '../images/assets/bikeman/headlight.png';
import pipe from '../images/assets/bikeman/pipe.png';
import seat from '../images/assets/bikeman/seat.png';
import wheelInner from '../images/assets/bikeman/wheelInner.png';
import wheelOuter from '../images/assets/bikeman/wheelOuter.png';
import bikeManBody from '../images/assets/bikeman/body.png';
import bikeManHead from '../images/assets/bikeman/head.png';
import bikeManLeg from '../images/assets/bikeman/leg.png';
import bikeManHandF from '../images/assets/bikeman/handsFront.png';
import bikeManHandB from '../images/assets/bikeman/handsBack.png';
import bikeSmoke from '../images/assets/bikeman/smoke.png';

//School Girl 
import sGirlBody from '../images/assets/girl/body.png';
import sGirlEye from '../images/assets/girl/eye.png';
import sGirlHandLeft from '../images/assets/girl/handLeft.png';
import sGirlHandRight from '../images/assets/girl/handRight.png';
import sGirlHead from '../images/assets/girl/head.png';
import sGirlLegLeft from '../images/assets/girl/leftLeg.png';
import sGirlLegRight from '../images/assets/girl/rightLeg.png';

//StarGirl
import StarGirlBody from '../images/assets/stargirl/body.png';
import StarGirlHands from '../images/assets/stargirl/hands.png'
import StarGirlHead from '../images/assets/stargirl/head.png';
import StarGirlLeg from '../images/assets/stargirl/leg.png';

//Hot Air Ballon
import HABalloon from '../images/assets/HotAirBalloon/balloon.png';
import HABalloonCasket from '../images/assets/HotAirBalloon/casket.png';
import HABalloonWire from '../images/assets/HotAirBalloon/wire.png';

// Portfolio Images
import  blockDash from '../images/assets/icons/blockDash.png';
import flapRojin from '../images/assets/icons/flapRojin.png';
import DesbriSamata from '../images/assets/icons/fornax.png';
import Ninjump from '../images/assets/icons/ninjump.png';
import GhostRunner from '../images/assets/icons/ghostRunner2.png';

//Forbidden Button
import ForbiddenBanner from '../images/assets/forbidden/banner.png';
import ForbiddenButton from '../images/assets/forbidden/button.png';

//RickRoll
import RickRollGif from '../images/assets/rickroll/rick.gif';
import RickRollGif2 from '../images/assets/rickroll/rick2.gif';
import RickRollGif3 from '../images/assets/rickroll/rick3.gif';

//Audio
import RickRoll from '../images/assets/sounds/rickroll.mp3';
import GameBgAudio from '../images/assets/sounds/portfoliobg_comp.mp3'

//Icon
import {FaAngleRight} from 'react-icons/fa';

var bubbleTextDisplay ='';
var additionalSkyClass;
var balloonInfo = {
    position : 3500,
    isFlying:false
}

var removeSceneExitFirst  = false;
var bubbleOut;
var grandpaExit;
var secondSceneExit = true;
var additionalClassCont = '';
var stopPlayerMove =false;
var startRickRoll =false;
var sceneBg = '#00BFF3';

var tmfunc;

var bubbleInfo =[
    {
        bubbleText: 'Welcome to My Unity Portfolio. The way to my portfolio is right ahead. Press D Key to Move Forward.',
        initX : 0,
        finalX : -170
    },
    {
        bubbleText: 'I miss you Grandpa. <3',
        initX: -570,
        finalX:-800
    },
    {
        bubbleText: "You've discovered My First Unity Project - Block Dash. I worked on this after I finished learning Unity 2D. It's mostly similar to Geometry Dash.",
        initX: -980,
        finalX:-1250
    },
    {
        bubbleText: 'Life was easier back then :V',
        initX: -1780,
        finalX:-2000
    },
    {
        bubbleText:"Why didn't I confess?",
        initX: -2200,
        finalX:-2350
    },
    {
        bubbleText:"Flappy Rojin - My 2nd Unity Project. Flappy Bird but Rojin.",
        initX: -2625,
        finalX:-2900
    },
    {
        bubbleText:"A Hot Air Balloon. Time to Fly",
        initX: -3290,
        finalX:-3420
    },
    {
        bubbleText:"I still need to press the D key to move forward.",
        initX: -3490,
        finalX:-3600
    },
    {
        bubbleText:"Hey, look! That's my 3rd Unity Project and my first 3D project - Debris Samata translated as Catch Debris. It's a space-themed game where you move around earth collecting debris and refueling your spaceship.",
        initX: -4700,
        finalX:-5250
    },
    {
        bubbleText:"NinJump - A 2D endless Stickman running game ",
        initX: -5585,
        finalX:-6100
    },
    {
        bubbleText:"The urge to press the button keeps getting stronger and stronger. What could go wrong?",
        initX: -6470,
        finalX:-6950
    },
    {
        bubbleText:"Maybe Someday..",
        initX: -7780,
        finalX:-8085
    },
    {
        bubbleText:"My final portfolio item - Grim Runner. 2D Birdeye perspective Horror Game where the player has to collect coins while being chased by Grim Reaper",
        initX: -9125,
        finalX:-9455
    },
    {
        bubbleText:"Hey, You've reached the end. Thanks for being a part of this Journey. Press R to Restart.",
        initX: -10500,
        finalX:-11001
    }



]
if(isMobile){
    bubbleInfo[0].bubbleText ='Welcome to My Unity Portfolio. The way to my portfolio is right ahead. Tap the Arrow Button at center right to move forward.'
    bubbleInfo[7].bubbleText = 'I still need to tap the button to move forward.'
}

var bgPos = 0;
var initPress =true;
var hasChangedStatus = false;
var userHasInteracted =false;
var grandpaReached =false;
var RandomStarInfo = [];
for(var i=0;i<30;i++){
    RandomStarInfo.push(
        {   
            id:i,
            starLeft : Math.round(Math.random()*4000),
            starTop: Math.round(Math.random()*150),
            delay:Math.random()*3
        }
    );
}

const GameWindow = () => {
   
    
    const Update = useUpdate();
    var noneInRange = true;
    const [playerState,setPlayerState] = useState('idleState');
    const initializeGame = () =>{
        bgPos = 0;
        initPress =true;
        hasChangedStatus = false;
        userHasInteracted =false;
        grandpaReached =false;
        removeSceneExitFirst  = false;
        secondSceneExit = true;
        additionalClassCont = '';
        stopPlayerMove =false;
        startRickRoll =false;
        sceneBg = '#00BFF3';
        bubbleTextDisplay ='';
        additionalSkyClass ='';
        grandpaExit ='';
        balloonInfo = {
            position : 3500,
            isFlying:false
        }
    }
    useEffect(()=>{
        return ()=>{
            initializeGame();
        }
    },[])
    const updateBubble = ()=>{
        
        for(var i=0;i<bubbleInfo.length;i++){
            if(bgPos<=bubbleInfo[i].initX && bgPos>=bubbleInfo[i].finalX){
                bubbleTextDisplay = bubbleInfo[i].bubbleText;
               
                noneInRange = false;
                if(i===1){
                    grandpaReached = true;
                    
                }
            }
            
        }
        if(grandpaReached){
            setTimeout(()=>{
                grandpaExit = 'GrandpaExitStart';
            },400)
        }
        
        if(noneInRange){
            bubbleOut = 'GameBubbleExit';
            setTimeout(()=>{
                bubbleTextDisplay = '';
                bubbleOut = '';
            },800)
            
            
        }
    }
    
    updateBubble();
    const gameHandler = () =>{
        if(userHasInteracted){
            document.getElementById('GameAudio').play();
        }
        if(!isMobile){
            document.getElementById('GameAudio').play();
        }
        
        
        if(initPress){
            setPlayerState('walkState');
            initPress =false;
           
        }
        Update();
        if(!stopPlayerMove && bgPos>-11000){
            bgPos = bgPos-5;
        }

        
        console.log(bgPos);
        updateBubble();
        if(!balloonInfo.isFlying){
            balloonInfo.position = balloonInfo.position -5;
        }
        if(bgPos<-6295 && bgPos>-6325  && !hasChangedStatus){
            additionalSkyClass = 'SkyMovingOut';
            sceneBg ='#3F7A89';
            hasChangedStatus = true;
            stopPlayerMove = true;
            Update();   
            setTimeout(()=>{
                additionalSkyClass = '';
                secondSceneExit = true;
                balloonInfo.isFlying =false;
                stopPlayerMove = false;
                
                Update();
                
            },1500)
        }
        if(balloonInfo.position<=0){
            if(bgPos>-6295){
                balloonInfo.isFlying = true;
            }
            additionalClassCont = 'isFlyingStateHB';
            if(!removeSceneExitFirst){
                secondSceneExit =false
                additionalSkyClass = 'appearSky'
                setTimeout(()=>{
                    removeSceneExitFirst = true;
                    additionalSkyClass = '';
                    Update();
    
                },1000)
            }
            
            
        }
        
        if(isMobile){
            tmfunc = setTimeout(()=>{
                gameHandler();
                
            },20)
        }
        
        
    }
    const handlePlayerStop = () =>{
        userHasInteracted =true;
        if(!initPress){  
            setPlayerState('idleState');
        }
        initPress = true;
    }
    const handleRemoveHold = () =>{
        clearTimeout(tmfunc);
        handlePlayerStop();
        
    }
    
   
    useKey('r',()=>{
        initializeGame();
        setPlayerState('idleState');
        Update();
        
    })
    
    useKey('d',()=>{
       
        gameHandler();
        
        
    })
    
    useKey('d', ()=>{
        handlePlayerStop();
    }, {event: 'keyup'})

    const startRickRolling = ()=>{
        document.getElementById('GameAudio').src = RickRoll;
        document.getElementById('GameAudio').play();
        startRickRoll = true;
        Update();
        setTimeout(()=>{
            startRickRoll = false;
            Update();
        },4000)
    }
    
    return ( 
        <div className="mainGameContainer p-0 m-0" >
            <div className="innerGameContainer" style={{background: `${sceneBg}`}}>
                <div className={`gameBackground`}  style ={{left:`${bgPos}px`}}>
                    <div className="innerGameBackground">
                        <div className ="blockDash upfItem">
                            <img alt="" src = {blockDash}/>
                        </div>
                        <div className ="flapRojin upfItem">
                            <img alt="" src = {flapRojin}/>
                        </div>
                        <div className ="debrisSamata upfItem">
                            <img alt="" src = {DesbriSamata}/>
                        </div>
                        <div className ="NinJump upfItem">
                            <img alt="" src = {Ninjump}/>
                        </div>
                        <div className ="ghostRunner upfItem">
                            <img alt="" src = {GhostRunner}/>
                        </div>
                        
                        {hasChangedStatus &&
                            <div className="secondGameBg"> 
                                <div className="innerSecBgGame">
                                    <img alt="" src={GameSecBg} className="secStaticBg"/>
                                    <img alt="" src={bgHillBack} className="secBgHillBack" style={{ left: `${Math.abs(6395+bgPos)/4 }px`}}/>
                                    <img alt="" src={bgHillFront} className="secBgHillFront" style={{ left: `${Math.abs(6395+bgPos)/8 }px`}}/>
                                    <img alt="" src={bgStar} className="secBgStar" style={{ left: `${Math.abs(6395+bgPos)/2}px`}}/>
                                    <div className="gameForbiddenButton">
                                        <div className="innerForbiddenButton">
                                            <img alt="" src={ForbiddenBanner} className="mforbiddenBanner" />
                                            <img alt="" src={ForbiddenButton} className="mforbiddenButton"  onClick ={()=>startRickRolling()}/>
                                        </div>
                                    </div>
                                    <div className="GameStarGirl">
                                        <div className="innerGameStarGirl">
                                            <div className="starGirlBody">
                                                <img alt="" src={StarGirlBody}/>
                                            </div>
                                            <div className="starGirlHead">
                                                <img alt="" src={StarGirlHead}/>
                                            </div>
                                            <div className="starGirlHands">
                                                <img alt="" src={StarGirlHands}/>
                                            </div>
                                            <div className="starGirlLeg">
                                                <img alt="" src={StarGirlLeg}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shootingStarContainer">
                                        <div className="innerShootingStars">
                                            { RandomStarInfo.map((shootingStar)=>
                                                <div className="shootingStar" key={shootingStar.id} 
                                                    style={{
                                                        left:shootingStar.starLeft,
                                                        top:shootingStar.starTop,
                                                        animation: `shootingStarAnim 3s linear ${shootingStar.delay}s infinite normal none running`
                                                   
                                                        
                                                    }}                           
                                                />
                                            
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        { !removeSceneExitFirst && <img alt="" src={GameBg} className={`staticGameBg ${additionalClassCont}`} /> }
                        <div className="GameSchoolGirl">
                            <div className= "innerSchoolGirl">
                                <div className="schoolGirlBody">
                                    <img alt="" src={sGirlBody}/>
                                </div>
                                <div className="schoolGirlEyeLeft">
                                    <img alt="" src={sGirlEye}/>
                                </div>
                                <div className="schoolGirlEyeRight">
                                    <img alt="" src={sGirlEye}/>
                                </div>
                                <div className="schoolGirlHandLeft">
                                    <img alt="" src={sGirlHandLeft}/>
                                </div>
                                <div className="schoolGirlHandRight">
                                    <img alt="" src={sGirlHandRight}/>
                                </div>
                                <div className="schoolGirlHead">
                                    <img alt="" src={sGirlHead}/>
                                </div>
                                <div className="schoolGirlLeftLeg">
                                    <img alt="" src={sGirlLegLeft}/>
                                </div>
                                <div className="schoolGirlRightLeg">
                                    <img alt="" src={sGirlLegRight}/>
                                </div>
                            
                               
                            </div>

                        </div>
                        <div className={`bikeManGame ${grandpaExit}`}>
                            <div className="innerBikeman">
                                <div className="BikeBackHandle">
                                    <img alt="" src ={backHandle}/>
                                </div>
                                <div className="BikeEngine">
                                    <img alt="" src ={engine}/>
                                </div>
                                <div className="BikeEngineFrame">
                                    <img alt="" src ={engineFrame}/>
                                </div>
                                <div className="BikeFrontHandle">
                                    <img alt="" src ={frontHandle}/>
                                </div>
                                <div className="BikeFuelTank">
                                    <img alt="" src ={fuelTank}/>
                                </div>
                                <div className="BikeHandle">
                                    <img alt="" src ={handle}/>
                                </div>
                                <div className="BikeHeadLight">
                                    <img alt="" src ={headLight}/>
                                </div>
                                <div className="BikePipe">
                                    <img alt="" src ={pipe}/>
                                </div>
                                <div className="BikeSeat">
                                    <img alt="" src ={seat}/>
                                </div>
                                <div className="BikeFwheelInner">
                                    <img alt="" src ={wheelInner}/>
                                </div>
                                <div className="BikeFwheelOuter">
                                    <img alt="" src ={wheelOuter}/>
                                </div>
                                <div className="BikeBwheelInner">
                                    <img alt="" src ={wheelInner}/>
                                </div>
                                <div className="BikeBwheelOuter">
                                    <img alt="" src ={wheelOuter}/>
                                </div>
                                <div className="GameBikemanLeg">
                                    <img alt="" src ={bikeManLeg}/>
                                </div>
                                <div className="GameBikemanBody">
                                    <img alt="" src ={bikeManBody}/>
                                </div>
                                <div className="GameBikemanHandB">
                                    <img alt="" src ={bikeManHandB}/>
                                </div>
                                <div className="GameBikemanHandF">
                                    <img alt="" src ={bikeManHandF}/>
                                </div>
                                <div className="GameBikemanHead">
                                    <img alt="" src ={bikeManHead}/>
                                </div>
                                <div className="GameBikeSmoke">
                                    <img alt="" src ={bikeSmoke}/>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
               {!secondSceneExit &&  <div className={`bird-container bird-container--one  ${additionalSkyClass === 'SkyMovingOut' && 'SkyMovingOut'}`}><div className="bird bird--one"></div></div> }
                {!secondSceneExit &&
                    <div className={`mainSkyContainer  ${additionalSkyClass}`}>
                        <div className="innerCloudContainer">
                            <div className={`GameSky GameSkySC`}/>
                            <div className={`GameSky GameSkySCS`}/>
                            <div className='GameSky GameSkyBC' />
                            
                        </div>
                        
                    </div>
                }
                { bubbleTextDisplay.length>0 &&
                <div className={`chatbubbleGame ${bubbleOut}`}>
                    <p className="m-0">
                       {bubbleTextDisplay}    
                    </p>
                </div>
                }

               <div className="GameHotAirBalloon" style={{ left: `${balloonInfo.position}px`}}>
                   <div className="innerHotAirBalloon">
                       <div className="HABalloon">
                           <img alt="" src={HABalloon}/>
                       </div>
                       <div className="HABalloonCasket">
                           <img alt="" src={HABalloonCasket}/>
                       </div>
                       <div className="HABalloonWire">
                           <img alt="" src={HABalloonWire}/>
                       </div>

                   </div>
               </div>
               {isMobile &&
                    <div className="moveButton d-flex justify-content-center align-items-center" onTouchStart={()=>gameHandler()} onTouchEnd={()=>handleRemoveHold()}>
                        <FaAngleRight/>
                    </div>
                }   
               {startRickRoll &&
                    <div className= "RickRollContainer">
                        <div className="innerRickRollContainer d-flex flex-column justify-content-center align-items-center">
                            <h1>Someone Got <br/>Rick Rolled !!</h1>
                            <img alt="" src={RickRollGif} className='rrGif1 rrGif'/>
                            <img alt="" src={RickRollGif2} className='rrGif2 rrGif'/>
                            <img alt="" src={RickRollGif3} className='rrGif3 rrGif'/>

                        </div>
                    </div>
                }
                <div className="player">
                    <div className={`innerPlayer ${playerState}`}>
                        <div className="pHead">
                            <img alt="" src={Head}/>
                        </div>
                        <div className="pBody">
                            <img alt="" src={Body}/>
                        </div>
                        <div className="pHfBot">
                            <img alt="" src={HandBottom}/>
                        </div>
                        <div className="pHfTop">
                            <img alt="" src={HandTop}/>
                        </div>
                        <div className="pHbBot">
                            <img alt="" src={HandBottom}/>
                        </div>
                        <div className="pHbTop">
                            <img alt="" src={HandTop}/>
                        </div>
                        <div className="pFLeg">
                            <img alt="" src={FrontLeg}/>
                        </div>
                        <div className="pBLeg">
                            <img alt="" src={BackLeg}/>
                        </div>
                        

                    </div>

                </div>
            </div>
            
            <audio id = "GameAudio">
                <source src={GameBgAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
     );
}
 
export default GameWindow;