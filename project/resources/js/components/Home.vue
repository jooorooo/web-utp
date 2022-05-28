<template>
	<div :visible="!loading">
		<div v-masonry transition-duration="0.3s" item-selector=".card" column-width="320">		  

			<div v-masonry-tile class="card" style="width: 320px;" v-for="(item, index) in items">
				<img :src="item.image" class="card-img-top" :alt="item.title">
				<div class="card-body">
					<h5 class="card-title" v-html="item.title"></h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<router-link :to="'/about' + item.id">View more</router-link>
				</div>
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