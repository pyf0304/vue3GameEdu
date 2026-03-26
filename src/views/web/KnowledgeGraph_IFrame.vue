@page
@{
    Layout = "~/Pages/Shared/_Layout_jsPlumb.cshtml";
    ViewData["Title"] = "知识图谱-游戏化教育平台";
}

@section Styles{

    <link rel="stylesheet" type="text/css" href="~/css/index/css/index.css" />
    @*<link rel="stylesheet" type="text/css" href="~/css/index/css/slider.css" />*@
    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <link rel="stylesheet" href="~/css/comment.css">
    <link href="~/lib/layui/css/layui.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="~/lib/jsPlumb/css/style.css">
    <style>
        .box1 {
            /*padding: 3px 10px 10px 10px;*/
            /*background-color: white;*/
            /*border-left: solid 1px #dbdcde;
                    border-right: solid 1px #dededf;
                    border-bottom: solid 1px #dbdcde;
                    border-radius: 7px 4px 4px 2px;*/
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
            width: 1000px;
            height: 300px;
        }

        .slider {
            width: 100%;
            min-width: 1000px;
            height: 305px;
            position: relative;
            overflow: hidden;
            /*background: #fff;*/
            text-align: center;
        }

        #demo {
            width: 1000px;
            height: 305px;
            margin: 0 auto;
            /*margin-top: 2px;*/
            /*top: 10px;*/
        }

        .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
            color: red;
            background-color: #fff;
            border-color: #dee2e6 #dee2e6 #fff;
            font-weight: bold;
            font-size: 15px;
        }


        .layui-nav {
            position: relative;
            padding: 0 20px;
            background-color: #24998d;
            color: #fff;
            border-radius: 2px;
            font-size: 0;
            box-sizing: border-box;
        }

        #ulGraph li {
            list-style: none;
            line-height: 18px;
        }

        .layui-tab-title .layui-this {
            /*color: #000;*/
            color: #24998d;
            font-size: 16px;
            font-weight: bold;
        }


        .device .deviceLeft .deviceLeft_box .node {
            user-select: none;
            /* width: 98px; */
            height: 40px;
            line-height: 20px;
            float: none;
            /* float: left; */
            margin: 5px;
        }
    </style>
}


    @section Scripts_head{
    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
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

        window.onload = function () {
            require(["../js/Web/KnowledgeGraph_IFrame.js"], function (knowledgeGraph_IFrame) {
                //$('#hidKnowledgeGraphId').val("0000000001");
                $('#indexTitle').html("知识图谱");
                $("#navTitle").html("课程知识图谱");
                $("#hidGraphMenu").val(1);
                const objPage = new knowledgeGraph_IFrame.KnowledgeGraph_IFrame();
                objPage.PageLoad();
            });
        }

        //重新加载
        function Reload() {
            require(["../js/Web/KnowledgeGraph_IFrame.js"], function (KnowledgeGraph_IFrame) {
                //$('#hidKnowledgeGraphId').val("0000000001");
                $("#main").html("");
                LoadjsPlumb();
                $("#hidLogicNodeJson").val("");
                $("#hidLogicRelaJson").val("");
                $("#hidKnowledgeGraphId").val("");
                $('#indexTitle').html("知识图谱");
                const objPage = new KnowledgeGraph_IFrame.KnowledgeGraph_IFrame();
                objPage.PageLoad);
            });
        }




        //逻辑关系图
        //function LoadjsPlumb() {
        //    require(["../lib/jsPlumb/js/index.js"], function (KnowledgeGraph_IFrame) {
        //    });
        //}

        //添加背景色
        function ChangeBg_Click(key) {

            $("#lblKnowledgesTitle").show();
            $('#hidKnowledge_Id').val(key);

            const strKnowledgesTitle = $("#" + key).html();
            $("#lblKnowledgesTitle").html("知识点：" + strKnowledgesTitle);
            //$("#" + key).removeClass();
            //添加背景色
            //const strBgColor = "node node6css server ui-draggable ui-droppable _jsPlumb_endpoint_anchor_";
            //$("#" + key).addClass(strBgColor);

            //$("#btn2").show();
            //$("#btn3").show();
            //$("#btn4").show();
        }

        //掌握熟练度
        function Master_Click(stataKey) {
            const key = $('#hidKnowledge_Id').val();
            $("#" + key).removeClass();
            const strBgColor = "node node" + stataKey + "css server ui-draggable ui-droppable _jsPlumb_endpoint_anchor_";
            $('#hidBgColor').val(strBgColor);

            $('#hidMasterNum').val(stataKey);

            switch (stataKey) {
                case 1:
                    $("#" + key).addClass(strBgColor);
                    break;
                case 2:
                    $("#" + key).addClass(strBgColor);
                    break;
                case 3:
                    //熟练掌握
                    $("#" + key).addClass(strBgColor);
                    break;
                case 4:
                    //准备学习
                    $("#" + key).addClass(strBgColor);
                    break;
            }
            //$("#lblKnowledgesTitle").hide();

            require(["../js/Web/KnowledgeGraph_IFrame.js"], function (KnowledgeGraph_IFrame) {
                const objPage = new KnowledgeGraph_IFrame.KnowledgeGraph_IFrame();
                objPage.btnSaveGraph_User_Click();
            });

        }

        //保存逻辑关系
        function SaveLogicRela(ojson) {

            console.log("保存关系json");

            if (ojson.server.length == 0) {
                message.warning("请建立关系连接然后再保存!");
            } else {
                require(["../js/Web/KnowledgeGraph_IFrame.js"], function (KnowledgeGraph_IFrame) {
                    const objPage = new KnowledgeGraph_IFrame.KnowledgeGraph_IFrame();
                    objPage.btnSaveLogicRela_Click(ojson);
                });
            }
        }


        //保存逻辑关系
        function BindDdl_RelaTypeId() {
            require(["../js/Web/KnowledgeGraph_IFrame.js"], function (KnowledgeGraph_IFrame) {
                const objPage = new KnowledgeGraph_IFrame.KnowledgeGraph_IFrame();
                objPage.SetDdl_RelaTypeId();
            });
        }

        /*
         按钮单击,用于调用Js函数中btn_Click
        (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
        */
        function btn_Click(strCommandName, strKeyId) {
            require(["../js/Web/KnowledgeGraph_IFrame.js"], function (KnowledgeGraph_IFrame) {
                KnowledgeGraph_IFrame.KnowledgeGraph_IFrame.btn_Click(strCommandName, strKeyId);
            });
        }

    </script>

    <!-- 网页内容信息 -->

    <div class="content" style="padding:2px;">
        <div style="color:white;">
            <a id="btn1" class="layui-btn layui-btn-normal" style="display:none;float:right; margin-right:10px;" title="保存关系图">
                <i class="layui-icon layui-icon-file-b"></i>保存关系图
            </a>

            <a id="btn5" onclick="Master_Click(4)" class="layui-btn" style="display:none;float:right; margin-right:10px;" title="准备学习">
                <i class="layui-icon layui-icon-tips"></i>准备学习
            </a>

            <a id="btn3" onclick="Master_Click(3)" class="layui-btn layui-btn-danger" style="display:none;float:right; margin-right:10px;" title="熟练掌握">
                <i class="layui-icon layui-icon-star-fill"></i>熟练掌握
            </a>
            <a id="btn2" onclick="Master_Click(2)" class="layui-btn layui-btn-warm" style="display:none; float:right; margin-right:10px;" title="初步掌握">
                <i class="layui-icon layui-icon-star"></i>初步掌握
            </a>
            <a id="btn4" onclick="Master_Click(1)" class="layui-btn layui-btn-normal" style="display:none; float:right; margin-right:10px;" title="初步掌握">
                <i class="layui-icon layui-icon-circle"></i>未掌握
            </a>
            <Label id="lblKnowledgesTitle" name="lblKnowledgesTitle" style="line-height:30px; display :none; float:right; margin-right:10px; color:crimson;"></Label>

        </div>
        <div class="device">

            <div id="deviceRight" class="deviceRight3">
                <div id="main" class="main"></div>
            </div>
        </div>
    </div>
    <script>
        //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
        layui.use('element', function () {
            const element = layui.element;

            //…
        });
    </script>
    @*-- 编辑层 --*@
    <div id="divEdit" value="1"></div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidLogicNodeJson" type="hidden" />
    <input id="hidLogicRelaJson" type="hidden" />

    <input id="hidKnowledgeGraphId" type="hidden" />

    <input id="hidKnowledge_Id" type="hidden" />

    <input id="hidBgColor" type="hidden" />
    <input id="hidMasterNum" type="hidden" />

    <input id="hidGraphMenu" type="hidden" />