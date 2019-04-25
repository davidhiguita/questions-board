import Question from '../question';
import { getAllQuestions, resetQuestions } from '../../api';
import styles from './styles';

class QuestionsGrid extends React.PureComponent {
    componentDidMount() {
        const { updateInitialQuestions } = this.props;
        getAllQuestions(updateInitialQuestions);
    }

    resetQuestions = () => {
        const { error } = resetQuestions();
        // debugger;
        if (!error) {
            const { updateInitialQuestions } = this.props;
            getAllQuestions(updateInitialQuestions);
        }
    }

    render() {
        const { questions, setModalVisibility } = this.props;
        return (
            <div className="questions-grid">
                {
                    questions.map(question => (
                        <Question
                            key={`question-${question.id}`}
                            question={question}
                            setModalVisibility={setModalVisibility}
                        />
                    ))
                }

                <button className="reset-button" onClick={this.resetQuestions}>
                    Reiniciar
                </button>

                <style jsx>{styles}</style>
            </div>
        );
    }
}

export default QuestionsGrid;
