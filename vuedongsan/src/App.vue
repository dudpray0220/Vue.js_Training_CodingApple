<template>
  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <!-- <div class="start" :class="{ end: modalStatus }">
    <Modal @closeModal="modalStatus = false" :oneRooms="oneRooms" :roomNum="roomNum" :modalStatus="modalStatus" />
  </div> -->
  <transition name="fade">
    <Modal @closeModal="modalStatus = false" :oneRooms="oneRooms" :roomNum="roomNum" :modalStatus="modalStatus" />
  </transition>
  <Discount :perDiscount="perDiscount" v-if="showDiscount == true" />

  <button class="sort-btn" @click="priceSort">최저가순정렬</button>
  <button class="sort-btn" @click="priceSortHigh">최고가순정렬</button>
  <button class="sort-btn" @click="stringSort">이름순정렬</button>
  <button class="sort-btn" @click="sortBack">되돌리기</button>

  <RoomDiv @openModal="modalStatus = true; roomNum = i;"
    v-for="(oneRoom, i) in                                                                                                                                                       oneRooms                                                                                                                                                      "
    :key="i" :oneRoom="oneRoom" :roomNum="roomNum" />
</template>

<script>
// import func from 'vue-editor-bridge';
import data from "./assets/oneroom";
import Discount from "./components/Discount.vue";
import Modal from "./components/Modal.vue";
import RoomDiv from "./components/RoomDiv.vue";

export default {
  name: "App",
  data() {
    return {
      perDiscount: 30,
      showDiscount: true,
      onRoomsOriginal: [...data],
      roomNum: 0,
      oneRooms: data,
      modalStatus: false,
      alertNum: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increse1() {
      this.alertNum[0]++;
    },
    increse2() {
      this.alertNum[1]++;
    },
    increse3() {
      this.alertNum[2]++;
    },
    priceSort() {
      this.oneRooms.sort(function (a, b) {
        return a.price - b.price;
      })
    },
    priceSortHigh() {
      this.oneRooms.sort(function (a, b) {
        return b.price - a.price;
      })
    },
    stringSort() {
      this.oneRooms.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      })
    },
    sortBack() {
      this.oneRooms = [...this.onRoomsOriginal]
    }
  },
  mounted() {
    if (this.perDiscount > 0) {
      const timerId = setInterval(() => {
        this.perDiscount--;

        if (this.perDiscount <= 0) {
          clearInterval(timerId);
          this.showDiscount = false;
        }
      }, 1000);
    } else {
      this.showDiscount = false;
    }
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    RoomDiv: RoomDiv,
  },
};
</script>

<style>
body {
  margin: 0%;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
}

#modal-close-btn {
  padding: 5px 15px;
  font-size: 1rem;
  border: 1px solid black;
  background-color: antiquewhite;
  border-radius: 10%;
  position: absolute;
  bottom: 1%;
  right: 0.5%;
}

#modal-close-btn:hover {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 15px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 40%;
  margin-top: 40px;
}

.modal-img {
  width: 50%;
  height: 30%;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.start {
  opacity: 0;
  transition: opacity 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: opacity 0.5s, transform 1s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-active {
  transition: opacity 0.5s, transform 1s;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-1000px);
}

.sort-btn {
  padding: 5px 10px;
  margin: 5px 1rem;
}
</style>
