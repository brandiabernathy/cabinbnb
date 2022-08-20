
<template>
	<div class="px-20 py-10 grid xl:grid-cols-4 gap-6 xl:justify-between">
		<div v-for="property in properties" :key="property.id">
            <div class="aspect-square">
                <img :src="`${publicPath}images/` + property.image" class="h-full w-full object-cover rounded-lg">
            </div>
            <div class="flex justify-between items-start mt-1.5">
                <div>
                    <div>{{ property.location.city }}, {{ property.location.state }}</div>
                    <div>${{ property.price }} night</div>
                </div>
                <div class="flex items-center">
                    {{ property.rating }}
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="height: 12px; width: 12px; fill: currentcolor; margin-left: 5px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                </div>
            </div>
		</div>
	</div>
</template>


<script lang="ts">
import properties from '@/properties-list';
import reviews from '@/reviews';
import { calculateRatings } from '@/utils';

export default {
	name: 'Properties',
    data() {
		return {
			properties: properties,
            reviews: [],
            review_counts: [],
            publicPath: process.env.BASE_URL
		};
	},
    created() {
        this.reviews = calculateRatings();

        for(let i = 0; i < this.properties.length; i++) {
            for(let n = 0; n < this.reviews.length; n++) {
                if(this.reviews[n].propertyId == this.properties[i].id) {
                    this.properties[i].rating = this.reviews[n].rating;
                }
            }
        }
    }
}
</script>
