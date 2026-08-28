import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AniPosterInfo from "./Component/AniPosterInfo";
import FirstPage from "./Component/FirstPage";
import AniCategory from "./Component/AniCategory";
import Home from "./Component/Home";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Tv" replace />} />
                <Route path="/Tv" element={<FirstPage />} />
                <Route path="/Tvpage/:category" element={<AniCategory />} />
                <Route path="/Posterinfo/:title" element={<AniPosterInfo/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}