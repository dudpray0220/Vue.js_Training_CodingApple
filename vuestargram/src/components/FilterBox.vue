<template>
    <!-- <div :class="filter + 'filter-item'" :style="{ backgroundImage: `url(${imageUrl})` }"></div> -->
    <div :class="`${filter} filter-item`" :style="{ backgroundImage: `url(${imageUrl})` }" @click="fire">
    </div>
</template>

<script>
export default {
    name: 'filterbox',
    props: {
        imageUrl: String,
        filter: String,
    },
    methods: {
        fire() {
            this.emitter.emit('event', this.filter)
        }
    },
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}

.filter-item:hover {
    cursor: pointer;
}
</style>