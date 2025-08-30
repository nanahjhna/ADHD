import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";

// ... 다른 카테고리도 동일하게
import AdhdPost from "./pages/posts/selftest/Adhd";

import MelancholiaPost from "./pages/posts/selftest/Melancholia";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            {/* 나머지 카테고리도 동일 */}
            <Route path="/category/selftest/adhd" element={<AdhdPost />} />

            {/* 나머지 카테고리도 동일 */}
            <Route path="/category/selftest/melancholia" element={<MelancholiaPost />} />

        </Routes>
    );
}
