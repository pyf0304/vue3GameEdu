<template>
  <div class="shi-xin-da-modal">
    <div class="modal-content">
      <img src="/imageswu/ShiXinDa/shixin-da-title.png" alt="师信达牌子" class="modal-title" />
      <button class="close-button" @click="$emit('close')" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>
      <div class="buttons-container">
        <button class="modal-button write-letter-button" @click="writeLetter" aria-label="写信">
          <img src="/imageswu/ShiXinDa/write-letter-button.png" alt="写信" />
          <span class="button-label">写信</span>
        </button>
        <button class="modal-button inbox-button" @click="openInboxList" aria-label="收件箱">
          <img src="/imageswu/ShiXinDa/inbox-button.png" alt="收件箱" />
          <span class="button-label">收件箱</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ShiXinDa',
    setup(_, { emit }) {
      const writeLetter = () => {
        // Emit event to open WriteLetter modal
        emit('open-write-letter');
      };

      const openInboxList = () => {
        // Emit event to open InboxList modal
        console.log('openInboxList');
        emit('open-inbox-list');
      };
      const submitLetter = () => {
        // Define 提交逻辑
        alert('提交功能尚未实现');
      };

      const collectBox = () => {
        // 定义收件箱的逻辑
        alert('收件箱功能尚未实现');
      };

      return {
        writeLetter,
        collectBox,
        openInboxList,
        submitLetter,
      };
    },
  });
</script>

<style scoped>
  .shi-xin-da-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    width: 400px;
    height: 600px;
    background: url('/imageswu/ShiXinDa/shixin-da-background.png') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }

  .modal-title {
    position: absolute;
    top: -20px; /* 上移20px，使标题悬空 */
    left: 50%;
    transform: translateX(-50%);
    width: 150px; /* 减小宽度以防换行 */
    z-index: 1; /* 确保标题位于背景图之上 */
    display: block; /* 防止图片换行 */
  }

  /* 退出按钮 */
  .close-button {
    position: absolute;
    top: -20px; /* 与标题同步上移20px */
    right: -5px; /* 向右移动 */
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2; /* 确保关闭按钮位于标题之上 */
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
    width: 100%; /* Ensure buttons take full width */
    align-items: center; /* Center buttons horizontally */
  }

  .modal-button {
    position: relative;
    width: 150px; /* Adjust as needed */
    height: 50px; /* Adjust based on image height */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .modal-button img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.2s;
  }

  .modal-button:hover img {
    transform: scale(1.05);
  }

  .button-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    pointer-events: none; /* Ensure text doesn't block button clicks */
    text-align: center;
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .modal-content {
      width: 90%;
      height: auto;
      padding-top: 30px;
    }

    .modal-title {
      width: 150px;
      margin-bottom: 15px;
    }

    .close-button img {
      width: 25px;
      height: 25px;
    }

    .buttons-container {
      gap: 15px;
      margin-top: 30px;
    }

    .modal-button {
      width: 120px; /* Adjust for smaller screens */
      height: 40px; /* Adjust based on image height */
    }

    .button-label {
      font-size: 14px;
    }
  }
</style>
