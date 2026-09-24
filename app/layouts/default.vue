<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import useAuth from '~/composables/useAuth';

const { user, signInWithGithub, signOut } = useAuth();

const dropdownItems = computed<DropdownMenuItem[][]>(() => [
    [
        {
            label: user.value?.user_metadata?.preferred_username ?? 'Guest',
            avatar: {
                src: user.value?.user_metadata?.avatar_url,
                alt: user.value?.user_metadata?.preferred_username ?? 'Guest',
                loading: 'lazy'
            },
            type: 'label'
        }
    ],
    [
        {
            label: 'Profile',
            icon: 'i-lucide-user',
            to: '/profile'
        },
        {
            label: 'Github',
            icon: 'i-simple-icons-github',
            to: 'https://github.com',
            target: '_blank'
        }
    ],
    [
        {
            label: 'Signout',
            icon: 'i-lucide-log-out',
            onSelect: signOut,
            color: 'error'
        }
    ]
]);
</script>

<template>
    <UHeader>
        <template #left>
            <NuxtLink
                to="/"
                class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
            >
                Home
            </NuxtLink>
        </template>

        <template #right>
            <UDropdownMenu
                v-if="user"
                :items="dropdownItems"
                class="cursor-pointer"
            >
                <UAvatar
                    :src="user.user_metadata?.avatar_url"
                    :alt="user.user_metadata?.preferred_username ?? 'Guest'"
                />
            </UDropdownMenu>
            <UButton
                v-else
                @click="signInWithGithub()"
                icon="i-simple-icons-github"
                aria-label="Sign in with Github"
                color="neutral"
                variant="solid"
            >
                Sign in
            </UButton>
        </template>
    </UHeader>

    <UMain>
        <NuxtPage />
    </UMain>

    <USeparator icon="i-lucide-home" />

    <UFooter>
        <p class="text-sm text-muted">
            GitGrasp • © {{ new Date().getFullYear() }}
        </p>
    </UFooter>
</template>