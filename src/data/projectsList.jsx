import hero_calculadora from "../assets/calculadoraImc.png";
import hero_petlife from "../assets/petlife.png";
import hero_costs from "../assets/costs.png";
import hero_onePiece from "../assets/onePiece.png";
import hero_weForm from "../assets/weForm.png";
import hero_taskmanager from "../assets/taskManager.png";

const projects = [

    {
        id: 1,
        name: 'One-Piece',
        description: 'One-Piece é um projeto desenvolvido durante um evento promovido pelo Dev em Dobro, com foco em reforçar habilidades em desenvolvimento front-end. A proposta foi criar uma interface moderna, interativa e responsiva, inspirada no universo do anime One Piece.\n O projeto foi construído utilizando HTML, CSS e JavaScript puro, com atenção especial ao design visual, responsividade em diferentes dispositivos e manipulação dinâmica de elementos na página.\n Além de colocar em prática conceitos fundamentais da web, esse projeto também serviu como uma excelente oportunidade para aprimorar a lógica de programação, estruturação semântica e estilização avançada com CSS.',
        resources: 'HTML, CSS e JavaScript.',
        image: hero_onePiece,
        links: {
            site: 'https://IagoRdgs.github.io/op1/',
            github: 'https://github.com/IagoRdgs/op1'
        }
    },

    {
        id: 2,
        name: 'Calculadora IMC',
        description: 'Esse projeto calcula o IMC (Índice de Massa Corporal) de uma pessoal, usando suas informações de peso e altura, e é pautado na tabela IMC e dados da OMS (Organização Mundial da Saúde).',
        resources: 'HTML, CSS, JavaScript e jQuery.',
        image: hero_calculadora,
        links: {
            site: 'https://IagoRdgs.github.io/calculadoraimc/',
            github: 'https://github.com/IagoRdgs/calculadoraimc'
        }
    },

    {
        id: 3,
        name: 'PetLife',
        description: 'Projeto realizado durante o evento Start na Programação da OneBitCode. Tendo sido idealizada e realizada toda a parte responsiva da página, por mim, externa ao conteúdo do evento/curso.',
        resources: 'HTML, CSS e JavaScript.',
        image: hero_petlife,
        links: {
            site: 'https://IagoRdgs.github.io/pet-life/',
            github: 'https://github.com/IagoRdgs/pet-life'
        }
    },

    {
        id: 4,
        name: 'We Form - React',
        description: 'Esse é um rebuild de uma página que fiz num evento da OneBitCode, só que dessa vez decidi refazê-la usando React + Vite, pois foi quando estava iniciando no React.',
        resources: 'React + Vite, HTML, CSS e JavaScript.',
        image: hero_weForm,
        links: {
            site: 'https://we-form-react.vercel.app',
            github: 'https://github.com/IagoRdgs/we-form-react'
        }
    },

    {
        id: 5,
        name: 'Costs (custos)',
        description: 'Este site permite ao usuário organizar projetos financeiros, agregar serviços e controlar o orçamento de forma simples, fácil e intuitiva. A produção deste projeto proporcionou fixação, prática e aquisição de novos conhecimentos e experiência em desenvolvimento front-end utilizando o react. Este site foi desenvolvido com base nas aulas de "Hora de codar", do professor Matheus Battisti, no entanto, não é uma simples cópia. 😊',
        resources: 'React + Vite, HTML, CSS, JavaScript.',
        image: hero_costs,
        links: {
            site: 'https://costs-IagoRdgs.vercel.app/',
            github: 'https://github.com/IagoRdgs/costs'
        }
    },

    {
        id: 6,
        name: 'Task Manager',
        description: 'Task Manager é uma aplicação web Fullstack para gerenciamento de tarefas, onde o usuário pode criar, editar, excluir e acompanhar o status das suas atividades. O sistema conta com autenticação de usuário, prioridades de tarefas, estatísticas de desempenho e uma interface intuitiva construída com React e Bootstrap. O backend garante persistência de dados e autenticação por token JWT, proporcionando segurança e consistência.',
        resources: 'React + Vite, React hot toast, Bootstrap, Node + Express, Prisma + Supabase e Axios',
        image: hero_taskmanager,
        links: {
            site: 'https://task-manager-pgpm.vercel.app/',
            github: 'https://github.com/IagoRdgs/task-manager'
        }
    }
];

export default projects;