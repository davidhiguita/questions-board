import QUESTIONS from '../questions';
import Layout from '../components/layout';
import QuestionsGrid from '../components/questions-grid';
import Modal from '../components/modal';
import { setQuestionState } from '../helpers';

class QuestionsBoard extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isModalOpened: false,
            questions: QUESTIONS,
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
            localStorage.setItem('questions', JSON.stringify(updatedQuestions));
        });
    }

    setModalVisibility = (visible, question) => (event) => {
        event.preventDefault();
        this.setState({
            isModalOpened: visible,
            selectedQuestion: question
        });
    }

    setQuestions = (newQuestions) => {
        this.setState({ questions: newQuestions });
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
                <Layout questions={questions} title="Preguntas">
                    <QuestionsGrid
                        questions={questions}
                        setModalVisibility={this.setModalVisibility}
                    />
                </Layout>
            </>
        );
    }
}

export default QuestionsBoard;
