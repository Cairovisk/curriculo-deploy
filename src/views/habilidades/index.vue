<template>
    <div class="content">
        <Header/>
        <Content/>
    </div>
</template>

<script>
import Header from '@/components/Body/Habilidades/Header.vue'
import Content from '@/components/Body/Habilidades/Content.vue'
export default {
    components: { Header, Content }
}
</script>

<style lang="scss" scoped>
.content {
    padding-top: 60px;
}
</style>