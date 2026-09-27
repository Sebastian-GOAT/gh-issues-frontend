<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui';

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
            to: `https://github.com/${user.value?.user_metadata?.preferred_username}`,
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

const navigationItems = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        icon: 'akar-icons:home',
        to: '/'
    },
    {
        label: 'Explore',
        icon: 'akar-icons:search',
        to: '/explore'
    },
    {
        label: 'Github',
        icon: 'akar-icons:github-fill',
        to: `https://github.com/${user.value?.user_metadata?.preferred_username ?? ''}`,
        target: '_blank'
    }
]);
</script>

<template>
    <UHeader>
        <template #left>
            <NuxtLink
                to="/"
                class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
            >
                <Logo :size="42" />
            </NuxtLink>
        </template>

        <template #default>
            <UNavigationMenu :items="navigationItems" />
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
</template>