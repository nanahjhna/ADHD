import React, { useState } from "react";
// Layout 컴포넌트는 따로 정의되어 있다고 가정할게!
// 만약 없다면 이 줄을 지우거나, 간단한 div 태그로 대체할 수 있어.
import Layout from "../../../components/Layout";

// 각 질문 항목을 렌더링하는 작은 컴포넌트를 만들어서 코드를 더 깔끔하게!
function QuestionItem({ questionText, index, currentAnswer, onAnswerChange }) {
    return (
        <div style={styles.questionContainer}>
            <p style={styles.questionText}>{index + 1}. {questionText}</p>
            <div style={styles.radioGroup}>
                {[0, 1, 2, 3].map((score) => (
                    <label key={score} style={styles.radioLabel}>
                        <input
                            type="radio"
                            name={`q${index}`}
                            value={score}
                            checked={currentAnswer === score} // 현재 선택된 값 표시
                            onChange={() => onAnswerChange(index, score)}
                            style={styles.radioInput}
                        />
                        {score === 0 && "전혀 아니다 (0점)"}
                        {score === 1 && "가끔 그렇다 (1점)"}
                        {score === 2 && "자주 그렇다 (2점)"}
                        {score === 3 && "매우 그렇다 (3점)"}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default function MelancholiaPost() {
    // ✨ 자가진단 문항 10가지
    const questions = [
        "지난 2주간 대부분의 시간 동안 슬픔, 공허함, 혹은 절망감을 느낀 적이 있습니까?",
        "지난 2주간 평소 즐기던 활동(취미, 여가 등)에 대한 흥미나 즐거움을 현저히 잃은 적이 있습니까?",
        "지난 2주간 식욕이 없거나 지나치게 많아졌고, 이로 인해 체중 변화(증가 또는 감소)를 경험한 적이 있습니까?",
        "지난 2주간 잠들기 어렵거나, 자다 깨는 횟수가 많거나, 아침에 너무 일찍 깨거나, 반대로 지나치게 잠이 많아진 적이 있습니까?",
        "지난 2주간 마음이 불안하거나 초조해서 가만히 있지 못하고 안절부절못했거나, 혹은 너무 처지고 움직임이나 말이 느려진 적이 있습니까?",
        "지난 2주간 항상 피곤하고 에너지가 없다고 느끼며, 평소보다 기운이 없는 적이 있습니까?",
        "지난 2주간 스스로가 쓸모없거나 죄책감을 느끼고, 자신에 대해 부정적인 생각을 자주 한 적이 있습니까?",
        "지난 2주간 평소보다 집중하기 어렵거나, 신문이나 책을 읽는 것, 대화에 참여하는 것이 힘들다고 느낀 적이 있습니까?",
        "지난 2주간 차라리 죽는 것이 낫다고 생각하거나, 자신을 해치려는 생각을 한 적이 있습니까?",
        "위와 같은 증상들로 인해 지난 2주간 학업, 직업, 사회생활 등 일상생활에 지장이나 어려움을 겪은 적이 있습니까?",
    ];

    // ✨ 각 문항의 답변을 저장할 상태 (초기값은 null, 선택 안 됨)
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    // ✨ 답변이 변경될 때 호출되는 핸들러 함수
    const handleAnswer = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    // ✨ 모든 문항에 답변이 완료되었는지 확인
    const allAnswered = answers.every((ans) => ans !== null);

    // ✨ 결과 확인 버튼 클릭 시 실행될 함수
    // ✨ 결과 확인 버튼 클릭 시 실행될 함수
    const handleResult = () => {
        // 모든 답변 점수를 합산!
        const totalScore = answers.reduce((sum, val) => sum + val, 0);

        let message = "";
        if (totalScore <= 10) {
            message = `우울 증상이 거의 나타나지 않으시네요! 😊
일상생활에서 큰 어려움을 느끼지 않을 만큼 아주 경미한 수준이에요.
매우 안정적인 상태로 보이며, 앞으로도 긍정적인 생활 습관을 유지하시면 좋겠어요.`;
        } else if (totalScore <= 20) {
            message = `약간의 우울 증상이 보이지만, 크게 걱정할 정도는 아니에요. 🤔
일상에서 조금 불편함을 느낄 수 있는 정도이니, 자신을 돌아보는 시간을 가져보는 건 어떨까요?
가벼운 생활 습관 변화만으로도 충분히 개선될 수 있을 거예요. 전문가와 간단히 상담해보는 것도 좋은 방법이에요.`;
        } else if (totalScore <= 30) {
            message = `꽤 여러 우울 증상들이 나타나고 있네요. 🙁
일상생활이나 사회생활에서 불편함이나 어려움을 느낄 수 있는 정도예요.
이런 증상들은 조기에 관심을 가지고 관리하는 것이 중요해요. 전문가와 함께 해결 방안을 찾아보는 것을 적극적으로 추천드려요.`;
        } else {
            message = `우울 증상들이 명확하게 나타나 일상생활에 큰 영향을 줄 수 있는 수준으로 보여요. 😥
이런 경우 혼자서 해결하기보다는 전문가의 도움이 필수적일 수 있어요.
정확한 진단과 체계적인 관리 계획을 세우기 위해 반드시 정신건강의학과 전문의와 상담해 보시기를 권장합니다.`;
        }

        alert(`우울증 자가진단 결과!\n\n총점: ${totalScore}점\n\n${message}`);
    };

    return (
        <Layout>
            <div style={styles.container}>
                <h1 style={styles.title}>우울증 자가진단 (10문항)</h1>
                <p style={styles.description}>
                    아래 문항을 읽고 자신에게 해당하는 점수를 선택해주세요.
                </p>

                {/* ✨ 질문들을 QuestionItem 컴포넌트로 뿌려주기 */}
                {questions.map((q, i) => (
                    <QuestionItem
                        key={i} // key는 React에서 리스트를 다룰 때 중요해!
                        questionText={q}
                        index={i}
                        currentAnswer={answers[i]}
                        onAnswerChange={handleAnswer}
                    />
                ))}

                {/* ✨ 모든 질문에 답했을 때만 '결과 확인하기' 버튼을 보여줘! */}
                {allAnswered && (
                    <button onClick={handleResult} style={styles.resultButton}>
                        결과 확인하기 ✨
                    </button>
                )}
                {!allAnswered && (
                    <p style={styles.instructionText}>모든 질문에 답변해야 결과를 확인할 수 있어요!</p>
                )}
            </div>
        </Layout>
    );
}

// ✨ 보기 좋게 인라인 스타일을 정리해봤어! 실제 앱에서는 CSS 파일을 쓰는 게 더 좋아!
const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginTop: "30px",
        marginBottom: "30px",
    },
    title: {
        color: "#333",
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "2em",
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        color: "#555",
        marginBottom: "30px",
        fontSize: "1.1em",
        lineHeight: "1.5",
    },
    questionContainer: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px 20px",
        marginBottom: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
    },
    questionText: {
        fontSize: "1.15em",
        color: "#222",
        marginBottom: "10px",
        fontWeight: "600",
    },
    radioGroup: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px", // 라디오 버튼 간격 조절
    },
    radioLabel: {
        display: "flex",
        alignItems: "center",
        color: "#444",
        fontSize: "1em",
        cursor: "pointer",
    },
    radioInput: {
        marginRight: "12px",
        transform: "scale(1.1)", // 라디오 버튼 크기 살짝 키우기
        cursor: "pointer",
    },
    resultButton: {
        display: "block", // 블록 요소로 만들어서 가운데 정렬 쉽게
        width: "fit-content", // 내용에 맞게 너비 조절
        margin: "30px auto 10px auto", // 위, 아래 여백 주고 가운데 정렬
        padding: "12px 25px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#007acc",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.1em",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        boxShadow: "0 4px 10px rgba(0, 122, 204, 0.3)",
    },
    resultButtonHover: {
        backgroundColor: "#005f99", // 호버 시 색상 변경
        transform: "translateY(-2px)", // 살짝 떠오르는 효과
    },
    instructionText: {
        textAlign: "center",
        color: "#888",
        marginTop: "20px",
        fontSize: "0.95em",
    }
};