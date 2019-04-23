import css from 'styled-jsx/css';

export default css`
    .question {
        align-items: center;
        display: flex;
        font-size: 4rem;
        font-weight: bold;
        justify-content: center;
    }

    .question--default {
        background-color: #FFD600;
        color: white;
        cursor: pointer;
    }

    .question--default:hover {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
    }

    .question--correct {
        background-color: #43A047;
        color: white;
        cursor: none;
        pointer-events: none;
    }

    .question--incorrect {
        background-color: #E53935;
        color: white;
        cursor: none;
        pointer-events: none;
    }

    .question--disabled {
        background-color: #E0E0E0;
        cursor: none;
        pointer-events: none;
    }
`;
