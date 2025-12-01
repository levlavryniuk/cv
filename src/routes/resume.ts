export const resumeData = {
  name: 'Lev Lavryniuk',
  title: 'Rust software engineer',
  summary:
    "Rust/Typescript mainer. Big enjoyer of creating dev tooling/infra with Rust. ",
  contact: {
    email: 'work@lavryniuk.com',
    phone: '+380 67 731 54 12',
    github: 'levlavryniuk',
    linkedin: 'LinkedIn',
    location: 'Kyiv, Ukraine'
  },
  skills: {
    "Main languages": ['Rust', 'Typescript'],
    "Related skills":['Web servers', 'gRPC', 'protobuf', 'kafka/rabbitmq', 'CI/CD', 'React/Next', "Svelte"],
    "Other Skills": ['Docker', 'Git', 'Unix', 'Databases', 'Golang']
  },
  experience: [
    {
      role: 'CTO & Lead Developer ( Next.js + Nest.js )',
      company: 'Cleverize',
      period: '2022 – 2023',
      description: ['Led a team of 3 developers', 'Architected and designed product']
    },
    {
      role: 'Software engineer ( Svelte, Next.js, Rust )',
      company: 'Freelance',
      period: '2023 – 2024',
      description: ['Created software ( websites, scrapers, software ) based on client needs']
    },
    {
      role: 'Software engineer ( Rust )',
      company: 'Kinston trading',
      period: '2023 – mid 2024',
      description: [
        'Created a website based on client requirements',
        'Iterated over new needs of the client'
      ]
    },
    {
      role: 'Front-end developer ( Next.js )',
      company: 'Veido solutions',
      period: '2024 – 2025',
      description: [
        'Implemented UI based on figma design',
        'Worked with a team of +-12 people',
        'Integrated backend api with UI'
      ]
    },
    {
      role: 'Fullstack developer ( Go + Next.js )',
      company: 'Lioneight',
      period: '2025 – end of 2025',
      description: [
        'Implemented UI based on figma design',
        'Created business logic implementation in Go ',
        'Mentored a junior developer',
        'Worked with a team of +-9 people'
      ]
    }
  ],
  projects: [
    {
      name: 'Sqlorm',
      stack: 'Rust',
      description:
        'An ergonomic, lightweight SQL ORM for Rust with type-safe query building and powerful entity relationships.',
      link: 'https://github.com/levlavryniuk/sqlorm'
    },
    {
      name: 'Cherrytrader',
      stack: 'Go, Next.js, Google cloud, Google spanner',
      description: 'A marketplace / fleet management solution for trucks, trailers and parts.',
      link: 'https://cherrytrader.com/'
    },
    {
      name: 'Quicktips',
      stack: 'Rust, SvelteKit, Postgres',
      description: 'A platform that allows creators to receive one-time donations from their fans.',
      link: 'https://quicktips.me'
    },
    {
      name: 'Programming language interpreter',
      stack: 'Rust',
      description: 'My own programming language written in Rust. WIP',
      link: 'https://github.com/levlavryniuk/vm-compiler'
    },
    {
      name: 'HTTP 1.1 Implementation',
      stack: 'Rust',
      description: 'A rust http 1.1 web server written in Rust.',
      link: 'https://github.com/levlavryniuk/levi.rs'
    },
    {
      name: 'And many more others',
      stack: 'Rust, Typescript',
      description: 'I don`t want this place to be cluttered. See my github',
      link: 'https://github.com/levlavryniuk'
    }
  ],
  education: {
    institution: 'American University Kyiv',
    degree: 'Bachelor of Software Engineering',
    period: 'Aug 2023 – present'
  },
  languages: [
    { lang: 'English', level: 'Professional Working Proficiency' },
    { lang: 'Ukrainian', level: 'Native' },
    { lang: 'Russian', level: 'Native' },
    { lang: "German", level: "Beginner" }
  ]
};
