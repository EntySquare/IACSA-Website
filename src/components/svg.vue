<template>
  <div class="down-arrow">
    <svg
      id="more-arrows"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <polygon
        class="arrow-middle"
        points="12,15 6,9 6.7,8.3 12,13.6 17.3,8.3 18,9"
      />
      <polygon
        class="arrow-bottom"
        points="12,20 5,13 6,12 12,18 18,12 19,13"
      />
    </svg>
  </div>
</template>
  
  <style lang="less">
.down-arrow {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

  #more-arrows {
    width: 40px;
    height: 40px;
  }

  @keyframes arrow-animation {
    0% {
      fill: #d9dadb;
      opacity: 0.2;
    }
    33.33% {
      fill: #d9dadb;
      opacity: 0.45;
    }
    66.66% {
      fill: #d9dadb;
      opacity: 0.8;
    }
    100% {
      fill: #d9dadb;
      opacity: 0.1;
    }
  }

  polygon.arrow-middle {
    animation: arrow-animation 1s linear infinite 0.4s;
  }

  polygon.arrow-bottom {
    animation: arrow-animation 1s linear infinite 0.8s;
  }
}
</style>
  