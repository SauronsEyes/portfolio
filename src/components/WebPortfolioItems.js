import { useState } from 'react';

//Mockups
import LaptopMockup from '../images/project/web/laptopTrans.png';
import MobileMockup from '../images/project/web/mobileTrans.png';

//Icons
import {FaMobileAlt,FaDesktop} from 'react-icons/fa';
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs';


//Desktop Sites
import AllTradePC from '../images/project/web/desktop/alltrade.jpg';
import ChukiPC from '../images/project/web/desktop/chuki.jpg';
import GadertechPC from '../images/project/web/desktop/gadertech.jpg'
import GospelPC from '../images/project/web/desktop/gospel.jpg';
import KoraPC from '../images/project/web/desktop/kora.jpg';
import MizlyricsPC from '../images/project/web/desktop/mizlyrics.jpg';
import ZeromaxPC from '../images/project/web/desktop/zeromax.jpg';
import HotelKPC from '../images/project/web/desktop/hotelk.jpg';
import AlltempPC from '../images/project/web/desktop/alltemp.jpg';
import CarrySmartPC from '../images/project/web/desktop/carrysmart.jpg';
import ElitePC from '../images/project/web/desktop/elite.jpg';
import FullCrapPC from '../images/project/web/desktop/fullcrap.jpg';
import GfixPC from '../images/project/web/desktop/gfix.jpg';
import HaulingPC from '../images/project/web/desktop/haullingm.jpg';
import QualityPC from '../images/project/web/desktop/quality.jpg';



//Mobile Sites
import AllTradeMob from '../images/project/web/mobile/alltrade.jpg';
import ChukiMob from '../images/project/web/mobile/chuki.jpg';
import GadertechMob from '../images/project/web/mobile/gadertech.jpg';
import GospelMob from '../images/project/web/mobile/gospel.jpg';
import KoraMob from '../images/project/web/mobile/kora.jpg';
import MizlyricsMob from '../images/project/web/mobile/mizlyrics.jpg';
import ZeromaxMob from '../images/project/web/mobile/zeromax.jpg';
import HotelKMob from '../images/project/web/mobile/hotelk.jpg';
import AlltempMob from '../images/project/web/mobile/alltemp.jpg';
import CarrySmartMob from '../images/project/web/mobile/carrysmart.jpg';
import EliteMob from '../images/project/web/mobile/elite.jpg';
import FullcrapMob from '../images/project/web/mobile/fullcrap.jpg';
import GfixMob from '../images/project/web/mobile/gfix.jpg';
import HaulingMob from '../images/project/web/mobile/haullingm.jpg';
import QualityMob from '../images/project/web/mobile/quality.jpg';

