// [^/]+(?=/$|$)
// Should match anything you throw at it.

// If you want to look in a particular directory, use this:

// /directory.*/([^/]+)/?$

export default function getLastSlug(s) {
	const re = /[^/]+(?=\/$|$)/gi
	const slugs = s.match(re)
	return slugs ? slugs[0] : slugs
}
