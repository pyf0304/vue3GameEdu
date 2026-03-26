@page
@model TaskManageCore.Pages.WebApp.IndexModel
@{
    ViewBag.Title = "研究生学习首页";
    Layout = "~/Pages/Shared/_LayoutIndex.cshtml";
    const strUrl_Session_SetString = Model.Url_Session_SetString;
    const strUrl_Session_GetString = Model.Url_Session_GetString;

}
@section Scripts{
    @*<script src="~/lib/jquery/dist/jquery.js"></script>
        <script src="~/lib/require/require.js" data-main="../js/src/config"></script>*@

    @*<link href="~/Slideby/styles/owl.carousel.css" rel="stylesheet" type="text/css">
        <link href="~/Slideby/styles/owl.theme.css" rel="stylesheet" type="text/css">*@
    <script src="../lib/jquery/dist/jquery.js" type="module"></script>
    <script src="~/lib/require/require.js" data-main="../js/src/config"></script>

    <link href="~/css/index.css" rel="stylesheet" type="text/css">

    @*<script type="text/javascript" src="~/Slideby/scripts/owl.carousel.min.js"></script>
        <script type="text/javascript" src="~/Slideby/scripts/framework.launcher.js"></script>*@

}

<style type="text/css">

    .responsive-image {
        width: 100%;
        margin-bottom: 0px;
    }
</style>




<script>
     const strWebRoot = "@Model.WebRoot";
     const strUrl_Session_SetString = "@Model.Url_Session_SetString";
    const strUrl_Session_GetString = "@Model.Url_Session_GetString";


    //function GetRequest() {
    //    const url = location.search; //获取url中"?"符后的字串
    //    const theRequest = new Object();
    //    if (url.indexOf("?") != -1) {
    //        const str = url.substr(1);
    //        strs = str.split("&");
    //        for (let i = 0; i < strs.length; i++) {
    //            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    //        }
    //    }
    //    return theRequest;
    //}

    //function GetPrjID() {
    //    const Request = new Object();
    //    Request = GetRequest();
    //    const str1;
    //    str1 = Request['CourseID'];

    //    if (str1 != null) {
    //        $('#hidCourseID').val(str1);

    //        require(["../js/WebApp/Index.js"], function (index) {
    //            index.Index.PageLoad();
    //        });
    //        //require(["../js/WebApp/SubTasks_TSEx.js"], function (subtasks) {
    //        //    subtasks.SubTasks_TSEx.btnQuery_Click();
    //        //});
    //        //SetSession(PrjID, str1);
    //    }
    //    else {

    //    }
    //}


    //$(function () {

    //    GetPrjID();

    //});


    window.onload = function () {
        require(["../js/WebApp/Index.js"], function (index) {
            index.Index.PageLoad();
            //const objPage = new taskinfo.Task_TSEx();
            //objPage.PageLoad();
        });
    }
    //用来处理主界面功能模块的跳转；
    function clickLi(id) {

        const strId = id.id;
        const strCourseId = $('#hidCourseID').val();

        const strUserId = $('#hidUserId').val();

        if (strId == "Paper") {
            //论文
            //window.location.href = "/GraduateStudyWebApp/DailyRunning/CurrEduClsStuList?CourseID='" + strCourseId + "'";
            window.location.href = "../GraduateEduPhone/PaperTypeList";

        }
        else if (strId == "PaperRead") {
            //论文阅读
            //window.location.href = "/GraduateStudyWebApp/DailyRunning/CurrEduClsStuList?CourseID='" + strCourseId + "'";
            window.location.href = "../GraduateEduEx/WApiSubThesisList?OperationTypeId=01";

        }
        else if (strId == "PaperWrite") {
            //论文写作
            //window.location.href = "/GraduateStudyWebApp/Knowledges/CourseExamPaperList?CourseID='" + strCourseId + "'";
            window.location.href = "../GraduateEduEx/WApiSubThesisWrite?OperationTypeId=02";
        }
        else if (strId == "TopicId") {
            //主题
            //window.location.href = "/ExamLibWebApp/DailyRunning/CurrEduClsStuList?CourseID='" + strCourseId + "'";
            window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList?TypeId=ExamId";

        }
        else if (strId == "DiscussionId") {
            //讨论
            //window.location.href = "/ExamLibWebApp/Knowledges/CourseExamPaperList?CourseID='" + strCourseId + "'";
            window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList?TypeId=PaperId";
        }
        //else if (strId == "CaseVideo") {
        //    //案例视频
        //    //window.location.href = "/GraduateStudyWebApp/CourseLearning/CourseLearningCaseList?CourseID='" + strCourseId + "'";
        //    // window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList?TypeId=CaseVideo";
        //    alert("内容正在后台填充");
        //}
        //else if (strId == "VideoShow") {
        //    //视频
        //    //window.location.href = "/GraduateStudyWebApp/VideoListShow/VideoList";
        //    alert("内容正在后台填充");
        //}
        //else if (strId == "Knowledge") {
        //    //知识点
        //    window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList?TypeId=Knowledge";
        //}
        else {

        }

    }

