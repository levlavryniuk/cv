
<script>
  import Header from '$lib/components/header.svelte';
  import Hero from '$lib/components/hero.svelte';
  import Experience from '$lib/components/experience.svelte';
  import Projects from '$lib/components/projects.svelte';
  import Skills from '$lib/components/skills.svelte';
  import Contact from '$lib/components/contact.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-background">
  <Header/>
  <main class="container mx-auto px-6 lg:px-8 max-w-5xl pt-16">
    <Hero/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
  </main>
</div>
