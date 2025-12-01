<script>
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<section id="about" class="pt-20 pb-20 lg:pt-28 lg:pb-28">
	<div class="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-start">
		<!-- Left Column - Name & Navigation -->
		<div class="lg:sticky lg:top-32">
			<h1 class="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">Lev Lavryniuk</h1>
			<p class="mt-3 text-xl text-primary font-medium">Fullstack software engineer</p>
			<p class="mt-4 text-muted-foreground leading-relaxed">
				Rust, TypeScript, web services/infrastructure/tooling.
			</p>

			<!-- Social Links -->
			<div class="flex items-center gap-4 mt-8">
				<a
					href="https://github.com/levlavryniuk"
					target="_blank"
					rel="noopener noreferrer"
					class="p-2 text-muted-foreground hover:text-primary transition-colors"
					aria-label="GitHub"
				>
					<Github size={22} />
				</a>
				<a
					href="https://linkedin.com/in/levlavryniuk"
					target="_blank"
					rel="noopener noreferrer"
					class="p-2 text-muted-foreground hover:text-primary transition-colors"
					aria-label="LinkedIn"
				>
					<Linkedin size={22} />
				</a>
				<a
					href="mailto:work@lavryniuk.com"
					class="p-2 text-muted-foreground hover:text-primary transition-colors"
					aria-label="Email"
				>
					<Mail size={22} />
				</a>
			</div>
		</div>

		<!-- Right Column - About -->
		<div class="space-y-6">
			<p class="text-foreground leading-relaxed text-lg">
				I write
				<span class="text-amber-500">Rust</span>
				and
				<span class="text-blue-400">TypeScript</span>. Fast things, reliable things. Currently at
				<a
					href="https://auk.edu.ua/en/"
					target="_blank"
					class="text-foreground hover:text-primary transition-colors underline underline-offset-4"
				>
					American University Kyiv
				</a>
				studying software engineering.
			</p>
			<p class="text-muted-foreground leading-relaxed">
				Web services/ui's, dev tooling, infrastructure, systems programming. Sometimes playing drums
				and computer games.
			</p>
		</div>
	</div>
</section>
