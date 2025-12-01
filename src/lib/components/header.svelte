<script>
	import { Menu, X } from 'lucide-svelte';

	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ name: 'About', href: '#about' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Contact', href: '#contact' }
	];

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 {isScrolled
		? 'bg-background/95 backdrop-blur-md border-b border-border'
		: 'bg-background'}"
>
	<nav class="container mx-auto px-6 lg:px-8 max-w-5xl">
		<div class="flex items-center justify-between h-16">
			<a href="/" class="font-mono text-lg font-semibold text-primary">
				{'levi'}
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						{item.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 text-muted-foreground hover:text-foreground"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden py-4 border-t border-border bg-background">
				{#each navItems as item}
					<a
						href={item.href}
						class="block py-3 text-muted-foreground hover:text-primary transition-colors"
						onclick={closeMobileMenu}
					>
						{item.name}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>
