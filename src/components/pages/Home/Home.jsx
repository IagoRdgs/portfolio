import styles from "./Home.module.css";

import { Container, Row, Col } from "react-bootstrap";

import Nav from "../../layout/Nav";

import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

export default function Home() {

    return (
        <>
            <Container fluid="xl" style={{padding: 0}}>
                <header>
                    <Nav />
                </header>
                <main>
                    <About />
                    <Skills />
                </main>

            </Container>

        </>
    );
};

