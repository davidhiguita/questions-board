import css from 'styled-jsx/css';

export default css`
    .questions-grid {
        display: grid;
        grid-gap: 15px;
        grid-auto-columns: minmax(160px, 1fr);
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-auto-rows: minmax(160px, 1fr);
        grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
        height: calc(100vh - 60px);
        padding: 15px;
        position: relative;
    }

    .reset-button {
        background-color: orange;
        border-radius: 10px;
        bottom: 32px;
        color: white;
        cursor: pointer;
        font-size: 1.4rem;
        padding: 10px;
        position: fixed;
        right: 32px;
    }
`;
