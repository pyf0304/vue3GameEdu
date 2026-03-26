<template>
  <div class="inbox-list-modal">
    <div class="modal-content">
      <img src="/imageswu/ShiXinDa/inbox-list-title.png" alt="收件箱标题" class="modal-title" />
      <button class="close-button" @click="$emit('close')" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- List Title -->
      <h2 class="list-title">收件列表</h2>

      <!-- Inbox Messages List -->
      <div class="inbox-list">
        <ul>
          <li v-for="(message, index) in messages" :key="message.id" @click="openMessage(message)">
            <span class="serial-number">{{ index + 1 }}.</span>
            <span class="message-title">{{ message.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import InboxMessageContent from './InboxMessageContent.vue';
  import { Message } from '@/views/DriftingBottleGame/ShiXinDaVueShare';

  export default defineComponent({
    name: 'InboxList',
    components: {
      InboxMessageContent,
    },
    setup(_, { emit }) {
      const messages = ref<Message[]>([
        { id: 1, title: '欢迎使用师信达', from: '张老师', content: '感谢您注册师信达平台...' },
        { id: 2, title: '系统更新通知', from: '李老师', content: '我们已经更新了系统...' },
        { id: 3, title: '活动邀请', from: '王老师', content: '邀请您参加我们的特别活动...' },
        { id: 4, title: '课程安排', from: '刘老师', content: '本周的课程安排如下...' },
        { id: 5, title: '考试通知', from: '陈老师', content: '下周将举行期中考试...' },
        { id: 6, title: '作业提交', from: '赵老师', content: '请按时提交本周的作业...' },
        { id: 7, title: '成绩发布', from: '孙老师', content: '您的成绩已发布，请查看...' },
        { id: 8, title: '讲座邀请', from: '周老师', content: '诚邀您参加即将举行的讲座...' },
        { id: 9, title: '假期安排', from: '吴老师', content: '以下是下个月的假期安排...' },
        { id: 10, title: '反馈意见', from: '郑老师', content: '感谢您对师信达的支持与反馈...' },
        // 添加更多收件信息
      ]);

      const openMessage = (message: Message) => {
        emit('open-message', message);
      };

      return {
        messages,
        openMessage,
      };
    },
  });
</script>

<style scoped>
  .inbox-list-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1002; /* 确保位于其他模态窗口之上 */
  }

  .modal-content {
    position: relative;
    width: 600px;
    max-width: 90%;
    background: url('/imageswu/ShiXinDa/inbox-list-background.png') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    padding: 40px 30px 30px; /* 将底部内边距从60px改为30px */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-title {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: auto;
  }

  .close-button {
    position: absolute;
    top: -20px;
    right: -5px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .list-title {
    align-self: flex-start; /* 左对齐 */
    width: 100%; /* 使标题占满容器宽度 */
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px; /* 增加左边距 */
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .inbox-list {
    width: 100%;
    max-height: 400px;
    overflow-y: auto; /* 添加滚动条 */
    margin-top: 10px; /* 调整与标题的间距 */
  }

  .inbox-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .inbox-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background 0.3s;
  }

  .inbox-list li:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .serial-number {
    margin-right: 10px;
    font-weight: bold;
    color: #fff;
  }

  .message-title {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .modal-content {
      width: 90%;
      padding: 30px 20px 20px; /* 进一步减少底部内边距 */
    }

    .modal-title {
      width: 150px;
      top: -25px;
    }

    .close-button img {
      width: 25px;
      height: 25px;
    }

    .list-title {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 8px;
    }

    .inbox-list {
      max-height: 300px;
      margin-top: 8px;
    }

    .inbox-list li {
      padding: 8px;
    }

    .serial-number {
      margin-right: 8px;
      font-size: 14px;
    }

    .message-title {
      font-size: 14px;
    }
  }
</style>
