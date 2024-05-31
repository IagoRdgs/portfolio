import styles from "./Home.module.css";

import { Container } from "react-bootstrap";

import Nav from "../../layout/navigation/Nav";

import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/projects/Projects";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.querySelector('header');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.style.top = '-70px'; // Ajuste a altura da navbar
            } else {
                // Scrolling up
                navbar.style.top = '0';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o caso de scroll negativo no mobile
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

            </Container>

        </>
    );
};