</script>


<div data-role="page" id="pageone">
    <div data-role="header" data-position="fixed">
        <h1 id="IndexTitle"></h1>
        @*<a asp-page="/CourseLearning/cc_CourseList" rel="external" class="ui-btn ui-btn-right ui-icon-bullets ui-btn-icon-left ui-corner-all">切换课程</a>*@
    </div>

    <div data-role="content">
        @*<ul data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="请输入……">

            </ul>*@
        @*<div class="decoration"></div>*@

        <div class="container">
            <div class="slider-controls" data-snap-ignore="true">
                <div>
                    <img src="~/Slideby/images/general-nature/3.jpg" class="responsive-image" alt="img">
                    @*<p class="title-slider-caption">
                            <strong>Welcome</strong>
                            <em>We make your mobile and tablet rock!</em>
                        </p>*@
                </div>

                @*<div>
                        <img src="~/Slideby/images/general-nature/2.jpg" class="responsive-image" alt="img">
                        <p class="small-slider-caption">A small caption</p>
                    </div>
                    <div>
                        <img src="~/Slideby/images/general-nature/1.jpg" class="responsive-image" alt="img">
                        <p class="title-slider-caption">
                            <strong>A caption title</strong>
                            <em>A caption text and what not!</em>
                        </p>
                    </div>*@
            </div>
            @*<a href="#" class="next-slider"></a>
                <a href="#" class="prev-slider"></a>*@
        </div>


        <div class="ExpressLane">
            <ul class="list_ul">
                <li id="Paper" onclick="clickLi(this)">
                    <a href="javascript:void(0)" class="icon-3">
                        <i></i>
                        <label>论文</label>
                    </a>
                </li>
                <li id="PaperRead" onclick="clickLi(this)">
                    <a href="#" class="icon-8">
                        <i></i>
                        <label>论文阅读</label>
                    </a>
                </li>
                <li id="PaperWrite" onclick="clickLi(this)">
                    <a href="#" class="icon-7">
                        <i></i>
                        <label>论文写作</label>
                    </a>
                </li>
                @*<li id="CaseVideo" onclick="clickLi(this)">
            <a href="#" class="icon-1">
                <i></i>
                <label>测试</label>
            </a>
        </li>
        <li id="VideoShow" onclick="clickLi(this)">
            <a href="#" class="icon-5">
                <i></i>
                <label>测试</label>
            </a>
        </li>*@
                <li id="TopicId" onclick="clickLi(this)">
                    <a href="#" class="icon-1">
                        <i></i>
                        <label>主题</label>
                    </a>
                </li>
                <li id="DiscussionId" onclick="clickLi(this)">
                    <a href="#" class="icon-5">
                        <i></i>
                        <label>讨论区</label>
                    </a>
                </li>
                @*<li id="Knowledge" onclick="clickLi(this)">
                    <a href="#" rel="external" class="icon-2">
                        <i></i>
                        <label>知识点</label>
                    </a>
                </li>
                <li>

                    <a href="../GraduateEduPaper/WApiPaperList?QuoteGroupId=01" rel="external" class="icon-3">
                        <i></i>
                        <label>引用论文</label>
                    </a>
                </li>
                <li>

                    <a href="../GraduateEduPaper/WApiPaperList?QuoteGroupId=02" rel="external" class="icon-3">
                        <i></i>
                        <label>本组论文</label>
                    </a>
                </li>*@
                @*<li>
            <a href="#" class="icon-4">
                <i></i>
                <label>xxx</label>
            </a>
        </li>
        <li>
            <a href="#" class="icon-6">
                <i></i>
                <label>xxx</label>
            </a>
        </li>*@
            </ul>



        </div>

        @*<div class="decoration"></div>*@

    </div>

    <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a asp-page="/WebApp/Indexs" rel="external" data-icon="home" class="ui-btn-active ui-state-persist">首页</a></li>
                <li><a asp-page="/WebApp/MessagePushList" rel="external" data-icon="star">消息</a></li>
                <li><a asp-page="/WebApp/User" rel="external" data-icon="user">我的</a></li>
                @*<li><a asp-page="/WebApp/Statistics" rel="external" data-icon="star">统计</a></li>
        <li><a asp-page="/WebApp/User" rel="external" data-icon="user">我的</a></li>*@

            </ul>
        </div>

    </div>
</div>

<input id="hidCourseID" type="hidden"  value="@Model.GetSession("CourseId")" />
<input id="hidUserId" type="hidden" value="@Model.GetSession("UserId")" />
<input id="hidUserInfo" type="hidden" value="@Model.GetSession("objvUserRoleRelation")" />