<script>
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'sqlorm',
			description:
				'An ergonomic, lightweight SQL ORM for Rust with type-safe query building and powerful entity relationships.',
			technologies: ['Rust'],
			github: 'https://github.com/levlavryniuk/sqlorm'
		},
		{
			title: 'Cherrytrader',
			description:
				'A marketplace and fleet management solution for trucks, trailers and parts. Full-stack application with cloud infrastructure.',
			technologies: ['Go', 'Next.js', 'Google Cloud', 'Spanner'],
			link: 'https://cherrytrader.com/'
		},
		{
			title: 'Quicktips',
			description:
				'A platform that allows creators to receive one-time donations from their fans. Built with performance and reliability in mind.',
			technologies: ['Rust', 'SvelteKit', 'Postgres'],
			link: 'https://quicktips.me'
		},
		{
			title: 'Programming Language Interpreter',
			description:
				'My own programming language written in Rust. A work in progress exploring language design and compiler construction.',
			technologies: ['Rust'],
			github: 'https://github.com/levlavryniuk/vm-compiler'
		},
		{
			title: 'levi.rs',
			description:
				'A Rust HTTP 1.1 web server implementation. Learning systems programming by building from the ground up.',
			technologies: ['Rust'],
			github: 'https://github.com/levlavryniuk/levi.rs'
		}
	];
</script>

<section id="projects" class="py-20">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-primary mb-12">
		Featured Projects
	</h2>

	<div class="grid gap-6">
		{#each projects as project}
			<div
				class="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
			>
				<div class="flex items-start justify-between gap-4">
					<div class="flex-1">
						<h3
							class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
						>
							{project.title}
						</h3>
						<p class="mt-2 text-muted-foreground leading-relaxed">{project.description}</p>
						<div class="flex flex-wrap gap-2 mt-4">
							{#each project.technologies as tech}
								<span
									class="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
					<div class="flex items-center gap-2">
						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="p-2 text-muted-foreground hover:text-primary transition-colors"
								aria-label="View {project.title} on GitHub"
							>
								<Github size={20} />
							</a>
						{/if}
						{#if project.link}
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								class="p-2 text-muted-foreground hover:text-primary transition-colors"
								aria-label="Visit {project.title}"
							>
								<ExternalLink size={20} />
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<a
			href="https://github.com/levlavryniuk"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
		>
			<span>View more on GitHub</span>
			<ExternalLink size={16} />
		</a>
	</div>
</section>
