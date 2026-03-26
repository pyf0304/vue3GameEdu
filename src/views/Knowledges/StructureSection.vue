<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!-- -- 标题层 -- -->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">个人中心</a>
        <a>
          <cite>章节结构维护</cite>
        </a>
        <a
          >(功能说明：选中章节类型下面的图谱名称可以切换章节图，旁边的加号可以添加类型，选中结根节点可使用添加和删除功能！)</a
        >
      </span>

      <a
        class="layui-btn layui-btn-small"
        style="line-height: 34px; margin-top: 3px; float: right"
        @click="location_reload()"
        title="刷新"
      >
        <i class="layui-icon layui-icon-refresh" style="line-height: 34px"></i>
      </a>

      <a
        id="btn3"
        @click="remove_node_StructureSection()"
        class="layui-btn layui-btn-danger"
        style="line-height: 34px; margin-top: 3px; float: right; margin-right: 10px"
        title="删除节点"
      >
        <i class="layui-icon layui-icon-delete" style="line-height: 34px"></i>删除节点
      </a>
      <a
        id="btn1"
        @click="update_node_StructureSection()"
        class="layui-btn layui-btn-normal"
        style="line-height: 1.6em; margin-top: 3px; float: right; margin-right: 10px"
        title="修改节点"
      >
        <i class="layui-icon layui-icon-file-b" style="line-height: 30px"></i>修改节点
      </a>
      <a
        id="btn2"
        @click="add_node_StructureSection()"
        class="layui-btn layui-btn-warm"
        style="line-height: 1.6em; margin-top: 3px; float: right; margin-right: 10px"
        title="添加节点"
      >
        <i class="layui-icon ayui-icon-add-circle" style="line-height: 30px"></i>添加节点
      </a>
    </div>

    <div class="device">
      <div class="deviceLeft">
        <div class="layui-tab" style="margin: 1px 0">
          <ul class="layui-tab-title">
            <li class="layui-this">
              章节类型
              <i
                id="i_AddGraph"
                title="添加章节类型"
                @click="btn_Click('AddSectionType', '')"
                class="layui-icon layui-icon-add-1"
                style="font-size: 20px; color: #ff6a00"
              ></i>
            </li>
          </ul>
          <div class="layui-tab-content" style="padding: 5px">
            <div class="layui-tab-item layui-show">
              <ul id="ulGraph" class="nav nav-pills flex-column" role="tablist"></ul>
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
    <div class="modal" :class="{ show: modalActive }">
      <div class="modal-dialog">
        <div class="modal-content" style="width: 635px">
          <div class="modal-header">
            <h4 class="modal-title" id="lblDialogTitle_ge_StructureSection">结构章节添加</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
              @click="hideModal"
              >&times;</button
            >
          </div>
          <div ref="refDivEdit" class="modal-body">
            <table
              id="tabEdit"
              style="width: 600px"
              class="table table-bordered table-hover table td table-sm"
            >
              <tbody>
                <tr id="trStructureSectionName">
                  <td class="text-right">
                    <label
                      id="lblStructureSectionName"
                      class="col-form-label text-right"
                      style="width: 120px"
                    >
                      结构章节序目
                    </label>
                  </td>
                  <td class="text-left">
                    <input
                      id="txtStructureSectionName"
                      placeholder="请输入章节序目，比如：第一章、第一节.."
                      class="form-control-sm"
                      style="width: 300px"
                    />
                  </td>
                </tr>
                <tr id="trStructureSectionContent">
                  <td class="text-right">
                    <label
                      id="lblStructureSectionContent"
                      class="col-form-label text-right"
                      style="width: 120px"
                    >
                      结构章节标题
                    </label>
                  </td>
                  <td class="text-left">
                    <textarea
                      id="txtStructureSectionContent"
                      placeholder="请输入章节标题"
                      class="form-control-sm"
                      style="width: 400px; height: 80px"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              id="btnCancel_ge_StructureSection"
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              >关闭</button
            >
            <button
              id="btnSubmit_ge_StructureSection"
              type="button"
              class="btn btn-primary"
              @click="btnSubmit_Click()"
              >确认添加</button
            >
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
    <ge_StructureSection_EditCom ref="refge_StructureSection_Edit"></ge_StructureSection_EditCom>
    <ge_StructureSectionType_EditCom
      ref="refge_StructureSectionType_Edit"
    ></ge_StructureSectionType_EditCom>

    <input id="hidOpType" type="hidden" />
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

  import { message } from '@/utils/myMessage';
  import StructureSection from '@/views/Knowledges/StructureSection';
  import { useRoute } from 'vue-router';
  import { knowledgesMap } from 'share-stu-study-base-lib';

  // import ge_StructureSection_EditCom from '@/views/Knowledges/ge_StructureSection_Edit.vue';
  // import ge_StructureSectionType_EditCom from '@/views/Knowledges/ge_StructureSectionType_Edit.vue';
  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './StructureSectionVueShare';
  import { refge_StructureSection_Edit } from '@/views/Knowledges/StructureSectionVueShare';
  import { refge_StructureSectionType_Edit } from '@/views/Knowledges/StructureSectionVueShare';

  export default defineComponent({
    name: 'StructureSection',
    components: {
      // 组件注册
      ge_StructureSection_EditCom: (knowledgesMap as GlobalComponentMap)[
        'ge_StructureSection_Edit'
      ],
      ge_StructureSectionType_EditCom: (knowledgesMap as GlobalComponentMap)[
        'ge_StructureSectionType_Edit'
      ],
    },
    props: {
      sectionTypeId: {
        type: String,
        required: true,
        default: '',
      },
    },
    setup(props) {
      const objPage = ref<StructureSection>();
      const parentId = ref('');
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
      const strTitle = ref('章节结构维护');

      onMounted(() => {
        objPage.value = new StructureSection();
        StructureSection.vuebtn_Click = btn_Click;
        StructureSection.GetPropValue = GetPropValue;
        sectionTypeId.value = props.sectionTypeId;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'sectionTypeId':
            return sectionTypeId.value;
          case 'parentId':
            return parentId.value;
          default:
            return '';
        }
        return '';
      }
      function window_onload() {
        //open_empty();
        //load_jsmind();
        //GetRequestId_PageLoad();
        GetRequestId_PageLoad();
      }

      function GetRequestId_PageLoad() {
        const Request = new Object();

        const strSectionTypeId = props.sectionTypeId;
        sectionTypeId.value = strSectionTypeId;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.PageLoad();
      }

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
          theme: 'primary',
          mode: 'side',
        };
        _jm.value = null;
        $('#jsmind_container').html('');
        // _jm.value = jsMind.show(options, mind);
        _jm.value = new jsMind(options);
        if (_jm.value == null) return;
        try {
          _jm.value.show(mind);
        } catch (e) {
          console.error(`在显示jsMind时出错：${e} in load_jsmind`);
        }
        //_jm = jsMind.show(options);

        // jm.set_readonly(true);
        // const mind_data = jm.get_data();
        // alert(mind_data);

        //_jm.add_node("sub2", "sub23", "new node", { "background-color": "red" });
        //_jm.set_node_color('sub21', 'green', '#ccc');
      }

      //function open_empty() {
      //    const options = {
      //        container: 'jsmind_container',
      //        theme: 'greensea',
      //        editable: true
      //    }
      //    _jm = jsMind.show(options);
      //    // _jm = jsMind.show(options,mind);
      //}

      function get_selected_nodeid() {
        if (_jm.value == null) return;
        const selected_node = _jm.value.get_selected_node();
        if (!!selected_node) {
          return selected_node.id;
        } else {
          return null;
        }
      }

      //添加节点到接口
      //function add_node_StructureSection() {
      //    const selected_node = _jm.get_selected_node(); // as parent of new node
      //    if (!selected_node) { prompt_info('please select a node first.'); return; }
      //    const strParentId = selected_node.id;

      //    require(["../js/Knowledges/StructureSection.js"], function (StructureSection) {
      //        const objPage = new StructureSection();
      //        objPage.AddStructureSection(strParentId);
      //    });
      //}

      //添加节点弹出窗口
      function add_node_StructureSection() {
        if (_jm.value == null) return;
        const selected_node = _jm.value.get_selected_node(); // as parent of new node
        if (!selected_node) {
          message.info('please select a node first.');
          return;
        }

        parentId.value = selected_node.id;
        $('#btnSubmit_ge_StructureSection').html('确认添加');
        // showModal();

        StructureSection.btn_Click('AddNewRecordWithMaxId', '');
        //const strParentId = selected_node.id;
      }
      //添加节点到后端
      function AddStructureSection_Click() {
        if (
          $('#txtStructureSectionName').val() != '' &&
          $('#txtStructureSectionContent').val() != ''
        ) {
          const objPage = new StructureSection();
          // objPage.AddStructureSection_Click();
        } else {
          message.warning('请输入章节序目、标题，再确认添加！');
        }
      }

      //添加节点到结构图内
      function add_node(strKeyId: string, strKeyName: string) {
        if (_jm.value == null) return;
        const selected_node = _jm.value.get_selected_node(); // as parent of new node
        if (!selected_node) {
          message.info('please select a node first.');
          return;
        }
        const nodeid = strKeyId;
        const topic = strKeyName;
        const node = _jm.value.add_node(selected_node, nodeid, topic);
        message.success('添加章节成功！');

        //console.log(node);
      }

      //修改节点
      function update_node_StructureSection() {
        const selected_id = get_selected_nodeid();
        if (!selected_id) {
          message.info('please select a node first.');
          return;
        }
        $('#btnSubmit_ge_StructureSection').html('确认修改');

        // showModal();

        // const objPage = new StructureSection();
        // objPage.StructureSection_UpdateRecord();
        StructureSection.btn_Click('UpdateRecord', selected_id);
      }

      //删除节点
      function remove_node_StructureSection() {
        const selected_id = get_selected_nodeid();
        if (!selected_id) {
          message.info('please select a node first.');
          return;
        }

        const objPage = new StructureSection();
        objPage.StructureSection_DelRecord(selected_id);
      }
      //删除节点
      function remove_node() {
        if (_jm.value == null) return;
        const selected_id = get_selected_nodeid();
        if (!selected_id) {
          message.info('please select a node first.');
          return;
        }

        _jm.value.remove_node(selected_id);
        message.success('删除节点成功！');
        //console.log(selected_id);
      }

      //保存结构图
      function save_node() {
        if (_jm.value == null) return;
        //const mind_data = _jm.get_data();
        //const mind_string = jsMind.util.json.json2string(mind_data);
        //prompt_info(mind_string);
        const mind_data = _jm.value.get_data('node_array');
        const mind_string = jsMind.util.json.json2string(mind_data);
        console.log(mind_string);
        //prompt_info(mind_string);
      }

      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
      }

      //点击图列表显示图谱详情
      function GraphMenu_Click(strKey: string, strName: string) {
        sectionTypeId.value = strKey;
        //$("#navGraphName").html(strName);
        //先清除背景色
        //$("#ulGraph li a").removeClass("active");
        ////添加背景色
        //strKey = "Graph" + strKey;
        //$("#" + strKey).addClass("active");
        //让图谱面板清空

        const objPage = new StructureSection();
        objPage.BindGv_ge_StructureSection();
      }

      //绑定结构章节
      function li_ge_StructureSection_Click() {
        const objPage = new StructureSection();
        objPage.BindGv_ge_StructureSection();
      }

      // function btnSubmit_Click() {
      //   const objPage = new StructureSection();
      //   objPage.btnSubmit_Click();
      // }

      async function btn_Click(strCommandName: string, strKeyId: any) {
        const objData = strKeyId;
        switch (strCommandName) {
          case 'remove_node':
            remove_node();
            return;
          case 'load_jsmind':
            load_jsmind(strKeyId);
            return;
          case 'GraphMenu':
            GraphMenu_Click(objData.keyId, objData.keyName);
            return;
          case 'setSectionTypeId':
            sectionTypeId.value = strKeyId;
            return;
          case 'add_node':
            add_node(objData.keyId, objData.keyName);
            return;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
            await refge_StructureSection_Edit.value.btnAddNewRecord_Click(objPage.value);
            return;
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            await refge_StructureSection_Edit.value.btnUpdateRecord_Click(objPage.value, strKeyId);
            return;

          case 'AddSectionType':
            // showModal();
            refge_StructureSectionType_Edit.value.btnAddSectionType_Click(objPage.value);
            return;

          default:
            break;
        }
        StructureSection.btn_Click(strCommandName, strKeyId);
      }
      function btnSubmit_Click() {
        alert('btnSubmit_Click');
      }
      return {
        strTitle,
        btn_Click,

        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        window_onload,
        save_node,
        remove_node,
        add_node,
        showModal,
        modalActive,
        hideModal,
        remove_node_StructureSection,
        update_node_StructureSection,
        add_node_StructureSection,
        btnSubmit_Click,
        refge_StructureSection_Edit,
        refge_StructureSectionType_Edit,
        sectionTypeId,
        parentId,
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

  .device .deviceLeft {
    width: 280px;
    height: 840px;
    background-color: white;
    border-right: 1px solid #ccc;
    float: left;
    /* overflow: auto; */
    overflow-y: auto;
  }

  .device .deviceRight {
    position: absolute;
    right: 0;
    width: calc(100% - 290px);
    height: 840px;
    /*width: 2000px;*/
    overflow: auto;
    /*height: 100%;*/
    box-sizing: border-box;
    /*background: url(../images/bg1.png);*/
  }
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>

<!-- Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "章节结构维护";


    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="~/css/public.css" />

    <link type="text/css" rel="stylesheet" href="~/lib/jsmind/jsmind.css" />
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css">

    <script src="../lib/jquery/dist/jquery.js"></script>

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="~/lib/Xadmin/js/xadmin.js"></script>

    <script src="../lib/bootstrap/dist/js/bootstrap.js"></script>
    <script src="~/lib/bootstrap.min.js"></script>

    <script type="text/javascript" src="~/lib/jsmind/jsmind.js"></script>
    <script type="text/javascript" src="~/lib/jsmind/jsmind.draggable.js"></script>
    <script type="text/javascript" src="~/lib/jsmind/jsmind.screenshot.js"></script>

    <script src="../lib/require/require.js" data-main="../js/src/config"></script> -->
