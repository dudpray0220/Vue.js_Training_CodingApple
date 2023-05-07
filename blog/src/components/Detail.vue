<template>
    <div>
        <h5 class="detail-title">{{ blogWords[$route.params.id].title }}</h5>
        <p class="detail-p">{{ blogWords[$route.params.id].content }}</p>
        <p class="detail-p">{{ blogWords[$route.params.id].date }}</p>
        <p class="detail-p">글번호: {{ blogWords[$route.params.id].number }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: {
        blogWords: Array,
    }
}
</script>

<style>
.detail-title {
    margin: 15px 0;
    padding: 15px 0;
}

.detail-p {
    padding: 10px 0;
    margin: 0;
}
</style>
