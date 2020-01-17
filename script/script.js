new Vue({

	el: '#app',
	data: {
		person: [],
		email: 'The Users Email Adress',
	},

	filters: {
		capitalize: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	},

	mounted() {
		axios
			.get('https://randomuser.me/api')
			.then(response => (this.person = response.data.results))
	},

	methods: {

		randPerson: function () {
			console.log(this.person);
		}

	},
})
