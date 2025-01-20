<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
import { createNewCampaign } from '@/apis/login'
const hoverInput = ref('')
import { toast } from 'vue-sonner'
const handleFocusin = (event: FocusEvent) => {
  const target = event.target as HTMLElement | null // 确保类型安全
  if (target && target.id) {
    hoverInput.value = `${target.id}`
    // console.log(`Focused on: ${target.id}`)
  }
}
const handleBlur = (event: FocusEvent) => {
  const target = event.target as HTMLElement | null // 确保类型安全
  if (target && target.id) {
    // console.log(`Focused on: ${target.id}`)
    hoverInput.value = ``
  }
}
const getwidthFN = () => {
  widthV.value = document.getElementById('edit_text_123')?.offsetWidth || 0
}
const widthV = ref(0)
onMounted(() => {
  nextTick(() => {
    getwidthFN()
    document.addEventListener('resize', getwidthFN)
  })
})
const timeVa = ref()
const data = reactive({
  campaign_type: '1',
  title: '',
  host_name: '',
  Description: '',
  CampaignMode: '0',
  start_time: 0,
  end_time: 0
})
function findEmptyFields(data: any) {
  return Object.keys(data).filter(key => {
    const value = data[key]
    if (typeof value === 'string') {
      return value.trim() === '' // 检查字符串是否为空
    } else if (typeof value === 'number') {
      return value === 0 // 检查数字是否为 0
    }
    return false // 对其他类型的字段不做处理
  })
}
const createFN = async () => {
  if (timeVa.value) {
    data.start_time = timeVa.value[0] / 1000
    data.end_time = timeVa.value[1] / 1000
  }
  const noshuru = findEmptyFields(data)
  if (noshuru.length != 0) {
    toast.error(`Please select the ${noshuru[0]}!`)
    return
  } else {
    const res = await createNewCampaign(data)
    console.log('res:', res)
  }
}
</script>
<template>
  <div class="newCompaigns">
    <div class="back">{{ '<  Back' }}</div>
    <div id="edit_text_123" class="edit_text">
      Edit Basic Campaign Information
    </div>
    <div class="body_lkjldsf" @focusin="handleFocusin" @focusout="handleBlur">
      <div class="item_box">
        <div class="item_title">Campaign Type</div>
        <div class="item_body">
          <div
            :class="['select_type', { type_active: data.campaign_type == '1' }]"
            @click="data.campaign_type = '1'"
          >
            <i></i>
            <img
              src="https://build.bewater.xyz/assets/hackathon.png"
              alt=""
              srcset=""
            />
            <span>Hackathon</span>
          </div>
          <div
            :class="['select_type', { type_active: data.campaign_type == '2' }]"
            @click="data.campaign_type = '2'"
          >
            <i></i>
            <img
              src="https://build.bewater.xyz/assets/workshop.png"
              alt=""
              srcset=""
            />
            <span>Worksop</span>
          </div>
        </div>
      </div>
      <div class="item_box hovdslkj">
        <div
          :class="[
            'item_title',
            { item_title_selgkdg: hoverInput == 'title_00' }
          ]"
        >
          Campaign Title
        </div>
        <div class="item_body">
          <div class="input_box">
            <input id="title_00" v-model="data.title" type="text" />
          </div>
        </div>
      </div>
      <div class="item_box hovdslkj">
        <div
          :class="[
            'item_title',
            { item_title_selgkdg: hoverInput == 'title_11' }
          ]"
        >
          Host Name
        </div>
        <div class="item_body">
          <div class="input_box">
            <input id="title_11" v-model="data.host_name" type="text" />
          </div>
        </div>
      </div>
      <div class="item_box hovdslkj">
        <div
          :class="[
            'item_title',
            { item_title_selgkdg: hoverInput == 'title_22' }
          ]"
        >
          Campaign Description
        </div>
        <div class="item_body">
          <div class="input_box">
            <textarea
              :style="{ maxWidth: `${widthV}px` }"
              id="title_22"
              type="text"
              v-model="data.Description"
              placeholder="Please write a brief introduction about this event, including the format and other relevant information. You may briefly describe the event's origin, development history, and emphasize its unique features and significance. The event introduction should be concise, factual, and provide participants, spectators, and media with a quick understanding of the event's details. Let's create a favorable public atmosphere for the smooth running of the event."
            />
          </div>
        </div>
      </div>
      <div class="item_box">
        <div class="item_title">Campaign mode</div>
        <div class="item_body">
          <div
            :class="['select_mode', { type_active: data.CampaignMode == '0' }]"
            @click="data.CampaignMode = '0'"
          >
            <i></i><span>ONLINE</span>
          </div>
          <div
            :class="['select_mode', { type_active: data.CampaignMode == '1' }]"
            @click="data.CampaignMode = '1'"
          >
            <i></i><span>Offline</span>
          </div>
          <div
            :class="['select_mode', { type_active: data.CampaignMode == '2' }]"
            @click="data.CampaignMode = '2'"
          >
            <i></i><span>Online + Offline</span>
          </div>
        </div>
      </div>
      <div class="item_box hovdslkj">
        <div
          :class="[
            'item_title',
            { item_title_selgkdg: hoverInput == 'd' || hoverInput == 's' }
          ]"
        >
          <span>Campaign Time</span>
        </div>
        <div class="item_body">
          <el-date-picker
            id="dsfdfdsfsd"
            v-model="timeVa"
            type="daterange"
            range-separator="To"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            format="YYYY/MM/DD"
            value-format="x"
          />
        </div>
      </div>
      <div class="item_box hovdslkj">
        <div>
          <span></span>
        </div>
        <div class="item_body item_body_btn">
          <div class="continue_btn button" @click="createFN">
            Create campaign
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.newCompaigns {
  padding: 100px 50px 0;
  width: 100%;
  .back {
    width: 100%;
    font-size: 16px;
    color: rgb(100 116 139 1);
  }
  .edit_text {
    font-size: 20px;
    padding-bottom: 16px;
    margin: 32px 0;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  }
  .body_lkjldsf {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .hovdslkj {
      &:hover {
        .item_title {
          transition: all 0.3s;
          color: @themeColor;
        }
        input,
        textarea {
          transition: all 0.3s;

          border: 1px solid @themeColor !important;
        }
      }
    }
    .item_box {
      .item_title {
        font-size: 12px;
        padding-bottom: 8px;
        color: rgb(100 116 139 1);
        display: flex;
        width: 100%;
        span {
          flex: 1;
        }
      }
      .item_title_selgkdg {
        color: @themeColor !important;
      }

      .item_body {
        display: flex;
        gap: 20px;
        .select_mode {
          height: 50px;
          border: 1px solid #ffffff33;
          border-radius: 5px;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 10px;
          i {
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 20px;
          }
          font-size: 14px;
        }
        .select_type {
          height: 96px;
          border: 1px solid #ffffff33;
          border-radius: 5px;
          flex: 1;
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 10px;
          i {
            width: 20px;
            height: 20px;
            background-color: #fff;
            border-radius: 20px;
          }
          img {
            height: 64px;
            width: 64px;
          }
          font-size: 14px;
        }
        .type_active {
          background-color: #ffffff1f;
          i {
            background: @themeColor;
            &::before {
              content: '';
              display: block;
              width: 8px;
              height: 8px;
              transform: translate(6px, 6px);
              border-radius: 10px;
              background: white;
            }
          }
        }
        .input_box {
          width: 100%;
          input {
            width: 100%;
            height: 38px;
            border-radius: 5px;
            padding: 0 10px;
            border: 1px solid #ffffff33;
            background: transparent;
            color: white;
            &:focus {
              border: 1px solid @themeColor;
            }
          }
          textarea {
            width: 100%;
            min-height: 38px;
            border-radius: 5px;
            padding: 0 10px;
            border: 1px solid #ffffff33;
            background: transparent;
            height: 120px;
            min-width: 100%;
            max-width: 100%;
            line-height: 1.5;
            color: white;
            &:focus {
              border: 1px solid @themeColor;
              outline: none;
            }
            &::placeholder {
              color: rgb(100 116 139 1);
            }
          }
        }
        .continue_btn {
          background-color: @themeColor;
          padding: 10px;
          color: #000;
          box-sizing: border-box;
          border-radius: 3px;
          margin: 0px;
          font-family: inherit;
          letter-spacing: normal;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .item_body_btn {
        justify-content: end;
      }
    }
  }
}
</style>
<style lang="less">
.el-date-editor {
  --el-input-focus-border: @themeColor !important;
  --el-input-focus-border-color: @themeColor !important;
  --el-input-hover-border: @themeColor !important;
  --el-input-hover-border-color: @themeColor !important;
  --el-input-text-color: rgb(100 116 139 1);
  --el-input-placeholder-color: rgb(100 116 139 1);
  --el-input-border-color: #ffffff33;
}
.hovdslkj {
  &:hover {
    .el-date-editor {
      transition: all 0.3s !important;
      --el-input-border-color: @themeColor !important;
    }
  }
}
</style>
