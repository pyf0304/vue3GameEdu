<template>
  <div id="divLayout_ImportExcel" ref="refDivLayout" class="div_layout">
    <!-- Excel 导入区域 -->
    <div id="divImportExcel" class="table table-bordered table-hover" style="display: block">
      <ul class="nav">
        <li class="nav-item ml-3">
          <input
            type="file"
            id="ExcelFile"
            ref="refExcelFile"
            style="display: none"
            @change="file_change"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          <a href="javascript:void(0)" @click="selectFile">选择Excel</a>
        </li>
        <li class="nav-item ml-3">
          <select
            id="ddlSheetName"
            class="form-control-sm"
            style="width: 100px"
            @change="changeSheet"
          >
            <option v-for="(sheet, index) in sheetNames" :key="index" :value="sheet">{{
              sheet
            }}</option>
          </select>
        </li>
        <li class="nav-item ml-3">题目类型</li>
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
            </option>
          </select>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnImportData"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="importData"
          >
            导入数据
          </button>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCloseExcelDiv"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="closeExcelDiv"
          >
            关闭
          </button>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDownLoadSample"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="downloadSample"
          >
            下载样例
          </button>
        </li>
      </ul>
      <div id="ExcelData" v-html="excelTableHtml"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import * as XLSX from 'xlsx';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';

  export default defineComponent({
    name: 'QuestionnaireCRUD',
    setup() {
      const refExcelFile = ref<HTMLInputElement | null>(null);
      const sheetNames = ref<string[]>([]); // 工作表名称列表
      const excelTableHtml = ref(''); // Excel 表格的 HTML 内容
      const workbook = ref<any>(null); // 当前加载的 Excel 工作簿
      const arrQuestionType = ref<clsQuestionTypeEN[]>([]); // 题目类型列表
      const questionTypeId = ref('0'); // 当前选择的题目类型

      // 绑定题目类型下拉框
      async function bindDdl4QryRegion() {
        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx();
        questionTypeId.value = '0';
      }

      // 选择文件
      function selectFile() {
        console.log(refExcelFile.value);
        refExcelFile.value?.click();
      }

      // 文件选择变化事件
      function file_change(event: Event) {
        const files = (event.target as HTMLInputElement).files;
        if (!files || files.length === 0) return;

        const file = files[0];
        if (!/\.xlsx$/g.test(file.name)) {
          alert('仅支持读取 .xlsx 格式的文件！');
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target?.result;
          if (data) {
            const workbookData = XLSX.read(data, { type: 'binary' });
            workbook.value = workbookData;
            sheetNames.value = workbookData.SheetNames;
            changeSheet(); // 默认加载第一个工作表
          }
        };
        reader.readAsBinaryString(file);
      }

      // 切换工作表
      function changeSheet() {
        const sheetName = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        if (workbook.value && sheetName) {
          const worksheet = workbook.value.Sheets[sheetName];
          const csv = XLSX.utils.sheet_to_csv(worksheet);
          excelTableHtml.value = csv2table(csv);
        }
      }

      // 将 CSV 数据转换为 HTML 表格
      function csv2table(csv: string) {
        let html = '<table class="table table-bordered">';
        const rows = csv.split('\n');
        rows.forEach((row, index) => {
          html += '<tr>';
          row.split(',').forEach((cell) => {
            html += `<td>${cell}</td>`;
          });
          html += '</tr>';
        });
        html += '</table>';
        return html;
      }

      // 导入数据
      function importData() {
        if (!workbook.value) {
          alert('请先选择 Excel 文件！');
          return;
        }
        const sheetName = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        const worksheet = workbook.value.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        console.log('导入的数据:', jsonData);
        alert('数据导入成功！');
      }

      // 关闭 Excel 导入区域
      function closeExcelDiv() {
        const divImportExcel = document.getElementById('divImportExcel');
        if (divImportExcel) divImportExcel.style.display = 'none';
      }

      // 下载样例文件
      function downloadSample() {
        const sampleData = [
          ['题目', '答案', '难度'],
          ['题目1', '答案1', '简单'],
          ['题目2', '答案2', '中等'],
          ['题目3', '答案3', '困难'],
        ];
        const worksheet = XLSX.utils.aoa_to_sheet(sampleData);
        const newWorkbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(newWorkbook, worksheet, '样例');
        XLSX.writeFile(newWorkbook, '样例文件.xlsx');
      }

      onMounted(() => {
        bindDdl4QryRegion();
      });

      return {
        refExcelFile,
        sheetNames,
        excelTableHtml,
        arrQuestionType,
        questionTypeId,
        selectFile,
        file_change,
        changeSheet,
        importData,
        closeExcelDiv,
        downloadSample,
      };
    },
  });
</script>

<style scoped>
  .div_layout {
    margin: 20px;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .nav-item {
    margin-right: 10px;
  }
  .table {
    margin-top: 20px;
  }
</style>
