<template>
  <div id="divLayout_ImportExcel" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div id="divImportExcel" class="table table-bordered table-hover" style="display: none">
      <ul class="nav">
        <li class="nav-item ml-3">
          <input
            type="file"
            id="ExcelFile"
            ref="refExcelFile"
            style="display: none"
            @change="file_change('')"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          <a href="javascript:none" @click="selectFile()">选择Excel</a>
        </li>
        <li class="nav-item ml-3">
          <select id="ddlSheetName" class="form-control-sm" style="width: 100px"></select>
        </li>

        <li class="nav-item ml-3"> 题目类型 </li>

        <li class="nav-item ml-3">
          <select
            id="ddlQuestionTypeId"
            v-model="questionTypeId"
            class="form-control"
            style="width: 70px"
          >
            <option
              v-for="(item, index) in arrQuestionType"
              :key="index"
              :value="item.questionTypeId"
            >
              {{ item.questionTypeName }}
            </option></select
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnImportData"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="ImportData"
            >导入数据</button
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCloseExcelDiv"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="CloseExcelDiv"
            >关闭</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDownLoadSample"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="DownLoadSample"
            >下载样例</button
          >
        </li>
      </ul>
      <div id="ExcelData"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';

  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'layui-src/src/css/layui.css';
  import 'layui-src/src/layui.js';
  import '@/assets//css/SimpleTree.css';
  import '@/assets//css/public.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { refAnswer_Edit } from '@/views/QuestionaireEdit/AnswerVueShare';
  import {
    courseKnowledgeId_q,
    questionId_q,
    reftz_ContentAttachmentList,
  } from '@/views/QuestionaireEdit/QuestionnaireExVueShare';
  import { refQuestionOptions_Edit } from './QuestionOptionsVueShare';
  import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
  import { clsge_LevelModeTypeEN } from '@/ts/L0Entity/Knowledges/clsge_LevelModeTypeEN';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';

  export default defineComponent({
    name: 'QuestionnaireCRUD',
    components: {
      // 组件注册
    },
    setup() {
      const refExcelFile = ref();
      const thisConstructorName = 'QuestionnaireCRUD';

      const arrQuestionType = ref<clsQuestionTypeEN[] | null>([]);
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx(); //查询区域
        questionTypeId.value = '0';
      }

      const questionId = ref(0);
      const attachmentTitle = ref('');
      const questionTypeId = ref('');

      const objWorkBook = ref();
      const strTitle = ref('题目维护');

      onMounted(() => {
        BindDdl4QryRegion();
      });

      //专门用于导入Excel--题目和答案

      //// 读取本地excel文件
      //function readWorkbookFromLocalFile(file, callback) {
      //    const reader = new FileReader();
      //    reader.onload = function (e) {
      //        const data = e.target.result;
      //        const workbook = XLSX.read(data, { type: 'binary' });
      //        if (callback) callback(workbook);
      //    };
      //    reader.readAsBinaryString(file);
      //}

      //// 从网络上读取某个excel文件，url必须同域，否则报错
      //function readWorkbookFromRemoteFile(url, callback) {
      //    const xhr = new XMLHttpRequest();
      //    xhr.open('get', url, true);
      //    xhr.responseType = 'arraybuffer';
      //    xhr.onload = function (e) {
      //        if (xhr.status == 200) {
      //            const data = new Uint8Array(xhr.response)
      //            const workbook = XLSX.read(data, { type: 'array' });
      //            if (callback) callback(workbook);
      //        }
      //    };
      //    xhr.send();
      //}

      // 读取 excel文件
      function outputWorkbook(workbook: any) {
        const sheetNames = workbook.SheetNames; // 工作表名称集合
        sheetNames.forEach((name: any) => {
          const worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
          for (const key in worksheet) {
            // v是读取单元格的原始值
            console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
          }
        });
      }

      // function readWorkbook(workbook) {
      //     const sheetNames = workbook.SheetNames; // 工作表名称集合
      //     const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
      //     const csv = XLSX.utils.sheet_to_csv(worksheet);
      //     document.getElementById('result').innerHTML = csv2table(csv);
      // }

      function table2csv(table: any) {
        // const csv = [];
        // $(table)
        //   .find('tr')
        //   .each(function () {
        //     const temp = [];
        //     $(this)
        //       .find('td')
        //       .each(function () {
        //         temp.push($(this).html());
        //       });
        //     temp.shift(); // 移除第一个
        //     csv.push(temp.join(','));
        //   });
        // csv.shift();
        // return csv.join('\n');
      }

      // csv转sheet对象
      function csv2sheet(csv: any) {
        // const sheet = {}; // 将要生成的sheet
        // csv = csv.split('\n');
        // csv.forEach(function (row, i) {
        //   row = row.split(',');
        //   if (i == 0)
        //     sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
        //   row.forEach(function (col, j) {
        //     sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
        //   });
        // });
        // return sheet;
      }

      // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      function sheet2blob(sheet: any, sheetName: any) {
        // sheetName = sheetName || 'sheet1';
        // const workbook = {
        //   SheetNames: [sheetName],
        //   Sheets: {},
        // };
        // workbook.Sheets[sheetName] = sheet;
        // // 生成excel的配置项
        // const wopts = {
        //   bookType: 'xlsx', // 要生成的文件类型
        //   bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        //   type: 'binary',
        // };
        // const wbout = XLSX.write(workbook, wopts);
        // const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        // // 字符串转ArrayBuffer
        // function s2ab(s) {
        //   const buf = new ArrayBuffer(s.length);
        //   const view = new Uint8Array(buf);
        //   for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        //   return buf;
        // }
        // return blob;
      }

      /**
       * 通用的打开下载对话框方法，没有测试过具体兼容性
       * @param url 下载地址，也可以是一个blob对象，必选
       * @param saveName 保存文件名，可选
       */
      function openDownloadDialog(url: any, saveName: any) {
        if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
        }
        const aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        let event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent(
            'click',
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null,
          );
        }
        aLink.dispatchEvent(event);
      }

      function file_change(e: any) {
        const files = e.target.files;
        if (files.length == 0) return;
        const f = files[0];
        if (!/\.xlsx$/g.test(f.name)) {
          alert('仅支持读取xlsx格式！');
          return;
        }
        console.error('files.length:', files.length);
        readWorkbookFromLocalFile(f, function (workbook: any) {
          readWorkbook(workbook);
        });

        loadRemoteFile('./sample/test.xlsx');
      }

      function loadRemoteFile(url: string) {
        // readWorkbookFromRemoteFile(url, function (workbook) {
        //     readWorkbook(workbook);
        // });
      }

      //  //导出Excel 通过js；
      // function exportExcel() {

      //     const sheet = XLSX.utils.table_to_sheet($('#divDataLst table')[0]);
      //     openDownloadDialog(sheet2blob(sheet), '下载2.xlsx');
      // }

      function exportSpecialExcel() {
        const aoa = [
          ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
          ['姓名', '性别', '年龄', '注册时间'],
          ['张三', '男', 18, new Date()],
          ['李四', '女', 22, new Date()],
        ];
        //   const sheet = XLSX.utils.aoa_to_sheet(aoa);
        //   sheet['!merges'] = [
        // // 设置A1-C1的单元格合并
        // { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
        //   ];
        //   openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
      }

      function exportSpecialExcel_pyf(arrData: any, strFileName: any) {
        //const aoa = [
        //    ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
        //    ['姓名', '性别', '年龄', '注册时间'],
        //    ['张三', '男', 18, new Date()],
        //    ['李四', '女', 22, new Date()]
        //];
        // const sheet = XLSX.utils.aoa_to_sheet(arrData);
        //sheet['!merges'] = [
        //    // 设置A1-C1的单元格合并
        //    { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
        //];
        // openDownloadDialog(sheet2blob(sheet), strFileName);
      }

      function selectFile() {
        // const objExcelFile = document.getElementById('ExcelFile').click();
        refExcelFile.value.click();
      }
      // 处理文件上传

      // 处理解析后的 Excel 数据
      function processExcelData(data: any) {
        // 示例：将数据打印到控制台
        console.log('处理后的数据:', data);

        // 你可以在这里将数据保存到 Vue 的 state 中，或者发送到后端
      }
      //// 读取本地excel文件
      function readWorkbookFromLocalFile(file: any, callback: any) {
        console.error('run in readWorkbookFromLocalFile');
        const reader = new FileReader();
        // reader.onload = function (e) {
        //     const data = e.target.result;
        //     const workbook = XLSX.read(data, { type: 'binary' });
        //     if (callback) callback(workbook);
        // };
        // reader.readAsBinaryString(file);
      }
      const strCsv = '';
      function readWorkbook(workbook: any) {
        // objWorkBook = workbook;
        // const sheetNames = workbook.SheetNames; // 工作表名称集合
        // const ddlSheetName = document.getElementById('ddlSheetName');
        // ddlSheetName.options.length = 0;
        // sheetNames.forEach(x => { ddlSheetName.options.add(new Option(x, x)) });
        // const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
        // const csv = XLSX.utils.sheet_to_csv(worksheet);
        // console.log(csv);
        // document.getElementById('ExcelData').innerHTML = csv2table(csv);
        // strCsv = csv;
      }

      function readSheet(strSheetName: any) {
        // const worksheet = objWorkBook.Sheets[strSheetName]; // 这里我们只读取第一张sheet
        // const csv = XLSX.utils.sheet_to_csv(worksheet);
        // console.log(csv);
        // document.getElementById('ExcelData').innerHTML = csv2table(csv);
        // strCsv = csv;
      }

      // 将csv转换成表格
      function csv2table(csv: any) {
        let html = '<table>';
        const rows = csv.split('\n');
        rows.pop(); // 最后一行没用的
        rows.forEach(function (row: any, idx: any) {
          const columns = row.split(',');
          columns.unshift(idx + 1); // 添加行索引

          html += '<tr>';
          columns.forEach(function (column: any) {
            html += '<td>' + column + '</td>';
          });
          html += '</tr>';
        });
        html += '</table>';
        return html;
      }
      function Refresh_Click() {
        alert(`Refresh_Click`);
      }

      return {
        strTitle,

        refAnswer_Edit,
        reftz_ContentAttachmentList,

        file_change,
        Refresh_Click,
        questionId,

        questionTypeId,

        refQuestionOptions_Edit,
        attachmentTitle,

        arrQuestionType,

        courseKnowledgeId_q,
        questionId_q,
        selectFile,
        refExcelFile,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      CloseExcelDiv() {
        const divImportExcel = document.getElementById('divImportExcel');
        if (divImportExcel) divImportExcel.style.display = 'none';
      },
      ImportData() {
        alert('ImportData');
      },
      DownLoadSample() {
        alert('DownLoadSample');
      },
      // 方法定义
    },
  });
</script>
<style scoped>
  /* #divPager {
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #ddd;
    padding-left: 10px;
  } */

  .modal-dialog {
    /*max-width: 1500px;*/
    text-align: center;
    margin: 1.75rem auto;
  }
</style>