var portFolioWebsites = [
    {
        siteTitle: 'All Trade',
        siteDesc: 'All Trades Home Improvement is a handyman and home improvement company based in Brooklyn, New York. The site has Home, About us, Services, Gallery, and Contact Section. While approaching this particular site, the client wanted the website to have basic but enough information on the Landing Page so that the viewers could get the gist of services that the Business provided without having to navigate to other pages. So the home has several sub-sections highlighting basic business information and services. The site also has a basic booking form where viewers can request a quote for services. Overall, this site has a blend of the modern and traditional approach to web designing, making it an effective way to reach out to viewers of all age groups.',
        desktopSitePic : AllTradePC,
        mobileSitePic : AllTradeMob,
        siteLink :'https://alltradeshomeimprovement.net/',
        siteColors: ['#FFFFFF','#1D1D59','#BD0B0F']
    },
    {
        siteTitle: 'Chukis Grill',
        siteDesc: "Chukis Grill is a Hawaiian Restaurant based in Portland, Oregon. This site has red and yellow accent colors. It has a composition of glitchy bold headings and patterned background to give it a funky Hawaiian vibe. The site has Home, Menu, Catering, Reviews, Gallery, About Us, and Contact Sections. The Landing page is further divided into sub-sections to highlight the Restaurants Features, Main Dishes, and Recent social media posts. This site also has an Order Online feature linked to the client's ordering portal on DoorDash.",
        desktopSitePic : ChukiPC,
        mobileSitePic : ChukiMob,
        siteLink :'https://chukisgrill.com/',
        siteColors: ['#FFFFFF','#C52531','#1F1F1F','#FDB043']
    },
    {
        siteTitle: 'Gadertech Electric',
        siteDesc: "Gadertech is a business providing electrical services in Illinois, USA. Gadertech's site has a navy blue and orange palette based on Gadertech's logo. The color palette is well-suited to the business as blue represents electricity and orange represents heat. This website has all the essentials of a business website. Furthermore, this website has a covid-19 updates section to inform viewers about the current business policies during the pandemic.",
        desktopSitePic : GadertechPC,
        mobileSitePic : GadertechMob,
        siteLink :'https://northamericanwebllc.com/demo/gadertech2/',
        siteColors: ['#FFFFFF','#003E64','#F58A1E']
    },
    {
        siteTitle: 'Gospel of St. Luke',
        siteDesc: "Gospel of St.Luke is a church located in Bronx, New York. This site has a minimalistic approach and constitutes mainly two colors - white and chill blue. As a result, the web experience is engaging yet not too distractive for the viewers. Gospel of St. Luke's site has all the information regarding the church - Origins, Ministries, etc. Furthermore, it includes recent sermons, future and past programs conducted by the church. This feature helps the church keep in touch with its viewers.",
        desktopSitePic : GospelPC,
        mobileSitePic : GospelMob,
        siteLink :'https://nawebaus.com/demo/gospel3/',
        siteColors: ['#FFFFFF','#0D81A9']
    },
    {
        siteTitle: 'Kora Nitchell',
        siteDesc: "Kora Nichelle is a solo handcraft artist from Maryland. Kora's website captures the essence of her love for her work. The website has a torn-paper effect that visualizes her artistic nature. Kora's website has several pages with her introduction and product listing. Overall, the website fits Kora's approach towards her work and customers.",
        desktopSitePic : KoraPC,
        mobileSitePic : KoraMob,
        siteLink :'https://northamericanwebllc.com/demo/kora2/',
        siteColors: ['#FFFFFF','#6A4D45','#FC5A6D']
    },
    {
        siteTitle: 'Mizlyrics Creations',
        siteDesc: "Mizlyrics Creation is a small clothing brand based in Kansas City, Missouri. Mizlyric's website has a fading purple gradient design. The gradient approach makes the content of the website striking and more noticeable. Making the colors more noticeable helps in the branding of the company. The website has a lot of animations, added as per the client's request. The client had a particular challenge - They were unsure of what items to display upfront. So to tackle this problem, I created a new section on the landing page. It contained hand-picked items. Consequently, Mizlyrics was able to highlight its best products.",
        desktopSitePic : MizlyricsPC,
        mobileSitePic : MizlyricsMob,
        siteLink :'https://northamericanwebllc.com/demo/mizlyrics/',
        siteColors: ['#FFFFFF','#802AFD','#99D5DD']
    },
    {
        siteTitle: 'Zeromax Movers',
        siteDesc: "Zeromax Movers is a moving business based in Brooklyn, New York. The website has a modern interface with a multi-page quote form. This website also involved working with content writers and software developers. The major highlight of this website is the Landing page which contains a detailed quote form and other business information. The quote form allows users to explain in detail their requirements and be specific about the services.",
        desktopSitePic : ZeromaxPC,
        mobileSitePic : ZeromaxMob,
        siteLink :'https://zeromaxmovers.com/',
        siteColors: ['#FFFFFF','#294B88','#3DAFC3']
    },
    {
        siteTitle: 'Hotel Krishna',
        siteDesc: "Hotel Krishna Kathmandu (HKK) is a 3-star hotel located at Sinamangal, Kathmandu, Nepal. HKK's website has a color palette of light black and golden. This color palette helps add royalty to the brand name HKK. The main feature of the website is the online room booking portal on the landing and reservation page. HKK's website also has other content regarding the hotel's features and photos.",
        desktopSitePic : HotelKPC,
        mobileSitePic : HotelKMob,
        siteLink :'http://hotelkrishnakathmandu.com/',
        siteColors: ['#FFFFFF','#1F1F1F','#CCAA6F']
    },
    {
        siteTitle: 'All Temperature',
        siteDesc: "All Temperature Heating & Cooling is an HVAC business based in Chicago, Illinois. All Temperature's website has three colors -  white, red, and blue. The red signifies heating, whereas the blue color signifies cooling. The site has home, about us, service, service areas, reviews, gallery, and contact section. Furthermore, the website's responsive design has a tap to call button on top. The Tap to Call feature allows the viewers to call  All Temperature.",
        desktopSitePic : AlltempPC,
        mobileSitePic : AlltempMob,
        siteLink :'https://alltemperature.net/',
        siteColors: ['#FFFFFF','#BB2D2B','#00A5EA']
    },
    {
        siteTitle: 'Carry Smart',
        siteDesc: "CarrySmart Moving is a moving business based in Ottawa, Ontario. The site has navy blue and saffron as its theme color. CarrySmart's website has no non-sense approach toward viewers meaning the website is information-rich rather than feature and transition-rich. The website provides rudimentary business information from about to business policy. This project also involved working with an SEO specialist to boost google search ranking.",
        desktopSitePic : CarrySmartPC,
        mobileSitePic :CarrySmartMob,
        siteLink :'https://carrysmartmoving.com/',
        siteColors: ['#FFFFFF','#14223C','#F8993A']
    },
    {
        siteTitle: 'Elite Professional',
        siteDesc: "Elite Professional is a home remodeling business based in Baltimore, Maryland. The website's color palette is royal blue and light red based on Elite's logo. The website has a relatively modern look for a local business which helps Elite stand out. The easy disposal of the business information on the website allows viewers to find the information about Elite Professional with ease. Moreover, the website's online booking system helps Elite reach out to its customers.",
        desktopSitePic : ElitePC,
        mobileSitePic :EliteMob,
        siteLink :'https://carrysmartmoving.com/',
        siteColors: ['#FFFFFF','#1955B7','#FE2724']
    },
    {
        siteTitle: 'Full of Crap',
        siteDesc: "Full of Crap Junk Removal (FOC) is a junk removal business based in Brooklyn, New York. The primary colors on FOC's website are green and matte black. The green color symbolizes the junk recycling the company does after the removal process. The website has a simple user interface with a quote form on the banner. The quote form was kept on the web banner so that customers can easily reach out to FOC without navigating through the website. Other contents on the website include business information, before-after works, testimonials, and FOC's features.",
        desktopSitePic : FullCrapPC,
        mobileSitePic :FullcrapMob,
        siteLink :'http://fullofcrapjunkremoval.com/',
        siteColors: ['#FFFFFF','#6AA852','#1F1F1F']
    },
    {
        siteTitle: 'Grout Fix',
        siteDesc: "Grout Fix Seattle is a grouting and tiling business based in Seattle, Washington. The website has white and blue as the primary color and yellow as secondary. Grout Fix's website has a minimalistic theme with important titles in large bold and subtopics in smaller font size. The major challenge while creating this website was including all the services that Grout Fix provided -12 service. To tackle this issue, major services were added to the front page. The remaining services were added to the services pages.",
        desktopSitePic : GfixPC,
        mobileSitePic :GfixMob,
        siteLink :'https://groutfixseattle.com/',
        siteColors: ['#FFFFFF','#0084C8','#FDAA30']
    },
    {
        siteTitle: 'Hauling Master',
        siteDesc: "Hauling Master is a hauling business based in Lanham, Maryland. The site has dark sky blue as its primary color and saffron as its accent color. The website was designed as per the client's requests. Hauling Masters website features a quote form on the banner and other business information. Furthermore, the site also has some information about the client's part-time real estate business.",
        desktopSitePic : HaulingPC,
        mobileSitePic : HaulingMob,
        siteLink :'https://haullingmaster.com/',
        siteColors: ['#FFFFFF','#136EA3','#FBB634']
    },
    {
        siteTitle: 'Quality Finishes',
        siteDesc: "Quality Finishes Painting is a painting business based in Bronx, New York. The website's color palette consists of grey, yellow and black. The major obstacle while working on this site was making the logo work with the background. It was my early days of web designing, and I was still experimenting with color. The 3D nature of the logo seemed to work with only white background, which the client did not prefer. So to make things work, the website was designed with a transparent navbar. Everything turned out pretty well from thereon. To summarize, the website has Quality Finishes's past works, services, business videos included on the website. Not my brightest of work, but still okay.",
        desktopSitePic : QualityPC,
        mobileSitePic : QualityMob,
        siteLink :'https://qualityfinishespainting.com/',
        siteColors: ['#FFFFFF','#8F8F8F','#F1A100','#000000']
    }
    
]

