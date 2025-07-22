export default {
	'*': {
		outline: 0,
	},
	html: {
		fontSize: '10px',
	},
	body: {
		fontSize: '1.6rem',
		fontFamily: 'Arial, sans-serif',
		backgroundImage: "url('imgs/background.png')",
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
	},
	'::-webkit-scrollbar': {
		width: '0.8rem',
		height: '0.8rem',
		backgroundColor: 'transparent',
	},
	'::-webkit-scrollbar-track': {
		borderRadius: '8px',
		backgroundColor: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		borderRadius: '8px',
		border: '2px solid transparent',
		backgroundClip: 'content-box',
		backgroundColor: '#ecc300',
	},

	'body[data-scroll-lock]': {
		paddingRight: '0 !important',
	},
}
