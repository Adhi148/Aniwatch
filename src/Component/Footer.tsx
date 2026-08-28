import { Box } from "@mui/material";
import Reddit from "@mui/icons-material/Reddit";
import { Telegram } from "@mui/icons-material";
import Twitter from "@mui/icons-material/Twitter";
import "../CSS/Footer.css"

const Footer = () => {
    const arr = ['All' , '#' , '0-9', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    return (
        <>
        <div className="footer_cont2">
            <div className="footer2_social_media">
                <div className="footer2_social">
                    <div className="social2_media_main">
                        <div className="social2_media" style={{ backgroundColor: "#6f85d5" }}><i className="fa-brands fa-discord"></i></div>
                        <div className="social2_media" style={{ backgroundColor: "#08c" }}><Telegram /></div>
                        <div className="social2_media" style={{ backgroundColor: "#ff3c1f" }}><Reddit /></div>
                        <div className="social2_media" style={{ backgroundColor: "#1d9bf0" }}><Twitter /></div>
                    </div>
                </div>
                    <div className="final_div">
                        <div className="footer-links">
                            <ul className="ulclearr">
                                <li><a href="/terms" title="Terms of service">Terms of service</a></li>
                                <li><a href="/dmca" title="DMCA">DMCA</a></li>
                                <li><a href="/contact" title="Contact">Contact</a></li>
                                <li><a href="/app-download" title="Aniwatch App">Aniwatch App</a></li>
                            </ul>
                        </div>
                        <div className="about-text textt">
                            AniWatch does not store any files on our server, we only linked to the media which is hosted on 3rd party
                            services.
                        </div>
                        <p className="copyright coprrigh">© AniWatch.to. All rights reserved.</p>
                    </div>
            </div>
        </div>
        <div className="footer_container">
            <div className="join_now2">
                <Box className="Compant_logo company_logo2">
                    <img src={"/images/logo.png"} alt="" />
                </Box>
                <div className="join_now2_content">
                    <Box className="words">
                        <p>
                            <span className="bold1">Join</span> <br /> <span className="bold2">now</span>
                        </p>
                    </Box>
                    <div className="social2_media_main">
                        <div className="social2_media" style={{ backgroundColor: "#6f85d5" }}><i className="fa-brands fa-discord"></i></div>
                        <div className="social2_media" style={{ backgroundColor: "#08c" }}><Telegram /></div>
                        <div className="social2_media" style={{ backgroundColor: "#ff3c1f" }}><Reddit /></div>
                        <div className="social2_media" style={{ backgroundColor: "#1d9bf0" }}><Twitter /></div>
                    </div>
                </div>
            </div> 
            <div className="filter_footer">
                <div className="filter_footer_content">
                    <Box className="Compant_logo company_logo2 Compant_logos">
                        <h5>A-Z LIST</h5>
                    </Box>
                    <div className="join_now2_content social2_media_main2">
                        <p>Searching anime order by alphabet name A to Z.</p>
                    </div>
                </div>
                <div className="footer_a-z">
                    {
                        arr.map((ele : string , index : number)=>{
                            return(
                                <div key={index} className="a-z">
                                    <a href="">{ele}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="final_div">
                <div className="footer-links">
                    <ul className="ulclearr">
                        <li><a href="/terms" title="Terms of service">Terms of service</a></li>
                        <li><a href="/dmca" title="DMCA">DMCA</a></li>
                        <li><a href="/contact" title="Contact">Contact</a></li>
                        <li><a href="/app-download" title="Aniwatch App">Aniwatch App</a></li>
                    </ul>
                </div>
                <div className="about-text">
                    AniWatch does not store any files on our server, we only linked to the media which is hosted on 3rd party
                    services.
                </div>
                <p className="copyright">© AniWatch.to. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer