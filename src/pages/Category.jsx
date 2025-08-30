import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function Category() {
    const { category, sub } = useParams();

    // category/sub 소문자로 변환 (URL과 매칭)
    const catKey = category?.toLowerCase();
    const subKey = sub?.toLowerCase();

    const posts = {
        부상: {
            아킬레스건: "아킬레스건 관련 포스트 내용입니다."
        }
        //,
        //life: {
        //    traveling: "여행 관련 포스트 내용입니다.",
        //    food: "음식 관련 포스트 내용입니다.",
        //    health: "건강 관련 포스트 내용입니다.",
        //},
        //travel: {
        //    asia: "아시아 여행 관련 포스트 내용입니다.",
        //    europe: "유럽 여행 관련 포스트 내용입니다.",
        //    america: "미주 여행 관련 포스트 내용입니다.",
        //},
        //music: {
        //    pop: "팝 음악 관련 포스트 내용입니다.",
        //    jazz: "재즈 음악 관련 포스트 내용입니다.",
        //    classical: "클래식 음악 관련 포스트 내용입니다.",
        //},
    };


    // 보여줄 내용 선택
    let content = "포스트가 없습니다."; // 기본 텍스트
    if (catKey && posts[catKey]) {
        if (subKey && posts[catKey][subKey]) {
            content = posts[catKey][subKey];
        } else {
            content = `${category} 카테고리의 전체 포스트 목록입니다.`;
        }
    }

    return (
        <Layout>
            <h1>
                {category} {sub ? `> ${sub}` : ""}
            </h1>
            <p>{content}</p>
        </Layout>
    );
}
