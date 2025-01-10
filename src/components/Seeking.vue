<template>
  <div class="button-container">
    <button class="glow-button">
      LET'S CONNECT →
    </button>
  </div>
</template>

<style scoped>
/* 外部容器 */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b0f1a; /* 背景色 */
  height: 100vh; /* 居中显示 */
}

/* 按钮样式 */
.glow-button {
  position: relative;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00ffff; /* 按钮文字颜色 */
  background: transparent;
  border: 2px solid #00ffff; /* 按钮边框颜色 */
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 光影环绕效果 */
.glow-button::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 25px; /* 与按钮边框一致 */
  background: conic-gradient(
    from 0deg,
    rgba(0, 255, 255, 0.4),
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 255, 255, 0.4)
  ); /* 光影渐变 */
  z-index: -1;
  animation: spin 2s linear infinite; /* 光影旋转动画 */
}

/* 鼠标悬停效果 */
.glow-button:hover {
  color: #0b0f1a;
  background-color: #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

/* 光影旋转动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
