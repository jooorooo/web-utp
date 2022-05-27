<template>
	<div :visible="!loading">
		<div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
		  <div v-masonry-tile class="item" v-for="(item, index) in items">
			
			{{ item.title }}
			<img :src="item.image">
			{{ item.user }}
			
		  </div>
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