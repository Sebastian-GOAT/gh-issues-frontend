<script setup lang="ts">
const props = defineProps<{ size: number; }>();
const width = computed(() => props.size * 4);
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40" :width="width" :height="props.size" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="14" cy="14" r="3.5" fill="#10b981"/>
        <circle cx="26" cy="14" r="3.5" fill="#6366f1"/>
        <circle cx="20" cy="26" r="4" fill="#38bdf8"/>
        <path d="M14 17.5v2a3 3 0 0 0 3 3h3m6-5v2a3 3 0 0 1-3 3" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
        <text x="48" y="25" fill="#f8fafc" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="19" letter-spacing="-0.5px">
            <tspan class="fill-[#27272a] dark:fill-white">Git</tspan>
            <tspan fill="#10b981">Grasp</tspan>
        </text>
    </svg>
</template>