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
          <tr id="trAttachmentTitle">
            <td class="text-right">
              <label
                id="lblAttachmentTitle"
                name="lblAttachmentTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >附件标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtAttachmentTitle"
                v-model="attachmentTitle"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trIdResourceType">
            <td class="text-right">
              <label
                id="lblIdResourceType"
                name="lblIdResourceType"
                class="col-form-label text-right"
                style="width: 90px"
                >资源类型
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlIdResourceType"
                v-model="idResourceType"
                class="form-control form-control-sm"
                @change="ddlid_ResourceType_SelectedIndexChanged($event)"
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
        </tbody></table
      >
    </div>
    <template #footer>
      <el-button id="btnCanceltz_ContentAttachment" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmittz_ContentAttachment" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import tz_ContentAttachment_EditEx from '@/viewsShare/ResourceMan/tz_ContentAttachment_EditEx';
  import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
  import { clsResourceTypeEN } from '@/ts/L0Entity/ResourceMan/clsResourceTypeEN';
  import { ResourceType_GetArrResourceType } from '@/ts/L3ForWApi/ResourceMan/clsResourceTypeWApi';
  import { refDivEdit } from '@/viewsShare/ResourceMan/tz_ContentAttachmentVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { tz_ContentAttachment_Edit } from '@/viewsBase/ResourceMan/tz_ContentAttachment_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'TzContentAttachmentEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const attachmentTitle = ref('');
      const idResourceType = ref('');
      const updUserId = ref('');

      const arrResourceType = ref<clsResourceTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrResourceType.value = await ResourceType_GetArrResourceType(); //编辑区域
        idResourceType.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjtz_ContentAttachmentEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatatz_ContentAttachmentObj() {
        const pobjtz_ContentAttachmentEN = new clstz_ContentAttachmentEN();
        pobjtz_ContentAttachmentEN.SetAttachmentTitle(attachmentTitle.value); // 附件标题
        pobjtz_ContentAttachmentEN.SetIdResourceType(idResourceType.value); // 资源类型
        pobjtz_ContentAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
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
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        attachmentTitle.value = '';
        idResourceType.value = '0';
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
              if (['02', '03', '06'].indexOf(clstz_ContentAttachmentEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clstz_ContentAttachmentEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (tz_ContentAttachment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clstz_ContentAttachmentEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In tz_ContentAttachment_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (tz_ContentAttachment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clstz_ContentAttachmentEN._CurrTabName,
                    keyId.value.toString(),
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
      const strTitle = ref('内容附件编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<tz_ContentAttachment_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: tz_ContentAttachment_EditEx) => {
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
        GetEditDatatz_ContentAttachmentObj,
        ShowDataFromtz_ContentAttachmentObj,
        Clear,
        btnSubmit_Click,
        attachmentTitle,
        idResourceType,
        updUserId,
        arrResourceType,
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
      btntz_ContentAttachment_Edit_Click(strCommandName: string, strKeyId: string) {
        tz_ContentAttachment_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass44_0:<Gen_mothod_fun_ts_GeneEventFuncEx>b__1)
  */
      async ddlid_ResourceType_SelectedIndexChanged(e: Event) {
        console.log(e);
        alert('请在事件函数中重写该函数!');
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
