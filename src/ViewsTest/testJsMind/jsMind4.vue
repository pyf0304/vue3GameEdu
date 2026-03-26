<template>
  <div id="jsmind_container" style="width: 800px; height: 600px"></div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  // @ts-ignore
  import * as jsMind from 'jsmind';
  import 'jsmind/style/jsmind.css';
  // import jsMind from 'jsmind/es6/jsmind.js';
  // window.jsMind = jsMind;

  // require("jsmind/es6/jsmind.draggable.js");
  // require("jsmind/es6/jsmind.screenshot.js");
  export default defineComponent({
    name: 'testJsMind4',

    setup() {
      onMounted(() => {
        load_jsmind();
      });
      function load_jsmind() {
        const mind = {
          meta: {
            name: 'demo',
            author: 'hizzgdev@163.com',
            version: '0.2',
          },
          format: 'node_array',
          data: [
            { id: 'root', isroot: true, topic: 'jsMind' },

            {
              id: 'sub1',
              parentid: 'root',
              topic: 'sub1',
              'background-color': '#0000ff',
            },
            { id: 'sub11', parentid: 'sub1', topic: 'sub11' },
            { id: 'sub12', parentid: 'sub1', topic: 'sub12' },
            { id: 'sub13', parentid: 'sub1', topic: 'sub13' },

            { id: 'sub2', parentid: 'root', topic: 'sub2' },
            { id: 'sub21', parentid: 'sub2', topic: 'sub21' },
            {
              id: 'sub22',
              parentid: 'sub2',
              topic: 'sub22',
              'foreground-color': '#33ff33',
            },

            { id: 'sub3', parentid: 'root', topic: 'sub3' },
          ],
        };
        const options = {
          container: 'jsmind_container',
          editable: true,
          theme: 'primary',
        };
        const jm = new jsMind(options);
        jm.show(mind);
        // jm.set_readonly(true);
        // const mind_data = jm.get_data();
        // alert(mind_data);
        jm.add_node('sub2', 'sub23', 'new node', { 'background-color': 'red' });
        jm.set_node_color('sub21', 'green', '#ccc');
      }

      return {};
    },
  });
</script>

<style scoped>
  /* 添加必要的样式 */
</style>
