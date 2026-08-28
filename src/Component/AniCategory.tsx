import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import Loader from "./Loader";
import { Pagination, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

const AniCategory = () => {
    const {category} = useParams();
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<any[]>([]);
    const [data2, setData2] = useState<any[]>([]);
    const [loader, setLoader] = useState(true);
    const [hoveredPoster, setHoveredPoster] = useState<number | null>(null);

    useEffect(() => {
        axios
            .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}&filter[categories]=${category}`)
            .then((response: any) => {
                setData(response.data.data);
            }).catch((error: any) => {
                console.log(error)
            })
    }, [page , category]);

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
    }, [page]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page , category]);

    const [height, setHeight] = useState({ maxHeight: "350px" });
    const [text, setText] = useState(true);

    const handleHeight = () => {
        setHeight(text ? { maxHeight: "100%" } : { maxHeight: "350px" });
        setText(!text);
    }

    const handlePageChange = (_event: React.ChangeEvent<unknown>, pageValue: any) => {
        setPage(pageValue);
    };
    return (
        <>
            <Navbar/>
            <Navbar2/>
            {
                loader ? <Loader /> :
                    <div className="banner_container">
                        <div className="banner_left">
                            <div className="banner-title">
                               <b>{category} Anime</b>
                            </div>
                            <div className="posters">
                                {data?.map((ele: any, index: number) => (
                                    <div key={index} className="sub_posters">
                                        <NavLink to={`/Posterinfo/${ele.attributes.titles.en_jp}`} style={{ cursor: "pointer", textDecoration: "none" }} state={ele.attributes}>
                                            <div key={index}
                                                className={`act_pic ${hoveredPoster === index ? 'hovered' : ''}`}
                                                onMouseEnter={() => setHoveredPoster(index)}
                                                onMouseLeave={() => setHoveredPoster(null)}
                                                style={{cursor:"pointer"}}
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
                            <div className="main_pagination">
                                <div className="pagination">
                                    <Stack spacing={2}>
                                        <Pagination count={55} onChange={handlePageChange} />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className="banner_right">
                            <div className="right-titles">
                                <div className="banner-title righttitle">
                                    <b>Top 10</b>
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
                            <div className="right-bottom-genre">
                                <div className="right-bottom-genre-header">Genre</div>
                                <div className="right-bottom-genre-content">
                                    <div className="cbox cbox-genres">
                                        <ul className="ulclear color-list sb-genre-list sb-genre-less" style={height}>
                                            <NavLink to={`/Tvpage/${"Action"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Action</NavLink>
                                            <NavLink to={`/Tvpage/${"Adventure"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Adventure</NavLink>
                                            <NavLink to={`/Tvpage/${"Cars"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Cars</NavLink>
                                            <NavLink to={`/Tvpage/${"Comedy"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>Comedy</NavLink>
                                            <NavLink to={`/Tvpage/${"Dementia"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Dementia</NavLink>
                                            <NavLink to={`/Tvpage/${"Demons"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>Demons</NavLink>
                                            <NavLink to={`/Tvpage/${"Drama"}`} className={"navlink_ani"} style={{ color: "#86e3ce", cursor: "pointer" }}>Drama</NavLink>
                                            <NavLink to={`/Tvpage/${"Ecchi"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Ecchi</NavLink>
                                            <NavLink to={`/Tvpage/${"Fantasy"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Fantasy</NavLink>
                                            <NavLink to={`/Tvpage/${"Game"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Game</NavLink>
                                            <NavLink to={`/Tvpage/${"Harem"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>Harem</NavLink>
                                            <NavLink to={`/Tvpage/${"Historical"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Historical</NavLink>
                                            <NavLink to={`/Tvpage/${"Horrer"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>Horror</NavLink>
                                            <NavLink to={`/Tvpage/${"Isekai"}`} className={"navlink_ani"} style={{ color: "#86e3ce", cursor: "pointer" }}>Isekai</NavLink>
                                            <NavLink to={`/Tvpage/${"Josei"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Josei</NavLink>
                                            <NavLink to={`/Tvpage/${"Kids"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Kids</NavLink>
                                            <NavLink to={`/Tvpage/${"Magic"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Magic</NavLink>
                                            <NavLink to={`/Tvpage/${"MartialArts"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>MartialArts</NavLink>
                                            <NavLink to={`/Tvpage/${"Mecha"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Mecha</NavLink>
                                            <NavLink to={`/Tvpage/${"Military"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>Military</NavLink>
                                            <NavLink to={`/Tvpage/${"Music"}`} className={"navlink_ani"} style={{ color: "#86e3ce", cursor: "pointer" }}>Music</NavLink>
                                            <NavLink to={`/Tvpage/${"Mystery"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Mystery</NavLink>
                                            <NavLink to={`/Tvpage/${"Parody"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Parody</NavLink>
                                            <NavLink to={`/Tvpage/${"Police"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Police</NavLink>
                                            <NavLink to={`/Tvpage/${"Psychological"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>Psychological</NavLink>
                                            <NavLink to={`/Tvpage/${"Romance"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Romance</NavLink>
                                            <NavLink to={`/Tvpage/${"Samurai"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Samurai</NavLink>
                                            <NavLink to={`/Tvpage/${"School"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>School</NavLink>
                                            <NavLink to={`/Tvpage/${"Sci-Fi"}`} className={"navlink_ani"} style={{ color: "#86e3ce", cursor: "pointer" }}>Sci-Fi</NavLink>
                                            <NavLink to={`/Tvpage/${"Seinen"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Seinen</NavLink>
                                            <NavLink to={`/Tvpage/${"Shoujo"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Shoujo</NavLink>
                                            <NavLink to={`/Tvpage/${"Shoujo Ai"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Shoujo Ai</NavLink>
                                            <NavLink to={`/Tvpage/${"Shounen"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>Shounen</NavLink>
                                            <NavLink to={`/Tvpage/${"Vampire"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Vampire</NavLink>
                                            <NavLink to={`/Tvpage/${"Shounen"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>Shounen</NavLink>
                                            <NavLink to={`/Tvpage/${"ShounenAi"}`} className={"navlink_ani"} style={{ color: "#86e3ce", cursor: "pointer" }}>ShounenAi</NavLink>
                                            <NavLink to={`/Tvpage/${"Slice of Life"}`} className={"navlink_ani"} style={{ color: "#d0e6a5", cursor: "pointer" }}>Slice of Life</NavLink>
                                            <NavLink to={`/Tvpage/${"Space"}`} className={"navlink_ani"} style={{ color: "#ffdd95", cursor: "pointer" }}>Space</NavLink>
                                            <NavLink to={`/Tvpage/${"Sports"}`} className={"navlink_ani"} style={{ color: "#fc887b", cursor: "pointer" }}>Sports</NavLink>
                                            <NavLink to={`/Tvpage/${"Killing"}`} className={"navlink_ani"} style={{ color: "#ccabda", cursor: "pointer" }}>Killing</NavLink>
                                            <NavLink to={`/Tvpage/${"Super natural"}`} className={"navlink_ani"} style={{ color: "#abccd8", cursor: "pointer" }}>Super natural</NavLink>
                                            <NavLink to={`/Tvpage/${"Thriller"}`} className={"navlink_ani"} style={{ color: "#d8b2ab", cursor: "pointer" }}>Thriller</NavLink>
                                        </ul>
                                        <div className="show_more">
                                            <div className="clearfix" onClick={handleHeight}>{text ? "Show More" : "Show Less"}</div>
                                        </div>
                                        <button className="btn btn-sm btn-block btn-showmore mt-2"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <Footer/>
        </>
    )
}

export default AniCategory