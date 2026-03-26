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
          <tr id="trUserId_Throw">
            <td class="text-right">
              <label
                id="lblQuestionId"
                name="lblQuestionId"
                class="col-form-label text-right"
                style="width: 90px"
                >题目Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlQuestionId"
                v-model.number="questionId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrvQuestionnaire_Sim"
                  :key="index"
                  :value="item.questionId"
                >
                  {{ item.questionName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblUserId_Throw"
                name="lblUserId_Throw"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_Throw"
                v-model="userId_Throw"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trUserId_PickUp">
            <td class="text-right">
              <label
                id="lblThrowTime"
                name="lblThrowTime"
                class="col-form-label text-right"
                style="width: 90px"
                >扔的时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtThrowTime"
                v-model="throwTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblUserId_PickUp"
                name="lblUserId_PickUp"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId_PickUp"
                v-model="userId_PickUp"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trFinishedTime">
            <td class="text-right">
              <label
                id="lblPickUpTime"
                name="lblPickUpTime"
                class="col-form-label text-right"
                style="width: 90px"
                >捞的时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPickUpTime"
                v-model="pickUpTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFinishedTime"
                name="lblFinishedTime"
                class="col-form-label text-right"
                style="width: 90px"
                >完成时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFinishedTime"
                v-model="finishedTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblBottleStateId"
                name="lblBottleStateId"
                class="col-form-label text-right"
                style="width: 90px"
                >操作方式Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlBottleStateId"
                v-model="bottleStateId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrBottleState"
                  :key="index"
                  :value="item.bottleStateId"
                >
                  {{ item.bottleStateName }}
                </option></select
              >
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
      <el-button id="btnCancelGameBottle" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitGameBottle" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { GameBottle_EditEx } from '@/views/GameLearn/GameBottle_EditEx';
  import { clsGameBottleEN } from '@/ts/L0Entity/GameLearn/clsGameBottleEN';
  import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
  import { clsBottleStateEN } from '@/ts/L0Entity/SysPara/clsBottleStateEN';
  import { vQuestionnaire_Sim_GetArrvQuestionnaire_SimByCourseId } from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
  import { BottleState_GetArrBottleState } from '@/ts/L3ForWApi/SysPara/clsBottleStateWApi';
  import { refDivEdit, CourseId_Session } from '@/views/GameLearn/GameBottleVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { GameBottle_Edit } from '@/viewsBase/GameLearn/GameBottle_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GameBottleEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const questionId = ref(0);
      const userId_Throw = ref('');
      const throwTime = ref('');
      const userId_PickUp = ref('');
      const pickUpTime = ref('');
      const finishedTime = ref('');
      const bottleStateId = ref('');
      const updUser = ref('');
      const memo = ref('');
      const updDate = ref('');

      const arrvQuestionnaire_Sim = ref<clsvQuestionnaire_SimEN[] | null>([]);
      const arrBottleState = ref<clsBottleStateEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrvQuestionnaire_Sim.value = await vQuestionnaire_Sim_GetArrvQuestionnaire_SimByCourseId(
          strCourseId,
        ); //编辑区域

        arrBottleState.value = await BottleState_GetArrBottleState(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjGameBottleEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataGameBottleObj() {
        const pobjGameBottleEN = new clsGameBottleEN();
        pobjGameBottleEN.SetQuestionId(questionId.value); // 题目Id
        pobjGameBottleEN.SetUserId_Throw(userId_Throw.value); // 用户ID
        pobjGameBottleEN.SetThrowTime(throwTime.value); // 扔的时间
        // pobjGameBottleEN.SetUserId_PickUp(userId_PickUp.value); // 用户ID
        // pobjGameBottleEN.SetPickUpTime(pickUpTime.value); // 捞的时间
        // pobjGameBottleEN.SetFinishedTime(finishedTime.value); // 完成时间
        pobjGameBottleEN.SetBottleStateId(bottleStateId.value); // 操作方式Id
        pobjGameBottleEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjGameBottleEN.SetMemo(memo.value); // 备注
        pobjGameBottleEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjGameBottleEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjGameBottleEN">表实体类对象</param>
       **/
      async function ShowDataFromGameBottleObj(pobjGameBottleEN: clsGameBottleEN) {
        questionId.value = pobjGameBottleEN.questionId; // 题目Id
        userId_Throw.value = pobjGameBottleEN.userId_Throw; // 用户ID
        throwTime.value = pobjGameBottleEN.throwTime; // 扔的时间
        // userId_PickUp.value = pobjGameBottleEN.userId_PickUp; // 用户ID
        // pickUpTime.value = pobjGameBottleEN.pickUpTime; // 捞的时间
        // finishedTime.value = pobjGameBottleEN.finishedTime; // 完成时间
        bottleStateId.value = pobjGameBottleEN.bottleStateId; // 操作方式Id
        memo.value = pobjGameBottleEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        questionId.value = 0;
        userId_Throw.value = '';
        throwTime.value = '';
        userId_PickUp.value = '';
        pickUpTime.value = '';
        finishedTime.value = '';
        bottleStateId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsGameBottleEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsGameBottleEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (GameBottle_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsGameBottleEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In GameBottle_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (GameBottle_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsGameBottleEN._CurrTabName,
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
      const strTitle = ref('游戏瓶编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<GameBottle_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: GameBottle_EditEx) => {
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
        GetEditDataGameBottleObj,
        ShowDataFromGameBottleObj,
        Clear,
        btnSubmit_Click,
        questionId,
        userId_Throw,
        throwTime,
        userId_PickUp,
        pickUpTime,
        finishedTime,
        bottleStateId,
        updUser,
        memo,
        updDate,
        arrvQuestionnaire_Sim,
        arrBottleState,
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
      btnGameBottle_Edit_Click(strCommandName: string, strKeyId: string) {
        GameBottle_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
