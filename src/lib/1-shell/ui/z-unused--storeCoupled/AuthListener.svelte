<script>
	import {onMount} from 'svelte'
	import {getFbAuth} from '../../firebase/src/initFirebase.js.js'
	import {onAuthStateChanged} from 'firebase/auth'
	import {getCurrentUser} from '../../firebase/src/daoAuth'
	import {goto} from '$app/navigation'
	import Suser from '../../store/authStore'

	onMount(() => {
		const AUTH = getFbAuth() // 3
		addAuthListener(AUTH) /// !!!!
	})

	function addAuthListener(AUTH) {
		onAuthStateChanged(AUTH, async (user) => {
			if (user) {
				let mustRedirect = false // par default, on se dit, il est connecte donc redirect
				// we redirect just hte first case, if he was not conneted before
				if (!get(Suser)) mustRedirect = true

				const userLoggedIn = getCurrentUser(AUTH)
				Suser.set(userLoggedIn) // -3
				// https://firebase.google.com/docs/reference/js/firebase.User
				console.dir(Suser)

				console.log('...🙋‍♂️ AUTH > logged IN !' + user.displayName + ' : ' + user.uid)
				console.log(
					'id-token = ' +
						user.getIdToken() +
						' ' +
						'refresh-token = ' +
						user.refreshToken +
						' ' +
						'token-result = ' +
						user.getIdTokenResult()
				)

				// if (mustRedirect) await goto("/admin/projects"); // 1
				if (mustRedirect) await goto('/') // 1
				// toastr.success("Bienvenue " + user.displayName, "", {
				// timeOut: 1000,
				// progressBar: true,
				// positionClass: "toast-top-right",
				// });
			} else {
				let mustRedirect = false
				// if he was previously loggedin, so he is logging out and we redirect
				if (get(Suser)) mustRedirect = true
				// other cases, it s another event
				Suser.set(null) // -3
				console.log('... AUTH > 👤 NOBODY is logged in (or has just logged out) ', Suser)
				if (mustRedirect) await goto('https://www.axel.app/') // 1

				// toastr.success("Bienvenue ", "", {
				// timeOut: 1000,
				// progressBar: true,
				// positionClass: "toast-bottom-right",
				// });
			}
		})
	}
</script>
