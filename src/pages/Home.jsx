import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const categories = [
    {
        name: "기술", path: "tech", sub: [
            { name: "리액트", path: "react" }
        ]
    },
    {
        name: "건강", path: "health", sub: [
            { name: "아킬레스 비수술", path: "achilles" }
        ]
    },
    {
        name: "자가진단", path: "selftest", sub: [
            { name: "ADHD", path: "adhd" },
            { name: "우울증", path: "melancholia" }
        ]
    },
    {
        name: "게임", path: "game", sub: [
            { name: "디펜스게임", path: "defense" }
        ]
    },
    // 필요하면 더 추가
];

export default function Home() {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (name) => {
        setOpenCategory(openCategory === name ? null : name);
    };

    return (
        <Layout>
            <h1>카테고리</h1>
            <ul style={{
                listStyle: "none",
                padding: 0
            }}>
                {categories.map((cat) => (
                    <li key={cat.path} style={{
                        marginBottom: "0.5rem",
                        borderRadius: "999px",       // 타원형
                        background: "#ffe4e1",       // 연한 핑크
                        padding: "0.5rem 1rem",      // 내부 여백
                        cursor: "pointer"
                    }}>
                        <div
                            onClick={() => toggleCategory(cat.name)}
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "#222",
                            }}
                        >
                            {cat.name} {/* 화면에는 한글 표시 */}
                        </div>

                        {openCategory === cat.name && (
                            <ul style={{
                                listStyle: "circle",
                                marginLeft: "1rem",
                                marginTop: "0.3rem"
                            }}>
                                {cat.sub.map((sub) => (
                                    <li key={sub.path} style={{ marginBottom: "0.3rem" }}>
                                        <Link
                                            to={`/category/${cat.path}/${sub.path}`} // 링크는 영어
                                            style={{ color: "#007acc", textDecoration: "none" }}
                                        >
                                            {sub.name} {/* 서브도 한글 표시 */}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
