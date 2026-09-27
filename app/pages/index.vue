<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import type { IssueCardDetails } from '~/types/issue-card-details';

const issuesSection = useTemplateRef<HTMLElement>('issuesSection');

function scrollToIssues() {

    if (!import.meta.client) return;

    const el = ((issuesSection.value as any).$el || issuesSection.value) as HTMLElement | undefined;
    if (!el) return;
    
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const { user, signInWithGithub } = useAuth();

const heroButtons = ref<ButtonProps[]>([
    {
        label: 'Sign in with Github',
        icon: 'akar-icons:github-fill',
        onClick: user ? () => navigateTo('/profile') : signInWithGithub
    },
    {
        label: 'Explore issues',
        trailingIcon: 'akar-icons:arrow-down',
        color: 'neutral',
        variant: 'subtle',
        onClick: scrollToIssues
    }
]);

const issues = ref<IssueCardDetails[]>(Array(6).fill(
    {
        title: 'My first issue',
        description: 'This is a test issue for me to display, it holds no real value.',
        owner: 'Sebastian-GOAT',
        repo: 'tscratch',
        issue_number: 324,
        language: 'TypeScript',
        tags: [
            { title: 'good-first-issue', color: '#00ffff' },
            { title: 'chore', color: '#ff00ff' }
        ]
    }
));
</script>

<template>

    <!-- HERO -->
    <UPageHero
        description="Search across millions of GitHub issues with filters: stars, tech stack, difficulty, and activity. Get context breakdowns and community fix discussions before you even clone the repo."
        :links="heroButtons"
    >
        <template #title>
            Find the issues worth solving. <span class="text-emerald-500 dark:text-emerald-400">In seconds, not hours.</span>
        </template>
    </UPageHero>

    <!-- TRENDING ISSUES -->
    <UPageList ref="issuesSection" class="gap-4">
        <IssueCard
            v-for="(issue, i) in issues"
            :key="i"
            :issue="issue"
        />
    </UPageList>

</template>