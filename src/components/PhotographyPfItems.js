import Shot1 from '../images/project/photography/shots/shot.jpeg';
import Shot2 from '../images/project/photography/shots/shot2.jpeg';
import Shot3 from '../images/project/photography/shots/shot3.JPG';
import Shot4 from '../images/project/photography/shots/shot4.jpg';
import Shot5 from '../images/project/photography/shots/shot5.jpg';
import Shot6 from '../images/project/photography/shots/shot6.jpeg';
import Shot7 from '../images/project/photography/shots/shot7.jpg';
import Shot8 from '../images/project/photography/shots/shot8.JPG';
import Shot9 from '../images/project/photography/shots/shot9.jpg';
import Shot10 from '../images/project/photography/shots/shot10.jpg';
import Shot11 from '../images/project/photography/shots/shot11.jpg';
import Shot12 from '../images/project/photography/shots/shot12.jpg';
import Shot13 from '../images/project/photography/shots/shot13.jpg';
import Shot14 from '../images/project/photography/shots/shot14.jpeg';
import Shot15 from '../images/project/photography/shots/shot15.jpeg';
import Shot16 from '../images/project/photography/shots/shotv1.jpg';
import Shot17 from '../images/project/photography/shots/shotv2.jpg';
import Shot18 from '../images/project/photography/shots/shotv3.jpg';
import Shot19 from '../images/project/photography/shots/shotv5.jpeg';
import Shot20 from '../images/project/photography/shots/shotv6.jpeg';
import Shot21 from '../images/project/photography/shots/shot16.jpg';

import { FaTimes } from 'react-icons/fa'
import { useState } from 'react';

const PhotographyPfItems = () => {
    const [ivOpen, setIvOpen] = useState(false);
    const [ivImage, setIvImage] = useState('');
    const openImageIV = (targetImage) => {
        setIvImage(targetImage.src)
        setIvOpen(true);
    }
    const HandleCloseIV = () => {
        setIvOpen(false);
    }
    return (

        <div className="photographyPfItems">
            <h2>My Snaps.</h2>
            {ivOpen &&
                <div className="photographyImageViewer">
                    <div className="innerImageViewer d-flex justify-content-center align-items-center">
                        <div className="imageContainerIV">
                            <img src={ivImage} />
                            <div className="CloseButtonImageViewer" onClick={() => HandleCloseIV()}>
                                <FaTimes />
                            </div>
                        </div>

                    </div>
                </div>
            }
            <div className="innerPhotographyPortfolioItems">
                <div className="row imageRowPhPf">
                    <div className="col">
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot16} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot1} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot2} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot3} className="bwimg" />

                        </div>

                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot4} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot21} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot5} className="bwimg" />

                        </div>

                    </div>
                    <div className="col">
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot6} className="bwimg" />
                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot7} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot8} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot17} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot9} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot20} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot10} className="bwimg" />

                        </div>
                    </div>
                    <div className="col">
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot11} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot12} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot19} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot13} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot14} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot15} className="bwimg" />

                        </div>
                        <div className="phItem">
                            <img onClick={(e) => openImageIV(e.target)} alt="Photography Portfolio" src={Shot18} className="bwimg" />

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default PhotographyPfItems;