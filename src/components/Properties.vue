
<template>
	<div>
		<div v-for="(property, i) in properties" :key="i">
			<img :src="property.image">
            <div>{{ property.location.city }}, {{ property.location.state }}</div>
		</div>
	</div>
</template>


<script>
import properties from '@/properties-list.ts';

export default {
	name: 'Properties',
    data() {
		return {
			properties: properties,
		};
	},
}
</script>
