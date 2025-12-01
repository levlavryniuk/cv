<script>
	import { Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<section id="contact" class="py-20 pb-32">
	<h2 class="text-sm font-semibold uppercase tracking-wider text-primary mb-12">Contact</h2>

	<div class="max-w-xl">
		<p class="text-lg text-foreground leading-relaxed mb-8">
			If you'd like to discuss a project or just say hi, I'm always down to chat.
		</p>

		<div class="space-y-4">
			<a
				href="mailto:work@lavryniuk.com"
				class="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group"
			>
				<div class="p-2 rounded-md bg-primary/10 text-primary">
					<Mail size={20} />
				</div>
				<div>
					<p class="text-sm text-muted-foreground">Email</p>
					<p class="text-foreground group-hover:text-primary transition-colors">
						work@lavryniuk.com
					</p>
				</div>
			</a>

			<div class="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
				<div class="p-2 rounded-md bg-primary/10 text-primary">
					<Phone size={20} />
				</div>
				<div>
					<p class="text-sm text-muted-foreground">Phone</p>
					<p class="text-foreground">+380 67 731 54 12</p>
				</div>
			</div>

			<div class="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
				<div class="p-2 rounded-md bg-primary/10 text-primary">
					<MapPin size={20} />
				</div>
				<div>
					<p class="text-sm text-muted-foreground">Location</p>
					<p class="text-foreground">Ukraine</p>
				</div>
			</div>
		</div>
	</div>

	<footer class="mt-20 pt-8 border-t border-border">
		<p class="text-sm text-muted-foreground">
			© {new Date().getFullYear()} Lev Lavryniuk. Built with Svelte and Tailwind CSS.
		</p>
	</footer>
</section>
