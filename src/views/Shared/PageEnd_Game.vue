<template>
  <div id="divLayout_End" ref="refDivLayout_End">
    <div class="footer">
      <div class="foot">
        <div class="fleft">
          <span class="flogo"
            ><a href="javascript:void(0)" title="游戏化教育平台">游戏化教育平台</a></span
          >
          <ul class="flist">
            <li id="flfirst">
              <a href="http://www.shnu.edu.cn/" target="_blank">上海师范大学</a>
            </li>
            <li id="flfirst">
              <a href="https://www.sh-tz.com/" target="_blank">上海泰泽</a>
            </li>
          </ul>
          <div class="copyright"> Copyright &#169; 2021 游戏化教育平台v1 </div>
        </div>
        <div class="fright">
          <ul class="rlist">
            <li><a href="77240613@qq.com" class="flink3">Email</a></li>
          </ul>
          <ul class="fimg">
            <li>
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=77240613&site=qq&menu=yes"
                class="fimglink1"
                title="关注微信"
              ></a>
            </li>
            <li>
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=77240613&site=qq&menu=yes"
                class="fimglink2"
                title="制作人QQ"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import router from '@/router';

  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from 'share-stu-study-base-lib';
  import { useUserStore } from '@/store/modulesShare/user';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  // import { enumQxRoles } from '@gp/ts/L0Entity/UserManage_GP/clsQxRolesEN';

  import { PageEnd_Game } from '@/views/Shared/PageEnd_Game';

  export default defineComponent({
    name: 'PageEnd_Game',
    components: {
      // 组件注册
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      // isShowEduCls: {
      //   type: String,
      //   required: true,
      // },
      // isShowPaperIframe: {
      //   type: String,
      //   required: true,
      // },
      // isShowTopic: {
      //   type: String,
      //   required: true,
      // },
      // isShowMajor: {
      //   type: String,
      //   required: true,
      // },
      // isShowSearch: {
      //   type: String,
      //   required: true,
      // },
      // isShowAttention: {
      //   type: String,
      //   required: true,
      // },
      // paperId: {
      //   type: String,
      //   required: true,
      // },
      // headerHeight: {
      //   type: String,
      //   required: true,
      //   default: '60',
      // },
    },
    setup(props) {
      const userStore = useUserStore();
      const focusPaper = ref('关注论文');
      const selectedValue = ref();
      const refDivLayout_End = ref();

      const isShowMajor1 = ref(true);
      const canEditEduCls = ref(true);
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        PageEnd_Game.divLayout = refDivLayout_End.value;
        PageEnd_Game.vuebtn_Click = btn_Click;
        PageEnd_Game.GetPropValue = GetPropValue;
        if (userStore.getUserType === UserTypeMap.middle_School) {
          isShowMajor1.value = false;
          focusPaper.value = '关注课文';
        }
        switch (userStore.roleId) {
          case enumQxRoles.System_Admin_00620001:
          case enumQxRoles.K_12_Teacher_00620013:
          case enumQxRoles.Regular_Teacher_00620002:
          case enumQxRoles.Secondary_School_System_Admin_00620018:
            canEditEduCls.value = true;
            break;
          default:
            canEditEduCls.value = false;
            break;
        }
        // const objPage = new PageEnd_Game();
        // objPage.PageLoad();
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
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
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
        PageEnd_Game.btn_Click(strCommandName, strKeyId);
      }
      return {
        refDivLayout_End,
        btn_Click,
        getUser,
        isShowMajor1,
        canEditEduCls,
        UserName,
        selectedValue,
        focusPaper,
        // headerStyle,
      };
    },
    methods: {
      async EduClsItemChange() {
        const selectedValue = this.selectedValue;
        const divName = this.refDivLayout_End;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(selectedValue);
        if (objEduCls == null) return;
        PageEnd_Game.EduCls_Click(
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
</style>
@/ts/components/PageEnd_Game
