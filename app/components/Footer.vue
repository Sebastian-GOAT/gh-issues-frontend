<template>
    <UFooter class="py-4">
        <template #default>
            <p class="text-sm text-muted">
                GitGrasp • © {{ new Date().getFullYear() }}
            </p>
        </template>
        <template #right>
            <UColorModeSwitch />
        </template>
    </UFooter>
</template>