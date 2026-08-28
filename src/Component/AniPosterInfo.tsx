import { NavLink, useLocation, useParams } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import "../CSS/AniPoster.css"
import ShareIcon from '@mui/icons-material/Share';
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

const AniPosterInfo = () => {
    const{title} = useParams();
    const posterinfo = useLocation();
    const inside = posterinfo.state;
    const [data, setData] = useState<any[]>([]);
    const [data2, setData2] = useState<any[]>([]);
    const [loader, setLoader] = useState(true);
    const [hoveredPoster, setHoveredPoster] = useState<number | null>(null);

    useEffect(() => {
        axios
            .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${30}`)
            .then((response: any) => {
                setData(response.data.data);
            }).catch((error: any) => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        axios
            .get("https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=11")
            .then((response: any) => {
                setData2(response.data.data);
                setLoader(false);
            }).catch((error: any) => {
                console.log(error)
                setLoader(false);
            })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);


    return (
        <>
            <Navbar/>
            <div className="poster_container_main">
                <div className="filter_apply">
                    <div className="poster_container" style={{ backgroundImage: `linear-gradient(to top , rgba(0,0,0,0.5)0,rgba(0,0,0,0.5)60% , rgba(0,0,0,0.5)100%),url(${inside.posterImage.large})` }}></div>
                </div>
                <div className="poster_contents">
                    <div className="imgs_poster">
                        <div className="poster_contents_img">
                            <img src={inside.posterImage.large} alt="" style={{ filter: "grayscale(0)" }} />
                        </div> 
                    </div>
                    <div className="poster_contents_contents">
                        <div className="home_tv">
                            <span><b>Home</b></span> 
                            <li><b>TV</b></li>
                            <li>{inside.titles.en_jp}</li>
                        </div>
                        <div className="poster_title2">
                            <h1>{inside.titles.en_jp}</h1>
                        </div>
                        <div className="rightttitles_bot rightttitles_bots">
                            <div className="rightttitles"><i className="fa-solid fa-closed-captioning"></i>{Math.round(inside.episodeCount)}</div>
                            <div className="rightttitless"><i className="fa-solid fa-microphone"></i>{Math.round(inside.episodeLength)}</div>
                        </div>
                        <div className="aniposter_button">
                            <Button variant="contained" className="button_widths" style={{ backgroundColor:"#ffdd95" , color:"black"}} startIcon={<PlayArrowIcon/>}>Watch Now</Button>
                            <Button variant="contained" className="button_widths" style={{ backgroundColor: "white", color: "black" }} startIcon={<AddIcon/>}>Add To List</Button>
                        </div>
                        <div className="poster_discrip">
                            <p>
                                {inside.description}
                            </p>
                        </div>
                        <div className="navbar2_container navbar2_containers">
                            <div className="anime_move anime_moves">
                                <img src={"/images/dance_img.gif"} alt="" />
                            </div>
                            <div className="share_words share_wordss2">
                                <div className="share_aniwatch1 share_aniwatch12">Share AniWatch</div>
                                <div className="share_aniwatch2 share_aniwatch22">to your friends</div>
                            </div>
                            <div className="toatl_share">
                                <span className="share_big share_bigs">60.3K</span>
                                <span className="share_small">Shares</span>
                            </div>
                            <div className="navbar2_social-btn">
                                <Button className="navbar2_share" variant="contained"><ShareIcon /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aniposter_rightbox">
                    <div className="jpn_title">
                        Japanese :  {inside.titles.ja_jp}
                    </div>
                    <div className="jpn_title">
                        Synonyms :  {inside.canonicalTitle}
                    </div>
                    <div className="jpn_title">
                        StartDate :  {inside.startDate}
                    </div>
                    <div className="jpn_title">
                        EndDate:  {inside.endDate}
                    </div>
                    <div className="jpn_title">
                        Subtype :  {inside.subtype}
                    </div>
                    <div className="jpn_title">
                        Duration :  {inside.totalLength}m
                    </div>
                    <div className="jpn_title">
                        AgeRating :  {inside.ageRating}
                    </div>
                    <div className="jpn_title">
                        AverageRating :  {inside.averageRating}%
                    </div>
                    <div className="jpn_title">
                        EpisodeCount :  {inside.episodeCount}
                    </div>
                    <div className="jpn_title">
                        RatingRank :  {inside.ratingRank}
                    </div>
                    <div className="jpn_title">
                        Status :  {inside.status}
                    </div>
                </div>
            </div>
            <>
                {
                    loader ? <Loader /> :
                        <div className="banner_container">
                            <div className="banner_left">
                                <div className="banner-title">
                                    <b>Recommended for you</b>
                                </div>
                                <div className="posters">
                                    {data?.map((ele: any, index: number) => (
                                        <div key={index} className="sub_posters">
                                            <NavLink to={`/Posterinfo/${ele.attributes.titles.en_jp}`} style={{ cursor: "pointer", textDecoration: "none" }} state={ele.attributes}>
                                            <div key={index}
                                                className={`act_pic ${hoveredPoster === index ? 'hovered' : ''}`}
                                                onMouseEnter={() => setHoveredPoster(index)}
                                                onMouseLeave={() => setHoveredPoster(null)}
                                            >
                                                <span className={ele.attributes.ageRating === "R" ? "age-ristricted" : "samplesss"}>18+</span>
                                                <img
                                                    src={hoveredPoster === index ? ele.attributes.posterImage.hovered : ele.attributes.posterImage.large}
                                                    alt=""
                                                    className={`img-none ${hoveredPoster === index ? 'hidden' : ''}`}
                                                />
                                                <img
                                                    src={ele.attributes.posterImage.large}
                                                    alt=""
                                                    className={`img-block ${hoveredPoster === index ? '' : 'hidden'}`}
                                                />
                                                <span className="play_symbol">
                                                    <i className="fa-solid fa-play"></i>
                                                </span>
                                            </div>
                                            </NavLink>
                                            <NavLink to={`/Posterinfo/${ele.attributes.titles.en_jp}`} style={{ cursor: "pointer", textDecoration: "none" }} state={ele.attributes}>
                                                <div className="pic_title">
                                                    <div className="wwords">{ele.attributes.titles.en_jp}</div>
                                                </div>
                                            </NavLink>
                                            <div className="pic_desc">{ele.attributes.description}</div>
                                            <div className="pic_time">TV - {ele.attributes.popularityRank}m</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="banner_right">
                                <div className="right-titles">
                                    <div className="banner-title righttitle poster_title_main">
                                        <b>Most Popular</b>
                                    </div>
                                    <div className="toogle_movies"></div>
                                </div>
                                <div className="top_anime">
                                    {
                                        data2.map((ele: any, index: any) => {
                                            return (
                                                <div className="top10" key={index}>
                                                    <div className="count">{index + 1}</div>
                                                    <div className="count_anime">
                                                        <div className="right-poster">
                                                            <img src={ele.attributes.posterImage.large} alt="" />
                                                        </div>
                                                        <div className="right-title">
                                                            <div className="rightttitle">{ele.attributes.titles.en_jp}</div>
                                                            <div className="rightttitles_bot">
                                                                <div className="rightttitles"><i className="fa-solid fa-closed-captioning"></i>{Math.round(ele.attributes.episodeCount)}</div>
                                                                <div className="rightttitless"><i className="fa-solid fa-microphone"></i>{Math.round(ele.attributes.episodeLength)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
            </>
            <Footer/>
        </>
    )
}

export default AniPosterInfo