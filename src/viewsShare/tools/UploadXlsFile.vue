<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <input type="text" v-model="strOpUserId" placeholder="操作用户ID" />
    <button @click="submitFile">上传文件</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';

  export default defineComponent({
    name: 'FileUpload',
    setup() {
      const selectedFile = ref<File | null>(null);
      const strOpUserId = ref<string>('');

      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          selectedFile.value = target.files[0];
        }
      };

      const submitFile = async () => {
        if (!selectedFile.value) {
          alert('请选择一个文件');
          return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile.value);
        formData.append('strOpUserId', strOpUserId.value);

        try {
          const upload_Controller = 'api/UploadXlsFile';
          const strAction = 'uploadXls';
          const strUrl = GetWebApiUrl(upload_Controller, strAction);
          // const response = await axios.post('/api/upload', formData, {
          console.log(' strUrl:', strUrl);
          const response = await axios.post(strUrl, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('文件上传成功:', response.data);
        } catch (error) {
          console.error('文件上传失败:', error);
        }
      };

      return {
        handleFileUpload,
        submitFile,
        strOpUserId,
      };
    },
  });
</script>

<style scoped>
  /* 添加你的样式 */
</style>
