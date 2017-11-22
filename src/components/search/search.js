export default {
	name: "PgSearch",
	data() {
		return {
			keywords: ''
		}
	},
	props: {
		placeholder: String
	},
	methods: {
		search() {
			this.$emit('search', this.keywords)
		}
	}

}