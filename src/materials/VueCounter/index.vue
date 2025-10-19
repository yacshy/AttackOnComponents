<template>
	<div>
		<h1>{{ count }}</h1>

		<Calc @add="add" @sub="sub" />
	</div>
</template>

<script setup>
import { ref } from 'vue'

import Calc from './Calc.vue'

const count = ref(0)

const add = () => {
	count.value++
}

const sub = () => {
	count.value--
}
</script>
