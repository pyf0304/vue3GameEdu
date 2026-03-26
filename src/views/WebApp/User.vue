@page
@model TaskManageCore.Pages.WebApp.UserModel
@{
    ViewBag.Title = "任务系统用户中心";
    Layout = "~/Pages/Shared/_LayoutUser.cshtml";
}

@section Scripts{


}

<script>
    window.onload = function () {
        require(["../js/WebApp/User.js"], function (userinfo) {
            //userinfo.User.PageLoad();
            const objPage = new userinfo.User();
            objPage.PageLoad();
        });
    }

    /*
  提交编辑
 (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
 */
    function mySubmit(pstrOp) {
        //    alert("提交" + strOp);
        require(["../js/WebApp/User.js"], function (feedback) {
            const objPage = new feedback.User();
            objPage.btnOKUpd_Click();
        });
    }

</script>
<div data-role="page" id="pageone">
    <div data-role="header" data-position="fixed">
        <h1>个人中心</h1>
    </div>
    <div data-role="main" class="ui-content">

        <div class="align-content-center" style="border-radius:5px;width:100%;text-align:center; background-color:lightseagreen;padding-top:5px;padding-bottom:5px;">
            <a href="javascript:void(0)" id="imgUser">
                <img style="border-radius:100px; width:40%" src="~/img/avatar5.png" />
            </a>
            <h3><span id="userName" style="color:white"></span></h3>
            <h4><span id="PrjName" style="color:white"></span></h4>
        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="#pagetwo" data-transition="pop">
                        <img src="~/img/b_man.png" class="ui-li-icon">
                        服务商
                    </a>
                </li>
                <li>
                    <a href="#pageThree" data-transition="pop">
                        <img src="~/img/b_feedback.png" class="ui-li-icon">
                        意见反馈
                    </a>
                </li>
                <li>
                    <a href="#pageFour" data-transition="pop">
                        <img src="~/img/b_about.png" class="ui-li-icon">
                        关于
                    </a>
                </li>
                <li>
                    <a href="#pageFive" data-transition="pop">
                        <img src="~/img/b_about.png" class="ui-li-icon">
                        收藏
                    </a>
                </li>
                <li>
                    <a href="#pageSix" data-transition="pop">
                        <img src="~/img/b_about.png" class="ui-li-icon">
                        浏览记录
                    </a>
                </li>
                <li>
                    <a href="#pageSeven" data-transition="pop">
                        <img src="~/img/b_about.png" class="ui-li-icon">
                        论文
                    </a>
                </li>
            </ul>
        </div>
        <a asp-page="/WebApp/Login" rel="external" data-role="button" data-transition="flow">退出登录</a>
    </div>
    <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a asp-page="/WebApp/Indexs" rel="external" data-icon="home">首页</a></li>
                <li><a asp-page="/WebApp/MessagePushList" rel="external" data-icon="star">消息</a></li>
                <li><a asp-page="/WebApp/User" rel="external" data-icon="user" class="ui-btn-active ui-state-persist">我的</a></li>

            </ul>
        </div>

    </div>
</div>

<div data-role="page" id="pagetwo">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>服务商</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div class="align-content-center" style="width:100%;text-align:center;padding-top:10px;padding-bottom:10px;">
            <a href="#" id="imgUser">
                <img style="border-radius:10px; width:100%" src="~/img/service_provider.jpg" />
            </a>

        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="#">

                        <h4>服务商：上海泰泽信息技术有限公司</h4>
                    </a>
                </li>
                <li>
                    <a href="#">

                        <h4>电话：15026890799</h4>
                    </a>
                </li>
                <li>
                    <a href="#">

                        <h4>地址：上海市徐汇区桂林路100号数理学院316</h4>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div data-role="page" id="pageThree">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>意见反馈</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div style=" margin-top:20px; width:100%;">
            <form method="post" action="demo_form.php">
                <div class="ui-field-contain">
                    <label for="info">姓名：</label>
                    <input type="text" id="txtNickName" name="txtNickName">
                </div>
                <div class="ui-field-contain">
                    <label for="bday">联系电话：</label>
                    <input type="text" id="txtTelephone" name="txtTelephone">

                </div>
                <div class="ui-field-contain">
                    <label for="fullname">E-mail：</label>
                    <input type="text" id="txtEMail" name="txtEMail">

                </div>
                <div class="ui-field-contain">
                    <label for="fullname">意见：</label>

                    <textarea id="txtFeedBackContent" name="txtFeedBackContent"></textarea>
                </div>
                <div class="ui-field-contain">
                    <button id="btnOKUpd" type="button" onclick="mySubmit()">提交</button>

                </div>
            </form>
        </div>
    </div>
