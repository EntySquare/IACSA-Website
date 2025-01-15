<script lang="ts" setup name="AppFooter">
import { ref } from 'vue'

const inputValue = ref('')
// 错误状态
const isError = ref(false)

const valueChange = () => {
  console.log('111111')

  if (inputValue.value.trim()) {
    // 如果输入框不为空，取消错误状态
    isError.value = false
  } else {
    // 如果输入框为空，设置为错误状态
    isError.value = false
  }
}
// 点击按钮的逻辑
const handleSubscribe = () => {
  if (!inputValue.value.trim()) {
    // 如果输入框为空，设置为错误状态
    isError.value = true
  } else {
    // 如果输入框不为空，取消错误状态
    isError.value = false
    // 可以在这里触发提交逻辑
    console.log('订阅成功:', inputValue.value)
  }
}
</script>
<script lang="ts">
export default {
  name: 'AppFooterVue'
}
</script>
<template>
  <footer class="footer">
    <div class="body_fdkjfjdfd">
      <div class="container">
        <div class="left_text">© 2025 BeWater. All Rights Reserved.</div>
        <div class="icon_dfd">
          <div class="item_icon">
            <svg
              t="1736240676705"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1499"
              width="32"
              height="32"
            >
              <path
                d="M778.41 96h141.142L611.2 448.427 973.952 928H689.92L467.456 637.141 212.906 928H71.68l329.813-376.96L53.504 96h291.243l201.088 265.856z m-49.535 747.52h78.208L302.25 176.043h-83.926z"
                fill="#383748"
                p-id="1500"
              ></path>
            </svg>
          </div>
          <div class="item_icon">
            <svg
              t="1736241009525"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5981"
              width="32"
              height="32"
            >
              <path
                d="M847.872 209.408c-0.512-0.512-0.512-1.024-1.024-1.024-61.952-28.672-127.488-48.64-194.56-60.416-1.024 0-2.56 0.512-3.072 1.536-8.704 16.384-16.896 32.768-24.064 49.664-72.704-10.752-145.92-10.752-218.624 0-7.168-16.896-15.36-33.792-24.576-49.664-0.512-1.024-2.048-1.536-3.072-1.536-67.072 11.776-132.608 31.744-194.56 60.416-0.512 0-1.024 0.512-1.536 1.024C58.368 394.24 24.576 574.976 40.96 753.152c0 1.024 0.512 1.536 1.024 2.048C114.688 808.96 195.072 849.92 281.088 876.032c1.024 0.512 2.56 0 3.584-1.024 18.432-25.088 34.816-51.712 48.64-79.36 0.512-1.536 0-3.072-1.536-4.096h-0.512c-25.6-9.728-50.688-21.504-74.752-35.328-1.536-1.024-2.048-2.56-1.024-4.096 0-0.512 0.512-0.512 1.024-1.024 5.12-3.584 9.728-7.68 14.848-11.776 1.024-0.512 2.048-1.024 3.072-0.512 156.672 71.168 326.144 71.168 480.768 0 1.024-0.512 2.048-0.512 3.072 0.512 4.608 4.096 9.728 7.68 14.848 11.776 1.536 1.024 1.536 3.072 0.512 4.096 0 0.512-0.512 0.512-1.024 1.024-24.064 13.824-48.64 25.6-74.752 35.328-1.536 0.512-2.56 2.56-1.536 4.096v0.512c14.336 27.648 30.72 54.272 48.64 79.36 0.512 1.024 2.048 1.536 3.584 1.024C834.56 849.92 915.456 808.96 988.16 755.712c0.512-0.512 1.024-1.536 1.024-2.048 19.968-206.336-33.28-385.536-141.312-544.256z m-491.008 435.2c-47.104 0-86.016-43.008-86.016-96.256s37.888-96.256 86.016-96.256 86.528 43.52 86.016 96.256c-0.512 53.248-38.4 96.256-86.016 96.256z m317.44 0c-47.104 0-86.016-43.008-86.016-96.256s37.888-96.256 86.016-96.256 86.528 43.52 86.016 96.256c0 53.248-37.888 96.256-86.016 96.256z"
                p-id="5982"
                fill="#383748"
              ></path>
            </svg>
          </div>
          <div class="item_icon">
            <svg
              t="1736241160318"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7072"
              width="32"
              height="32"
            >
              <path
                d="M417.28 795.733333 429.226667 615.253333 756.906667 320C771.413333 306.773333 753.92 300.373333 734.72 311.893333L330.24 567.466667 155.306667 512C117.76 501.333333 117.333333 475.306667 163.84 456.533333L845.226667 193.706667C876.373333 179.626667 906.24 201.386667 894.293333 249.173333L778.24 795.733333C770.133333 834.56 746.666667 843.946667 714.24 826.026667L537.6 695.466667 452.693333 777.813333C442.88 787.626667 434.773333 795.733333 417.28 795.733333Z"
                p-id="7073"
                fill="#383748"
              ></path>
            </svg>
          </div>
          <!-- <div class="item_icon"></div> -->
        </div>
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
.container {
  padding: 20px 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon_dfd {
  display: flex;
  gap: 20px;
}
</style>
