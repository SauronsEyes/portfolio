import { FaSnapchat, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    
    return ( 
        <div className="Footer">
            <div className="innerFooter">
                <a className="snapicon" href="https://www.snapchat.com/add/sudeshbhuju2019" target="_blank" rel="noreferrer"><FaSnapchat/></a>
                <a className="fbicon" href="https://www.facebook.com/thegreengoblin343/" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a className="instaicon" href="https://www.instagram.com/sudesh.aka.sauronseye/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                <a className="giticon" href="https://github.com/SauronsEyes" target="_blank" rel="noreferrer"><FaGithub/></a>
                <a className="twiticon" href="https://twitter.com/sudesh_bhuju" target="_blank" rel="noreferrer"><FaTwitter/></a>

            </div>
            

        </div>
     );
}
 
export default Footer;