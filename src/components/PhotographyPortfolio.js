import { useEffect } from "react";
import PhotographyBanner from "./PhotographyBanner"
import PhotographyPfItems from "./PhotographyPfItems"

const PhotographyPortfolio = () => {
    useEffect(() => {
        document.getElementById('navbarLogo').style.filter = 'saturate(0)';
        return () => {
            document.getElementById('navbarLogo').style.filter = 'saturate(1)';
        }
    }, [])
    return (
        <div className="photographyPortfolio">
            <PhotographyBanner />
            <PhotographyPfItems />
        </div>
    );
}

export default PhotographyPortfolio;