import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsge_StructureGraphEN } from '@/ts/L0Entity/Knowledges/clsge_StructureGraphEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';

import { ge_StructureGraph_Edit } from '@/viewsBase/Knowledges/ge_StructureGraph_Edit';
import { clsge_StructureChartNodeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureChartNodeEN';
import {
  ge_StructureChartNode_AddNewRecordWithMaxIdAsync,
  ge_StructureChartNode_CheckPropertyNew,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureChartNodeWApi';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  ge_StructureGraph_AddNewRecordWithMaxIdAsync,
  ge_StructureGraph_CheckPropertyNew,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureGraphWApi';
import {
  CheckControlExist,
  GetFirstCheckedKeyIdInDiv,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { refge_StructureGraph_Edit } from '@/views/Knowledges/ge_StructureGraphVueShare';

/* ge_StructureGraph_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ge_StructureGraph_EditEx extends ge_StructureGraph_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = ge_StructureGraph_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(ge_StructureGraph_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  //public async BindDdl4EditRegionInDiv() {
  //    // 在此处放置用户代码以初始化页面
  //    //const objge_StructureSectionType_Cond = new clsge_StructureSectionTypeEN();//查询区域
  //    const ddlSectionTypeId = await this.BindDdl_SectionTypeId("ddlSectionTypeId");//查询区域
  //}

  //public async BindDdl4EditRegion() {
  //    // 在此处放置用户代码以初始化页面
  //    const ddlSectionTypeId = await this.BindDdl_SectionTypeId("ddlSectionTypeId");//查询区域
  //}

  ///// <summary>
  ///// 绑定基于Web的下拉框
  ///// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  ///// </summary>
  ///// <param name = "objDDL">需要绑定当前表的下拉框</param>
  //public async BindDdl_SectionTypeId(strDdlName: string) {

  //    const objDdl = document.getElementById(strDdlName);
  //    if (objDdl == null) {
  //        const strMsg = `下拉框：${strDdlName} 不存在！`;
  //        alert(strMsg);
  //        throw (strMsg);
  //    }
  //    //为数据源于表的下拉框设置内容
  //    console.log("开始：BindDdl_SectionTypeIdCache");
  //    const strCourseId = clsPubLocalStorage.courseId;
  //    const strWhereCond = "1=1 and courseId ='" + strCourseId + "'";

  //    const arrObjLst_Sel: Array<clsge_StructureSectionTypeEN> = await ge_StructureSectionType_GetObjLstAsync(strWhereCond);
  //    BindDdl_ObjLst(strDdlName, arrObjLst_Sel, clsge_StructureSectionTypeEN.con_SectionTypeId, clsge_StructureSectionTypeEN.con_SectionTypeName, "择章节类型..");
  //}

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjge_StructureGraphEN">表实体类对象</param>
  */
  public async GetDataFromge_StructureGraphClass(pobjge_StructureGraphEN: clsge_StructureGraphEN) {
    refge_StructureGraph_Edit.value.structureGraphName = pobjge_StructureGraphEN.structureGraphName; // 知识点图名
    this.sectionTypeId = pobjge_StructureGraphEN.sectionTypeId; // 章节类型
  }

  public async PutDataToge_StructureGraphClass(pobjge_StructureGraphEN: clsge_StructureGraphEN) {
    pobjge_StructureGraphEN.SetStructureGraphName(
      refge_StructureGraph_Edit.value.structureGraphName,
    ); // 知识点图名
    const userStore = useUserStore();
    pobjge_StructureGraphEN.SetSectionTypeId(this.sectionTypeId); // 章节类型
    pobjge_StructureGraphEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjge_StructureGraphEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_StructureGraphEN.SetUpdUser(userStore.userId); // 修改用户Id
    pobjge_StructureGraphEN.SetCreateUser(userStore.userId); // 修改用户Id
    pobjge_StructureGraphEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    const strRoleId = userStore.getRoleId;
    //判断角色
    //学生
    if (strRoleId == '00620003') {
      pobjge_StructureGraphEN.SetGraphTypeId('02');
      pobjge_StructureGraphEN.SetIsRecommend(false);
    } else {
      pobjge_StructureGraphEN.SetGraphTypeId('01');
      pobjge_StructureGraphEN.SetIsRecommend(true);
    }
  }

  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitge_StructureGraph;
    try {
      let strInfo;
      switch (strCommandText) {
        case '添加':
          const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              const responseKeyId2 = await this.AddStructureChart(returnKeyId);

              this.HideDialog_ge_StructureGraph();
              if (this.iShowList) {
                this.iShowList.BindGv(clsge_StructureGraphEN._CurrTabName, '');
              }
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              this.HideDialog_ge_StructureGraph();
              if (this.iShowList) {
                this.iShowList.BindGv(clsge_StructureGraphEN._CurrTabName, '');
              }
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In ge_StructureGraph_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            this.HideDialog_ge_StructureGraph();
            if (this.iShowList) {
              this.iShowList.BindGv(clsge_StructureGraphEN._CurrTabName, '');
            }
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //添加结构图谱
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_StructureGraphEN: clsge_StructureGraphEN = new clsge_StructureGraphEN();
    this.PutDataToge_StructureGraphClass(objge_StructureGraphEN);
    try {
      ge_StructureGraph_CheckPropertyNew(objge_StructureGraphEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureGraph_AddNewRecordWithMaxIdAsync(
        objge_StructureGraphEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureGraph_ReFreshCache();
        const strInfo: string = `添加记录成功!`;

        //const responseKeyId2 = await this.AddStructureChart(returnKeyId);
        //显示信息框
        //alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  //添加结构图表
  public async AddStructureChart(strKeyId: string) {
    //this.DivName = "divAddNewRecordWithMaxIdSave";
    const objge_StructureChartNodeEN: clsge_StructureChartNodeEN = new clsge_StructureChartNodeEN();
    const userStore = useUserStore();
    objge_StructureChartNodeEN.structureNodeName =
      refge_StructureGraph_Edit.value.structureGraphName;
    objge_StructureChartNodeEN.structureGraphId = strKeyId;
    objge_StructureChartNodeEN.parentId = 'root';
    objge_StructureChartNodeEN.isRoot = true;
    objge_StructureChartNodeEN.isExpanded = true;
    objge_StructureChartNodeEN.updDate = clsPubFun4Web.getNowDate(); // 修改日期
    objge_StructureChartNodeEN.updUser = userStore.userId; // 修改用户Id

    try {
      ge_StructureChartNode_CheckPropertyNew(objge_StructureChartNodeEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureChartNode_AddNewRecordWithMaxIdAsync(
        objge_StructureChartNodeEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureChartNode_ReFreshCache();
        const strInfo: string = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /*
   * 课程章节ID (Used In Clear())
   */
  public set sectionTypeId(value: string) {
    const objDiv = $(`#${this.divName4Edit}`);
    CheckControlExist(this.divName4Edit, 'select', 'ddlSectionTypeId');
    const strId = `select[id ^= "ddlSectionTypeId"]`;
    objDiv.find(strId).val(value);
  }
  /*
   * 课程章节ID (Used In PutDataToClass())
   */
  public get sectionTypeId(): string {
    // const objDiv = $(`#${this.divName4Edit}`);
    // CheckControlExist(this.divName4Edit, 'select', 'ddlSectionTypeId');
    // const strId = `select[id ^= "ddlSectionTypeId"]`;
    // if (objDiv.find(strId).val() == '0') return '';
    // return objDiv.find(strId).val();
    return GetSelectValueInDivObj(this.thisDivEdit, 'ddlSectionTypeId');
  }
}
