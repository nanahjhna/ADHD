import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

import About from "./pages/About.jsx";

import AdhdPost from "./pages/posts/selftest/Adhd.jsx";

import MelancholiaPost from "./pages/posts/selftest/Melancholia.jsx";

import MindsetPost from "./pages/posts/mindcontrol1/Mindset.jsx";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            {/* 나머지 카테고리도 동일 */}
            <Route path="/category/selftest/adhd" element={<AdhdPost />} />

            {/* 나머지 카테고리도 동일 */}
            <Route path="/category/selftest/melancholia" element={<MelancholiaPost />} />

            {/* 나머지 카테고리도 동일 */}
            <Route path="/category/mindcontrol1/mindset" element={<MindsetPost />} />

            

        </Routes>
    );
}
