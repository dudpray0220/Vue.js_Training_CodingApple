<template>
  <!-- main -->
  <!-- <div v-for="(a, i) in oneRooms" :key="i">
    <img :src="a.image" class="room-img" alt="room" />
    <h4 @click="modalStatus = true; roomNum = i;">{{ a.title }}</h4>
    <h4 @click="roomNum = i">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
  </div> -->

  <div>
    <img :src="oneRoom.image" class="room-img" alt="room" />
    <h4 @click="$emit('openModal', oneRoom.id)">{{ oneRoom.title }}</h4>
    <p>{{ oneRoom.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "RoomDiv",
  props: {
    oneRoom: Object,
    roomNum: Number,
  },
};
</script>

<style></style>
