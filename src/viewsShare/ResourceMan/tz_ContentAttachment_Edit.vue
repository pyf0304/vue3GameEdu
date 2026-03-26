<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
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
        style="width: 1200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trAttachmentTitle">
            <td class="text-right">
              <label id="lblAttachmentTitle" class="col-form-label text-right" style="width: 90px">
                附件标题
              </label>
            </td>
            <td class="text-left">
              <input
                v-model="attachmentTitle"
                id="txtAttachmentTitle"
                class="form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trid_ResourceType">
            <td class="text-right">
              <label id="lblid_ResourceType" class="col-form-label text-right" style="width: 90px">
                资源类型
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlIdResourceType"
                v-model="idResourceType"
                class="form-control form-control-sm"
                @change="ddlIdResourceType_SelectedIndexChanged($event)"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrResourceType"
                  :key="index"
                  :value="item.idResourceType"
                >
                  {{ item.resourceTypeName }}
                </option></select
              >
            </td>
          </tr>

          <tr id="trTextContent" style="display: none">
            <td class="text-right">
              <label id="lblTextContent" class="col-form-label text-right" style="width: 90px">
                html源代码
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <textarea
                id="txtTextContent"
                v-model="textContent"
                class="form-control"
                style="width: 98%; height: 450px"
              ></textarea>
            </td>
          </tr>

          <tr id="trContentPic" style="display: none">
            <td class="NameTD">
              <label id="lblUploadfileUrl" class="col-form-label text-right" style="width: 90px">
                上传图片
              </label>
            </td>
            <td class="ValueTD" id="tdInputsWrapper" colspan="3">
              <input type="file" id="txtUploadImgFile" @change="handleFileChange($event)" />
            </td>
          </tr>
        </tbody>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hdnFileOne" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCanceltz_ContentAttachment" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmittz_ContentAttachment"
        type="primary"
        @click="btntz_ContentAttachment_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import $ from 'jquery';
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { tz_ContentAttachmentCRUDEx } from '@/viewsShare/ResourceMan/tz_ContentAttachmentCRUDEx';
  import tz_ContentAttachment_EditEx from '@/viewsShare/ResourceMan/tz_ContentAttachment_EditEx';
  import { HideTrInDivObj, ShowTrInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsResourceTypeEN } from '@/ts/L0Entity/ResourceMan/clsResourceTypeEN';
  import { ResourceType_GetArrResourceType } from '@/ts/L3ForWApi/ResourceMan/clsResourceTypeWApi';
  import { refDivEdit } from '@/viewsShare/ResourceMan/tz_ContentAttachmentVueShare';
  import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  export default defineComponent({
    name: 'TzContentAttachmentEdit',
    components: {
      // 组件注册
    },
    props: {
      questionId: {
        type: Number,
        required: true,
        // default: '',
      },
      questionOptionId: {
        type: String,
        required: true,
        // default: '',
      },

      contentTypeId: {
        type: String,
        required: true,
        default: '',
      },
      title: {
        type: String,
        required: false,
        default: '内容附件',
      },
    },
    setup(props) {
      const userStore = useUserStore();
      // const contentTypeId = ref('');
      // const questionId = ref(0);
      // const questionOptionId = ref('');
      const arrResourceType = ref<clsResourceTypeEN[] | null>([]);
      const objPage_Edit = ref<tz_ContentAttachment_EditEx>();

      const attachmentTitle = ref('');
      const idResourceType = ref('');
      const mySelectedFile = ref(null);
      const textContent = ref('');
      const strTitle = ref('内容附件编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCanceltz_ContentAttachment':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmittz_ContentAttachment':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCanceltz_ContentAttachment':
            return strCancelButtonText.value;
          case 'btnSubmittz_ContentAttachment':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: tz_ContentAttachment_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      function btntz_ContentAttachment_Edit_Click(strCommandName: string, strKeyId: string) {
        // const bolIsExFile = File_IsHasFile(refDivEdit.value);
        // IsFile(strCommandName, strKeyId);
        tz_ContentAttachment_EditEx.mySelectedFile = mySelectedFile.value;
        tz_ContentAttachment_EditEx.btnEdit_Click(strCommandName, strKeyId);
      }
      function handleFileChange(event: any) {
        // 当文件选择框的值发生变化时触发
        mySelectedFile.value = event.target.files[0]; // 获取选择的文件
        attachmentTitle.value = event.target.files[0].name;
        console.log('selectedFile.value:', mySelectedFile.value);
      }
      async function ddlIdResourceType_SelectedIndexChanged(e: Event) {
        switch (idResourceType.value) {
          case '0004':
            //图片
            HideTrInDivObj(refDivEdit.value, 'trTextContent');
            ShowTrInDivObj(refDivEdit.value, 'trContentPic');
            attachmentTitle.value = '图片';
            break;
          case '0011':
          case '0010':
          case '0015':
            //html文本
            ShowTrInDivObj(refDivEdit.value, 'trTextContent');
            HideTrInDivObj(refDivEdit.value, 'trContentPic');
            attachmentTitle.value = '文本';
            break;
          default:
            HideTrInDivObj(refDivEdit.value, 'trTextContent');
            HideTrInDivObj(refDivEdit.value, 'trContentPic');
            break;
        }
      }
      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        attachmentTitle.value = '';
        idResourceType.value = '0';
      }
      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrResourceType.value = await ResourceType_GetArrResourceType(); //编辑区域
        idResourceType.value = '0';
      }

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjtz_ContentAttachmentEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatatz_ContentAttachmentObj() {
        const pobjtz_ContentAttachmentEN = new clstz_ContentAttachmentEN();
        pobjtz_ContentAttachmentEN.SetAttachmentTitle(attachmentTitle.value); // 附件标题
        pobjtz_ContentAttachmentEN.SetIdResourceType(idResourceType.value); // 资源类型
        pobjtz_ContentAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjtz_ContentAttachmentEN.SetTextContent(textContent.value); // 文本内容
        pobjtz_ContentAttachmentEN.SetCourseId(clsPubLocalStorage.courseId);
        pobjtz_ContentAttachmentEN.SetOrderNum(30);
        switch (props.contentTypeId) {
          case '0001':
            pobjtz_ContentAttachmentEN.SetTableNameKey(props.questionId.toString());
            break;
          case '0006':
            pobjtz_ContentAttachmentEN.SetTableNameKey(props.questionOptionId);
            break;
          default:
            const strMsg = Format(
              '内容类型(contentTypeId):{0}在PutDataTotz_ContentAttachmentClass函数的switch中没有被处理！',
              props.contentTypeId,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
        }

        pobjtz_ContentAttachmentEN.SetContentTypeId(props.contentTypeId); //代表问题表；
        pobjtz_ContentAttachmentEN.SetFilePath(
          tz_ContentAttachment_EditEx.uploadResponseData.imgFilePathOne,
        );
        pobjtz_ContentAttachmentEN.SetUploadDate(clsDateTime.getTodayDateTimeStr(0)); //	上传时间
        pobjtz_ContentAttachmentEN.SetUploadPerson(userStore.userId); //上传人
        pobjtz_ContentAttachmentEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
        pobjtz_ContentAttachmentEN.SetUpdUserId(userStore.userId); // 修改用户Id

        return pobjtz_ContentAttachmentEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjtz_ContentAttachmentEN">表实体类对象</param>
       **/
      async function ShowDataFromtz_ContentAttachmentObj(
        pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN,
      ) {
        attachmentTitle.value = pobjtz_ContentAttachmentEN.attachmentTitle; // 附件标题
        idResourceType.value = pobjtz_ContentAttachmentEN.idResourceType; // 资源类型

        $('#hdnFileOne').val(pobjtz_ContentAttachmentEN.filePath);

        textContent.value = pobjtz_ContentAttachmentEN.textContent; // 文本内容
      }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        btntz_ContentAttachment_Edit_Click,
        refDivEdit,
        mySelectedFile,
        handleFileChange,
        idResourceType,
        ddlIdResourceType_SelectedIndexChanged,
        attachmentTitle,
        Clear,
        arrResourceType,
        GetEditDatatz_ContentAttachmentObj,
        ShowDataFromtz_ContentAttachmentObj,
        textContent,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //tz_ContentAttachment_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_tz_ContentAttachment(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new tz_ContentAttachment_EditEx(
          'tz_ContentAttachment_EditEx',
          new tz_ContentAttachmentCRUDEx(),
        );
        objPage.btnSubmit_Click();
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
