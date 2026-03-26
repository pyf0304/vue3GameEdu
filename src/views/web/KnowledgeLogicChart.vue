@page
@{
    Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "知识图谱-游戏化教育平台";
}

@section Styles{

    <link rel="stylesheet" href="../lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="~/css/public.css" />

    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css">
}



@section Scripts{

    <script src="../lib/require/require.js" data-main="../js/src/config"></script>
    <script src="../lib/jquery/dist/jquery.js"></script>
    <script type="module" src="../lib/bootstrap/dist/js/popper.js"></script>
    @*<script src="~/lib/bootstrap/dist/js/bootstrap.js"></script>
        <script src="~/lib/bootstrap/dist/js/bootstrap.min.js"></script>*@


    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>

    <script type="text/javascript" src="~/lib/jsPlumb/js/jquery-ui.min.js"></script>
    @*<script type="text/javascript" src="~/lib/jsPlumb/js/jquery.jsPlumb.min.js"></script>*@
    @*潘以锋*@
    <script type="text/javascript" src="~/lib/jsPlumb/js/jsplumb.js"></script>

    <script type="text/javascript" src="~/lib/jsPlumb/js/index.js"></script>


    <script>

        function LoadKnowledge() {
            Load_Knowledge()
        }

        function LoadjsPlumb() {

            Load_jsPlumb()
        }

        function DragDeviceLeft() {
            Drag_deviceLeft()
        }

    </script>
}

