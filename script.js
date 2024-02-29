/**
Toggle menu in small devices
*/
document.querySelector('.header__menu-btn').onclick = () => {
	const header = document.querySelector('.header')
	
	if (header.classList.contains('hide')) {
		header.classList.remove('hide')
	} else {
		header.classList.add('hide')
	}
}
