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
          <tr id="trControlTypeId">
            <td class="text-right">
              <label
                id="lblOperationTypeId"
                name="lblOperationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >操作类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlOperationTypeId"
                v-model="operationTypeId"
                class="form-control form-control-sm"
                @change="ddlOperationTypeId_SelectedIndexChanged($event)"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_OperationType"
                  :key="index"
                  :value="item.operationTypeId"
                >
                  {{ item.operationTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblControlTypeId"
                name="lblControlTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlControlTypeId"
                v-model="controlTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_ControlType"
                  :key="index"
                  :value="item.controlTypeId"
                >
                  {{ item.controlTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trAttributeId">
            <td class="text-right">
              <label
                id="lblControlId"
                name="lblControlId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlId"
                v-model="controlId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblAttributeId"
                name="lblAttributeId"
                class="col-form-label text-right"
                style="width: 90px"
                >控件属性Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlAttributeId"
                v-model="attributeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_ControlAttribute"
                  :key="index"
                  :value="item.attributeId"
                >
                  {{ item.controlAttributeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trExaminationTypeId">
            <td class="text-right">
              <label
                id="lblControlValue"
                name="lblControlValue"
                class="col-form-label text-right"
                style="width: 90px"
                >控件值
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtControlValue"
                v-model="controlValue"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblExaminationTypeId"
                name="lblExaminationTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >检查类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlExaminationTypeId"
                v-model="examinationTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_ExaminationType"
                  :key="index"
                  :value="item.examinationTypeId"
                >
                  {{ item.typeDescribe }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFunctionName">
            <td class="text-right">
              <label
                id="lblEventTypeId"
                name="lblEventTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >事件Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlEventTypeId"
                v-model="eventTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_EventType"
                  :key="index"
                  :value="item.eventTypeId"
                >
                  {{ item.eventTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblFunctionName"
                name="lblFunctionName"
                class="col-form-label text-right"
                style="width: 90px"
                >函数名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFunctionName"
                v-model="functionName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCheckMemo">
            <td class="text-right">
              <label
                id="lblCheckMemo"
                name="lblCheckMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >检查描述
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtCheckMemo"
                v-model="checkMemo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_InspectProcess" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitge_InspectProcess" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { ge_InspectProcess_EditEx } from '@/views/GameLearn/ge_InspectProcess_EditEx';
  import { clsge_InspectProcessEN } from '@/ts/L0Entity/GameLearn/clsge_InspectProcessEN';
  import { clsge_OperationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_OperationTypeEN';
  import { clsge_ControlTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlTypeEN';
  import { clsge_ControlAttributeEN } from '@/ts/L0Entity/GameLearn/clsge_ControlAttributeEN';
  import { clsge_ExaminationTypeEN } from '@/ts/L0Entity/GameLearn/clsge_ExaminationTypeEN';
  import { clsge_EventTypeEN } from '@/ts/L0Entity/GameLearn/clsge_EventTypeEN';
  import { ge_OperationType_GetArrge_OperationType } from '@/ts/L3ForWApi/GameLearn/clsge_OperationTypeWApi';
  import { ge_ControlType_GetArrge_ControlType } from '@/ts/L3ForWApi/GameLearn/clsge_ControlTypeWApi';
  import { ge_ControlAttribute_GetArrge_ControlAttribute } from '@/ts/L3ForWApi/GameLearn/clsge_ControlAttributeWApi';
  import { ge_ExaminationType_GetArrge_ExaminationType } from '@/ts/L3ForWApi/GameLearn/clsge_ExaminationTypeWApi';
  import { ge_EventType_GetArrge_EventType } from '@/ts/L3ForWApi/GameLearn/clsge_EventTypeWApi';
  import { refDivEdit } from '@/views/GameLearn/ge_InspectProcessVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { ge_InspectProcess_Edit } from '@/viewsBase/GameLearn/ge_InspectProcess_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GeInspectProcessEdit',
    components: {
      // 组件注册
    },
    setup(props, { expose }) {
      const operationTypeId = ref('');
      const controlTypeId = ref('');
      const controlId = ref('');
      const attributeId = ref('');
      const controlValue = ref('');
      const examinationTypeId = ref('');
      const eventTypeId = ref('');
      const functionName = ref('');
      const checkMemo = ref('');
      const memo = ref('');

      const arrge_OperationType = ref<clsge_OperationTypeEN[] | null>([]);
      const arrge_ControlType = ref<clsge_ControlTypeEN[] | null>([]);
      const arrge_ControlAttribute = ref<clsge_ControlAttributeEN[] | null>([]);
      const arrge_ExaminationType = ref<clsge_ExaminationTypeEN[] | null>([]);
      const arrge_EventType = ref<clsge_EventTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrge_OperationType.value = await ge_OperationType_GetArrge_OperationType(); //编辑区域
        operationTypeId.value = '0';

        arrge_ControlType.value = await ge_ControlType_GetArrge_ControlType(); //编辑区域
        controlTypeId.value = '0';

        arrge_ControlAttribute.value = await ge_ControlAttribute_GetArrge_ControlAttribute(); //编辑区域
        attributeId.value = '0';

        arrge_ExaminationType.value = await ge_ExaminationType_GetArrge_ExaminationType(); //编辑区域
        examinationTypeId.value = '0';

        arrge_EventType.value = await ge_EventType_GetArrge_EventType(); //编辑区域
        eventTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjge_InspectProcessEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatage_InspectProcessObj() {
        const pobjge_InspectProcessEN = new clsge_InspectProcessEN();
        pobjge_InspectProcessEN.SetOperationTypeId(operationTypeId.value); // 操作类型
        pobjge_InspectProcessEN.SetControlTypeId(controlTypeId.value); // 控件类型
        pobjge_InspectProcessEN.SetControlId(controlId.value); // 控件Id
        pobjge_InspectProcessEN.SetAttributeId(attributeId.value); // 控件属性Id
        pobjge_InspectProcessEN.SetControlValue(controlValue.value); // 控件值
        pobjge_InspectProcessEN.SetExaminationTypeId(examinationTypeId.value); // 检查类型Id
        pobjge_InspectProcessEN.SetEventTypeId(eventTypeId.value); // 事件Id
        pobjge_InspectProcessEN.SetFunctionName(functionName.value); // 函数名
        pobjge_InspectProcessEN.SetCheckMemo(checkMemo.value); // 检查描述
        pobjge_InspectProcessEN.SetMemo(memo.value); // 备注
        return pobjge_InspectProcessEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjge_InspectProcessEN">表实体类对象</param>
       **/
      async function ShowDataFromge_InspectProcessObj(
        pobjge_InspectProcessEN: clsge_InspectProcessEN,
      ) {
        operationTypeId.value = pobjge_InspectProcessEN.operationTypeId; // 操作类型
        controlTypeId.value = pobjge_InspectProcessEN.controlTypeId; // 控件类型
        controlId.value = pobjge_InspectProcessEN.controlId; // 控件Id
        attributeId.value = pobjge_InspectProcessEN.attributeId; // 控件属性Id
        controlValue.value = pobjge_InspectProcessEN.controlValue; // 控件值
        examinationTypeId.value = pobjge_InspectProcessEN.examinationTypeId; // 检查类型Id
        eventTypeId.value = pobjge_InspectProcessEN.eventTypeId; // 事件Id
        functionName.value = pobjge_InspectProcessEN.functionName; // 函数名
        checkMemo.value = pobjge_InspectProcessEN.checkMemo; // 检查描述
        memo.value = pobjge_InspectProcessEN.memo; // 备注
        // this.IsShowInspectProcess_Edit();
        // 调用 methods 中的函数
        IsShowInspectProcess_Edit();
      }
      // 暴露函数以便在组件外部调用
      expose({
        ShowDataFromge_InspectProcessObj,
      });
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        operationTypeId.value = '0';
        controlTypeId.value = '0';
        controlId.value = '';
        attributeId.value = '0';
        controlValue.value = '';
        examinationTypeId.value = '0';
        eventTypeId.value = '0';
        functionName.value = '';
        checkMemo.value = '';
        memo.value = '';
      }
      async function IsShowInspectProcess_Edit() {
        switch (operationTypeId.value) {
          case '0001':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').show(); //控件属性
            $('#trControlValue').show(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').hide(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0002':
            $('#trControlTypeId').hide(); //控件类型
            $('#trControlId').hide(); //控件Id
            $('#trAttributeId').hide(); //控件属性
            $('#trControlValue').hide(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').show(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0003':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').hide(); //控件属性
            $('#trControlValue').hide(); //控件值
            $('#trEventType').show(); //事件
            $('#trFunctionName').show(); //函数名
            $('#trExaminationType').hide(); //检查类型
            $('#trCheckMemo').hide(); //检查描述
            break;
          case '0005':
            $('#trControlTypeId').show(); //控件类型
            $('#trControlId').show(); //控件Id
            $('#trAttributeId').show(); //控件属性
            $('#trControlValue').show(); //控件值
            $('#trEventType').hide(); //事件
            $('#trFunctionName').hide(); //函数名
            $('#trExaminationType').show(); //检查类型
            $('#trCheckMemo').show(); //检查描述
            break;
        }
      }
      expose({
        ShowDataFromge_InspectProcessObj,
      });
      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let returnKeyId = '';
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsge_InspectProcessEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsge_InspectProcessEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsge_InspectProcessEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ge_InspectProcess_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ge_InspectProcess_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsge_InspectProcessEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('检查过程表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ge_InspectProcess_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ge_InspectProcess_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
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
        GetEditDatage_InspectProcessObj,
        ShowDataFromge_InspectProcessObj,
        Clear,
        btnSubmit_Click,
        operationTypeId,
        controlTypeId,
        controlId,
        attributeId,
        controlValue,
        examinationTypeId,
        eventTypeId,
        functionName,
        checkMemo,
        memo,
        arrge_OperationType,
        arrge_ControlType,
        arrge_ControlAttribute,
        arrge_ExaminationType,
        arrge_EventType,
        IsShowInspectProcess_Edit,
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
      btnge_InspectProcess_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_InspectProcess_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
      (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass45_0:<Gen_Vue_Ts_GeneEventFuncEx>b__1)
    */
      async ddlOperationTypeId_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
        await (this as any).IsShowInspectProcess_Edit();
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
