<template>
    <div>
        <h2>Danh sách bài viết</h2>
        <ul>
            <li v-for="id in 3" :key="id">
                <router-link :to="{ name: 'BlogPost', params: { id: id } }">
                    Bài viết số {{ id }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default { name: 'BlogList' }
</script>