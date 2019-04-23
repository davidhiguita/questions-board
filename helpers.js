export const setQuestionState = ({
    questions,
    id,
    newData
}) => {
    const updatedQuestionIndex = questions
        .findIndex(question => question.id === id);
    
    const currentQuestions = Object.assign([], questions);
    currentQuestions[updatedQuestionIndex] = Object.assign(
        {},
        currentQuestions[updatedQuestionIndex],
        { ...newData }
    );
    return currentQuestions;
};
