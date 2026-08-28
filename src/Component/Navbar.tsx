import { Box, Button } from "@mui/material";
import "../CSS/Navbar.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div>
            <Box className="Navbar_container">
                <Box className="Navbar_subcontainer">
                    {/* Left NavBar */}
                    <Box className="left_nav">
                        <Box className="Menu">
                            <button className=" btn-primary custom-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fa-solid fa-bars"></i></button>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="false" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <Button className="sidebarcommu"><i className="fa-solid fa-comments"></i> Community</Button>
                                    <button type="button" id="custom-close-btn" data-bs-dismiss="offcanvas"><i className="fa-solid fa-xmark"></i></button>
                                </div>
                                <div className="offcanvas-body">
                                    <NavLink to={`/home`} className={"li_navlink"}>Home</NavLink>
                                    <NavLink to={`/Tvpage/${"Subbed"}`} className={"li_navlink"}>Subbed Anime</NavLink>
                                    <NavLink to={`/Tvpage/${"Dubbed"}`} className={"li_navlink"}>Dubbed Anime</NavLink>
                                    <NavLink to={`/Tvpage/${"Most Popular"}`} className={"li_navlink"}>Most Popular</NavLink>
                                    <NavLink to={`/Tvpage/${"Movies"}`} className={"li_navlink"}>Movies</NavLink>
                                    <NavLink to={`/Tvpage/${"TV Series"}`} className={"li_navlink"}>TV Series</NavLink>
                                    <NavLink to={`/Tvpage/${"OVA'S"}`} className={"li_navlink"}>OVA'S</NavLink>
                                    <NavLink to={`/Tvpage/${"ONA'S"}`} className={"li_navlink"}>ONA'S</NavLink>
                                    <NavLink to={`/Tvpage/${"Special"}`} className={"li_navlink"}>Special</NavLink>
                                    <NavLink to={`/Tvpage/${"Events"}`} className={"li_navlink"}>Events</NavLink>
                                    <NavLink to={`/Tvpage/${"Aniwatch App"}`} className={"li_navlink"}>Aniwatch App</NavLink>
                                    <NavLink to={`/Tvpage/${""}`} className={"li_navlink"}>Genre</NavLink>
                                </div>
                            </div>
                        </Box>
                        <Box className="Compant_logo">
                            <img src={"/images/logo.png"} alt="" />
                        </Box>
                        <Box className="join_now">
                            <Box className="words">
                                <p>
                                    <span className="bold1">Join</span> <br /> <span className="bold2">now</span>
                                </p>
                            </Box>
                            <Box className="social_media1">
                                <Box className="social_media_logo discord">
                                    <i className="fa-brands fa-discord"></i>
                                </Box>
                                <Box className="social_media_logo telegram">
                                    <TelegramIcon className="social_media_logos"/>
                                </Box>
                                <Box className="social_media_logo reddit">
                                    <RedditIcon className="social_media_logos " />
                                </Box>
                                <Box className="social_media_logo twitter">
                                    <TwitterIcon className="social_media_logos" />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="Ani_watch">
                            <Box className="watch2gether">
                                <Box className="watch2gether_img">
                                    <img src={"/images/live.svg"} alt="" />
                                </Box>
                                <Box>Watch2gether</Box>
                            </Box>
                            <Box className="random">
                                <Box className="watch2gether_img">
                                    <i className="fa-solid fa-shuffle"></i>
                                </Box>
                                <Box>Random</Box>
                            </Box>
                            <Box className="aniname">
                                <Box className="watch2gether_img">
                                    <span className="en-lan" >EN</span>
                                    <span className="jp-lan" >JP</span>
                                </Box>
                                <Box>Anime Name</Box>
                            </Box>
                            <Box className="community">
                                <Box className="watch2gether_img">
                                    <i className="fa-solid fa-comments"></i>
                                </Box>
                                <Box>Community</Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Right NavBar */}
                    <Box className="right_nav">
                        <Box className="search_icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Box>
                        <Box className="login_btn">
                            <Button variant="contained" className="btn__login">Login</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Navbar