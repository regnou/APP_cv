import { writable } from 'svelte/store';

// type NavigationState = "loading" | "loaded" | null;
const navigationState = writable(null);
// export default writable<NavigationState>(null);

navigationState.subscribe((value) => {
	// console.log('a suscriber suscribe:: ', value);  // logs '0'
	console.log('update Menu Event:: ', value); // logs '0'
});

export default navigationState;
