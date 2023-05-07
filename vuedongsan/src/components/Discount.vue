<template>
  <div class="discount">
    <h4>지금 결제하면 {{ perDiscount }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "DiscountBanner",
  props: {
    perDiscount: Number
  }
};
</script>

<style></style>
