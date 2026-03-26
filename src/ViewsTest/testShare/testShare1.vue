<template>
  <div>
    <p>UserId: {{ UserId }}</p>
    <span> this a about2 page!</span>
    <SharedButton :msg="UserId" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import SharedButton from '@shared/components/HelloWorld.vue';
  export default defineComponent({
    name: 'AboutPyf2',
    components: {
      SharedButton,
    },
    setup() {
      const UserId = ref('0001');
      return {
        UserId,
      };
    },
  });
</script>
