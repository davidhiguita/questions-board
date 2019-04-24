import 'isomorphic-fetch';

export const getAllQuestions = async (callback) => {
    const questionsRes = await fetch('http://localhost:4100/questions');
    const questions = await questionsRes.json();
    callback(questions);
};

export const updateQuestion = async (id, isCorrect) => {
    await fetch(
        'http://localhost:4100/questions',
        {
            body: JSON.stringify({ id, isCorrect }),
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }
    );
};

export const resetQuestions = async () => {
    const updateResponse = await fetch(
        'http://localhost:4100/questions/reset',
        {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }
    );

    const updatedResJson = await updateResponse.json();
    return updatedResJson;
};
