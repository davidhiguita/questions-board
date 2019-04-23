import css from 'styled-jsx/css';

export default css`
    .questions-grid {
        display: grid;
        grid-gap: 15px;
        grid-auto-columns: minmax(160px, 1fr);
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-auto-rows: minmax(160px, 1fr);
        grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
        padding: 15px;
    }
`;
