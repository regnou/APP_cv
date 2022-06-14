import {writable} from 'svelte/store'

// const Suser = writable(null, () => {
// console.log('/ S_user / got a subscriber ! ');
// return () => console.log('no more subscribers');
// });

const Suser = writable(null) // 2

// Suser.subscribe((value) => {
// console.log('a suscriber suscribe:: ', value);
// }); // logs '0'

export default Suser

// import { writable } from 'svelte/store';
// // import firebase from 'firebase/app';
// const authStore = writable <{
// isLoggedIn,
// user,
// firebaseControlled} > ({
// isLoggedIn: false,
// firebaseControlled: false,
// });
// export default {
// subscribe, // : authStore.subscribe,
// set, // : authStore.set,
// };