const WebPortfolioItems = () => {
    
    const [devicePrevMockup, setDevicePrevMockup] = useState('pcPrev');
    const [startChanging,setStartChanging] = useState('notChangingItem');
    const [currentIndex,setCurrentIndex] = useState(0);
    const handleDeviceChange = (deviceType) =>{
        if(deviceType !== devicePrevMockup){
            
            setDevicePrevMockup(deviceType);     
         
               
        }    
    }
   
    const handleChangeIndex = (change)=>{
       
        if(currentIndex+change>-1 && currentIndex+change<portFolioWebsites.length ){
            setStartChanging('startChangingItem');
            setTimeout(()=>{
                setStartChanging('notChangingItem');
                setCurrentIndex(currentIndex+change);
            },500)
           
        }
        
    }
    return ( 
        <div className="WebPortfolioItems">
           <div className={`innerWebPortfolioItems ${startChanging}`}>
               <div className = "nextButtonWpf" onClick={()=>handleChangeIndex(1)}>
                   <BsChevronRight/>
               </div>
               <div className = "prevButtonWpf" onClick={()=>handleChangeIndex(-1)}>
                   <BsChevronLeft/>
               </div>
               <h2 className ="indexReachedDisplay">{`${currentIndex+1}/${portFolioWebsites.length}`}</h2>
               <div className="wpfItem d-flex justify-content-center align-items-center">
                   <div className="mockupWeb">
                       { devicePrevMockup ==='pcPrev' &&
                        <div className="mockupContainerDesktop">
                            <div className="mockupDesktop">
                                    <img src = {LaptopMockup} alt="Laptop Mockup"/>
                            </div>
                                <div className="mockupSiteDesktop" style={{backgroundImage: `url(${portFolioWebsites[currentIndex].desktopSitePic})`}}>
                                </div>
                        </div> 
                        }
                        { devicePrevMockup === 'mobPrev' &&
                        <div className="mockupContainerMobile">
                            <div className="mockupMobile">
                                    <img src = {MobileMockup} alt="Mobile Mockup"/>
                            </div>
                                <div className="mockupSiteMobile" style={{backgroundImage: `url(${portFolioWebsites[currentIndex].mobileSitePic})`}}>
                                </div>
                        </div>
                        }
                        <div className="deviceChange d-flex justify-content-center align-items-center">
                            <div className={`d-flex justify-content-center align-items-center devIcon me-3 ${devicePrevMockup==='pcPrev' && 'active'}`} onClick={()=>handleDeviceChange('pcPrev')}>
                                <FaDesktop/>
                            </div>
                            <div className={`d-flex justify-content-center align-items-center devIcon ${devicePrevMockup==='mobPrev' && 'active'}`} onClick={()=>handleDeviceChange('mobPrev')}>
                                <FaMobileAlt/>
                            </div>
                        </div>
                        
                   </div>
                   <div className="designInfo">
                       <h1>{portFolioWebsites[currentIndex].siteTitle}.</h1>
                       <p className="mb-5">
                            {portFolioWebsites[currentIndex].siteDesc}
                       </p>
                       <div className="colorPaletteWeb d-flex mb-5 flex-wrap">
                           {portFolioWebsites[currentIndex].siteColors.map((PaletteColor)=>
                                <div className="SitePaletteItem d-flex align-items-center me-3" key={PaletteColor}>
                                    <div className="scpItemColor" style={{ background:PaletteColor}}/>
                                    {PaletteColor}
                                </div>
                           )}
                           
                       </div>
                       <a href={portFolioWebsites[currentIndex].siteLink} target="_blank" rel="noreferrer">View Live Site</a>
                      

                   </div>
               </div>
           </div>
        </div>
     );
}
 
export default WebPortfolioItems;