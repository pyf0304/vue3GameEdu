import $ from 'jquery';
import { ge_StructureSectionType_GetObjLstAsync } from 'share-stu-study-base-lib';
import {
  ge_StructureSection_DelRecordAsync,
  ge_StructureSection_GetObjLstAsync,
  ge_StructureSection_GetRecCountByCondAsync,
} from 'share-stu-study-base-lib';
import { GetAObjLstByNameInDivObj, GetCheckedKeyIdsInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';

import { useUserStore } from '@/store/modulesShare/user';
import { Ref } from 'vue';
import { message } from '@/utils/myMessage';
// import { ge_StructureSection_EditEx } from '@/views/Knowledges/ge_StructureSection_EditEx';
// import { ge_StructureSectionType_EditEx } from '@/views/Knowledges/ge_StructureSectionType_EditEx';
import { CourseId_Session } from '@/views/web/BasicknowledgeVueShare';
declare function layui_Alert(iconKey: string, strMsg: string): void;
// declare function load_jsmind(strjson: string): void;
declare function add_node(strKeyId: string, strKeyName: string): void;
// declare function remove_node(): void;

declare const window: any;

/* spage_StructureSectionCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class StructureSection implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditRef: Ref<any>;
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static divList: HTMLDivElement; //列表区的层对象

  public divName4Edit: string = 'divEdit'; //编辑区的Id
  public divName4List: string = 'divList';
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return StructureSection.divList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return StructureSection.divLayout;
  }
  BindGv(strType: string) {
    this.ShowStructureSectionType();
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_StructureSectionType':
        alert('该类没有绑定该函数：[this.BindGv_ge_StructureSectionType_Cache]！');
        //this.BindGv_ge_StructureSectionTypeCache();
        break;
    }
  }

  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: StructureSection = new StructureSection();
    let objPageEdit;
    let objPageEdit_SectionType;
    let arrKeyIds;
    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddSectionType': //添加记录使用最大关键字
        // objPageEdit_SectionType = new ge_StructureSectionType_EditEx(
        //   'ge_StructureSectionType_EditEx',
        //   objPage,
        // );

        // CourseId_Session.value = clsPubLocalStorage.courseId;
        // objPageEdit_SectionType.btnAddNewRecordWithMaxId_Click();
        break;
      // case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      //   objPageEdit = new ge_StructureSection_EditEx('ge_StructureSection_EditEx', objPage);
      //   ge_StructureSection_EditEx.vuebtn_Click = StructureSection.vuebtn_Click;
      //   ge_StructureSection_EditEx.GetPropValue = StructureSection.GetPropValue;

      //   objPageEdit.btnAddNewRecordWithMaxId_Click();
      //   break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        break;
      // case 'UpdateRecord': //修改记录
      // case 'Update': //修改记录
      //   // objPageEdit.btnUpdateRecord_Click();
      //   // const strKeyId = GetFirstCheckedKeyIdInDivObj(StructureSection.divList);
      //   if (IsNullOrEmpty(strKeyId) == true) {
      //     const strMsg = '请选择需要修改的记录！';
      //     console.error(strMsg);
      //     alert(strMsg);
      //     return;
      //   }
      //   objPageEdit = new ge_StructureSection_EditEx('ge_StructureSection_EditEx', objPage);
      //   ge_StructureSection_EditEx.vuebtn_Click = StructureSection.vuebtn_Click;
      //   ge_StructureSection_EditEx.GetPropValue = StructureSection.GetPropValue;

      //   objPageEdit.btnUpdateRecord_Click(strKeyId);
      //   break;
      // case 'UpdateRecordInTab': //修改记录InTab
      //   objPageEdit = new ge_StructureSection_EditEx('ge_StructureSection_EditEx', objPage);
      //   objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
      //   break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要删除的记录！');
          return;
        }
        //objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        //objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4List);
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        const strMsg =
          '命令:' +
          strCommandName +
          '在函数(spage_StructureSectionTypeCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      //const gvBindDdl = await this.BindDdl4QueryRegion();

      //this.hidSortvge_StructureSectionBy = "knowledgeTitle Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vge_StructureSection();
      const userStore = useUserStore();
      if (userStore.userId != '') {
        if (this.sectionTypeId != '') {
          $('#hidOpType').val('ok');

          $('#i_AddGraph').remove();
          $('#ulGraph').remove();

          $('#UpdateSectionType').remove();
          $('#btn2').remove();
          $('#btn3').remove();
        }

        await this.ShowStructureSectionType();
        //LoadjsPlumb();
        // HideDivInDivObj(this.thisDivLayout, 'divLoading');
      } else {
        window.top.location.href = '../Web/Login';
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //绑定结构章节类型
  public async ShowStructureSectionType() {
    const strThisFuncName = this.ShowStructureSectionType.name;
    const userStore = useUserStore();
    const strCourseId = clsPubLocalStorage.courseId;
    const strUserId = userStore.userId;
    let strWhereCond = "1=1 and courseId ='" + strCourseId + "'";

    if ($('#hidOpType').val() == 'ok' && this.sectionTypeId != '') {
      strWhereCond += " and sectionTypeId ='" + this.sectionTypeId + "'";
    }
    //strWhereCond += " and updUser ='" + strUserId + "'";
    strWhereCond += ' order by updDate Asc';

    try {
      const arrge_StructureSectionTypeObjLst = await ge_StructureSectionType_GetObjLstAsync(
        strWhereCond,
      );

      let strhtml = '';

      let k = 0;
      for (let i = 0; i < arrge_StructureSectionTypeObjLst.length; i++) {
        const strSectionTypeId = arrge_StructureSectionTypeObjLst[i].sectionTypeId;
        let strSectionTypeName = arrge_StructureSectionTypeObjLst[i].sectionTypeName;

        const strUpdUser = arrge_StructureSectionTypeObjLst[i].updUser;
        if (strSectionTypeName.length > 12) {
          strSectionTypeName = strSectionTypeName.substr(0, 12);
        }
        k++;
        strhtml += '<li class="nav-item">';
        if (this.sectionTypeId == '') {
          StructureSection.vuebtn_Click('setSectionTypeId', strSectionTypeId);

          $('#navGraphName').html(strSectionTypeName);
          // onclick=GraphMenu_Click("${strSectionTypeId} ","${strSectionTypeName}"
          strhtml += `<a id="Graph${strSectionTypeId}" name="btnGraphMenu" keyId="${strSectionTypeId}|${strSectionTypeName}" title="${strSectionTypeName}"  href="javascript:void(0)" class="nav-link active" data-toggle="pill" )> ${strSectionTypeName}`;
          if (strUpdUser == strUserId) {
            strhtml +=
              '<i id="UpdateSectionType" title="修改结构章节类型" onclick=btn_Click("UpdateRecordInTab","' +
              strSectionTypeId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        } else {
          // onclick=GraphMenu_Click("' + strSectionTypeId + '","' +  strSectionTypeName + '"
          strhtml += `<a id="Graph${strSectionTypeId}" title="${strSectionTypeName}"  href="javascript:void(0)" keyId="${strSectionTypeId}|${strSectionTypeName}" title="${strSectionTypeName}" class="nav-link" data-toggle="pill" name="btnGraphMenu" )>${strSectionTypeName}`;
          if (strUpdUser == strUserId) {
            strhtml +=
              '<i id="UpdateSectionType" title="修改结构章节类型" onclick=btn_Click("UpdateRecordInTab","' +
              strSectionTypeId +
              '") class="layui-icon layui-icon-edit" style="font-size:20px; color: #ff6a00;"></i>';
          }
          strhtml += '</a>';
        }

        //if (arrge_StructureSectionTypeObjLst[i].updUser == strUserId) {
        //    //编辑
        //    strhtml += '<button title="编辑问题" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdateQuestions_Click("' + strQuestionsId + '")><i class="layui-icon">&#xe642;</i></button>';
        //    //删除
        //    strhtml += '<button title="删除问题" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDelQuestions_Click("' + strQuestionsId + '") href="javascript:;"><i class="layui-icon">&#xe640;</i></button>';
        //}

        //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + arrge_StructureSectionTypeObjLst[i].userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + arrge_StructureSectionTypeObjLst[i].updDate;

        strhtml += '</li>';
        //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
        //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
      }

      //拼接；
      $('#ulGraph').html(strhtml);
      this.SetEventForStructureSection();
      await this.BindGv_ge_StructureSection();
      console.log('完成绑定ulGraph!');
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
  public SetEventForStructureSection() {
    {
      const arrLiLst = GetAObjLstByNameInDivObj(this.thisDivLayout, 'btnGraphMenu');
      for (const btnGraphMenu of arrLiLst) {
        if (btnGraphMenu != null) {
          const strKeyId = btnGraphMenu.getAttribute('keyid');
          if (strKeyId == null) continue;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            keyId: arr[0],
            keyName: arr[1],
          };

          (function (objData: any) {
            btnGraphMenu.onclick = function () {
              StructureSection.vuebtn_Click('GraphMenu', objData);
            };
          })(objData);
        }
      }
    }
  }
  //绑定结构章节图
  public async BindGv_ge_StructureSection() {
    const strSectionTypeId = this.sectionTypeId;
    const strWhereCond: string = " 1=1 and sectionTypeId='" + strSectionTypeId + "'";

    //获取观点分类

    const arrge_StructureSectionObjLst = await ge_StructureSection_GetObjLstAsync(strWhereCond);

    if (arrge_StructureSectionObjLst.length > 0) {
      let strStructureJson = '[';
      for (let i = 0; i < arrge_StructureSectionObjLst.length; i++) {
        const strStructureSectionId: string = arrge_StructureSectionObjLst[i].structureSectionId;
        const strParentId: string = arrge_StructureSectionObjLst[i].parentId;
        const strStructureSectionName: string =
          arrge_StructureSectionObjLst[i].structureSectionName;
        const strStructureSectionName_Content: string =
          arrge_StructureSectionObjLst[i].structureSectionName +
          '-' +
          arrge_StructureSectionObjLst[i].structureSectionContent;

        const strDirection: string = arrge_StructureSectionObjLst[i].direction;
        const isExpanded: boolean = arrge_StructureSectionObjLst[i].isExpanded;
        const isRoot: boolean = arrge_StructureSectionObjLst[i].isRoot;
        if (isRoot == true) {
          strStructureJson += '{';
          strStructureJson += '"id":"' + strStructureSectionId + '",';
          strStructureJson += '"isroot":' + isRoot + ',';
          strStructureJson += '"expanded":' + isExpanded + ',';
          strStructureJson += '"topic":"' + strStructureSectionName + '"';
          strStructureJson += '},';
        } else {
          strStructureJson += '{';
          strStructureJson += '"id":"' + strStructureSectionId + '",';
          strStructureJson += '"parentid":"' + strParentId + '",';
          strStructureJson += '"topic":"' + strStructureSectionName_Content + '",';
          strStructureJson += '"expanded":' + isExpanded + ',';
          strStructureJson += '"direction":"' + strDirection + '"';
          strStructureJson += '},';
        }
      }
      strStructureJson = strStructureJson.substr(0, strStructureJson.length - 1);
      strStructureJson += ']';

      const strJson = eval(strStructureJson);
      //加载jsmind
      StructureSection.vuebtn_Click('load_jsmind', strJson);
      // load_jsmind(strJson);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async StructureSection_DelRecord(strStructureSectionId: string) {
    try {
      const strWhere = " parentId= '" + strStructureSectionId + "'";
      const intParentIdCount = await ge_StructureSection_GetRecCountByCondAsync(strWhere);

      if (intParentIdCount == 0) {
        const responseText = await ge_StructureSection_DelRecordAsync(strStructureSectionId);
        const returnInt: number = responseText;
        if (returnInt > 0) {
          //ge_StructureSection_ReFreshCache();
          //const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
          ////显示信息框
          //alert(strInfo);
          this.BindGv_ge_StructureSection();
          StructureSection.vuebtn_Click('remove_node', '');
        } else {
          const strInfo: string = `删除记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
        console.log('完成DelRecord!');
      } else {
        message.warning('请删除章节下面的所有子节点才可删除当前节点！');
      }
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   * 设置取消按钮的标题(Used In AddNewRecord())
   */
  public set btnCancel_ge_StructureSection(value: string) {
    $('#btnCancel_ge_StructureSection').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnSubmit_ge_StructureSection(): string {
    return $('#btnSubmit_ge_StructureSection').html();
  }
  /*
   * 设置确定按钮的标题(Used In AddNewRecord())
   */
  public set btnSubmit_ge_StructureSection(value: string) {
    $('#btnSubmit_ge_StructureSection').html(value);
  }
  /*
   * 存放题目ID
   */
  public get sectionTypeId() {
    const strQuestionId = StructureSection.GetPropValue('sectionTypeId');
    return strQuestionId;
  }
  public get parentId() {
    const strParentId = StructureSection.GetPropValue('parentId');
    return strParentId;
  }
}
