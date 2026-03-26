<template>
  <div id="divLayout_Head" ref="refDivLayout_Head" style="z-index: 1">
    <div id="Index_Layout" class="top">
      <div class="top_con">
        <div class="top_title">
          <a id="web_Title" class="web_Title" style="color: white" href="index">游戏化教育平台</a>
          &nbsp;&nbsp;<a id="indexTitle" class="sub_Title" style="color: white">{{ indexTitle }}</a>
        </div>

        <div class="myTop_login">
          <div class="myContainer">
            <a id="tz_login" class="item" href="javascript:void(0)" @click="btn_Click('login', '')">
              登录
            </a>
            <a
              id="tz_Register"
              class="item"
              href="javascript:void(0)"
              @click="btn_Click('Register', '')"
              >注册</a
            >
            <a id="userName1" class="item" href="javascript:void(0)" @click="btnConsole_Click()">{{
              userLoginInfo
            }}</a>
            <div v-show="isShowDdlRoles" style="z-index: 2000">
              <MyDropButton
                class="item"
                ref="refDropButtonRoles"
                :buttons="btnRoles"
                :is-visible="visible"
                :title="myTitle1"
                :is-replace-title="true"
                @on-button-click="handleRoleChange"
              ></MyDropButton>
            </div>
            <a
              id="cancellation"
              class="item"
              href="javascript:void(0)"
              style="display: none; color: darkorange"
              @click="btn_Click('Cancellation', '')"
              >注销</a
            >
            <span class="item" style="color: white" title="当前角色所管理的学校">{{
              schoolSimName
            }}</span>
          </div>
          <div id="educls_select" style="margin-right: 30px; margin-top: 10px; text-align: center">
            <DropButtonEduCls
              ref="refDropButtonEduClss"
              :buttons="btnEduClss"
              :is-visible="visible"
              :title="myTitle1"
              :is-replace-title="true"
              @on-button-click="handleEduClsChange"
            ></DropButtonEduCls>
          </div>
          <!-- <div id="educls_select" style="margin-left: 10px; margin-top: 10px">
            <ul class="layui-nav left fast-add" lay-filter="" id="EduCls">
              <li class="layui-nav-item">
                <a href="javascript:;">
                  <span id="eduClsName">选择教学班</span>
                </a>
                <dl class="layui-nav-child" id="dlEduClsList">                  
                </dl>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
    <!--编辑层-->
    <LoginCom ref="refLogin_Edit" :system-name="mySystemName"></LoginCom>
    <wfmRegisterStuCom ref="refwfmRegisterStu"></wfmRegisterStuCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';
  import $ from 'jquery';
  import router from '@/router';

  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from 'share-stu-study-base-lib';
  import { useUserStore } from '@/store/modulesShare/user';
  import { UserTypeMap } from '@/store/modules/types/userType';

  import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import { PageHead_Game } from '@/views/Shared/PageHead_Game';

  import { message } from '@/utils/myMessage';
  import LoginCom from '@/viewsShare/web/Login.vue';
  import wfmRegisterStuCom from '@/viewsShare/web/wfmRegisterStu.vue';
  import { Index } from '@/views/web/Index';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import MyDropButton from '@/ts/components/myDropButton.vue';
  import DropButtonEduCls from '@/ts/components/myDropButton.vue';
  import { vCurrEduClsTeacher_GetObjLstAsync } from 'share-stu-study-base-lib';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { vCurrEduClsStu_GetObjLstAsync } from 'share-stu-study-base-lib';
  import { refLogin_Edit } from '@/viewsShare/web/LoginVueShare';
  // import { refwfmRegisterStu } from 'share-stu-study-base/src/viewsShare/web/wfmRegisterStuVueShare';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { XzSchool_GetObjByIdSchoolCache } from 'share-stu-study-base-lib';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import {
    userLoginInfo,
    isShowDdlRoles,
    refwfmRegisterStu,
  } from '@/views/Shared/PageHead_GameVueShare';

  export default defineComponent({
    name: 'PageHead_Game',
    components: {
      // 组件注册
      LoginCom,
      wfmRegisterStuCom,
      MyDropButton,
      DropButtonEduCls,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      //    isShowEduCls: {
      //      type: String,
      //      required: true,
      //    },
      //    isShowPaperIframe: {
      //      type: String,
      //      required: true,
      //    },
      //    isShowTopic: {
      //      type: String,
      //      required: true,
      //    },
      //    isShowMajor: {
      //      type: String,
      //      required: true,
      //    },
      //    isShowSearch: {
      //      type: String,
      //      required: true,
      //    },
      //    headerHeight: {
      //      type: String,
      //      required: true,
      //      default: '60',
      //    },
    },
    setup(props) {
      const userStore = useUserStore();
      const schoolSimName = ref(''); //学校简称
      const indexTitle = ref('');
      const btnRoles = ref<Array<clsBtnItem>>([
        { type: 'btn', keyId: 'button1', text: '角色1', title: '' },
      ]);
      const btnEduClss = ref<Array<clsBtnItem>>([
        { type: 'btn', keyId: 'button1', text: 'EduCls1', title: '' },
      ]);

      const visible = ref(true);
      const myTitle1 = ref('角色');
      const refDropButtonRoles = ref();
      const refDropButtonEduClss = ref();
      const showSchoolName = async () => {
        if (userStore.getIdSchool != '') {
          const objXzSchool = await XzSchool_GetObjByIdSchoolCache(userStore.getIdSchool);
          if (objXzSchool != null) {
            schoolSimName.value = objXzSchool.schoolNameA;
            if (IsNullOrEmpty(schoolSimName.value)) {
              schoolSimName.value = objXzSchool.schoolName;
            }
          }
        } else {
          schoolSimName.value = '无角色学校';
        }
        console.log('schoolSimName:', schoolSimName.value);
      };
      const handleRoleChange = async (data: any) => {
        const strKeyId = data.keyId;
        const objButton = btnRoles.value.find((x: any) => x.keyId == strKeyId);
        if (objButton == null) return;

        await userStore.setRoleId(strKeyId, clsSysPara4WebApi.currSelPrjId);
        userStore.setRoleName(objButton.text);
        await showSchoolName();
        console.log('userStore.userTypeId:', userStore.userTypeId);
        // 根据点击的按钮选项执行相应的操作
        if (strKeyId === 'button1') {
          // 处理按钮1的点击操作
          // ...
          alert('button1');
        } else if (strKeyId === 'button2') {
          // 处理按钮2的点击操作
          // ...
          alert(objButton.keyId + objButton.text);
        } else if (strKeyId === 'button3') {
          // 处理按钮3的点击操作
          // ...
          alert('button3');
        }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      const handleEduClsChange = async (data: any) => {
        const strKeyId = data.keyId;
        const objButton = btnEduClss.value.find((x: any) => x.keyId == strKeyId);
        if (objButton == null) return;

        const divName = refDivLayout_Head.value;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strKeyId);
        if (objEduCls == null) return;
        PageHead_Game.EduCls_Click(
          divName,
          objEduCls.idCurrEduCls,
          objEduCls.eduClsName,
          objEduCls.eduClsTypeId,
        );

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      const mySystemName = ref('游戏化教学平台');
      const focusPaper = ref('关注论文');
      const selectedValue = ref();
      const refDivLayout_Head = ref();

      const isShowMajor1 = ref(true);
      const canEditEduCls = ref(true);
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(async () => {
        PageHead_Game.divLayout = refDivLayout_Head.value;
        PageHead_Game.vuebtn_Click = btn_Click;
        PageHead_Game.GetPropValue = GetPropValue;
        if (userStore.getUserType === UserTypeMap.middle_School) {
          isShowMajor1.value = false;
          focusPaper.value = '关注课文';
        }
        switch (userStore.roleId) {
          case enumQxRoles.System_Admin_00620001:
          case enumQxRoles.K_12_Teacher_00620013:
          case enumQxRoles.Regular_Teacher_00620002:
          case enumQxRoles.Regular_Student_00620003:

          case enumQxRoles.High_School_Student_00620017:
          case enumQxRoles.Secondary_School_System_Admin_00620018:
          case '00620019':
            canEditEduCls.value = true;
            isShowDdlRoles.value = true;
            userLoginInfo.value = userStore.getUserName; //+ '(' + userStore.getRoleName + ')';
            break;
          default:
            canEditEduCls.value = false;
            break;
        }
        showSchoolName();
        //  const objPage = new PageHead_Game();
        //  objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return props.title;

          default:
            return '';
        }
        return '';
      }
      async function setRoles() {
        btnRoles.value.splice(0, btnRoles.value.length);
        let strUserId = userStore.getUserId;
        console.log('userId in setRoles:', strUserId);
        if (strUserId == '') {
          strUserId = userStore.getUserId;
        }
        if (strUserId == '') {
          console.error(`用户:[${strUserId}]的为空，请检查！`);
          return;
        }
        let arrRoleIds = userStore.getRoleIds;
        if (arrRoleIds.length == 0) {
          arrRoleIds = await userStore.getRoleIdLst(strUserId);
          if (arrRoleIds.length == 0) {
            console.error(`用户:[${strUserId}]的角色为空，请检查！`);
            return;
          }
        }

        const arrRoleNames = userStore.getRoleNames;
        for (let i = 0; i < arrRoleIds.length; i++) {
          btnRoles.value.push({
            type: 'btn',
            keyId: arrRoleIds[i],
            text: `${arrRoleNames[i]}`,
            title: '',
          });
        }

        // refMyDropButton.value.myFun1();
        const strCurrRoleId = userStore.roleId;
        if (strCurrRoleId == '') {
          userStore.setRoleId(arrRoleIds[0], clsSysPara4WebApi.currSelPrjId);
          userStore.setRoleName(arrRoleNames[0]);
        }
        const strCurrRoleName = userStore.roleName;
        refDropButtonRoles.value.SetTitle(`(${strCurrRoleName})`);
      }

      async function setEduClss() {
        btnEduClss.value.splice(0, btnEduClss.value.length);
        let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        console.log('strIdCurrEduCls in setEduClss:', strIdCurrEduCls);

        const strCurrEduClsName = clsPubLocalStorage.eduClsName;
        refDropButtonEduClss.value.SetTitle(`(${strCurrEduClsName})`);
      }
      //切换教学班
      function EduCls_Click(
        strkey: string,
        strName: string,
        strTypeID: string,
        strCourseId: string,
        strCourseName: string,
      ) {
        const objPage = new Index();
        objPage.EduCls_Click(strkey, strName, strTypeID, strCourseId, strCourseName);

        //RemoveIfame_Click();
      }

      //信息提示
      function layui_Alert(strMsg: string) {
        message.success(strMsg);
      }
      async function Bind_EduClsList() {
        //学生
        if (
          userStore.getRoleId == '00620003' ||
          userStore.getRoleId == enumQxRoles.High_School_Student_00620017
        ) {
          await Bind_EduClsStuList();
        }
        //管理员教师
        else {
          await Bind_EduClsTeaList();
        }
      }
      //教学班教师
      async function Bind_EduClsTeaList() {
        const strThisFuncName = Bind_EduClsTeaList.name;
        try {
          const strWhereCond = " TeacherID='" + userStore.userId + "' order by updDate Desc";

          const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
          let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
          let strCourseId_LocalStorage = clsPubLocalStorage.courseId;
          let strEduClsName_LocalStorage = clsPubLocalStorage.eduClsName;
          let strCourseName_LocalStorage = clsPubLocalStorage.courseName;

          let strhtml = '';
          for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
            const strid_CurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
            const strEduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
            const strEduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
            const strCourseId = arrvCurrEduClsTeacherObjLst[i].courseId;
            const strCourseName = arrvCurrEduClsTeacherObjLst[i].courseName;

            const htmlEduClsName = strEduClsName + '(' + strCourseName + ')';

            btnEduClss.value.push({
              type: 'btn',
              keyId: strid_CurrEduCls,
              text: strEduClsName,
              title: '',
            });

            if (i == 0) {
              if (clsPubLocalStorage.idCurrEduCls == '') {
                //$("#hidid_CurrEduCls").val(arrvCurrEduClsTeacherObjLst[i].idCurrEduCls);

                // $('#eduClsName').html(htmlEduClsName);
                //存入session
                clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
                clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
                clsPubLocalStorage.eduClsName = strEduClsName;
                clsPubLocalStorage.courseId = strCourseId;
                clsPubLocalStorage.courseName = strCourseName;
                strCourseId_LocalStorage = strCourseId;
                strEduClsName_LocalStorage = strEduClsName;
                strCourseName_LocalStorage = strCourseName;
              } else {
                const htmlEduClsName_ =
                  clsPubLocalStorage.eduClsName + '(' + clsPubLocalStorage.courseName + ')';
                // $('#eduClsName').html(htmlEduClsName_);
              }
            }
            strhtml +=
              '<dd><a @click=EduCls_Click("' +
              strid_CurrEduCls +
              '","' +
              strEduClsName +
              '","' +
              strEduClsTypeId +
              '","' +
              strCourseId +
              '","' +
              strCourseName +
              '")> ' +
              htmlEduClsName +
              '</a></dd>';
          }

          // this.ShowEduClsName(
          //   Format('{0}({1})', strEduClsName_LocalStorage, strCourseName_LocalStorage),
          // );

          // $('#dlEduClsList').html(strhtml);
        } catch (e) {
          const strMsg: string = `获取教学班老师关系对象列表不成功,${e}.(in ${strThisFuncName})`;
          alert(strMsg);
        }
      }

      //教学班学生
      async function Bind_EduClsStuList() {
        const strThisFuncName = Bind_EduClsStuList.name;
        try {
          let htmlEduClsName = '选择教学班';
          const strWhereCond = " stuId='" + userStore.userId + "' order by modifyDate Desc";

          const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
          let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
          let strCourseId_LocalStorage = clsPubLocalStorage.courseId;
          let strEduClsName_LocalStorage = clsPubLocalStorage.eduClsName;
          let strCourseName_LocalStorage = clsPubLocalStorage.courseName;

          let strhtml = '';
          for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
            const strid_CurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
            const strEduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
            const strEduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
            const strCourseId = arrvCurrEduClsStuObjLst[i].courseId;
            const strCourseName = arrvCurrEduClsStuObjLst[i].courseName;
            htmlEduClsName = strEduClsName + '(' + strCourseName + ')';
            btnEduClss.value.push({
              type: 'btn',
              keyId: strid_CurrEduCls,
              text: strEduClsName,
              title: '',
            });
            if (i == 0) {
              if (clsPubLocalStorage.idCurrEduCls == '') {
                // $('#eduClsName').html(htmlEduClsName);
                //存入session
                clsPubLocalStorage.idCurrEduCls = strid_CurrEduCls;
                clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;
                clsPubLocalStorage.eduClsName = strEduClsName;
                clsPubLocalStorage.courseId = strCourseId;
                clsPubLocalStorage.courseName = strCourseName;

                strCourseId_LocalStorage = strCourseId;
                strEduClsName_LocalStorage = strEduClsName;
                strCourseName_LocalStorage = strCourseName;
              } else {
                //$("#eduClsName").html(clsPubLocalStorage.eduClsName);
                htmlEduClsName =
                  clsPubLocalStorage.eduClsName + '(' + clsPubLocalStorage.courseName + ')';
                $('#eduClsName').html(htmlEduClsName);
              }
            }
            strhtml +=
              '<dd><a @click=EduCls_Click("' +
              strid_CurrEduCls +
              '","' +
              strEduClsName +
              '","' +
              strEduClsTypeId +
              '","' +
              strCourseId +
              '","' +
              strCourseName +
              '")> ' +
              htmlEduClsName +
              '</a></dd>';
            //strhtml += '<dd><a @click=EduCls_Click("' + arrvCurrEduClsStuObjLst[i].idCurrEduCls + '","' + arrvCurrEduClsStuObjLst[i].eduClsName + '","' + arrvCurrEduClsStuObjLst[i].eduClsTypeId + '","' + arrvCurrEduClsStuObjLst[i].courseId + '","' + arrvCurrEduClsStuObjLst[i].courseName + '")> ' + arrvCurrEduClsStuObjLst[i].eduClsName + '</a></dd>';
          }

          // this.ShowEduClsName(
          //   Format('{0}({1})', strEduClsName_LocalStorage, strCourseName_LocalStorage),
          // );

          // $('#dlEduClsList').html(strhtml);
        } catch (e) {
          const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${strThisFuncName})`;
          console.error(strMsg);
          alert(strMsg);
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'setRoles':
            setRoles();
            return;
          case 'setEduClss':
            setEduClss();
            return;
          case 'Bind_EduClsList':
            Bind_EduClsList();
            return;
          case 'login':
            console.log('refLogin_Edit.value:', refLogin_Edit.value);
            break;
          case 'Register':
            break;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
        PageHead_Game.btn_Click(strCommandName, strKeyId);
      }
      return {
        refLogin_Edit,
        refwfmRegisterStu,
        refDivLayout_Head,
        btn_Click,
        getUser,
        isShowMajor1,
        selectedValue,
        focusPaper,
        EduCls_Click,

        mySystemName,
        btnRoles,
        btnEduClss,
        visible,
        myTitle1,
        handleRoleChange,
        handleEduClsChange,
        refDropButtonRoles,
        refDropButtonEduClss,
        Bind_EduClsList,
        setRoles,
        setEduClss,
        indexTitle,
        schoolSimName,
        userLoginInfo,
        isShowDdlRoles,
      };
    },
    methods: {
      PageLoad() {
        const objPage = new Index();
        objPage.PageLoad();
      },

      btnConsole_Click() {
        const objPage = new Index();
        objPage.btnConsole_Click();
      },
      //注销
      btnCancellation_Click() {
        const objPage = new Index();
        objPage.btnCancellation_Click();
      },
      async EduClsItemChange() {
        const selectedValue = this.selectedValue;
        const divName = this.refDivLayout_Head;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(selectedValue);
        if (objEduCls == null) return;
        PageHead_Game.EduCls_Click(
          divName,
          objEduCls.idCurrEduCls,
          objEduCls.eduClsName,
          objEduCls.eduClsTypeId,
        );
      },
    },
  });
</script>

<style lang="less" scoped>
  @header-height: 60px;
  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
  }

  .layout-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: @header-height;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #aacbec;

    * {
      cursor: pointer;
    }
  }

  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }

  .page-content {
    position: absolute;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 1;
  }

  #TopicName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }

  .container {
    width: 100%;
    height: 45px;
    background-color: #007fff;
  }

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
    /* background: url(@/assets/css/index/img/logo_tz2.png) no-repeat; */
    /* width: 200px; */
  }

  .page-content-bg {
    /* position: absolute; */
    position: relative;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 220px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 100;
    display: none;
  }

  .layui-tab-content {
    padding: 5px;
  }
  .myContainer {
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 垂直居中对齐 */
    z-index: 1005;
  }

  .item {
    margin-right: 10px; /* 设置元素之间的右边距 */
  }
  .myTop_login {
    padding-top: 10px;
    width: 440px;
    font-size: 18px;
    color: white;
    text-align: right;
    float: right;
    margin-right: 20px;
  }
</style>
