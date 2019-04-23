import Question from '../question';
import styles from './styles';

const QuestionsGrid = ({ questions, setModalVisibility }) => (
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

        <style jsx>{styles}</style>
    </div>
);

export default QuestionsGrid;
