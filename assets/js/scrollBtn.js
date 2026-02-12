document.addEventListener('DOMContentLoaded', () => {

	const $btn = document.querySelector('.scroll-btn')

	if (!$btn) return;

	// State
	const state = {
		positionY: 0,
	}

	// Scroll
	window.addEventListener('scroll', e => {
		state.positionY = window.scrollY / window.innerHeight * 2;

		if (window.scrollY > 100) {
			$btn.classList.add('_top')
		} else {
			$btn.classList.remove('_top')
		}
	})

	$btn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	})
})
