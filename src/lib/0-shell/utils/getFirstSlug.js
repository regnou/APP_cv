// [^/]+(?=/$|$)
// Should match anything you throw at it.

// If you want to look in a particular directory, use this:

// /directory.*/([^/]+)/?$

export default function getFirstSlug(s) {
	console.log('actual debug: s: ', s);
	const arr = s.split('/');
	console.log('actual debug: arr[0]: ', arr[0]);

	// const re = /[^/]+(?=\/$|$)/gi;
	// const slugs = s.match(re);
	// return slugs? slugs[0] : slugs;
}
