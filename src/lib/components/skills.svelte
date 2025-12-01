<script>
	const skillCategories = [
		{
			title: 'Main Languages',
			skills: ['Rust', 'TypeScript', 'Go']
		},
		{
			title: 'Related Skills',
			skills: [
				'Web Servers',
				'gRPC',
				'Protobuf',
				'Kafka/RabbitMQ',
				'CI/CD',
				'React/Next.js',
				'Svelte'
			]
		},
		{
			title: 'Other Skills',
			skills: ['Docker', 'Git', 'Unix', 'Databases', 'Cloud Infrastructure']
		},
		{
			title: 'Languages',
			skills: [
				'English (Professional)',
				'Ukrainian (Native)',
				'Russian (Native)',
				'German (Beginner)'
			]
		}
	];
</script>

<section id="skills" class="py-20">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-primary mb-12">
		Skills & Technologies
	</h2>

	<div class="grid md:grid-cols-2 gap-8">
		{#each skillCategories as category}
			<div>
				<h3 class="text-sm font-medium text-muted-foreground mb-4">{category.title}</h3>
				<div class="flex flex-wrap gap-2">
					{#each category.skills as skill}
						<span
							class="px-4 py-2 text-sm font-medium rounded-lg bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
						>
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
