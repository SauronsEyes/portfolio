import pyRoadMap from '../images/project/python/pyRoadmap/map.jpg';
import pyRoadRmap from '../images/project/python/pyRoadmap/roadmap.jpg';
import pyRoadBW from '../images/project/python/pyRoadmap/bw.jpg';
import pyRoadSegment from '../images/project/python/pyRoadmap/segment.jpg';


import covidVid from '../images/project/python/covidSim/covidVid.mp4';
import covidGraph from '../images/project/python/covidSim/graph.png';
import {FaGithub, FaComment} from 'react-icons/fa';
import { useState } from 'react';

import simpClassifier from '../images/project/python/simpson/apu.jpg';

import spyFlow from '../images/project/python/pySpy/spyFlow.jpg';
import spyFtp from '../images/project/python/pySpy/ftp.jpg';
import spySS from '../images/project/python/pySpy/ss1.jpg';
import spySS2 from '../images/project/python/pySpy/ss2.jpg';

import AntVid from '../images/project/python/antColony/comp.mp4';
import AntSS from '../images/project/python/antColony/ss.jpg';

const PythonPortfolioItems = () => {
    const [pyProIndex,setPyProIndex] = useState(0);
    const [addPyProClass,setAddPyProClass] = useState('');
    const handlePyProjectChange = (uindex) =>{
        if(uindex!==pyProIndex){
            setAddPyProClass('exitPyPro');
            setTimeout(()=>{
                setAddPyProClass('');
                setPyProIndex(uindex);
            },1000);
        }
        
    }
    return ( 
        <div className="PyPfItemContainer">
            <div className="ppfProjectList d-flex align-items-center justify-content-end flex-wrap sticky-top">
                <div className="ppfProject" onClick={()=>handlePyProjectChange(0)}>
                    <a rel="noreferrer"  className={`linkTopPyPro ${pyProIndex===0 && 'active'}`}>PySpy</a>
                    <span className="ghostTitle">PySpy</span>
                </div>
                <div className="ppfProject" onClick={()=>handlePyProjectChange(1)}>
                    <a rel="noreferrer" className={`linkTopPyPro ${pyProIndex===1 && 'active'}`}>PyRoadmap</a>
                    <span className="ghostTitle">PyRoadmap</span>
                </div>
                <div className="ppfProject" onClick={()=>handlePyProjectChange(2)}>
                    <a rel="noreferrer"  className={`linkTopPyPro ${pyProIndex===2 && 'active'}`}>CovidSim</a>
                    <span className="ghostTitle">CovidSim</span>
                </div>
                
                <div className="ppfProject" onClick={()=>handlePyProjectChange(3)}>
                    <a rel="noreferrer"  className={`linkTopPyPro ${pyProIndex===3 && 'active'}`}>Simpsons Classifier</a>
                    <span className="ghostTitle">Simpsons Classifier</span>
                </div>
                
                <div className="ppfProject" onClick={()=>handlePyProjectChange(4)}>
                    <a rel="noreferrer"  className={`linkTopPyPro ${pyProIndex===4 && 'active'}`}>Ant Colony Sim</a>
                    <span className="ghostTitle">Ant Colony Sim</span>
                </div>
            </div>
            <div className="innerPyPfItems">
                {pyProIndex === 1 &&
                    <div className={`ppfItem d-flex justify-content-center ${addPyProClass}`}>
                        
                        <div className="imagePyPro">
                            <img src={pyRoadMap} alt="Original Map"/>
                            <img src={pyRoadBW} alt="Black and White Map"/>
                            <img src={pyRoadSegment} alt="Road Segments Map"/>
                            <img src={pyRoadRmap} alt="Final Sketch Map"/>
                            
                        </div>
                        <div className="descPyPro">
                            <h2>1. PyRoadmap</h2>
                            <p>
                                PyRoadmap is a python script that generates a road map based on a 2d image. It takes satellite map images as input and generates a sketch map after calculations. We can split the script into three parts : 
                                
                            </p>
                            <ol className="list-unstyled">
                                <li>
                                    <b>1. &nbsp; Image Manipulation</b> - This involves loading the image then adjusting the image for better calculation.
                                </li>
                                <li>
                                    <b>2. &nbsp;Pixel Crawling</b> - This involves crawling through the image matrix to identify road segments.
                                </li>
                                <li>
                                    <b>3. &nbsp;Rendering</b> - The final part involves rendering a 2D roadmap image based on the segment identification.
                                </li>
                                </ol>
                                <span className="text-white me-2">Libraries Used:</span> cv2, pyGame, numPy
                            <h4>
                                How it works.
                            </h4>
                            <p>
                            Firstly, it loads images using OpenCV (cv2). The loaded image is then down-sized for faster calculations. Once the image has been down-sized, the script makes some brightness and contrast adjustments on the image, separating the environment from the road. Then the  RGB image is converted to a B&W image. As a result, the image NumPy array has 1s and 0s values instead of RGB values to denote dark and bright pixels. The second image shows the output of the above steps. Then a crawler function is deployed to detect a continuous path of dark pixels referred to as segments. The crawler function stores the pixel's index in an array to avoid rechecking the pixels. Rechecking pixels can create reassociating of pixels. It also slows down the overall performance. Briefly, Pixels are only checked once for a continuous path. The third image shows the formation of segments. After the identification of all the road segments, pyRoadmap generates a 2D roadmap. For this, the script draws a line connecting the starting and ending point of the road segment. Finally, the script generates the final roadmap after looping through the segment array.

                            </p>
                            <h4>Findings</h4>
                            
                                <ul className="list-unstyled">
                                    <li>
                                        1. &nbsp;The better way for segment identification would be to use a matrix to detect turns. The continuous path method works well only if the road is less complex and does not have too many connected turns. Also, because roads cannot be fully isolated from the environment using only image manipulation, the crawler confuses some environmental aspects such as houses, trees as part of the segment. As a result, scratchy patterns can be seen all over the rendered roadmap.
                                    </li>
                                    <li>
                                        2. &nbsp;If the identification of segments has higher accuracy, linear regression would be a better approach to generate the final roadmap.
                                    </li>
                                    <li>
                                        3. &nbsp;Just use ML. Life is easier that way.
                                    </li>
                                </ul>
                            <a rel="noreferrer"  href = "https://github.com/SauronsEyes/pyRoadSegments" target="_blank">
                                <div className="d-flex align-items-center">
                                    <FaGithub className="me-2"/> Github Repos
                                </div>
                                
                            </a>   
                        </div>
                        

                    </div>
                }
                { pyProIndex===2 &&
                    <div className={`ppfItem d-flex justify-content-center ${addPyProClass}`}>
                        <div className="imagePyPro">
                            <video autoPlay muted loop>
                                <source src={covidVid} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <img src={covidGraph} alt="Graph of Covid Rate Transmission"/>
                        </div>
                        <div className="descPyPro">
                            <h2>1. CovidSim</h2>
                            <p>     
                                Covid Sim is an epidemic spread simulation. The script demonstrates how covid spreads from person to person on free contact. The python script starts with a patient zero and starts spreading exponentially. The simulation also takes wearing of masks and social distancing into account based on <a rel="noreferrer"  href="https://www.westsideseattle.com/sites/default/files/images/%5Bdomain-url%5D/%5Bnode-yyyy%5D/%5Bnode-mm%5D/face_mask_graphic.jpg" target="_blank">[Link]</a> 
                            </p>
                            <span className="text-white me-2">Libraries Used:</span> pyGame, Matplotlib, Random
                            <h4>
                                The Logic.
                            </h4>
                            <p>
                                Firstly a patient zero is generated with some static values. Then people dictionary is randomly generated and stored in a dictionary array. The dictionary has the following values: x-position, y-position, affected status, and mask status. When the simulation begins, every people including the patient zero starts moving randomly. Then collision is calculated using a square collider to detect contact between unaffected people and affected people. I have also added a code for circular collider on the script. When a collision is detected, the healthy person doesn't get infected instantly. Instead, The people have certain chances based on mask status and distance to not get affected. The chances of getting infected are based on the link in the introductory description. The simulation moves forward until all the patients are infected. Finally, Matplotlib is used to visualize the rate of transmission in graphical form.
                            </p>
                            <a rel="noreferrer"  href = "https://github.com/SauronsEyes/Simulations/blob/main/epidemic_spread_simulation.py" target="_blank">
                                <div className="d-flex align-items-center">
                                    <FaGithub className="me-2"/> Github Repos
                                </div>
                                
                            </a>   
                        </div>
                        

                    </div>
                } 
                { pyProIndex===3 &&
                    <div className={`ppfItem d-flex justify-content-center ${addPyProClass}`}>
                        <div className="imagePyPro">
                            
                            <img src={simpClassifier} alt="Apu from Simpsons Classification"/>
                        </div>
                        <div className="descPyPro">
                            <h2>1. Simpsons Classifier</h2>
                            <p> 
                                Simpsons Classifier is a py-script that identifies Simpsons character. The ML model is trained using a dataset from <a rel="noreferrer"  href="https://www.kaggle.com/alexattia/the-simpsons-characters-dataset" target="_blank">Kaggle.</a> The dataset is fed into a Convolutional Neural Network that extracts features of different characters from the dataset. After training completion, it takes an image input and returns the Simpsons character name.    
                            </p>
                            <span className="text-white me-2">Libraries Used:</span> Tensorflow, Matplotlib, NumPy, PIL, skimage, csv
                            <br/><span className="text-white me-2">Model Accuracy:</span> 67.98%
                            
                        </div>
                        

                    </div>
                }    
                { pyProIndex===0 &&
                    <div className={`ppfItem d-flex justify-content-center ${addPyProClass}`}>
                        <div className="imagePyPro">
                            
                            <img src={spyFlow} alt="Data Transmission in pySpy"/>
                            <img src={spyFtp} alt="File Structure in FTP server"/>
                            <img src={spySS} alt="Screenshot demonstrating victim's PC"/>
                            <img src={spySS2} alt="Screenshot demonstrating keyboard tracking"/>
                        </div>
                        <div className="descPyPro">
                            <h2>PySpy</h2>
                            <p>  
                            PySpy is a python script bundle that can track keyboard input, webcam, and the screen of the victim's computer. Other features include executing remote commands and grabbing files from the victim's computer. PySpy has two executables:   
                            </p>
                            <ol className="list-unstyled">
                                <li>
                                    <b>1. &nbsp; Deployment Script</b> - This script is deployed on the victim's computer and communicates with the host through an FTP server. This script allows the host to access the data from the victim's computer remotely.
                                </li>
                                <li>
                                    <b>2. &nbsp; Access Script</b> - This script is the host script that can extract data from the FTP server. It was created for easy data access from the FTP server and sending remote commands.
                                </li>
                            </ol>
                            <span className="text-white me-2">Libraries Used:</span> ftplib, os, threading, getpass, datetime, uuid, json, cv2, pynput, mss
                            <h4>
                                The Deployment.
                            </h4>
                            <p>
                            On the first deployment, the script generates a unique id by combining UUID and time of deployment. This unique id is used t identify the victim's computer. Then a JSON file is created and stored inside the victim's computer. After that, the script replicates itself and adds itself to the windows startup. Then it registers itself in the FTP by creating a unique folder on the FTP server based on the generated id. 
                            </p>
                            <h4>
                                The Operation.
                            </h4>
                            <p>
                                Before start tracking, the script firstly checks for commands from the host through a user_status.json file. The user_status.json file contains information regarding what commands to perform and what information to track. This function is called every 20 seconds. Once the remote script gets a command from the host, it creates a thread and starts tracking and uploading data to the FTP server.
                            </p>
                            <h4>The Access.</h4>
                            <p>
                                The data is accessed using the access.py script. The access.py script communicates with the victim's pc using  JSON files on the FTP server. The Access.py sends the command by making changes to the JSON file on the FTP server. The Access.py also accesses other JSON files to extract the data uploaded by the deployment script. The Access Script can also check the online status of every victim's computer.
                            </p>
                            <p>
                                I have not created a Github Repos for PySpy, considering the possible misuse. But Hey, You can still request me for the source code ;)
                            </p>

                            <a rel="noreferrer"  href = "https://www.facebook.com/thegreengoblin343/" target="_blank">
                                <div className="d-flex align-items-center">
                                    <FaComment className="me-2"/> Request Source Code
                                </div>
                                
                            </a>   
                        </div>
                        

                    </div>
                } 
                { pyProIndex===4 &&
                    <div className={`ppfItem d-flex justify-content-center ${addPyProClass}`}>
                        <div className="imagePyPro">
                            <video autoPlay muted loop>
                                <source src={AntVid} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <img src={AntSS} alt="Ant Colony Sim Map"/>
                        </div>
                        <div className="descPyPro">
                            <h2>1. Ant Colony Simulation</h2>
                            <p>  
                            Ant Colony Simulation is what it says. It tries to replicate the food-gathering behavior of an ant colony. The simulation begins with ants moving in a random direction to find a food source. When an ant finds a food source, it communicates with other ants who come in contact. This communicative behavior leads to the formation of ant trails.
                            </p>
                            <span className="text-white me-2">Libraries Used:</span> pyGame, Random
                            <h4>
                               Ants Behavior.
                            </h4>
                            <ul className="list-unstyled">
                                <li>1. Ants move in a random direction to find a food source and change its direction randomly. </li>
                                <li>2. Ants can detect nearby food sources. Ants close to the food source will move towards it.</li>
                                <li>3. Ants can remember their path. When it finds a food source, it will follow its original path back to base. </li>
                                <li>4. When an ant that has already found a food source comes in contact with another ant, it shares its path with the other ant.</li>
                                <li>5. Ants can detect obstacles and will move away from them.</li>
                            </ul>
                            <a rel="noreferrer"  href = "https://github.com/SauronsEyes/Simulations/blob/main/ant_colony_simulation.py" target="_blank">
                                <div className="d-flex align-items-center">
                                    <FaGithub className="me-2"/> Github Repos
                                </div>
                                
                            </a>   
                        </div>
                        

                    </div>
                } 

            </div>
        </div>
     );
}
 
export default PythonPortfolioItems;