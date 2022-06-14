<footer class="flex items-center justify-center gap-2 py-2">
	Made with <PulsingHeart /> by
	<a href="https://magrippis.com">jmagrippis</a>
	<a
		href="https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="YouTube"
		class="hover:text-prime transition-colors"
	>
		<YouTubeIcon title="Johnny's YouTube channel" class="w-5" />
	</a>
	<a
		href="https://github.com/jmagrippis/with-svelte"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="hover:text-prime transition-colors"
	>
		<GitHubIcon class="w-5" />
	</a>
</footer>

<script lang="ts">
	import YouTubeIcon from '$lib/icons/youtube.svg'
	import GitHubIcon from '$lib/icons/github.svg'
	import PulsingHeart from './PulsingHeart.svelte'
</script>
