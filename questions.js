export default [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,]
    .map((_, index) => ({
        isCorrect: null,
        id: index + 1,
        question: `Question #${index + 1}`
    }));