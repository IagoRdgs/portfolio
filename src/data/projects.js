import hero_calculadora from "../assets/calculadoraImc.png";
import hero_petlife from "../assets/petlife.png";
import hero_draws from "../assets/projectDraws.png";

const projects = [
    {
        id: 1,
        name: 'Calculadora IMC',
        description: 'Esse projeto calcula o IMC (Índice de Massa Corporal) de uma pessoal, usando suas informações de peso e altura, e é pautado na tabela IMC e dados da OMS (Organização Mundial da Saúde).',
        technologies: 'HTML, CSS, JavaScript e jQuery.',
        image: hero_calculadora,
        links: {
            site: 'https://hipnosm.github.io/calculadoraimc/',
            github: 'https://github.com/HipnosM/calculadoraimc'
        }
    },

    {
        id: 2,
        name: 'PetLife',
        description: 'Projeto realizado durante o evento Start na Programação da OneBitCode. Tendo sido idealizada e realizada toda a parte responsiva da página, por mim, externa ao conteúdo do evento/curso.',
        technologies: 'HTML, CSS e JavaScript.',
        image: hero_petlife,
        links: {
            site: 'https://hipnosm.github.io/pet-life/',
            github: 'https://github.com/HipnosM/pet-life'
        }
    },

    {
        id: 3,
        name: 'Project Draws',
        description: 'Este é um projeto pessoal que utiliza React, Vite e a API de exibição básica do Instagram para apresentar postagens de desenhos autorais. O objetivo principal é criar uma interface dinâmica e responsiva para compartilhar criações artísticas.',
        technologies: 'React + Vite e API de exibição básica do Instagram.',
        image: hero_draws,
        links: {
            site: 'https://project-draws.vercel.app/',
            github: 'https://github.com/HipnosM/project-draws'
        }
    },
];

export default projects;