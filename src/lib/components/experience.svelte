<script>
	const experiences = [
		{
			period: '2025 — Present',
			title: 'Fullstack Developer',
			company: 'Lioneight',
			description:
				'Implemented UI based on Figma designs, created business logic in Go, and mentored junior developers. Working with a team of 9 people on complex web applications.',
			technologies: ['Go', 'Next.js', 'TypeScript']
		},
		{
			period: '2024 — 2025',
			title: 'Front-end Developer',
			company: 'Veido Solutions',
			description:
				'Built responsive user interfaces from Figma designs and integrated backend APIs. Collaborated with a team of 12 developers on large-scale projects.',
			technologies: ['Next.js', 'React', 'TypeScript']
		},
		{
			period: '2023 — 2024',
			title: 'Software Engineer',
			company: 'Kinston Trading',
			description:
				'Created custom websites based on client requirements using Rust. Iterated on evolving client needs and delivered performant solutions.',
			technologies: ['Rust', 'Web Servers']
		},
		{
			period: '2023 — 2024',
			title: 'Software Engineer',
			company: 'Freelance',
			description:
				'Built websites, scrapers, and custom software solutions for various clients. Delivered projects using Svelte, Next.js, and Rust.',
			technologies: ['Rust', 'Svelte', 'Next.js']
		},
		{
			period: '2022 — 2023',
			title: 'CTO & Lead Developer',
			company: 'Cleverize',
			description:
				'Led a team of 3 developers, architected and designed the product from the ground up. Made key technical decisions and ensured project delivery.',
			technologies: ['Next.js', 'Nest.js', 'TypeScript']
		}
	];
</script>

<section id="experience" class="py-20">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-primary mb-12">Experience</h2>

	<div class="space-y-12">
		{#each experiences as exp}
			<div class="group grid md:grid-cols-[180px,1fr] gap-4 md:gap-8">
				<div class="text-sm text-muted-foreground font-mono">{exp.period}</div>
				<div>
					<h3 class="text-foreground font-medium group-hover:text-primary transition-colors">
						{exp.title} ·
						<span class="hover:underline underline-offset-4">
							{exp.company}
						</span>
					</h3>
					<p class="mt-2 text-muted-foreground leading-relaxed">{exp.description}</p>
					<div class="flex flex-wrap gap-2 mt-4">
						{#each exp.technologies as tech}
							<span class="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
								{tech}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
