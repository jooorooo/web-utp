<template>
	<div :visible="!loading">
		<div v-for="item in items">
			{{ item.title }}
			<img :src="item.image">
			{{ item.user }}
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
		items: [],
		loading: true,
    }
  },
    mounted() {
        this.getItems()
    },
    methods: {
        getItems() {
            this.loading = true
            axios.get('/api/pins')
                .then(response => {
                    this.items = response.data.data
					this.loading = false
                })
                .catch(error => {
					this.loading = false
                    console.log(error)
                })
        },
    },
}
</script>