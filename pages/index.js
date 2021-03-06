import QUESTIONS from '../questions';
import Layout from '../components/layout';
import QuestionsGrid from '../components/questions-grid';
import Modal from '../components/modal';
import { setQuestionState, shuffleArray } from '../helpers';
import { getAllQuestions, updateQuestion } from '../api';

import 'isomorphic-fetch';

class QuestionsBoard extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isModalOpened: false,
            questions: [],
            selectedQuestion: {}
        };

    }

    answerQuestion = (isCorrect) => () => {
        const { questions, selectedQuestion: { id } } = this.state;
        const updatedQuestions = setQuestionState({
            questions,
            id,
            newData: {
                isCorrect
            }
        });
        this.setState({
            isModalOpened: false,
            questions: updatedQuestions,
            selectedQuestion: {}
        }, () => {
            updateQuestion(id, isCorrect);
        });
    }

    setModalVisibility = (visible, question) => (event) => {
        event.preventDefault();
        this.setState({
            isModalOpened: visible,
            selectedQuestion: question
        });
    }

    updateInitialQuestions = (newQuestions) => {
        this.setState({ questions: newQuestions.data });
    }

    render() {
        const { isModalOpened, questions, selectedQuestion } = this.state;

        return (
            <>
                <Modal
                    answerQuestion={this.answerQuestion}
                    question={selectedQuestion}
                    closeModal={this.setModalVisibility(false, {})}
                    visible={isModalOpened}
                />
                <Layout title="Curiosidades">
                    <QuestionsGrid
                        questions={shuffleArray(questions, false)}
                        setModalVisibility={this.setModalVisibility}
                        updateInitialQuestions={this.updateInitialQuestions}
                    />
                </Layout>
            </>
        );
    }
}

export default QuestionsBoard;
