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
          <tr id="trMessageTitle">
            <td class="text-right">
              <label
                id="lblMessagePushNumber"
                name="lblMessagePushNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >消息编号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessagePushNumber"
                v-model="messagePushNumber"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMessageTitle"
                name="lblMessageTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >消息标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageTitle"
                v-model="messageTitle"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trReceivePeople">
            <td class="text-right">
              <label
                id="lblMessageContent"
                name="lblMessageContent"
                class="col-form-label text-right"
                style="width: 90px"
                >消息内容
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageContent"
                v-model="messageContent"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblReceivePeople"
                name="lblReceivePeople"
                class="col-form-label text-right"
                style="width: 90px"
                >接收人员
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtReceivePeople"
                v-model="receivePeople"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsAllpush">
            <td class="text-right">
              <label
                id="lblMessageTypeId"
                name="lblMessageTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >消息类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMessageTypeId"
                v-model="messageTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsAllpush"
                  v-model="isAllpush"
                  type="checkbox"
                  Text="是否全体推送"
                /><label for="chkIsAllpush">是否全体推送</label></span
              >
            </td>
          </tr>
          <tr id="trClientVersionTypeId">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsReceive"
                  v-model="isReceive"
                  type="checkbox"
                  Text="是否接收"
                /><label for="chkIsReceive">是否接收</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblClientVersionTypeId"
                name="lblClientVersionTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >客户端版本类型Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClientVersionTypeId"
                v-model="clientVersionTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
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
      <el-button id="btnCancelMessagePush" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitMessagePush" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import MessagePush_EditEx from '@/views/NewsAnn/MessagePush_EditEx';
  import { clsMessagePushEN } from '@/ts/L0Entity/NewsAnn/clsMessagePushEN';
  import { refDivEdit } from '@/views/NewsAnn/MessagePushVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { MessagePush_Edit } from '@/viewsBase/NewsAnn/MessagePush_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'MessagePushEdit',
    components: {
      // 组件注册
    },
    setup() {
      const messagePushId = ref('');
      const messagePushNumber = ref('');
      const messageTitle = ref('');
      const messageContent = ref('');
      const receivePeople = ref('');
      const messageTypeId = ref('');
      const isAllpush = ref(true);
      const isReceive = ref(true);
      const clientVersionTypeId = ref('');
      const updDate = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjMessagePushEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataMessagePushObj() {
        const pobjMessagePushEN = new clsMessagePushEN();
        pobjMessagePushEN.SetMessagePushId(messagePushId.value); // 消息Id
        pobjMessagePushEN.SetMessagePushNumber(messagePushNumber.value); // 消息编号
        pobjMessagePushEN.SetMessageTitle(messageTitle.value); // 消息标题
        pobjMessagePushEN.SetMessageContent(messageContent.value); // 消息内容
        pobjMessagePushEN.SetReceivePeople(receivePeople.value); // 接收人员
        pobjMessagePushEN.SetMessageTypeId(messageTypeId.value); // 消息类型Id
        pobjMessagePushEN.SetIsAllpush(isAllpush.value); // 是否全体推送
        pobjMessagePushEN.SetIsReceive(isReceive.value); // 是否接收
        pobjMessagePushEN.SetClientVersionTypeId(clientVersionTypeId.value); // 客户端版本类型Id
        pobjMessagePushEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjMessagePushEN.SetMemo(memo.value); // 备注
        return pobjMessagePushEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjMessagePushEN">表实体类对象</param>
       **/
      async function ShowDataFromMessagePushObj(pobjMessagePushEN: clsMessagePushEN) {
        messagePushId.value = pobjMessagePushEN.messagePushId; // 消息Id
        messagePushNumber.value = pobjMessagePushEN.messagePushNumber; // 消息编号
        messageTitle.value = pobjMessagePushEN.messageTitle; // 消息标题
        messageContent.value = pobjMessagePushEN.messageContent; // 消息内容
        receivePeople.value = pobjMessagePushEN.receivePeople; // 接收人员
        messageTypeId.value = pobjMessagePushEN.messageTypeId; // 消息类型Id
        isAllpush.value = pobjMessagePushEN.isAllpush; // 是否全体推送
        isReceive.value = pobjMessagePushEN.isReceive; // 是否接收
        clientVersionTypeId.value = pobjMessagePushEN.clientVersionTypeId; // 客户端版本类型Id
        memo.value = pobjMessagePushEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        messagePushId.value = '';
        messagePushNumber.value = '';
        messageTitle.value = '';
        messageContent.value = '';
        receivePeople.value = '';
        messageTypeId.value = '';
        isAllpush.value = false;
        isReceive.value = false;
        clientVersionTypeId.value = '';
        memo.value = '';
      }

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
              if (['02', '03', '06'].indexOf(clsMessagePushEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (MessagePush_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsMessagePushEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (MessagePush_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsMessagePushEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In MessagePush_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (MessagePush_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsMessagePushEN._CurrTabName, keyId.value);
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
      const strTitle = ref('消息推送编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<MessagePush_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: MessagePush_EditEx) => {
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
        GetEditDataMessagePushObj,
        ShowDataFromMessagePushObj,
        Clear,
        btnSubmit_Click,
        messagePushId,
        messagePushNumber,
        messageTitle,
        messageContent,
        receivePeople,
        messageTypeId,
        isAllpush,
        isReceive,
        clientVersionTypeId,
        updDate,
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
      btnMessagePush_Edit_Click(strCommandName: string, strKeyId: string) {
        MessagePush_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
