<script lang="ts" setup>
import { ref } from "vue";

const inputValue = ref("");
// 错误状态
const isError = ref(false);

const valueChange = () => {
  console.log("111111");

  if (inputValue.value.trim()) {
    // 如果输入框不为空，取消错误状态
    isError.value = false;
  } else {
    // 如果输入框为空，设置为错误状态
    isError.value = false;
  }
};
// 点击按钮的逻辑
const handleSubscribe = () => {
  if (!inputValue.value.trim()) {
    // 如果输入框为空，设置为错误状态
    isError.value = true;
  } else {
    // 如果输入框不为空，取消错误状态
    isError.value = false;
    // 可以在这里触发提交逻辑
    console.log("订阅成功:", inputValue.value);
  }
};
</script>

<template>
  <footer class="footer">
    <div class="footer_BG">
      <div class="container">
        <div class="con">
          <div class="footer-left">
            <img
              src="https://framerusercontent.com/images/KzmEYJoH5H584cEIyvf1sjE69A.svg"
              alt="BeWater Logo"
              class="footer-logo"
            />
            <p class="footer-tagline">I Build Therefore I Am.</p>
            <p class="footer-subscribe-text">
              Subscribe our newsletter for upcoming news.
            </p>
            <div class="footer-subscribe">
              <el-input
                :class="{ 'error-border': isError }"
                v-model="inputValue"
                @input="valueChange"
                placeholder="your@enail.com"
              />
              <div class="subscribe-button" @click="handleSubscribe">→</div>
            </div>
          </div>

          <div class="footer-links">
            <div class="footer-column">
              <div class="cloumnTitle">Docs</div>
              <ul>
                <li><a href="#">Join a campaign</a></li>
                <li><a href="#">Host a campaign</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <div class="cloumnTitle">Venture Studio</div>
              <ul>
                <li><a href="#">Submit Project</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <div class="cloumnTitle">Company</div>
              <ul>
                <li><a href="#">Medium</a></li>
                <li><a href="#">Press Kit</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <div class="cloumnTitle">Resources</div>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="footer-bottom">
          <p>2024 BEWATER. ALL RIGHTS RESERVED.</p>
          <!-- 右下角图标 -->
          <div class="footer-icons">
            <a href="#" class="icon"
              ><img
                style="width: 21px; height: auto"
                src="@/assets/img/twitter.svg"
                alt="Icon 1"
            /></a>
            <a href="#" class="icon"
              ><img
                style="width: 20px; height: auto"
                src="@/assets/img/Discord.svg"
                alt="Icon 2"
            /></a>
            <a href="#" class="icon"
              ><img
                style="width: 20px; height: auto"
                src="@/assets/img/telegram.svg"
                alt="Icon 3"
            /></a>
            <a href="#" class="icon"
              ><img
                style="width: 28px; height: auto"
                src="@/assets/img/medium.svg"
                alt="Icon 4"
            /></a>
          </div>
        </div>
        <div class="bg"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 100%;
  background-color: #04051a;
  color: #d9e1f2;
  position: relative;
}
.footer_BG {
  padding: 32px;
  position: relative;

  height: 100%;
  width: 100%;
  overflow: hidden;
}
.container {
}
.bg {
  // width: 100%;
  // height: 100%;
  // position: absolute;
  // overflow: hidden;
  // background: linear-gradient(
  //   232.153deg,
  //   rgb(206, 106, 156) 0%,
  //   rgb(121, 73, 208) 24.0587%,
  //   rgb(49, 74, 232) 75.0238%,
  //   rgb(54, 200, 255) 100%
  // );
  // filter: blur(135.938px);
  // border-radius: 100%;
  // transform: translateY(-30%);
  // opacity: 1;
  background: linear-gradient(
    232.153deg,
    rgb(252, 130, 191) 0%,
    rgb(139, 77, 255) 24.0587%,
    rgb(40, 67, 245) 75.0238%,
    rgb(35, 190, 246) 100%
  );
  filter: blur(105.938px);
  border-radius: 100%;
  transform: translateX(-50%);
  opacity: 1;
  aspect-ratio: 1 / 1;
  bottom: -1290px;
  flex: none;
  height: var(--framer-aspect-ratio-supported, 1338px);
  left: 50%;
  overflow: hidden;
  position: absolute;
  width: 1338px;
  will-change: var(--framer-will-change-override, transform);
  z-index: 0;
}
.con {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  /* 左侧内容样式 */
  .footer-left {
    flex: 1;
    min-width: 280px;

    .footer-logo {
      width: 120px;
      margin-bottom: 8px;
    }

    .footer-tagline {
      font-family: "Basement Grotesque Bold",
        "Basement Grotesque Bold Placeholder", sans-serif;
      font-size: 12px;
      line-height: 20px;
      color: rgb(248, 250, 252);
      margin-bottom: 32px;
    }

    .footer-subscribe-text {
      font-family: "JetBrains Mono";

      font-size: 12px;
      color: rgba(248, 250, 252, 1);
      margin-bottom: 16px;
    }

    .footer-subscribe {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      opacity: 1;
      display: flex;
      align-items: center;
      font-family: "JetBrains Mono Regular", "JetBrains Mono", Inter, system-ui,
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      width: 312px;
      height: 52px;
      :deep(.el-input__wrapper) {
        background-color: transparent;
        border-radius: 0;
        box-shadow: none;
        padding: 1px 11px;
        width: 100%;
        height: 100%;
      }
      .el-input {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        border: 1px solid transparent !important; /* 使用红色边框 */
      }
      .error-border {
        border: 1px solid red !important; /* 使用红色边框 */
      }
      :deep(.el-input__inner) {
        color: rgba(255, 255, 255, 1);
      }
      // placeholder颜色
      :deep(.el-input__inner::placeholder) {
        color: rgba(255, 0.5);
      }

      .subscribe-button {
        width: 48px;
        height: 51px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "JetBrains Mono Regular", "JetBrains Mono", Inter,
          system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .footer-links {
    display: flex;
    gap: 40px;
    flex: 2;
    min-width: 400px;

    .footer-column {
      flex: 1;

      .cloumnTitle {
        font-family: "JetBrains Mono";
        font-size: 16px;
        font-weight: 700;
        color: rgba(248, 250, 252, 1);
        margin-bottom: 16px;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 16px;

          a {
            color: #9b96b0;
            text-decoration: none;
            font-size: 14px;
            font-family: "JetBrains Mono", monospace;
            font-size: 14px;
            line-height: 20px;
            &:hover {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
.line {
  margin: 32px 0;
  width: 100%;
  height: 1px;
  background: radial-gradient(
    50% 56400% at 50% 100.001%,
    rgba(169, 163, 194, 0.24) 0%,
    rgba(169, 163, 194, 0) 100%
  );
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    color: #69728e;
  }
  /* 右侧图标 */
  .footer-icons {
    display: flex;
    gap: 24px;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
@media (max-width: 1279px) {
  .footer {
    .con {
      flex-direction: column;
      gap: 64px;
    }
  }
}
@media (max-width: 809px) {
  .footer {
    .footer-bottom,
    .footer-links {
      flex-direction: column;
      gap: 32px;
    }
  }
}
@media (max-width: 370px) {
  .footer {
    .footer-subscribe {
      width: 280px !important;
    }
  }
}
</style>