<script>

    //window.onload = function () {
    //    require(["../js/Web/KnowledgeLogicChart.js"], function (KnowledgeLogicChart) {
    //        //$('#hidKnowledgeGraphId').val("0000000001");
    //        $('#indexTitle').html("知识图谱");
    //        $("#navTitle").html("课程知识图谱");
    //        $("#hidGraphMenu").val(1);
    //        const objPage = new KnowledgeLogicChart.KnowledgeLogicChart();
    //        objPage.PageLoad();
    //    });
    //}

    window.onload = function () {

        GetRequestId_PageLoad();
    }


    function GetRequest() {
        const url = location.search; //获取url中"?"符后的字串
        const theRequest = new Object();
        if (url.indexOf("?") != -1) {
            const str = url.substr(1);
            strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }


    function GetRequestId_PageLoad() {
        const Request = new Object();
        Request = GetRequest();

        const strQuestionID = Request['questionID'];//题目Id
        const strKnowledgeGraphId = Request['KnowledgeGraphId'];//结构图谱Id
        const strGameLevelId = Request['GameLevelId'];//关卡Id
        const strStandardId = Request['StandardId'];//Id



        $('#hidQuestionID').val(strQuestionID);
        $('#hidKnowledgeGraphId').val(strKnowledgeGraphId);
        $('#hidGameLevelId').val(strGameLevelId);
        $('#hidStandardId').val(strStandardId);


        require(["../js/Web/KnowledgeLogicChart.js"], function (KnowledgeLogicChart) {
            const objPage = new KnowledgeLogicChart.KnowledgeLogicChart();
            objPage.PageLoad();
        });


    }




    //保存逻辑关系
    function SaveLogicRela(ojson) {

        console.log("保存关系json");

        if (ojson.server.length == 0) {
            message.warning( "请建立关系连接然后再保存!");
        } else {
            require(["../js/Web/KnowledgeLogicChart.js"], function (KnowledgeLogicChart) {
                const objPage = new KnowledgeLogicChart.KnowledgeLogicChart();
                objPage.btnSaveLogicRela_Click(ojson);
            });
        }
    }


    //保存逻辑关系
    function BindDdl_RelaTypeId() {
        require(["../js/Web/KnowledgeLogicChart.js"], function (KnowledgeLogicChart) {
            const objPage = new KnowledgeLogicChart.KnowledgeLogicChart();
            objPage.SetDdl_RelaTypeId();
        });

    }




    //补0操作
    function toDub(n) {
        if (n < 10) {
            return "0" + n;
        }
        else {
            return "" + n;
        }
    }

    const now = new Date();
    //时间显示
    //const timeShow = function () {
    function timeShow() {
        const t = new Date();
        t.setFullYear(t.getFullYear() - now.getFullYear());
        t.setMonth(t.getMonth() - now.getMonth());
        t.setDate(t.getDate() - now.getDate());
        t.setHours(t.getHours() - now.getHours());
        t.setMinutes(t.getMinutes() - now.getMinutes());
        t.setSeconds(t.getSeconds() - now.getSeconds());
        //document.getElementById('show').innerHTML = t.getHours() + '小时' + t.getMinutes() + '分钟' + t.getSeconds() + '秒';
        document.getElementById('TimeShow').innerHTML = toDub(t.getMinutes()) + ':' + toDub(t.getSeconds());
    }

    //启动时间显示
    function setTimeShow() {
        timeShow();
        setInterval(timeShow, 1000);
    }


    //xadmin.open('添加概念', '../GraduateEduTopic/Pdfiframe?PageType=03&TopicId=' + strKeyId + '&Id_CurrEduCls=' + strId_CurrEduCls, '', '', true);

    function CorrectLogicChart_Click() {
        const strStandardId = $("#hidStandardId").val();

        xadmin.open('查看正确知识逻辑关系图', '../Knowledges/LogicRela?KnowledgeGraphId=' + strStandardId + '&state=1');
    }

    function Show_TimeShow() {

        const Span_nav_title = document.getElementById("nav_title");
        const a1 = document.createElement("a");
        a1.title = "时间";
        a1.id = "TimeShow";
        Span_nav_title.appendChild(a1);
    }

    function Show_nav_title() {

        const Span_nav_title = document.getElementById("nav_title");
        const a1 = document.createElement("a");
        a1.title = "耗时";
        a1.id = "a_TakeUpTime";
        Span_nav_title.appendChild(a1);

        const a1 = document.createElement("a");
        a1.title = "正确数";
        a1.id = "a_CorrectNum";
        Span_nav_title.appendChild(a1);

        const a1 = document.createElement("a");
        a1.title = "错误数";
        a1.id = "a_ErrorNum";
        a1.style.color = "red";
        Span_nav_title.appendChild(a1);

        const a1 = document.createElement("a");
        a1.title = "分数";
        a1.id = "a_Fraction";
        Span_nav_title.appendChild(a1);

    }


    //信息提示
    function layui_Alert(iconKey, strMsg) {

        layer.msg(strMsg, {
            icon: iconKey,
            time: 1000
        });
    }


    function ChangeBg_Click(key) {
        Console.log(key);
    }

</script>


<div id="divLoading" class="loading">
    <img src="~/images/CirclePoint.gif" />
</div>

<div class="x-nav">
    <span id="nav_title" class="layui-breadcrumb">
        @*<a href="">首页</a>
            <a href="">个人中心</a>*@
        @*<a id="a_TimeShow">
                <cite id="TimeShow">00:00</cite>
            </a>
            <a title="耗时" id="a_TakeUpTime"></a>
            <a title="正确数" id="a_CorrectNum"></a>
            <a title="错误数" id="a_ErrorNum"></a>
            <a title="分数" id="a_Fraction"></a>*@


        @*  <a>(功能说明：选中结构图谱下面的图谱名称可以切换结构图，旁边的加号可以添加图谱。选中图中的根节点以后，再点击左边的(结构章节)就可以添加到结构图中！)</a>*@
    </span>

    <a id="btn1" class="layui-btn layui-btn-normal" style="display:none;float:right; margin-right:10px;" title="提交关系图">
        <i class="layui-icon layui-icon-file-b"></i>提交关系图
    </a>

    <a id="btn_CorrectLogicChart" onclick="CorrectLogicChart_Click()" class="layui-btn layui-btn-normal" style="display:none; line-height:34px;float:right; margin-right:10px;" title="查看正确逻辑图">
        <i class="layui-icon layui-icon-file-b" style="line-height:34px"></i>查看正确逻辑图
    </a>


</div>
<!-- 网页内容信息 -->

<div class="device">
    <div id="deviceLeft" class="deviceLeft">
        @*<h3>知识点</h3>*@
        <div id="KnowledgesNode" class="deviceLeft_box">
        </div>
    </div>
    <div id="deviceRight" class="deviceRight">
        <div id="main" class="main"></div>
    </div>
</div>




<input id="hidOpType" type="hidden" />
<input id="hidKeyId" type="hidden" />

<input id="hidLogicNodeJson" type="hidden" />
<input id="hidLogicRelaJson" type="hidden" />

<input id="hidKnowledge_Id" type="hidden" />

<input id="hidBgColor" type="hidden" />
<input id="hidMasterNum" type="hidden" />
<input id="hidGraphMenu" type="hidden" />

<input id="hidKnowledgeGraphId" type="hidden" />
<input id="hidQuestionID" type="hidden" />
<input id="hidGameLevelId" type="hidden" />
<input id="hidStandardId" type="hidden" />
