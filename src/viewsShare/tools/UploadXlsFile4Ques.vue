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
            v-model="currSheetName"
            class="form-control-sm"
            style="width: 120px"
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
            class="form-control-sm"
            style="width: 100px"
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
            @click="ImportDataFromXlsSheet"
          >
            导入数据
          </button>
          <button
            id="btnSubmitFile"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="submitFile"
          >
            提交文件
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

    <!-- <input type="file" @change="handleFileUpload" />
    <input type="text" v-model="strOpUserId" placeholder="操作用户ID" />
    <button @click="submitFile">上传文件</button> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import axios from 'axios';
  import { GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { clsQuestionTypeEN } from '@/ts/L0Entity/SystemSet/clsQuestionTypeEN';
  import { QuestionTypeEx_GetDdlDataCacheEx } from '@/ts/L3ForWApiEx/SystemSet/clsQuestionTypeExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { UploadXls4Ques } from '@/ts/FunClass/IUploadXls4Ques';
  import { QuestionnaireEx_ImportQuesBySheet } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionnaireExWApi';

  export default defineComponent({
    name: 'UploadXlsFile4Ques',
    setup() {
      const userStore = useUserStore();
      const refExcelFile = ref<HTMLInputElement | null>(null);
      const sheetNames = ref<string[]>([]); // 工作表名称列表
      const currSheetName = ref('');
      const currFileName = ref('');
      const excelTableHtml = ref(''); // Excel 表格的 HTML 内容
      const workbook = ref<any>(null); // 当前加载的 Excel 工作簿
      const arrQuestionType = ref<clsQuestionTypeEN[]>([]); // 题目类型列表
      const questionTypeId = ref('0'); // 当前选择的题目类型

      // 绑定题目类型下拉框
      async function bindDdl4QryRegion() {
        arrQuestionType.value = await QuestionTypeEx_GetDdlDataCacheEx();
        questionTypeId.value = '0';
      }
      const selectedFile = ref<File | null>(null);
      const strOpUserId = userStore.userId;

      // const handleFileUpload = (event: Event) => {
      //   const target = event.target as HTMLInputElement;
      //   if (target.files && target.files.length > 0) {
      //     selectedFile.value = target.files[0];
      //   }
      // };
      async function exportToExcelV2(uploadXls4Ques: UploadXls4Ques) {
        try {
          const upload_Controller = 'api/UploadXlsSheet';
          const strAction = 'uploadXlsSheetV2';
          const strUrl = GetWebApiUrl(upload_Controller, strAction);
          const response = await axios.post(strUrl, uploadXls4Ques, {
            headers: {
              'Content-Type': 'application/json',
            },
            responseType: 'json',
          });

          // const url = window.URL.createObjectURL(new Blob([response.data]));
          // const link = document.createElement('a');
          // link.href = url;
          // link.setAttribute('download', uploadXls4Ques.fileName);
          // document.body.appendChild(link);
          // link.click();
          const fileUrl = response.data.fileUrl;
          const link = document.createElement('a');
          link.href = fileUrl;
          link.setAttribute('download', uploadXls4Ques.fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('导出失败:', error);
        }
      }

      async function exportToExcel(jsonData: any) {
        try {
          const upload_Controller = 'api/UploadXlsSheet';
          const strAction = 'uploadXlsSheet';
          const strUrl = GetWebApiUrl(upload_Controller, strAction);
          const response = await axios.post(strUrl, jsonData, {
            headers: {
              'Content-Type': 'application/json',
            },
            responseType: 'blob',
          });

          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'ExportedData.xlsx');
          document.body.appendChild(link);
          link.click();
        } catch (error) {
          console.error('导出失败:', error);
        }
      }
      // 该导入数据是导入当前选中的Sheet中的数据，在该组件中，应该用这种方式
      async function importData() {
        if (!workbook.value) {
          alert('请先选择 Excel 文件！');
          return;
        }
        const sheetName = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        const worksheet = workbook.value.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
        // const uploadXls4Ques: UploadXls4Ques = {
        //   fileName: currFileName.value,
        //   questionTypeId: questionTypeId.value,
        //   data: jsonData,
        // };
        await exportToExcel(jsonData);
        console.log('导入的数据:', jsonData);
        alert('数据导入成功！文件已经下载！');
      }
      async function importDataV2() {
        if (!workbook.value) {
          alert('请先选择 Excel 文件！');
          return;
        }
        const sheetName = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        const worksheet = workbook.value.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
        const uploadXls4Ques: UploadXls4Ques = {
          fileName: currFileName.value,
          questionTypeId: questionTypeId.value,
          opUserId: strOpUserId,
          data: jsonData,
        };
        await exportToExcelV2(uploadXls4Ques);
        console.log('导入的数据:', jsonData);
        alert('数据导入成功！文件已经下载！');
      }

      async function ImportDataFromXlsSheet() {
        if (!workbook.value) {
          alert('请先选择 Excel 文件！');
          return;
        }
        const sheetName = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        const worksheet = workbook.value.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
        const uploadXls4Ques: UploadXls4Ques = {
          fileName: currFileName.value,
          questionTypeId: questionTypeId.value,
          opUserId: strOpUserId,
          data: jsonData,
        };
        const intRecNum = await QuestionnaireEx_ImportQuesBySheet(uploadXls4Ques);
        if (intRecNum >= 0) {
          alert('导入成功！导入记录数：' + intRecNum);
        } else {
          alert('导入失败！');
        }
      }
      //该提交是上传整个文件
      const submitFile = async () => {
        if (!selectedFile.value) {
          alert('请选择一个文件');
          return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile.value);
        formData.append('strOpUserId', strOpUserId);

        try {
          const upload_Controller = 'api/UploadXlsFile';
          const strAction = 'uploadXls';
          const strUrl = GetWebApiUrl(upload_Controller, strAction);
          // const response = await axios.post('/api/upload', formData, {
          console.log(' strUrl:', strUrl);
          const response = await axios.post(strUrl, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('文件上传成功:', response.data);
        } catch (error) {
          console.error('文件上传失败:', error);
        }
      };

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

      // 切换工作表
      function changeSheet() {
        console.log('currSheetName', currSheetName.value);
        // const sheetName2 = (document.getElementById('ddlSheetName') as HTMLSelectElement).value;
        // console.log('sheetName2', sheetName2);
        if (workbook.value && currSheetName.value) {
          const worksheet = workbook.value.Sheets[currSheetName.value];
          const csv = XLSX.utils.sheet_to_csv(worksheet);
          excelTableHtml.value = csv2table(csv);
        }
      }
      // 文件选择变化事件
      function file_change(event: Event) {
        const files = (event.target as HTMLInputElement).files;
        if (!files || files.length === 0) return;

        const file = files[0];
        currFileName.value = file.name;
        if (!/\.xlsx$/g.test(file.name)) {
          alert('仅支持读取 .xlsx 格式的文件！');
          return;
        }
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
            currSheetName.value = sheetNames.value[0];
            console.log('sheetNames.value:', sheetNames.value);
            changeSheet(); // 默认加载第一个工作表
          }
        };
        reader.readAsBinaryString(file);
      }
      // 选择文件
      function selectFile() {
        console.log(refExcelFile.value);
        refExcelFile.value?.click();
      }
      // 关闭 Excel 导入区域
      function closeExcelDiv() {
        const divImportExcel = document.getElementById('divImportExcel');
        if (divImportExcel) divImportExcel.style.display = 'none';
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
      onMounted(() => {
        bindDdl4QryRegion();
      });
      return {
        // handleFileUpload,
        submitFile,
        strOpUserId,
        changeSheet,
        downloadSample,
        excelTableHtml,
        file_change,
        selectFile,
        sheetNames,
        questionTypeId,
        arrQuestionType,
        closeExcelDiv,
        refExcelFile,
        currSheetName,
        importData,
        importDataV2,
        ImportDataFromXlsSheet,
      };
    },
  });
</script>

<style scoped>
  /* 添加你的样式 */
</style>
