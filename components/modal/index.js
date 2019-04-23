import classNames from 'classnames';
import styles from './styles';

const Modal = ({ 
    answerQuestion,
    closeModal,
    question,
    visible
}) => {
    const modalClasses = classNames(
        'modal',
        'modal-question',
        { 'modal--visible': !!visible },
        { 'modal--hidden': !visible }
    );

    return (
        <div className={modalClasses}>
            <div className="modal-background"></div>
            <div className="modal-content modal-question__content">
                <div className="modal-question__question">
                    {question.question}
                </div>

                <button className="button is-warning" onClick={closeModal}>Cambiar pregunta</button>
                <button className="button is-success" onClick={answerQuestion(true)}>Correcto</button>
                <button className="button is-danger" onClick={answerQuestion(false)}>Incorrecto</button>
            </div>
            <style jsx>{styles}</style>
        </div>
    );
};

export default Modal;
