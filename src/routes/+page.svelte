<script>
	import { resumeData } from './resume';

	const githubUrl = `https://github.com/${resumeData.contact.github}`;
	const linkedinUrl =
		'https://www.reddit.com/r/StructuralEngineering/comments/m6z79d/i_hate_linkedin_i_hate_so_much_about_it_but/';

	function exportToPDF() {
		window.print();
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: resumeData.name,
		jobTitle: resumeData.title,
		email: resumeData.contact.email,
		telephone: resumeData.contact.phone,
		url: githubUrl,
		sameAs: [githubUrl, linkedinUrl],
		description: resumeData.summary,
		knowsAbout: Object.values(resumeData.skills).flat(),
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: resumeData.education.institution
		},
		worksFor: resumeData.experience.map((job) => ({
			'@type': 'Organization',
			name: job.company
		}))
	};
</script>

<svelte:head>
	<title>{resumeData.name} - {resumeData.title} | Professional Resume</title>
	<meta name="description" content="{resumeData.summary.substring(0, 155)}..." />
	<meta
		name="keywords"
		content="{Object.values(resumeData.skills)
			.flat()
			.join(', ')}, {resumeData.title}, software engineer, resume"
	/>
	<meta name="author" content={resumeData.name} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="{resumeData.name} - {resumeData.title}" />
	<meta property="og:description" content="{resumeData.summary.substring(0, 155)}..." />
	<meta property="og:url" content="https://yoursite.com" />
	<meta property="profile:first_name" content={resumeData.name.split(' ')[0]} />
	<meta property="profile:last_name" content={resumeData.name.split(' ').slice(1).join(' ')} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="{resumeData.name} - {resumeData.title}" />
	<meta property="twitter:description" content="{resumeData.summary.substring(0, 155)}..." />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://yoursite.com" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<button
	onclick={exportToPDF}
	class="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded print:hidden z-10 hover:bg-blue-700 transition-colors"
	aria-label="Export resume to PDF"
>
	Export PDF
</button>

