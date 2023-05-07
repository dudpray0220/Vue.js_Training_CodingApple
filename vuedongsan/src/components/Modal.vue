<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="modalStatus == true">
    <div class="white-bg">
      <h4>{{ oneRooms[roomNum].title }}</h4>
      <img :src="oneRooms[roomNum].image" alt="" class="modal-img" />\
      <p>{{ oneRooms[roomNum].content }}</p>
      <!-- <input type="text" @input="month = $event.target.value" name="" id="" /> -->
      <input type="text" v-model.number="month">
      <p>
        {{ month }}개월 선택함. 가격: {{ oneRooms[roomNum].price * month }}원
      </p>
      <button id="modal-close-btn" @click="$emit('closeModal'); { { month = 1; } }">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebModal",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(a) {
      if (a >= 13) {
        alert('13이상 입력 ㄴ');
        this.month = 1;
      } else if (isNaN(a) === true) {
        alert('글자 입력 ㄴ');
        this.month = 1;
      }
    }
  },
  props: {
    oneRooms: Array,
    roomNum: Number,
    modalStatus: Boolean,
  },
  updated() {
    if (parseInt(this.month) === 2) {
      alert("최소 3개월부터 입니다^^")
      this.month = 3;
    }
  }
};
</script>

<style></style>
