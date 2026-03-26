<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <PageHead_Game ref="refPageHead" :title="''"></PageHead_Game>
    <!-- 网页图片切换 -->
    <div class="slider">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/css/index/img/p1.jpg" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/css/index/img/p2.jpg" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/css/index/img/p5.jpg" />
          </div>
        </div>

        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>

    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box1">
        <div class="ExpressLane1">
          <ul class="list_ul1">
            <li>
              <a href="javascript:void(0)" class="icon-7" @click="liMenu_Click(1)">
                <div class="iconLeft">
                  <i></i>
                  <label>基础知识</label>
                </div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" class="icon-1" @click="liMenu_Click(2)">
                <div class="iconLeft">
                  <i></i>
                  <label>知识测评</label>
                </div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" class="icon-9" @click="liMenu_Click(3)">
                <div class="iconLeft">
                  <i></i>
                  <label>冲关游戏</label>
                </div>
                <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="icon-9" @click="liMenu_Click(10)">
                <div class="iconLeft">
                  <i></i>
                  <label>漂流瓶游戏</label>
                </div>
                <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="icon-4" @click="liMenu_Click(4)">
                <div class="iconLeft">
                  <i></i>
                  <label>成就激励</label>
                </div>
                <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="box2">
        <div class="ExpressLane2">
          <ul class="list_ul1">
            <li>
              <a href="javascript:void(0)" class="icon-3" @click="liMenu_Click(5)">
                <i></i>
                <label>知识图谱</label>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="icon-5" @click="liMenu_Click(6)">
                <i></i>
                <label>习题集</label>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="icon-2" @click="liMenu_Click(7)">
                <i></i>
                <label>作业</label>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="icon-8" @click="liMenu_Click(8)">
                <i></i>
                <label>学习社区</label>
                <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
              </a>
            </li>

            <li>
              <a href="javascript:void(0)" class="icon-6" @click="liMenu_Click(9)">
                <i></i>
                <label>系统设置</label>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <PageEnd_Game :title="''"></PageEnd_Game>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/index/css/index.css';
  import '@/assets/css/index/css/slider.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import PageEnd_Game from '@/views/Shared/PageEnd_Game.vue';
  import PageHead_Game from '@/views/Shared/PageHead_Game.vue';

  import { Login } from '@/viewsShare/UserManage/Login';
  import router from '@/router';

  import { Index } from '@/views/web/Index';
  export default defineComponent({
    name: 'Index',
    components: {
      // 组件注册
      PageEnd_Game,
      PageHead_Game,
    },
    setup() {
      const refPageHead = ref();
      const mySystemName = ref('游戏化教学平台');

      const wfmRegisterStuRef = ref();

      const sysTitle = ref('首页-游戏化教育平台');

      onMounted(() => {
        Index.vuebtn_Click = btn_Click;
        // userStore.getIdXzMajor = '00000468';
        window_onload();
      });

      function window_onload() {
        const objPage = new Index();
        objPage.PageLoad();
      }

      //重新加载
      function Reload() {
        // PageLoad()
      }

      //菜单通道
      function liMenu_Click(key: number) {
        const objPage = new Index();
        objPage.liMenu_Click(key);
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Bind_EduClsList':
            refPageHead.value.Bind_EduClsList();
            return;
          case 'setRoles':
            refPageHead.value.setRoles();
            return;
          case 'setEduClss':
            refPageHead.value.setEduClss();
            return;

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
        Index.btn_Click(strCommandName, strKeyId);
      }
      return {
        wfmRegisterStuRef,
        btn_Click,

        sysTitle,

        mySystemName,
        refPageHead,
        liMenu_Click,
      };
    },
  });
</script>
<style scoped>
  .box3 {
    padding: 3px 10px 10px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 5px;
  }

  .box4 {
    padding: 10px 10px 0px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 8px;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 5px;
    background-color: white;
    /*border-left: solid 1px #dbdcde;
            border-right: solid 1px #dededf;*/
    /*border-bottom: solid 1px #dbdcde;*/
    border-radius: 4px 4px 4px 2px;
    line-height: 3;
  }

  .alert {
    position: relative;
    padding: 0.55rem 1.25rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .carousel-inner img {
    width: 100%;
    height: 320px;
  }

  .slider {
    width: 100%;
    /*min-width: 1000px;*/
    height: 325px;
    position: relative;
    overflow: hidden;
    /*background: #fff;*/
    text-align: center;
  }

  #demo {
    width: 80%;
    height: 325px;
    margin: 0 auto;
    /*margin-top: 2px;*/
    /*top: 10px;*/
  }
</style>

<!-- <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script> -->
@/views/web/IndexBBak
