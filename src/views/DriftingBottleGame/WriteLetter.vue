<template>
  <div class="write-letter-modal">
    <div class="modal-content">
      <!-- Top Left Icon -->
      <div class="header-icon">
        <img src="/imageswu/ShiXinDa/鸥1.png" alt="图标" />
      </div>

      <img src="/imageswu/ShiXinDa/write-letter-title.png" alt="写信标题" class="modal-title" />
      <button class="close-button" @click="$emit('close')" aria-label="关闭">
        <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
      </button>

      <!-- Recipient Selection -->
      <div class="recipient-selection">
        <label for="recipient">发给:</label>
        <select id="recipient" v-model="selectedRecipient">
          <option disabled value="">请选择收信人</option>
          <option v-for="recipient in recipients" :key="recipient.id" :value="recipient.name">
            {{ recipient.name }}
          </option>
        </select>
      </div>

      <!-- Letter Content -->
      <div class="letter-content">
        <textarea v-model="letterContent" placeholder="写下您的信件..." required></textarea>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="action-button close-action" @click="$emit('close')" aria-label="关闭">
          <img src="/imageswu/ShiXinDa/close.png" alt="关闭" />
        </button>
        <button class="action-button submit-action" @click="submitLetter" aria-label="提交">
          <img src="/imageswu/ShiXinDa/submit.png" alt="提交" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'WriteLetter',
    setup(_, { emit }) {
      const selectedRecipient = ref('');
      const letterContent = ref('');

      const recipients = [
        { id: 1, name: '张老师' },
        { id: 2, name: '李同学' },
        { id: 3, name: '王经理' },
        // 添加更多收信人
      ];

      const submitLetter = () => {
        if (!selectedRecipient.value || !letterContent.value.trim()) {
          alert('请填写所有必填项');
          return;
        }
        // 处理提交逻辑
        alert(`信件已提交给 ${selectedRecipient.value}`);
        emit('close');
      };

      return {
        selectedRecipient,
        letterContent,
        recipients,
        submitLetter,
      };
    },
  });
</script>

<style scoped>
  .write-letter-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001; /* 确保位于 ShiXinDa 模态窗口之上 */
  }

  .modal-content {
    position: relative;
    width: 500px;
    max-width: 90%;
    background: url('/imageswu/ShiXinDa/write-letter-background.png') no-repeat center center;
    background-size: cover;
    border-radius: 10px;
    padding: 40px 20px 60px; /* 增加底部填充以容纳按钮 */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .close-button img {
    width: 30px;
    height: 30px;
  }

  .recipient-selection {
    width: 90%;
    margin-top: 60px; /* 调整与标题的间距 */
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .recipient-selection label {
    margin-right: 10px;
    font-size: 16px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .recipient-selection select {
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .letter-content {
    width: 90%;
    margin-bottom: 10px;
  }

  .letter-content textarea {
    width: 100%;
    height: 280px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
    font-size: 14px;
  }

  .action-buttons {
    position: absolute;
    bottom: -15px; /* 向下悬空20px */
    display: flex;
    gap: 40px;
  }

  .action-button {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .action-button img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.2s;
  }

  .action-button:hover img {
    transform: scale(1.05);
  }

  /* 响应式设计 */
  @media (max-width: 500px) {
    .modal-content {
      width: 90%;
      padding: 40px 10px 60px;
    }

    .modal-title {
      width: 150px;
      top: -30px;
    }

    .close-button img {
      width: 25px;
      height: 25px;
    }

    .header-icon img {
      width: 40px;
      height: 40px;
    }

    .recipient-selection {
      width: 90%;
      margin-top: 50px; /* 调整与标题的间距 */
    }

    .recipient-selection label {
      font-size: 14px;
    }

    .recipient-selection select {
      padding: 6px;
    }

    .letter-content {
      width: 90%;
    }

    .letter-content textarea {
      height: 150px;
      font-size: 12px;
    }

    .action-buttons {
      bottom: -15px;
      gap: 15px;
    }

    .action-button {
      width: 40px;
      height: 40px;
    }

    .header-icon {
      top: 5px;
      left: 5px;
    }

    .header-icon img {
      width: 30px;
      height: 30px;
    }
  }
</style>
