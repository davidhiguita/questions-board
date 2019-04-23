import Head from 'next/head';
import styles from './styles';

const Layout = ({ children, questions, title }) => (
    <>
        <Head>
            <link rel="stylesheet" href="/static/bulma.min.css" />
            <link rel="icon" type="image/png" href="/static/favicon.png" />
            <title>{title}</title>
        </Head>

        <div className="layout">
            <header className="layout__header">
                Preguntas
            </header>

            <section className="layout__content">
                {children}
            </section>

            <style jsx>{styles}</style>

            <style jsx global>{`
                body: {
                    height: 100vh;
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                }
            `}</style>
        </div>
    </>
);

export default Layout;
