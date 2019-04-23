import classNames from 'classnames';
import styles from './styles';

const Question = ({ setModalVisibility, question }) => {
    const questionClasses = classNames(
        'card',
        'question',
        { 'question--default': question.isCorrect === null },
        { 'question--correct': question.isCorrect === true },
        { 'question--incorrect': question.isCorrect === false },
        { 'question--disabled': question.disabled === true || question.disabled === true }
    );

    return (
        <div
            className={questionClasses}
            onClick={setModalVisibility(true, question)}
        >
            <div className="card-content">
                <div className="content">
                    {question.id}
                </div>
            </div>

            <style jsx>{styles}</style>
        </div>
    );
};

export default Question;