</div>

<div data-role="page" id="pageFour">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>关于</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div class="align-content-center" style="border-radius:5px;width:100%;text-align:center; background-color:darkseagreen;padding-top:10px;padding-bottom:10px;">
            <a href="#" id="imgUser">
                <img style="border-radius:100px; width:40%" src="~/img/tzlogo.png" />
            </a>
            <h2><span id="userName" style="color:white">任务管理系统</span></h2>
            <h4><span id="PrjName" style="color:white">版本号：v1.0.3</span></h4>
        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="#">

                        <h4>公司：上海泰泽信息技术有限公司</h4>
                    </a>
                </li>
                <li>
                    <a href="http://www.sh-tz.com" rel="external">

                        <h4>官网：http://www.sh-tz.com</h4>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>

<div data-role="page" id="pageFive">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>我的收藏</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div class="align-content-center" style="border-radius:5px;width:100%;text-align:center; background-color:darkseagreen;padding-top:10px;padding-bottom:10px;">
            <a href="#" id="imgUser">
                <img style="border-radius:100px; width:40%" src="~/img/tzlogo.png" />
            </a>
            <h2><span id="userName" style="color:white">任务管理系统</span></h2>
            <h4><span id="PrjName" style="color:white">版本号：v1.0.3</span></h4>
        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="/GraduateStudyWebApp/WebApp/MyCollectList?FunctionId=0013" rel="external">

                        <h4>案例收藏</h4>
                    </a>
                </li>
                <li>
                    <a href="/GraduateStudyWebApp/WebApp/MyCollectList?FunctionId=0015" rel="external">

                        <h4>视频库收藏</h4>
                    </a>
                </li>
              
            </ul>
        </div>
    </div>
</div>
<div data-role="page" id="pageSix">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>浏览记录</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div class="align-content-center" style="border-radius:5px;width:100%;text-align:center; background-color:darkseagreen;padding-top:10px;padding-bottom:10px;">
            <a href="#" id="imgUser">
                <img style="border-radius:100px; width:40%" src="~/img/tzlogo.png" />
            </a>
            <h2><span id="userName" style="color:white">任务管理系统</span></h2>
            <h4><span id="PrjName" style="color:white">版本号：v1.0.3</span></h4>
        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="/GraduateStudyWebApp/WebApp/MyBrowseList?FunctionId=0013" rel="external">

                        <h4>案例浏览</h4>
                    </a>
                </li>
                <li>
                    <a href="/GraduateStudyWebApp/WebApp/MyBrowseList?FunctionId=0015" rel="external">

                        <h4>视频库浏览</h4>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>

<div data-role="page" id="pageSeven">
    <div data-role="header">
        <a href="#pageone" class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-left ui-corner-all">返回</a>
        <h1>论文</h1>
    </div>
    <div data-role="main" class="ui-content">
        <div class="align-content-center" style="border-radius:5px;width:100%;text-align:center; background-color:darkseagreen;padding-top:10px;padding-bottom:10px;">
            <a href="#" id="imgUser">
                <img style="border-radius:100px; width:40%" src="~/img/tzlogo.png" />
            </a>
            <h2><span id="userName" style="color:white">任务管理系统</span></h2>
            <h4><span id="PrjName" style="color:white">版本号：v1.0.3</span></h4>
        </div>

        <div style=" margin-top:20px; width:100%;margin-bottom:40px;">
            <ul data-role="listview" data-inset="true">
                <li>
                    <a href="../GraduateEduEx/MyThesisRead?OperationTypeId=01" rel="external">

                        <h4>我的阅读</h4>
                    </a>
                </li>
                <li>
                    <a href="../GraduateEduEx/WApiSubThesisWrite?OperationTypeId=02" rel="external">

                        <h4>我的写作</h4>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>

<input id="hidUserInfo" type="hidden" value="@Model.GetSession("objvUserRoleRelation")" />
<input id="hidUserId" type="hidden" value="" />
