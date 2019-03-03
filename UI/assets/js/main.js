const app = {
	initFbLogin: () => {
		const fbBtn = document.getElementById('fb_btn');

		const fbLogin = () => {
			alert('you want to login with facebook');
		}

		fbBtn.addEventListener('click', fbLogin);
	},
	initEmailLogin: () => {
		const emBtn = document.getElementById('email_btn');

		const emailLogin = () => {
			alert('you want to login with email');
		}

		emBtn.addEventListener('click', emailLogin);
	},
	initGoogleLogin: () => {
		const ggBtn = document.getElementById('gg_btn');

		const googleLogin =() => {
			alert('you want to login with google');
		}

		ggBtn.addEventListener('click', googleLogin);
	}
};