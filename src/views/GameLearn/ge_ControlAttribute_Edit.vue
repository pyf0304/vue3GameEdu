<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trUpdDate">
            <td class="text-right">
              <label
                id="lblControlAttributeName"
                name="lblControlAttributeName"
                class="col-form-label text-right"
                style="width: 90px"
                >属性名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlAttributeName"
                v-model="controlAttributeName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUpdDate"
                name="lblUpdDate"
                class="col-form-label text-right"
                style="width: 90px"
                >修改日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUpdDate"
                v-model="updDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblUpdUser"
                name="lblUpdUser"
                class="col-form-label text-right"
                style="width: 90px"
                >修改人
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUpdUser"
                v-model="updUser"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_ControlAttribute" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_ControlAttribute"
        type="primary"
        @click="btnge_ControlAttribute_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { ge_ControlAttribute_EditEx } from '@/views/GameLearn/ge_ControlAttribute_EditEx';
  import { clsge_ControlAttributeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN';
  import { refDivEdit } from '@/views/GameLearn/ge_ControlAttributeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'GeControlAttributeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const attributeId = ref('');
      const controlAttributeName = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjge_ControlAttributeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatage_ControlAttributeObj() {
        const pobjge_ControlAttributeEN = new clsge_ControlAttributeEN();
        pobjge_ControlAttributeEN.SetAttributeId(attributeId.value); // 控件属性Id
        pobjge_ControlAttributeEN.SetControlAttributeName(controlAttributeName.value); // 属性名称
        pobjge_ControlAttributeEN.SetUpdDate(updDate.value); // 修改日期
        pobjge_ControlAttributeEN.SetUpdUser(updUser.value); // 修改人
        pobjge_ControlAttributeEN.SetMemo(memo.value); // 备注
        return pobjge_ControlAttributeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjge_ControlAttributeEN">表实体类对象</param>
       **/
      async function ShowDataFromge_ControlAttributeObj(
        pobjge_ControlAttributeEN: clsge_ControlAttributeEN,
      ) {
        attributeId.value = pobjge_ControlAttributeEN.attributeId; // 控件属性Id
        controlAttributeName.value = pobjge_ControlAttributeEN.controlAttributeName; // 属性名称
        updDate.value = pobjge_ControlAttributeEN.updDate; // 修改日期
        updUser.value = pobjge_ControlAttributeEN.updUser; // 修改人
        memo.value = pobjge_ControlAttributeEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        attributeId.value = '';
        controlAttributeName.value = '';
        updDate.value = '';
        updUser.value = '';
        memo.value = '';
      }
      const strTitle = ref('属性表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDatage_ControlAttributeObj,
        ShowDataFromge_ControlAttributeObj,
        Clear,
        attributeId,
        controlAttributeName,
        updDate,
        updUser,
        memo,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnge_ControlAttribute_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_ControlAttribute_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
