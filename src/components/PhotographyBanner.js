import BannerTop from '../images/project/photography/banner/btop.png';
import BannerCenter from '../images/project/photography/banner/bcenter.png';
import BannerBottom from '../images/project/photography/banner/bbottom.png';
import { useEffect } from 'react';
import { useState } from 'react';
var paraText = "Surprised to find a photography portfolio inside a developer's portfolio? Well, It's because I appreciate arts of all sorts. Photography, in particular, is something that helps me channel my inner thoughts. If I were to define photography, it's the art of finding meaning in nothingness and visualizing it in an artistic form. This is what makes photography beautiful. Don't be shocked next time you discover me roaming around, taking pictures of things you find unimpressive.";
var charPos = 1

const PhotographyBanner = () => {
    const [offsety, setOffsetY] = useState(0);
    const [bannerIntro, setBannerIntro] = useState('');
    const [completedTyping, setCompletedTyping] = useState(false);
    useEffect(() => {
        let pIntroChangeTimeout = setTimeout(() => {
            setBannerIntro(paraText.substring(0, charPos));
            if (charPos < paraText.length) {
                charPos = charPos + 1;
            } else {
                setCompletedTyping(true)
            }
        }, 30)
        return () => {
            clearTimeout(pIntroChangeTimeout);
        }
    }, [bannerIntro])
    useEffect(() => {
        window.scrollTo(0, 0);
        const scrollHandler = (e) => {
            setOffsetY(window.scrollY / 5);

        }
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div className="photographyBanner">
            <div className="innerPhotographyBanner d-flex align-items-center">
                <div className="pBannerText d-flex flex-column justify-content-center align-items-start">

                    <h1 >Welcome,</h1>
                    <p>
                        {bannerIntro}<span className="flickeringCursor"> |</span>
                    </p>
                    {completedTyping && <a href="#">Check My Works</a>}

                </div>
                <div className="pBannerImage">
                    <img src={BannerTop} className="pBannerTop" style={{ transform: `translateX(${-offsety}px)` }} />
                    <img src={BannerCenter} className="pBannerCenter" style={{ transform: `translateX(${offsety}px)` }} />
                    <img src={BannerBottom} className="pBannerBottom" style={{ transform: `translateX(${-offsety}px)` }} />

                </div>
            </div>
        </div>
    );
}

export default PhotographyBanner;