<template>
  <div class="onboarding">
    <div class="board-top">
      <BoardTop></BoardTop>
      <div class="pagination">
        <div
          v-for="item in pages"
          :key="item.id"
          class="button"
          :class="{ active: item.active }"
        ></div>
      </div>
      <div class="big-text">Browse your menu and order directly</div>
    </div>
    <div class="board-bottom">
      <div class="small-text">
        Our app can send you everywhere, even space. For only $2.99 per month
      </div>
      <button class="next-page" @click="handleNextPage"></button>
    </div>
  </div>
</template>

<script>
import BoardTop from "@/components/BoardTop";
export default {
  components: { BoardTop },
  data() {
    return {
      pages: [
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
      ],
      totalPages: 1,
      currentPage: 1,
    };
  },
  watch: {
    currentPage: {
      handler(val) {
        this.pages.forEach((item) => (item.active = false));
        this.pages.find((item) => item.id == val).active = true;
      },
    },
  },
  methods: {
    handleNextPage() {
      if (this.currentPage < this.pages.length) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.onboarding {
  .board-top {
    // padding: 0px 33px 0px 32px;
    padding: 0px 19px;
    .pagination {
      margin-bottom: 33px;
      display: flex;
      justify-content: center;
      gap: 6px;

      .button {
        border-radius: 50%;
        height: 5px;
        width: 5px;
        background: rgba(255, 197, 41, 0.4);
        transform: rotate(180deg);
      }
      .active {
        border-radius: 5px;
        width: 25px;
        background: #ffc529;
      }
    }
    .big-text {
      font-weight: 400;
      font-size: 38.4737px;
      line-height: 116%;
      text-align: center;
      color: #ffffff;
    }
    margin-bottom: 12px;
  }
  .board-bottom {
    height: 215px;
    padding: 0px 19px;
    .small-text {
      font-weight: 400;
      font-size: 17px;
      line-height: 160%;
      text-align: center;
      color: #c9ccd1;
      margin-bottom: 44px;
    }
    .next-page {
      width: 67px;
      height: 67px;
      border-radius: 50%;
      border: none;
      background: #fe724c;
      box-shadow: 0px 25px 50px rgba(90, 76, 75, 0.6);
      margin-left: 134px;
      cursor: pointer;
      background-image: url("@/assets/arrow-right.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
