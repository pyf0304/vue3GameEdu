<template>
  <div class="inbox-message-content-modal">
    <div class="modal-content">
      <!-- Top Left Icon -->
      <div class="header-icon">
        <img src="/imageswu/ShiXinDa/鸥1.png" alt="图标" />
      </div>

      <img
        src="/imageswu/ShiXinDa/inbox-message-content-title.png"
        alt="收件箱标题"
        class="modal-title"
      />
      <button class="close-button" @click="$emit('close')" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- Recipient Selection -->
      <div class="message-details">
        <h4>{{ message.title }}</h4>
        <p><strong>发件人:</strong> {{ message.from }}</p>
        <textarea readonly>{{ message.content }}</textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Message } from '@/views/DriftingBottleGame/ShiXinDaVueShare';
  import { defineComponent, PropType, ref } from 'vue';

  export default defineComponent({
    name: 'WriteLetter',
    props: {
      message: {
        type: Object as PropType<Message>,
        required: true,
      },
    },
    setup(_, { emit }) {
      const selectedRecipient = ref('');
      const letterContent = ref('');

      return {
        selectedRecipient,
        letterContent,
      };
    },
  });
</script>

<style scoped>
  .inbox-message-content-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1003; /* 确保位于其他模态窗口之上 */
  }

  .modal-content {
    position: relative;
    width: 600px;
    max-width: 90%;
    background: url('/imageswu/ShiXinDa/message-content-background.png') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    padding: 40px 20px 30px;
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

  .message-details {
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .message-details h2 {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .message-details p {
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .message-details textarea {
    width: 100%;
    height: 320px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
    font-size: 14px;
    background-color: #fff;
    color: #000;
  }

  .header-icon {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .header-icon img {
    width: 50px; /* 根据需要调整尺寸 */
    height: 50px;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .modal-content {
      width: 90%;
      padding: 30px 10px 50px;
    }

    .modal-title {
      width: 150px;
      top: -25px;
    }

    .close-button img {
      width: 25px;
      height: 25px;
    }

    .message-details {
      width: 90%;
    }

    .message-details h2 {
      font-size: 18px;
    }

    .message-details p {
      font-size: 14px;
    }

    .message-details textarea {
      height: 150px;
      font-size: 12px;
    }
  }
</style>
