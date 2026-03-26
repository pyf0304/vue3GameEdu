<template>
  <div>
    <button @click="showModal">显示模态框</button>

    <div class="modal" :class="{ show: modalActive }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" @click="hideModal"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'bsDialog2',
    setup() {
      const modalActive = ref(false);

      const showModal = () => {
        modalActive.value = true;
      };

      const hideModal = () => {
        modalActive.value = false;
      };
      return { showModal, modalActive, hideModal };
    },
  });
</script>

<style scoped>
  /* Customize modal display */
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>
