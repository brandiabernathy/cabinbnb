
<template>
	<div class="px-20 py-10 grid xl:grid-cols-4 gap-6 xl:justify-between">
		<div v-for="property in properties" :key="property.id">
            <div class="aspect-square">
                <img :src="`${publicPath}images/` + property.image" class="h-full w-full object-cover rounded-lg">
            </div>
            <div class="mt-1.5">
                <div>{{ property.location.city }}, {{ property.location.state }}</div>
                <div>${{ property.price }} night</div>
            </div>
		</div>
	</div>
</template>


<script lang="ts">
import { Review } from '@/types/index.ts';
import properties from '@/properties-list.ts';
import reviews from '@/reviews.ts';

export default {
	name: 'Properties',
    data() {
		return {
			properties: properties,
            reviews: reviews,
            review_counts: [],
            publicPath: process.env.BASE_URL
		};
	},
}
</script>
