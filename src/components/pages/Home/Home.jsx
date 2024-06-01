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
        let lastTouchY = 0;
        let lastScrollTop = 0;
        const navbar = document.querySelector('header');

        const handleTouchMove = (event) => {
            lastTouchY = event.touches[0].clientY;
        }

        const handleScroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop || lastTouchY > 0) {
                // Scrolling down
                navbar.style.top = '-70px'; // Ajuste a altura da navbar
            } else {
                // Scrolling up
                navbar.style.top = '0';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o caso de scroll negativo no mobile
            lastTouchY = 0;
        };

        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('touchmove', handleTouchMove);
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