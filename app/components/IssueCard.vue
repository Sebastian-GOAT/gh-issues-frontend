<script setup lang="ts">
import type { IssueCardDetails } from '~/types/issue-card-details';

const { issue } = defineProps<{ issue: IssueCardDetails }>();
</script>

<template>
    <NuxtLink :to="`/issue/${issue.owner}/${issue.repo}/${issue.issue_number}`">
        <UPageCard class="bg-[#f1f1f1] dark:bg-[#212125] cursor-pointer hover:scale-[1.005] transition-transform duration-200">
            <!-- Header -->
            <div class="flex justify-between">
                <div class="flex gap-2 items-center">
                    <UButton
                        icon="akar-icons:github-fill"
                        variant="subtle"
                        color="neutral"
                        size="sm"
                        :to="`https://github.com/${issue.owner}/${issue.repo}`"
                        target="_blank"
                    >
                        {{ issue.owner }}/{{ issue.repo }}
                    </UButton>
                    <span class="text-muted">
                        #{{ issue.issue_number }}
                    </span>
                    <UButton
                        variant="subtle"
                        size="sm"
                        class="pointer-events-none"
                    >
                        {{ issue.language }}
                    </UButton>
                    <UButton
                        v-for="tag in issue.tags"
                        :key="tag.title"
                        size="xs"
                        variant="ghost"
                        :style="{ 
                            color: tag.color,
                            backgroundColor: `color-mix(in srgb, ${tag.color} 12%, transparent)`
                        }"
                        class="pointer-events-none"
                    >
                        {{ tag.title }}
                    </UButton>
                </div>
                <UButton
                    icon="akar-icons:bookmark"
                    variant="ghost"
                    color="neutral"
                ></UButton>
            </div>
            <!-- Title -->
            <div>
                <h2 class="text-xl font-medium">{{ issue.title }}</h2>
            </div>
            <!-- Description -->
            <div>
                <p class="bg-[#e5e5e5] dark:bg-zinc-900 rounded-lg p-4 text-muted">
                    <span class="flex items-center gap-2"><Icon name="f7:doc-text" />Description</span>
                    <br>
                    {{ issue.description }}
                </p>
            </div>
        </UPageCard>
    </NuxtLink>
</template>