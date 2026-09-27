<script setup lang="ts">
const route = useRoute();

const owner = computed(() => route.params.owner as string);
const repo = computed(() => route.params.repo as string);
const issue_number = computed(() => Number(route.params.issue_number));
</script>

<template>

{{ owner }}
{{ repo }}
{{ issue_number }}

</template>