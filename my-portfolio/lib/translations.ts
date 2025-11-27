export type Language = 'en' | 'pt';

export const translations = {
    en: {
        home: 'Home',
        about: 'About Me',
        curriculum: 'Curriculum',
        technologies: 'Technologies',
        contact: 'Contact',
        welcome: 'João Villaça, Software Engineer',
        subtitle: 'Born in Campinas/SP, graduated in CompSci, specialized in fintech, guitarist, music producer and amateur cook in my free time.',
        aboutMe: 'About Me',
        aboutText: 'I hold a Bachelor\'s degree in Computer Science from USP São Carlos - ICMC. During my education, I also gained a background in cybersecurity and distributed systems. Throughout my career, I have worked with financial technology - a field I am specializing in through my professional experiences and also through the MBA in Economics, Investments, and Banking I am currently pursuing at USP/Esalq. I have a comprehensive skill set that makes me comfortable working with new technologies and on the most diverse fronts of programming: Infrastructure, backend, frontend, databases, project management, requirements, and business rule elaboration.',
        project1: 'Project 1',
        project1Desc: 'Description of project 1.',
        project2: 'Project 2',
        project2Desc: 'Description of project 2.',
        getInTouch: 'Get in touch with me!',
        portfolio: 'Portfolio',
        education: 'Education',
        experience: 'Professional Experience',
        certificates: 'Certificates',
        curriculumData: {
            education: [
                {
                    title: 'Bachelor in Computer Science',
                    institution: 'USP São Carlos - ICMC',
                    date: 'Apr/2025',
                    description: 'Emphasis on Distributed Systems and Software Engineering.'
                },
                {
                    title: 'MBA in Economics, Investments and Banking',
                    institution: 'USP/Esalq',
                    date: 'May/2027',
                    description: 'Postgraduate degree in economics, financial markets and investment banking.'
                }
            ],
            experience: [
                {
                    title: 'Fullstack Developer',
                    company: 'Black Belt Finance',
                    startDate: 'Oct/2024',
                    endDate: 'Dec/2025',
                    description: 'Development of an investment portfolio management app. Worked with pricing calculations, Open Finance integration and BTG Developer Partner API, report generation, financial reconciliation and risk analysis calculations.'
                },
                {
                    title: 'Jr. Software Development Analyst',
                    company: 'Luz Soluções Financeiras',
                    startDate: 'Oct/2023',
                    endDate: 'Apr/2024',
                    description: 'Development of technology for banking regulatory compliance based on the Central Bank\'s Basel III rules. Also participated in the formulation of a scalable core banking system, with modeling of financial flows, accounting and banking ledger.'
                },
                {
                    title: 'Backend Developer',
                    company: 'Finscool LTDA.',
                    startDate: 'Nov/2022',
                    endDate: 'Jun/2023',
                    description: 'Development of financial education course platforms, corporate training and gamification of teaching for high school. Developed flows based on payment events and automation of mass registrations using spreadsheets.'
                }
            ],
            certificates: [
                {
                    title: 'AWS Cloud Practitioner',
                    issuer: 'Amazon Web Services',
                    date: 'Aug/2023 - Aug/2026',
                    description: 'Architecture patterns, best practices and tools for cloud solutions, focused on the AWS ecosystem.',
                    link: 'https://www.credly.com/badges/f75b31b7-4e20-4d41-9368-f495c09c0650/public_url',
                    image: '/aws-certified-cloud-practitioner.png'
                },
                {
                    title: 'Special Studies: Advanced and High-Performance Computing Systems',
                    issuer: 'USP/ICMC',
                    date: 'Nov/2025',
                    description: 'Specialization in distributed systems, cloud and software architecture.',
                    link: 'https://validador.icmc.usp.br/?codigo_validacao=RBF7-GFMB-FYSQ-P4MT'
                },
                {
                    title: 'EF SET English certificate C2 proficient 73/100',
                    issuer: 'EF SET',
                    date: 'May/2024',
                    description: 'C2 English proficiency certificate, with reading, listening and writing.',
                    link: 'https://cert.efset.org/nNeQak'
                }
            ]
        }
    },
    pt: {
        home: 'Início',
        about: 'Sobre Mim',
        curriculum: 'Currículo',
        technologies: 'Tecnologias',
        contact: 'Contato',
        welcome: 'João Villaça, Engenheiro de Software',
        subtitle: 'Natural de Campinas/SP, formado em Computação, especializado em tecnologia financeira, guitarrista, produtor musical e cozinheiro amador no tempo livre.',
        aboutMe: 'Sobre Mim',
        aboutText: 'Sou Bacharel em Ciências de Computação pela USP São Carlos - ICMC. Durante minha formação também obtive um background em cibersegurança e sistemas distribuídos. Durante minha carreira atuei com tecnologia financeira - ramo em que estou me especializando através das minhas experiências profissionais e também através do MBA em Economia, Investimentos e Banking que estou cursando atualmente na USP/Esalq. Tenho um leque de habilidades abrangente que me deixam confortável para trabalhar com novas tecnologias e nas mais diversas frentes da programação: Infraestrutura, backend, frontend, banco de dados, gestão de projetos, requisitos e elaboração de regras de negócio.',
        project1: 'Projeto 1',
        project1Desc: 'Descrição do projeto 1.',
        project2: 'Projeto 2',
        project2Desc: 'Descrição do projeto 2.',
        getInTouch: 'Entre em contato comigo!',
        portfolio: 'Portfólio',
        education: 'Formação',
        experience: 'Experiência Profissional',
        certificates: 'Certificados',
        curriculumData: {
            education: [
                {
                    title: 'Bacharel em Ciências de Computação',
                    institution: 'USP São Carlos - ICMC',
                    date: 'abr/2025',
                    description: 'Ênfase em Sistemas Distribuídos e Engenharia de Sotfware.'
                },
                {
                    title: 'MBA em Economia, Investimentos e Banking',
                    institution: 'USP/Esalq',
                    date: 'mai/2027',
                    description: 'Pós-graduação em economia, mercado financeiro e investment banking.'
                }
            ],
            experience: [
                {
                    title: 'Fullstack Developer',
                    company: 'Black Belt Finance',
                    startDate: 'out/2024',
                    endDate: 'dez/2025',
                    description: 'Desenvolvimento de um app de gestão de portfolio de investimentos. Trabalhei com cálculos de precificação, integração com Open Finance e API BTG Developer Partner, geração de relatórios, conciliação financeira e cálculos de análise de riscos.'
                },
                {
                    title: 'Analista de Desenvolvimento de Software Jr.',
                    company: 'Luz Soluções Financeiras',
                    startDate: 'out/2023',
                    endDate: 'abr/2024',
                    description: 'Desenvolvimento de tecnologia para compliance regulatório bancário com base nas regras de Basileia III do Banco Central. Também participei da formulação de um sistema escalável de core banking, com modelagem de fluxos financeiros, contábeis e registro bancário (ledger).'
                },
                {
                    title: 'Backend Developer',
                    company: 'Finscool LTDA.',
                    startDate: 'nov/2022',
                    endDate: 'jun/2023',
                    description: 'Desenvolvimento de plataformas de cursos de educação financeira, treinamentos para empresas e gamificação do ensino para ensino médio. Desenvolvi fluxos com base em eventos de pagamentos e automação de cadastros em massa utilizando planilhas.'
                }
            ],
            certificates: [
                {
                    title: 'AWS Cloud Practitioner',
                    issuer: 'Amazon Web Services',
                    date: 'ago/2023 - ago/2026',
                    description: 'Padrões de arquitetura, melhores práticas e ferramentas para soluções em nuvem, focado no ecossistema AWS.',
                    link: 'https://www.credly.com/badges/f75b31b7-4e20-4d41-9368-f495c09c0650/public_url',
                    image: '/aws-certified-cloud-practitioner.png'
                },
                {
                    title: 'Estudos Especiais: Sistemas computacionais avançados e de alto desempenho',
                    issuer: 'USP/ICMC',
                    date: 'nov/2025',
                    description: 'Especialização em sistemas distribuídos, nuvem e arquitetura de software.',
                    link: 'https://validador.icmc.usp.br/?codigo_validacao=RBF7-GFMB-FYSQ-P4MT'
                },
                {
                    title: 'EF SET English certificate C2 proficient 73/100',
                    issuer: 'EF SET',
                    date: 'mai/2024',
                    description: 'Certificado de proficiêencia C2 em inglês, com reading, listening e writing.',
                    link: 'https://cert.efset.org/nNeQak'
                }
            ]
        }
    },
};
