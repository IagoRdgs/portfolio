import styles from "./Home.module.css";

import { Container } from "react-bootstrap";

import Nav from "../../layout/navigation/Nav";

import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/projects/Projects";
import { useEffect } from "react";
import Contact from "./sections/Contact/Contact";

export default function Home() {
    useEffect(() => {
        const header = document.querySelector('header');
        const html = document.querySelector('html');

        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.style.top = '-70px';
                html.style.scrollPaddingTop = '0';
                html.style.paddingTop = '0';
            }
            else {
                header.style.top = '0';
                html.style.scrollPaddingTop = '70px';
                html.style.paddingTop = '70px';
            }
            lastScrollTop = scrollTop < 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Container fluid="xl" style={{ padding: 0 }}>
                <header>
                    <Nav />
                </header>
                <main>
                    <About />
                    <Skills />
                    <Projects />
                </main>
                <footer>
                    <Contact />
                </footer>

            </Container>

        </>
    );
};