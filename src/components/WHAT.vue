<template>
  <section class="what-we-offer">
    <div class="container">
      <div class="section-header">
        <p class="sub-title">WHAT BEWATER OFFERS</p>
        <div class="main-title">Empower all to thrive</div>
      </div>

      <div class="cards-container">
        <div class="card">
          <div class="icon">
            <img class="iconImg" src="@/assets/img/1.png" alt="" />
          </div>
          <h3 class="card-title">Startup Project</h3>
          <p class="card-description">
            Walk with masters. Engage builders on BeWater from various
            communities to work together and develop apps or services based on
            your product.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img class="iconImg" src="@/assets/img/2.png" alt="" />
          </div>
          <h3 class="card-title">Traditional Business</h3>
          <p class="card-description">
            Get in on the latest business trends by sponsoring their campaigns.
            Don't miss any opportunity to expand your market with your genius
            ideas and talents. Better yet, host your own campaign on BeWater and
            watch your business grow.
          </p>
        </div>

        <div class="card">
          <div class="icon">
            <img class="iconImg" src="@/assets/img/3.png" alt="" />
          </div>
          <h3 class="card-title">Builder</h3>
          <p class="card-description">
            Walk the walk! Take part in real-world campaigns and get rewards.
            Get to meet outstanding builders during the process and build your
            portfolio with a track record.
          </p>
        </div>
      </div>

      <div class="BeWaterbg">
        <div class="BeWater">
          <div class="new-badge">NEW</div>
          <div class="content">
            <p class="subtitle">Introducing</p>
            <h1 class="title">BeWater Venture Studio</h1>
            <div class="learn-more-btn">LEARN MORE</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts" setup>
</script>
  
  <style scoped lang="less">
.what-we-offer {
  width: 100%;
  background-color: #04051a;
  padding: 120px 80px;
}

.section-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  margin-bottom: 60px;
  .sub-title {
    font-family: "Basement Grotesque Bold", serif;
    font-size: 20px;
    line-height: 32px;
    color: rgba(145, 150, 176, 0.4);
  }

  .main-title {
    font-size: 36px;
    line-height: 44px;
    font-family: "Basement Grotesque Bold", serif;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(
      0deg,
      rgba(206, 199, 255, 0.8) 0%,
      rgb(255, 255, 255) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 60px;
}

.card {
  background-image: linear-gradient(
    rgb(173, 255, 255) 0%,
    rgba(159, 250, 255, 0.96) 0.235%,
    rgba(129, 235, 254, 0.88) 1.28%,
    rgba(84, 205, 252, 0.76) 3.645%,
    rgba(36, 153, 249, 0.63) 7.84%,
    rgba(9, 87, 220, 0.48) 14.375%,
    rgba(9, 37, 165, 0.34) 23.76%,
    rgba(7, 9, 115, 0.21) 36.505%,
    rgba(14, 5, 76, 0.1) 53.12%,
    rgba(12, 4, 47, 0.03) 74.115%,
    rgba(11, 3, 38, 0) 100%
  );
  border-radius: 12px;
  padding: 48px 32px;
  box-shadow: rgba(255, 255, 255, 0.12) 0px 2px 12px 0px inset,
    rgba(255, 255, 255, 0.13) 0px 16px 24px 0px inset,
    rgba(36, 26, 153, 0) 0px 32px 88px 4px,
    rgba(171, 171, 217, 0) 0px 0.120725px 0.0603627px 0px,
    rgba(171, 171, 217, 0) 0px 1px 0.5px 0px;
  &:nth-child(2) {
    background-image: linear-gradient(
      rgb(173, 225, 255) 0%,
      rgba(159, 216, 255, 0.96) 0.235%,
      rgba(129, 195, 254, 0.88) 1.28%,
      rgba(84, 157, 252, 0.76) 3.645%,
      rgba(36, 104, 249, 0.63) 7.84%,
      rgba(9, 48, 220, 0.48) 14.375%,
      rgba(9, 19, 165, 0.34) 23.76%,
      rgba(13, 7, 115, 0.21) 36.505%,
      rgba(16, 5, 76, 0.1) 53.12%,
      rgba(13, 4, 47, 0.03) 74.115%,
      rgba(11, 3, 38, 0) 100%
    );
  }
  &:nth-child(3) {
    background-image: linear-gradient(
      rgb(228, 204, 250) 0%,
      rgba(219, 190, 249, 0.96) 0.235%,
      rgba(200, 157, 246, 0.88) 1.28%,
      rgba(172, 115, 242, 0.76) 3.645%,
      rgba(136, 64, 237, 0.63) 7.84%,
      rgba(93, 19, 221, 0.48) 14.375%,
      rgba(64, 14, 164, 0.34) 23.76%,
      rgba(42, 10, 118, 0.21) 36.505%,
      rgba(25, 6, 75, 0.1) 53.12%,
      rgba(14, 4, 47, 0.03) 74.115%,
      rgba(11, 3, 38, 0) 100%
    );
  }
  display: flex;
  flex-direction: column;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 60px 0;
  .iconImg {
    width: 194px;
    height: auto;
  }
}

.card-title {
  font-family: "Basement Grotesque Bold", serif;
  font-size: 20px;
  line-height: 34px;
  text-align: left;
  background-image: linear-gradient(
    0deg,
    rgba(206, 199, 255, 0.8) 0%,
    rgb(255, 255, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-description {
  max-width: 320px;
  font-family: "JetBrains Mono", monospace;
  line-height: 24px;
  text-align: left;
}
.BeWaterbg {
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;

  .BeWater {
    width: 100%;
    height: 680px;
    background: radial-gradient(
      142.79999999999998% 114.1491014233379% at 50% 6.3%,
      rgba(0, 0, 0, 0) 37.07627058029175%,
      rgb(50, 222, 237) 76.38376355171204%,
      rgba(255, 255, 255, 1) 100%
    );
    border-radius: 10px;
    box-shadow: inset 0 2px 12px #ffffff1f, inset 0 16px 24px #ffffff21,
      0 32px 88px 4px #241a9900,
      0 0.12072530715522589px 0.060362653577612946px #ababd900,
      0 1px 0.5px #ababd900;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .new-badge {
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      left: 30px;
      padding: 8px 16px;
      position: absolute;
      top: 30px;
      z-index: 1;
      font-family: "JetBrains Mono", monospace;
      font-size: 14px;
      font-weight: 800;
      color: rgb(255, 255, 255);
    }

    .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .subtitle {
      font-family: "Basement Grotesque Regular",
        "Basement Grotesque Regular Placeholder", sans-serif;
      font-size: 24px;
      color: rgb(202, 236, 241);
    }

    .title {
      font-size: 48px;
      font-family: "Basement Grotesque Bold",
        "Basement Grotesque Bold Placeholder", sans-serif;
      color: rgb(202, 236, 241);
      margin-bottom: 44px;
    }

    .learn-more-btn {
      background-color: #0ff;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 48px;
      font-family: "JetBrains Mono", monospace;
      line-height: 24px;
      color: rgb(15, 23, 42);
      text-transform: uppercase;
    }
  }
}

@media (max-width: 1279px) {
  .what-we-offer {
    padding: 80px;
    .container {
      .cards-container {
        flex-direction: column;
      }
      .card-description {
        max-width: 100%;
      }
    }
  }
}
@media (max-width: 809px) {
  .what-we-offer {
    padding: 60px 16px !important;
    .section-header {
      margin-bottom: 40px;
      .sub-title {
        font-size: 18px;
        line-height: 28px;
      }

      .main-title {
        font-size: 28px;
        line-height: 36px;
      }
    }
  }
}
</style>

