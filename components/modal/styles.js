import css from 'styled-jsx/css';

export default css`
    .modal--hidden {
        display: none;
    }

    .modal--visible {
        display: block;
    }

    .modal-content {
        background-color: white;
        height: 300px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 600px;
        width: 600px;
    }

    .modal-question__content {
        padding: 20px;
    }

    .button.is-warning{
        color: white;
        position: absolute;
        bottom: 10px;
        right: 300px;
    }

    .button.is-success {
        position: absolute;
        bottom: 10px;
        right: 150px;
    }

    .button.is-danger {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;
