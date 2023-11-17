<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, Link } from "@inertiajs/vue3";
defineProps({
    blogs: Array,
});
</script>

<template>
    <Head title="Blog" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Blog
            </h2>
        </template>

        <div class="py-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link :href="route('blog.create')">
                    <PrimaryButton>Blogを作成</PrimaryButton>
                </Link>
            </div>
        </div>

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <table>
                <thead>
                    <tr>
                        <th class="border px-4 py-2 bg-amber-100">タイトル</th>
                        <th class="border px-4 py-2 bg-amber-100">
                            コンテンツ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="blog in blogs" :key="blog.id">
                        <td class="border px-4 py-2">{{ blog.title }}</td>
                        <td class="border px-4 py-2">{{ blog.content }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AuthenticatedLayout>
</template>
