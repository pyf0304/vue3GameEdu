<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!-- -- 标题层 -- -->

    <!-- -- 标题层 -- -->
    <div class="x-nav">
      <span id="nav_title" class="layui-breadcrumb"> </span>

      <a
        id="btn_CorrectMultipleQuestionChart"
        @click="CorrectMultipleQuestionChart_Click()"
        class="layui-btn layui-btn-normal"
        style="display: none; line-height: 34px; float: right; margin-right: 10px"
        title="提交结构图"
      >
        <i class="layui-icon layui-icon-file-b" style="line-height: 34px"></i>查看正确答案
      </a>
      <a
        id="btn1"
        @click="Submit_node_Click()"
        class="layui-btn layui-btn-normal"
        style="line-height: 34px; float: right; margin-right: 10px"
        title="提交结构图"
      >
        <i class="layui-icon layui-icon-file-b" style="line-height: 34px"></i>提交
      </a>
      <a
        id="btn3"
        @click="remove_node()"
        class="layui-btn layui-btn-danger"
        style="line-height: 34px; float: right; margin-right: 10px"
        title="删除节点"
      >
        <i class="layui-icon layui-icon-delete" style="line-height: 34px"></i>移除选项
      </a>
    </div>

    <div class="device">
      <div class="deviceLeft">
        <div class="layui-tab" style="margin: 1px 0">
          <ul class="layui-tab-title">
            <li class="layui-this" id="TabGraph2_Menu" @click="li_ge_StructureSection_Click()"
              >选项</li
            >
          </ul>
          <div class="layui-tab-content" style="padding: 5px">
            <div class="layui-tab-item layui-show">
              <div class="device" style="margin: 0px">
                <div id="deviceLeft" class="deviceLeft" style="width: 100%">
                  <div id="QuestionOptionsNode" class="deviceLeft_box"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="deviceRight" class="deviceRight">
        <div id="jsmind_container"></div>
      </div>
    </div>

    <!-- -- 编辑层 -- -->
    <div id="divEdit" value="1"></div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidQuestionID" type="hidden" />

    <input id="hidStructureGraphId" type="hidden" />

    <input id="hidSectionTypeId" type="hidden" />

    <input id="hidGameLevelId" type="hidden" />
    <StructureSectionCom
      ref="refStructureSection"
      :sectionTypeId="sectionTypeId"
    ></StructureSectionCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/comment.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/public.css';
  import '@/assets/lib/jsmind/jsmind.css';
  import '@/assets/lib/jsPlumb/css/style.css';
  import $ from 'jquery';
  // @ts-ignore
  import jsMind from 'jsmind';
  // import 'jsmind/jsmind.draggable';
  import 'jsmind/style/jsmind.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { LogicRela } from '@/views/Knowledges/LogicRela';
  import { message } from '@/utils/myMessage';
  import StructureSection from '@/views/Knowledges/StructureSection';
  import { useRoute } from 'vue-router';
  import ge_StructureSection_EditCom from '@/views/Knowledges/ge_StructureSection_Edit.vue';
  import StructureSectionCom from '@/views/web/StructureSection.vue';

  import { MultipleQuestionChart } from '@/views/web/MultipleQuestionChart';
  import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    refDivEdit,
    refDivFunction,
    refDivLayout,
    refDivList,
    refDivQuery,
  } from './MultipleQuestionChartVueShare';
  import { refge_StructureSection_Edit } from './MultipleQuestionChartVueShare';
  export default defineComponent({
    name: 'StructureSection',
    components: {
      // 组件注册
      ge_StructureSection_EditCom,
      StructureSectionCom,
    },
    props: {
      gameLevelId: {
        type: String,
        required: true,
        // default: '',
      },
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },
      structureGraphId: {
        type: String,
        required: true,
        // default: '',
      },

      sectionTypeId: {
        type: String,
        required: true,
        // default: '',
      },
    },
    setup(props) {
      const sectionTypeId = ref('');

      const modalActive = ref(false);

      const showModal = () => {
        modalActive.value = true;
      };

      const hideModal = () => {
        modalActive.value = false;
      };

      const route = useRoute(); // 获取当前路由信息
      const _jm = ref<jsMind | null>(null);
      const strTitle = ref('多选题图');

      const refStructureSection = ref();
      onMounted(() => {
        window_onload();
      });

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            // showModal();

            break;
          default:
            break;
        }
        MultipleQuestionChart.btn_Click(strCommandName, strKeyId);
      }

      function window_onload() {
        GetRequestId_PageLoad();
      }

      function GetRequestId_PageLoad() {
        const strQuestionID = props.questionId; //题目Id
        const strStructureGraphId = props.structureGraphId; //结构图谱Id
        const strSectionTypeId = props.sectionTypeId; //章节类型Id
        const strGameLevelId = props.gameLevelId; //关卡Id

        $('#hidQuestionID').val(strQuestionID);
        $('#hidStructureGraphId').val(strStructureGraphId);
        $('#hidSectionTypeId').val(strSectionTypeId);
        $('#hidGameLevelId').val(strGameLevelId);

        //显示计时器
        Show_TimeShow();

        const objPage = new MultipleQuestionChart();
        objPage.PageLoad();
      }

      //   const _jm = null;
      //加载结构图
      function load_jsmind(strjson: string) {
        //const mind = {
        //    "meta": {
        //        "name": "demo",
        //        "author": "77240613@qq.com",
        //        "version": "0.2",
        //    },
        //    "format": "node_array",
        //    "data": [
        //        { "id": "root", "isroot": true, "topic": "父节点" },

        //        { "id": "sub1", "parentid": "root", "topic": "sub1", "background-color": "#0000ff" },
        //        { "id": "sub11", "parentid": "sub1", "topic": "sub11" },
        //        { "id": "sub12", "parentid": "sub1", "topic": "sub12" },
        //        { "id": "sub13", "parentid": "sub1", "topic": "sub13" },

        //        { "id": "sub2", "parentid": "root", "topic": "sub2" },
        //        { "id": "sub21", "parentid": "sub2", "topic": "sub21" },
        //        { "id": "sub22", "parentid": "sub2", "topic": "sub22", "foreground-color": "#33ff33" },

        //        { "id": "sub3", "parentid": "root", "topic": "sub3" },
        //    ]
        //};

        const mind = {
          meta: {
            name: 'demo',
            author: 'neyo',
            version: '0.1',
          },
          format: 'node_array',
          data: strjson,
        };

        const options = {
          container: 'jsmind_container',
          editable: true,
          theme: 'greensea',
          mode: 'side',
        };
        _jm.value = null;

        $('#jsmind_container').html('');
        _jm.value = jsMind.show(options, mind);
      }

      function get_selected_nodeid() {
        if (_jm.value == null) return;
        const selected_node = _jm.value.get_selected_node();
        if (!!selected_node) {
          return selected_node.id;
        } else {
          return null;
        }
      }

      //添加节点
      function add_node(strKeyId: string, strKeyName: string) {
        if (_jm.value == null) return;
        const selected_node = _jm.value.get_selected_node(); // as parent of new node
        if (!selected_node) {
          message.info('please select a node first.');
          return;
        }
        const isroot = selected_node.isroot;
        if (isroot == true) {
          const nodeid = strKeyId;
          const topic = strKeyName;
          const node = _jm.value.add_node(selected_node, nodeid, topic);

          $('#' + strKeyId).remove();

          message.success('添加选项成功！');
        } else {
          message.warning('请选择题目添加！');
        }

        //console.log(node);
      }

      function remove_node() {
        if (_jm.value == null) return;
        //const selected_id = get_selected_nodeid();
        //if (!selected_id) { prompt_info('please select a node first.'); return; }

        const selected_node = _jm.value.get_selected_node();
        const nodeid = selected_node.id;
        const topic = selected_node.topic;

        const divOptionsList = document.getElementById('QuestionOptionsNode') as HTMLDivElement;
        const div_OptionNode = document.createElement('div');
        div_OptionNode.id = nodeid;
        div_OptionNode.title = topic;
        div_OptionNode.innerHTML = topic;
        div_OptionNode.className = 'node node1css';
        div_OptionNode.setAttribute('data-type', 'server');
        div_OptionNode.setAttribute('onclick', "add_node('" + nodeid + "','" + topic + "')");

        //div_OptionNode.setAttribute("onclick", add_node(' + strQuestionOptionId + '","' + strOptionName + '));
        divOptionsList.appendChild(div_OptionNode);
        if (_jm.value != null) _jm.value.remove_node(nodeid);

        message.success('删除节点成功！');
        //console.log(selected_id);
      }

      //保存结构图
      function save_node() {
        if (_jm.value == null) return;
        const mind_data = _jm.value.get_data('node_array');
        const mind_string = jsMind.util.json.json2string(mind_data);
        console.log(mind_string);
        //prompt_info(mind_string);
      }

      //提交节点
      function Submit_node_Click() {
        const objPage = new MultipleQuestionChart();
        objPage.Submit_node_Click();
      }

      //补0操作
      function toDub(n: any) {
        if (n < 10) {
          return '0' + n;
        } else {
          return '' + n;
        }
      }

      const now = new Date();
      //时间显示
      //const timeShow = function () {
      function timeShow() {
        const t = new Date();
        t.setFullYear(t.getFullYear() - now.getFullYear());
        t.setMonth(t.getMonth() - now.getMonth());
        t.setDate(t.getDate() - now.getDate());
        t.setHours(t.getHours() - now.getHours());
        t.setMinutes(t.getMinutes() - now.getMinutes());
        t.setSeconds(t.getSeconds() - now.getSeconds());
        //document.getElementById('show').innerHTML = t.getHours() + '小时' + t.getMinutes() + '分钟' + t.getSeconds() + '秒';
        const spnTimeShow = document.getElementById('TimeShow') as HTMLSpanElement;

        spnTimeShow.innerHTML = toDub(t.getMinutes()) + ':' + toDub(t.getSeconds());
      }

      //启动时间显示
      function setTimeShow() {
        timeShow();
        setInterval(timeShow, 1000);
      }

      //xadmin.open('添加概念', '../GraduateEduTopic/Pdfiframe?PageType=03&TopicId=' + strKeyId + '&Id_CurrEduCls=' + strId_CurrEduCls, '', '', true);

      function CorrectMultipleQuestionChart_Click() {
        const strSectionTypeId = GetInputValueInDivObj(refDivLayout.value, 'hidSectionTypeId');

        //   xadmin.open('查看正确结构图', '../Web/StructureSection?SectionTypeId=' + strSectionTypeId);
        sectionTypeId.value = strSectionTypeId;
        refStructureSection.value.showDialog();
      }

      function Show_TimeShow() {
        const Span_nav_title = document.getElementById('nav_title') as HTMLSpanElement;
        const a1 = document.createElement('a');
        a1.title = '时间';
        a1.id = 'TimeShow';
        Span_nav_title.appendChild(a1);
      }
      function CorrectMultipleQuestionChart1_Click() {
        alert('CorrectMultipleQuestionChart1_Click');
      }

      function li_ge_StructureSection_Click() {
        alert('li_ge_StructureSection_Click');
      }

      return {
        strTitle,
        btn_Click,

        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivEdit,
        window_onload,
        save_node,
        remove_node,
        add_node,
        showModal,
        modalActive,
        hideModal,

        refge_StructureSection_Edit,
        Submit_node_Click,

        CorrectMultipleQuestionChart_Click,
        li_ge_StructureSection_Click,
        sectionTypeId,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped>
  #jsmind_container {
    width: 100%;
    height: 800px;
    border: solid 1px #ccc;
    /*background:#f4f4f4;*/
    /*background: #f4f4f4;*/
  }

  #ulGraph li {
    list-style: none;
    line-height: 18px;
  }

  .layui-tab-title .layui-this {
    /*color: #000;*/
    /*color: #24998d;*/
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: cadetblue;
  }

  .device {
    margin: 0px;
  }

  .device .deviceLeft {
    width: 280px;
    height: 750px;
    background-color: white;
    /*border-right: 1px solid #ccc;*/
    float: left;
    /* overflow: auto; */
    overflow-y: no-display;
  }

  .device .deviceRight {
    position: absolute;
    right: 0;
    width: calc(100% - 280px);
    min-height: 740px;
    /*width: 800px;*/
    /*width: 1000px;*/
    /*overflow: auto;*/
    overflow: scroll;
    /*height: 100%;*/
    box-sizing: border-box;
    /*background: url(../images/bg1.png);*/
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "多选题图";

    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="~/css/public.css" />

    <link type="text/css" rel="stylesheet" href="~/lib/jsmind/jsmind.css" />
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css">

    <style type="text/css">
    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="~/lib/Xadmin/js/xadmin.js"></script>

    <script type="text/javascript" src="~/lib/jsmind/jsmind.js"></script>
    <script type="text/javascript" src="~/lib/jsmind/jsmind.draggable.js"></script>
    <script type="text/javascript" src="~/lib/jsmind/jsmind.screenshot.js"></script>

    <script src="../lib/require/require.js" data-main="../js/src/config"></script> -->
