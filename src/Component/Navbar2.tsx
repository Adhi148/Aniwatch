import { Button } from "@mui/material"
import "../CSS/Navbar2.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { Reddit } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';

const Navbar2 = () => {
    return (
        <>
            <div className="navbar2_container">
                <div className="anime_move">
                    <img src={"/images/dance_img.gif"} alt="" />
                </div>
                <div className="share_words">
                    <div className="share_aniwatch1">Share AniWatch</div>
                    <div className="share_aniwatch2">to your friends</div>
                </div>
                <div className="toatl_share">
                    <span className="share_big">60.3K</span>
                    <span className="share_small">Shares</span>
                </div>
                <div className="navbar2_social-btn">
                    <Button className="navbar2_telegram" variant="contained" startIcon={<TelegramIcon/>}>Share</Button>
                    <Button className="navbar2_twitter" variant="contained" startIcon={<XIcon/>}>Tweet</Button>
                    <Button className="navbar2_facebook" variant="contained" startIcon={<i className="fa-brands fa-facebook-f"></i>}>Share</Button>
                    <Button className="navbar2_raddit" variant="contained" startIcon={<Reddit />}>Share</Button>
                    <Button className="navbar2_share" variant="contained"><ShareIcon/></Button>
                </div>
            </div>
        </>
    )
}

export default Navbar2