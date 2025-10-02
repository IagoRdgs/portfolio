import { Container } from "react-bootstrap";

import Nav from "../../layout/navigation/Nav";

import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/projects/Projects";
import { useEffect, useRef } from "react";
import Contact from "./sections/Contact/Contact";

export default function Home() {
    const headerRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const html = document.querySelector('html');
        const main = mainRef.current;

        if (!header || !main) return;

        main.style.paddingTop = '70px';
        let lastScrollTop = 0;
        
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.style.top = '-70px';
                html.style.scrollPaddingTop = '0';
            }
            else {
                header.style.top = '0';
                // html.style.scrollPaddingTop = '70px';
                // main.style.paddingTop = '70px';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Container fluid="xl" style={{ padding: 0 }}>
                <header ref={headerRef}>
                    <Nav />
                </header>
                <main ref={mainRef}>
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