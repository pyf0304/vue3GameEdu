<template>
  <div id="divLayout_Ranking" ref="refDivLayout">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" role="tab" href="#Ranking1">排名</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" role="tab" href="#Ranking2">班级用户总分</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div id="Ranking1" class="tab-pane fade show active">
        <br />
        <div style="width: 31%; float: left">
          <button class="btn btn-success" id="btnAddNewRecord" title="我的当前排名"
            >我的当前排名</button
          >
          <br />
          <div id="PaperReportTree" class="divTree divTree3" style="width: 75%">
            <!--当前用户关卡排名 -->
            <div class="MeetingTree">
              <ul class="nav nav-pills flex-column" role="tablist" id="PaperReportTreeBind"></ul>
            </div>
          </div>
        </div>
        <!--关卡总排名 -->
        <div style="width: 69%; float: right">
          <button class="btn btn-success" id="btnAddNewRecord" title="关卡排名情况"
            >关卡排名情况</button
          >

          <br />
          <div
            id=""
            style="
              width: 100%;
              height: 640px;
              padding: 20px;
              text-align: center;
              overflow: auto;
              background: #ffffff;
            "
            class="divTree divTree3"
          >
            <ul class="nav nav-pills flex-column" role="tablist" id="RankScore"></ul>
          </div>
        </div>
      </div>
      <div id="Ranking2" class="tab-pane fade">
        <!-- 班级用户总分列表层  -->
        <div id="divList" ref="refDivList" class="div_List">
          <div id="divDataLst" class="div_List"> </div>
          <div id="divPager" class="pager"> </div>
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

  import { refDivList, refDivLayout } from '@/views/GameLearn/ge_UserCreditsLogVueShare';
  import {
    refDivList as refDivList_Ttl,
    refDivLayout as refDivLayout_Ttl,
    IdCurrEduCls_Session,
  } from '@/views/GameLearn/ge_UserCreditsTtlVueShare';
  import { PassGame_Ranking } from '@/views/web/PassGame_Ranking';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  export default defineComponent({
    name: 'PassGame_Ranking',
    components: {
      // 组件注册
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      const refKnowledgeMasterChart = ref();
      onMounted(() => {
        PassGame_Ranking.vuebtn_Click = btn_Click;
        PassGame_Ranking.GetPropValue = GetPropValue;
        refDivList_Ttl.value = refDivList.value;
        refDivLayout_Ttl.value = refDivLayout.value;
        // const objPage = new PassGame_Ranking();
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
        PassGame_Ranking.btn_Click(strCommandName, strKeyId);
      }
      //展示习题信息

      return {
        btn_Click,
        refDivList,
        refDivLayout,
        refKnowledgeMasterChart,
      };
    },
    methods: {},
  });
</script>

<style lang="less" scoped>
  .myTitle {
    font-size: 1.05rem; /* 设置标题字体大小 */
    font-weight: bold; /* 设置标题字体粗细 */
    line-height: 1.5; /*设置内容行高 */
    color: #333; /* 设置标题字体颜色 */
    /* 其他标题样式 */
  }

  .myContent {
    font-size: 1.05rem; /* 设置内容字体大小 */
    line-height: 1.5; /*设置内容行高 */
    margin-top: 2px;
    color: #666; /* 设置内容字体颜色 */
    /* 其他内容样式 */
  }
  .subDiv {
    margin-bottom: 10px !important; /* 设置子层之间的下边距为 10px */
    margin-top: 10px;
  }
  .box1 {
    margin-bottom: 10px;
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
    width: 1000px;
    height: 300px;
  }

  .slider {
    width: 100%;
    min-width: 1000px;
    height: 305px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  #demo {
    width: 1000px;
    height: 305px;
    margin: 0 auto;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
    font-size: 15px;
  }
  /********************************左边导航********************************/
  .leftNav {
    padding: 20px;
    width: 200px;
    height: 650px;
    overflow: hidden;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    /*border-radius: 7px 4px 4px 2px;*/
    border-radius: 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-size: 16px;
  }
  /********************************右边内容********************************/
  .rightContent {
    /*width: 690px;*/
    width: calc(100% - 210px);
    background: #fff;
    min-height: 650px;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-bottom: solid 1px #dbdcde;
    border-top: solid 1px #dededf;
    border-left: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: right;
  }

  .divTree {
    /*margin-left: 10px;*/
    padding-top: 10px;
    width: 24%;
    font-size: 17px;
    min-height: 300px;
    overflow: hidden;
    /*overflow-y:scroll;*/
    overflow-y: auto;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    background: #fff;
    font-family: 'Microsoft YaHei';
  }

  .divTree3 {
    border: solid 1px #fff;
    margin: 10px;
    /*bottom: 5%;*/
    z-index: 999;
    background: whitesmoke;
  }

  .MeetingTree {
    margin-top: 10px;
    width: 100%;
    min-height: 200px;
    border-radius: 10px 8px 8px 4px; /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    background-color: whitesmoke;
  }

  .breadcrumb {
    padding: 8px 15px;
    margin-bottom: 0px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .rightContent .content {
    overflow: hidden;
    width: 100%;
    /* height: 580px; */
    padding: 0px;
    font-size: 15px;
  }

  .divQuestionPager {
    width: 650px;
    float: right;
  }
  /*分页样式*/
  .page_list1 {
    /*position: fixed;
                  right: 200px;
                  top: 203px;*/
    z-index: 999;
    width: 100%;
    text-align: right;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    /*border: 1px solid #ddd;*/
    padding-left: 10px;
  }

  .page_list2 {
    position: fixed;
    right: 200px;
    top: 0px;
    z-index: 999;
    width: 700px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    padding-left: 10px;
  }
  .divParent {
    display: flex;
    flex-direction: column;
  }
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>
