import hero_calculadora from "../assets/calculadoraImc.png";
import hero_petlife from "../assets/petlife.png";
import hero_draws from "../assets/projectDraws.png";
import hero_costs from "../assets/costs.png";
import hero_onePiece from "../assets/onePiece.png";
import hero_weForm from "../assets/weForm.png";

const projects = [

    {
        id: 1,
        name: 'One-Piece',
        description: 'Este é um projeto realizado por meio da participação em um evento do Dev em dobro. O objetivo principal é criar uma interface dinâmica e responsiva, utilizando os principais recursos de HTML, CSS e JavaScript, para uma melhor fixação de conhecimento.',
        resources: 'HTML, CSS e JavaScript.',
        image: hero_onePiece,
        links: {
            site: 'https://hipnosm.github.io/op1/',
            github: 'https://github.com/HipnosM/op1'
        }
    },

    {
        id: 2,
        name: 'Calculadora IMC',
        description: 'Esse projeto calcula o IMC (Índice de Massa Corporal) de uma pessoal, usando suas informações de peso e altura, e é pautado na tabela IMC e dados da OMS (Organização Mundial da Saúde).',
        resources: 'HTML, CSS, JavaScript e jQuery.',
        image: hero_calculadora,
        links: {
            site: 'https://hipnosm.github.io/calculadoraimc/',
            github: 'https://github.com/HipnosM/calculadoraimc'
        }
    },

    {
        id: 3,
        name: 'PetLife',
        description: 'Projeto realizado durante o evento Start na Programação da OneBitCode. Tendo sido idealizada e realizada toda a parte responsiva da página, por mim, externa ao conteúdo do evento/curso.',
        resources: 'HTML, CSS e JavaScript.',
        image: hero_petlife,
        links: {
            site: 'https://hipnosm.github.io/pet-life/',
            github: 'https://github.com/HipnosM/pet-life'
        }
    },

    {
        id: 5,
        name: 'We Form - React',
        description: 'Esse é um rebuild de uma página que fiz num evento da OneBitCode, só que dessa vez decidi refazê-la usando React + Vite, pois foi quando estava iniciando no React.',
        resources: 'React + Vite, HTML, CSS e JavaScript.',
        image: hero_weForm,
        links: {
            site: 'https://we-form-react.vercel.app',
            github: 'https://github.com/HipnosM/we-form-react'
        }
    },

    {
        id: 6,
        name: 'Costs (custos)',
        description: 'Este site permite ao usuário organizar projetos financeiros, agregar serviços e controlar o orçamento de forma simples, fácil e intuitiva. A produção deste projeto proporcionou fixação, prática e aquisição de novos conhecimentos e experiência em desenvolvimento front-end utilizando o react. Este site foi desenvolvido com base nas aulas de "Hora de codar", do professor Matheus Battisti, no entanto, não é uma simples cópia. 😊',
        resources: 'React + Vite, HTML, CSS, JavaScript.',
        image: hero_costs,
        links: {
            site: 'https://costs-hipnosm.vercel.app/',
            github: 'https://github.com/HipnosM/costs'
        }
    },
];

export default projects;