<template>
  <div class="INVESTORS">
    <div class="container">
      <div class="title">OUR INVESTORS & VALUED PARTNERS</div>
      <div class="img">
        <div class="itemImg">
          <img
            class="item"
            style="width: 145px; height: auto"
            src="@/assets/img/i1.png"
            alt=""
          />

          <img
            class="item"
            style="width: 142px; height: auto"
            src="@/assets/img/i2.png"
            alt=""
          />

          <img
            class="item"
            style="width: 236px; height: auto"
            src="@/assets/img/i3.png"
            alt=""
          />
        </div>
        <div class="itemImg">
          <img
            class="item"
            style="width: 176px; height: auto"
            src="@/assets/img/i4.png"
            alt=""
          />
          <img
            class="item"
            style="width: 173px; height: auto"
            src="@/assets/img/i5.png"
            alt=""
          />
          <img
            class="item"
            style="width: 150px; height: auto"
            src="@/assets/img/i6.svg"
            alt=""
          />
          <img
            class="item"
            style="width: 72px; height: auto"
            src="@/assets/img/i7.png"
            alt=""
          />
        </div>
        <div class="itemImg">
          <img
            class="item"
            style="width: 202px; height: auto"
            src="@/assets/img/i8.png"
            alt=""
          />
          <img
            class="item"
            style="width: 104px; height: auto"
            src="@/assets/img/i9.png"
            alt=""
          />
          <img
            class="item"
            style="width: 167px; height: auto"
            src="@/assets/img/i10.png"
            alt=""
          />
          <img
            class="item"
            style="width: 149px; height: auto"
            src="@/assets/img/i11.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
      
  <script lang="ts" setup>
</script>
      
  <style scoped lang="less">
.INVESTORS {
  width: 100%;
  background-color: #04051a;
  padding: 120px 80px;
  .title {
    font-family: "Basement Grotesque Bold",
      "Basement Grotesque Bold Placeholder", sans-serif;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: var(--extracted-r6o4lv, rgba(145, 150, 176, 0.4));
    margin-bottom: 64px;
  }
  .img {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .itemImg {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }
}
@media (max-width: 1279px) {
  .INVESTORS {
    padding: 80px 0;
    .img {
      .itemImg {
        gap: 40px;
      }
    }
  }
}
@media (max-width: 809px) {
  .INVESTORS {
    padding: 80px 0;
    .img {
      .itemImg {
        gap: 60px;
        flex-direction: column;
      }
    }
  }
}
</style>
      