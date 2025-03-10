<script lang="ts" setup></script>
<template>
  <div class="basic">
    <div class="profile_details">
      <div class="body_title">
        Profile details
      </div>
      <div class="profile_item profile">
        <div class="title">Profile</div>
        <div class="profile_details_body"></div>
      </div>
      <div class="profile_item username">
        <div class="title">Username</div>
        <div class="profile_details_body"></div>
      </div>
      <div class="profile_item email_addresses">
        <div class="title">Email addresses</div>
        <div class="profile_details_body"></div>
      </div>
      <div class="profile_item connected_account">
        <div class="title">Connected accounts</div>
        <div class="profile_details_body"></div>
      </div>
      <div class="profile_item web_wallets">
        <div class="title">Web3 wallets</div>
        <div class="profile_details_body"></div>
      </div>
    </div>
    <div class="connectes_accounts_title">
      <div class="conntctes_box"></div>
      <div class="conntctes_box"></div>
      <div class="conntctes_box"></div>
      <div class="conntctes_box"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.basic {
  // background: pink;
  width: 100%;
  padding: 20px;

  .profile_details {
    width: 100%;
    border-radius: 0.5rem;
    background: rgb(25, 25, 26);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
    padding: 28px 24px 32px;

    .body_title {
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      margin: 0px 0px 1rem;
      font-family: inherit;
      letter-spacing: normal;
      font-weight: 700;
      font-size: 1.0625rem;
      line-height: 1.41176;
    }

    .profile_item {
      box-sizing: border-box;
      display: flex;
      // -webkit-box-align: stretch;
      // align-items: stretch;
      // -webkit-box-pack: start;
      // justify-content: flex-start;
      // flex-flow: row-reverse;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      padding-top: 1rem;
      padding-bottom: 1rem;
      gap: 1.5rem;

      .title {
        box-sizing: border-box;
        margin: 0px;
        font-size: 0.8125rem;
        font-family: inherit;
        letter-spacing: normal;
        font-weight: 500;
        line-height: 1.38462;
        color: inherit;
      }
    }
  }
}
</style>
