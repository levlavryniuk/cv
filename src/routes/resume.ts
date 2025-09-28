export const resumeData = {
	name: 'Lev Lavryniuk',
	title: 'Software engineer',
	summary:
		"I'm a Software Engineer who loves building things that work well and fast. While I've spent a lot of time in the TypeScript web world creating scalable web apps, my heart lies in making performance-critical services with Rust. I enjoy leading projects, helping others grow, and making sure the software I deliver is top-shelf.",
	contact: {
		email: 'lev@lavryniuk.com',
		phone: '+380 67 731 54 12',
		github: 'levlavryniuk',
		linkedin: 'LinkedIn',
		location: 'Kyiv, Ukraine'
	},
	skills: {
		languages: ['TypeScript', 'Rust', 'Go'],
		frontend: ['Svelte', 'React', 'Vue', 'TailwindCSS'],
		backend: ['Rust (axum)', 'Go (echo)', 'Nodejs (nest)'],
		databases: ['Postgres', 'SQLite', 'Mongo', 'Google spanner'],
		tools: ['Docker', 'Prometheus', 'Git', 'Unix']
	},
	experience: [
		{
			role: 'CTO & Lead Developer ( Next.js + Nest.js )',
			company: 'Cleverize',
			period: '2022 – 2023',
			description: ['Led a team of 3 developers', 'Architected and designed product']
		},
		{
			role: 'Software engineer',
			company: 'Freelance',
			period: '2023 – 2024',
			description: ['Created software ( websites, scrapers, software ) based on client needs']
		},
		{
			role: 'Software engineer',
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
				'Integrated backend with UI'
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
		{ lang: 'Russian', level: 'Native' }
	]
};
