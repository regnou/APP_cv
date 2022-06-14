{#if $user}
	<a
		href="/profile"
		class="hover:border-prime hover:text-primary-600 flex h-7 w-7 items-center justify-center rounded-full border-2 border-dashed text-sm font-thin no-underline transition-colors"
	>
		{$user.email[0].toUpperCase()}
	</a>
{:else}
	<a href="/login" class="hover:text-prime w-6 transition-colors">
		<QuestionMarkIcon class="w-full" />
	</a>
{/if}

<script lang="ts">
	import {user} from '$lib/stores/user'
	import QuestionMarkIcon from '$lib/icons/question-mark.svg'
</script>
