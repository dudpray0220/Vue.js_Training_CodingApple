<template>
    <div class="list-div">
        <h5 @click="$router.push('/detail/0')" class="routerLink text-primary">{{ blogWords[0].title }}</h5>
        <p>{{ blogWords[0].content }}</p>
    </div>
    <div class="list-div">
        <h5 @click="$router.push('/detail/1')" class="routerLink text-primary">{{ blogWords[1].title }}</h5>
        <p>{{ blogWords[0].content }}</p>
    </div>
    <div class="list-div">
        <h5 @click="$router.push('/detail/2')" class="routerLink text-primary">{{ blogWords[2].title }}</h5>
        <p>{{ blogWords[0].content }}</p>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blogWords: Array
    }
}
</script>

<style>
.list-div {
    padding: 20px;
}

.routerLink:hover {
    cursor: pointer;
}
</style>