<main class="font-sans bg-gray-100 text-gray-800 p-4 md:p-8 lg:p-12" role="main">
	<article
		class="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
		itemscope
		itemtype="https://schema.org/Person"
	>
		<div class="p-8 md:p-10">
			<!-- Header -->
			<header class="text-center mb-10 border-b pb-6">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900" itemprop="name">
					{resumeData.name}
				</h1>
				<h2 class="text-xl md:text-2xl text-blue-600 font-medium mt-2" itemprop="jobTitle">
					{resumeData.title}
				</h2>
			</header>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
				<!-- Left Column (Contact, Skills, Languages) -->
				<aside class="lg:border-r lg:pr-8">
					<!-- Contact Section -->
					<section class="mb-8">
						<h3 class="text-lg font-semibold uppercase border-b-2 border-gray-300 pb-2 mb-4">
							Contact Information
						</h3>
						<address class="space-y-3 text-sm not-italic">
							<div>
								<a
									href="mailto:{resumeData.contact.email}"
									class="flex items-center hover:text-blue-600"
									itemprop="email"
									aria-label="Email {resumeData.name}"
								>
									<svg
										class="w-4 h-4 mr-3"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path></svg
									>
									{resumeData.contact.email}
								</a>
							</div>
							<div class="flex items-center" itemprop="telephone">
								<svg
									class="w-4 h-4 mr-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path></svg
								>
								{resumeData.contact.phone}
							</div>
							<div>
								<a
									href={githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center hover:text-blue-600"
									itemprop="sameAs"
									aria-label="GitHub profile of {resumeData.name}"
								>
									<svg
										class="w-4 h-4 mr-3"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
											clip-rule="evenodd"
										></path></svg
									>
									{resumeData.contact.github}
								</a>
							</div>
							<div>
								<a
									href={linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center hover:text-blue-600"
									itemprop="sameAs"
									aria-label="LinkedIn profile of {resumeData.name}"
								>
									<svg
										class="w-4 h-4 mr-3"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
										><path
											d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
										></path></svg
									>
									{resumeData.contact.linkedin}
								</a>
							</div>
						</address>
					</section>

					<!-- Skills Section -->
					<section class="mb-8">
						<h3 class="text-lg font-semibold uppercase border-b-2 border-gray-300 pb-2 mb-4">
							Technical Skills
						</h3>
						<div class="space-y-4 text-sm">
							{#each Object.entries(resumeData.skills) as [category, skillsList] (category)}
								<div>
									<h4 class="font-bold capitalize text-gray-700">
										{category}
									</h4>
									<ul class="flex flex-wrap gap-2 mt-2" role="list">
										{#each skillsList as skill (skill)}
											<li>
												<span
													class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
													itemprop="knowsAbout">{skill}</span
												>
											</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</section>

					<!-- Languages Section -->
					<section>
						<h3 class="text-lg font-semibold uppercase border-b-2 border-gray-300 pb-2 mb-4">
							Languages
						</h3>
						<ul class="space-y-2 text-sm" role="list">
							{#each resumeData.languages as lang (lang)}
								<li>
									<span class="font-bold">{lang.lang}:</span>
									<span class="text-gray-600">{lang.level}</span>
								</li>
							{/each}
						</ul>
					</section>
				</aside>

				<!-- Right Column (Main Content) -->
				<div class="lg:col-span-2">
					<!-- Summary Section -->
					<section class="mb-8">
						<h3 class="text-xl font-bold text-gray-800 uppercase tracking-wider mb-4">
							Professional Summary
						</h3>
						<p class="text-base leading-relaxed" itemprop="description">{resumeData.summary}</p>
					</section>

					<!-- Experience Section -->
					<section class="mb-8">
						<h3 class="text-xl font-bold text-gray-800 uppercase tracking-wider mb-4">
							Work Experience
						</h3>
						<div class="space-y-6">
							{#each resumeData.experience as job (job)}
								<article
									class="work-experience"
									itemscope
									itemtype="https://schema.org/WorkExperience"
								>
									<div class="flex justify-between items-baseline">
										<h4 class="text-lg font-bold text-blue-700" itemprop="jobTitle">
											{job.role}
										</h4>
										<time class="text-sm font-medium text-gray-500" itemprop="datePublished">
											{job.period}
										</time>
									</div>
									<p
										class="text-md font-semibold text-gray-700"
										itemprop="hiringOrganization"
										itemscope
										itemtype="https://schema.org/Organization"
									>
										<span itemprop="name">{job.company}</span>
									</p>
									<ul class="mt-2 list-disc list-inside space-y-2 text-base" role="list">
										{#each job.description as point (point)}
											<li itemprop="description">{point}</li>
										{/each}
									</ul>
								</article>
							{/each}
						</div>
					</section>

					<!-- Education Section -->
					<section class="mb-8">
						<h3 class="text-xl font-bold text-gray-800 uppercase tracking-wider mb-4">Education</h3>
						<div itemscope itemtype="https://schema.org/EducationalOccupationalCredential">
							<h4 class="text-lg font-bold" itemprop="educationalCredentialAwarded">
								{resumeData.education.degree}
							</h4>
							<p
								class="text-md font-semibold text-gray-700"
								itemprop="recognizedBy"
								itemscope
								itemtype="https://schema.org/EducationalOrganization"
							>
								<span itemprop="name">{resumeData.education.institution}</span>
							</p>
							<time class="text-sm text-gray-500" itemprop="dateCreated"
								>{resumeData.education.period}</time
							>
						</div>
					</section>

					<!-- Projects Section -->
					<section class="mb-8">
						<h3 class="text-xl font-bold text-gray-800 uppercase tracking-wider mb-4">
							Featured Projects
						</h3>
						<div class="space-y-6">
							{#each resumeData.projects as project (project)}
								<article itemscope itemtype="https://schema.org/SoftwareApplication">
									<h4 class="text-lg font-bold" itemprop="name">{project.name}</h4>
									<p
										class="text-sm font-semibold text-blue-600 mb-1"
										itemprop="programmingLanguage"
									>
										{project.stack}
									</p>
									<p class="text-base mb-1" itemprop="description">{project.description}</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-gray-600 hover:text-blue-600 hover:underline"
										itemprop="url"
										aria-label="View {project.name} project">{project.link}</a
									>
								</article>
							{/each}
						</div>
					</section>
				</div>
			</div>
		</div>
	</article>
</main>

<!-- Same styles as before -->
<style>
	@media print {
		.bg-gray-100 {
			background: white !important;
		}
		.shadow-2xl {
			box-shadow: none !important;
		}
		.bg-white {
			background: white !important;
		}

		.max-w-4xl {
			max-width: none !important;
			margin: 0 !important;
			padding: 0.5in !important;
		}

		.p-8,
		.md\:p-10 {
			padding: 0.3in !important;
		}
		.p-4,
		.md\:p-8,
		.lg\:p-12 {
			padding: 0 !important;
		}

		a {
			color: #1e40af !important;
			text-decoration: underline;
		}

		.lg\:grid-cols-3 {
			grid-template-columns: 1fr 2fr !important;
			gap: 1.5rem !important;
		}

		section {
			break-inside: avoid;
		}
		.space-y-6 > div {
			break-inside: avoid;
		}

		.text-4xl,
		.md\:text-5xl {
			font-size: 2rem !important;
		}
		.text-xl,
		.md\:text-2xl {
			font-size: 1.25rem !important;
		}

		.rounded-lg,
		.rounded-full {
			border-radius: 0 !important;
		}

		.bg-blue-100 {
			background: #e5e7eb !important;
			border: 1px solid #9ca3af !important;
		}

		.print\:hidden {
			display: none !important;
		}
	}

	body {
		-webkit-print-color-adjust: exact;
	}

	.leading-relaxed {
		line-height: 1.4 !important;
	}
</style>
