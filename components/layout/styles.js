import css from 'styled-jsx/css';

export default css`
    .layout {
        display: grid;
        grid-template-areas: "header"
                             "content";
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr;
        height: 100vh;
        width: 100vw;
    }

    .layout__header {
        background-color: tomato;
        color: white;
        grid-area: header;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    .layout__content {
        grid-area: content;
        height: calc(100vh - 60px);
        overflow-y: auto;
    }
`;
