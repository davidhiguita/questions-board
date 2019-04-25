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

export const shuffleArray = (array, randomSorting = true) => {
    const newArray = Object.assign([], array);
    if (!randomSorting) {
        return newArray;
    }
    let currentIndex = newArray.length;
    let temp, randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temp = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temp;
    }

    return newArray;
};
