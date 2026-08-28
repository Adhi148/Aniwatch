import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"
import "../CSS/Home.css"


const Home = () => {
    
    const[data , setData] = useState<any[]>([]);
    useEffect(() => {
        axios
            .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${1}`)
            .then((response: any) => {
                setData(response.data.data);
            }).catch((error: any) => {
                console.log(error)
            })
    }, []);
    console.log(data)
    return (
        <>
            <Navbar/>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        data.map((ele:any) => {
                            return(
                                <div className="carousel-item active">
                                    <div id="okok">
                                        <img src={ele.attributes.posterImage.original} className="d-block" id="done" alt="..." />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Home