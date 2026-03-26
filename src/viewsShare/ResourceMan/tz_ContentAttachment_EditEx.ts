import $ from 'jquery';
import { tz_ContentAttachment_Edit } from '@/viewsBase/ResourceMan/tz_ContentAttachment_Edit';
import { File_IsHasImgFile, File_UploadImgFile, clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { tz_ContentAttachment_GetObjBymIdAsync } from '@/ts/L3ForWApi/ResourceMan/clstz_ContentAttachmentWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetTextAreaValueInDivObj,
  SetTextAreaValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { useUserStore } from '@/store/modulesShare/user';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  reftz_ContentAttachment_Edit,
  divVarSet,
} from '@/viewsShare/ResourceMan/tz_ContentAttachmentVueShare';
import enumCommentType from '@/ts/FunClass/enumCommentType';

// declare function RefreshParent(): void;
/* tz_ContentAttachment_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class tz_ContentAttachment_EditEx extends tz_ContentAttachment_Edit {
  // public questionIdEx = 0;
  // public questionOptionIdEx = '';
  // public contentTypeIdEx = '';
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static mySelectedFile: any;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = tz_ContentAttachment_EditEx.objPageEdit;

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(tz_ContentAttachment_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript+<>c__DisplayClass7_0:<Gen_WApi_Ts_GeneEventFunc>b__1)
   **/
  public ddlid_ResourceType_SelectedIndexChanged(ddlIdResourceType: HTMLSelectElement): void {} //

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmittz_ContentAttachment;
    try {
      let strInfo;
      switch (strCommandText) {
        case '添加':
          const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          const currHostname = window.location.hostname;
          let strUploadWebMainDir;
          if (currHostname == 'localhost') {
            strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
          }
          let responseData;
          const bolIsExist = await File_IsHasImgFile(this.thisDivEdit);
          if (bolIsExist == true) {
            strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
            let strUploadWebSubDir;
            switch (reftz_ContentAttachment_Edit.value.contentTypeId) {
              case '0001': //题目
                strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_QuestionPic;
                // responseData = await File_UploadQuestionImgFile(
                responseData = await File_UploadImgFile(
                  strUploadWebMainDir,
                  strUploadWebSubDir,
                  'QuestionPic',
                  tz_ContentAttachment_EditEx.mySelectedFile,
                );
                if (responseData.errId != 0) {
                  alert(responseData.errMsg);
                  return;
                }
                break;
              case '0006': //题目选项
                strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_QuestionOptionPic;
                responseData = await File_UploadImgFile(
                  strUploadWebMainDir,
                  strUploadWebSubDir,
                  'QuestionOptionPic',
                  tz_ContentAttachment_EditEx.mySelectedFile,
                );
                if (responseData.errId != 0) {
                  alert(responseData.errMsg);
                  return;
                }
                break;
              default:
                const strMsg = Format(
                  '内容类型(contentTypeId):{0}在btnSubmit_Click函数的switch中没有被处理！',
                  reftz_ContentAttachment_Edit.value.contentTypeId,
                );
                console.error(strMsg);
                alert(strMsg);
                return;
            }

            // const divName = this.refDivEdit;

            tz_ContentAttachment_EditEx.uploadResponseData = responseData;
          }
          console.error('bolIsExist:', bolIsExist);
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (tz_ContentAttachment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_tz_ContentAttachment();
              }
              if (this.iShowList) {
                this.iShowList.BindGv(clstz_ContentAttachmentEN._CurrTabName, '');
              }

              //CloseWindow();
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In tz_ContentAttachment_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (tz_ContentAttachment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_tz_ContentAttachment();
            }
            if (this.iShowList) {
              this.iShowList.BindGv(clstz_ContentAttachmentEN._CurrTabName, '');
            }
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
      // RefreshParent();
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(lngmId: number) {
    this.opType = 'Update';
    if (lngmId == 0) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      if (this.bolIsLoadEditRegion == false) {
        //
        const bolIsSuccess = await this.ShowDialog_tz_ContentAttachment(this.opType);
        if (bolIsSuccess == false) return;

        this.bolIsLoadEditRegion = true; //
        const lngKeyId = lngmId;
        const update = await this.UpdateRecord(lngKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
      } else {
        const lngKeyId = lngmId;
        const update = await this.UpdateRecord(lngKeyId);
        if (update == false) {
          const strMsg: string = `在修改记录时,显示记录数据不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (tz_ContentAttachment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
          this.ShowDialog_tz_ContentAttachment('Update');
        }
      }
      //根据ID触发显示不同的控件类容；
      const conGetDataFromClass = await this.btnUpdateAttachmentRecord_Click(lngmId.toString());
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0034)在修改记录时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateAttachmentRecord_Click(strKeyId: string) {
    //根据问题ID得到标注表主键
    try {
      const lngKeyId = Number(strKeyId);
      const responseText1 = await tz_ContentAttachment_GetObjBymIdAsync(lngKeyId);
      const objtz_ContentAttachmentEN: clstz_ContentAttachmentEN = <clstz_ContentAttachmentEN>(
        responseText1
      );

      //判断题目类型是否是操作题，如果是操作题则显示对应的数据 文本；
      if (
        objtz_ContentAttachmentEN.idResourceType == '0010' ||
        objtz_ContentAttachmentEN.idResourceType == '0011' ||
        objtz_ContentAttachmentEN.idResourceType == '0015'
      ) {
        $('#trTextContent').show(); //显示标准编辑框；
      } else if (objtz_ContentAttachmentEN.idResourceType == '0004') {
        $('#trContentPic').show();
      } else {
      }
    } catch (e) {
      const strMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:设置事件函数
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
*/
  public async SetEventFunc() {
    // 在此处放置用户代码以初始化页面
    try {
      // const ddlQuestionTypeId: HTMLSelectElement = <HTMLSelectElement>(
      //   document.getElementById('ddlIdResourceType')
      // );
      // ddlQuestionTypeId.addEventListener('change', (e) => {
      //   this.ddlIdResourceType_SelectedIndexChanged();
      // });
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:系统生成的Change事件函数
   (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
 */
  public async ddlIdResourceType_SelectedIndexChanged() {
    if (reftz_ContentAttachment_Edit.value.idResourceType == '0004') {
      //图片
      $('#trTextContent').hide();
      $('#trContentPic').show();
    } else if (
      reftz_ContentAttachment_Edit.value.idResourceType == '0011' ||
      reftz_ContentAttachment_Edit.value.idResourceType == '0010' ||
      reftz_ContentAttachment_Edit.value.idResourceType == '0015'
    ) {
      //html文本
      $('#trTextContent').show();
      $('#trContentPic').hide();
    } else {
      $('#trTextContent').hide();
      $('#trContentPic').hide();
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjtz_ContentAttachmentEN">数据传输的目的类对象</param>
*/
  public async PutDataTotz_ContentAttachmentClass(
    pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN,
  ) {
    const userStore = useUserStore();
    pobjtz_ContentAttachmentEN.SetAttachmentTitle(
      reftz_ContentAttachment_Edit.value.attachmentTitle,
    ); // 附件标题
    pobjtz_ContentAttachmentEN.SetIdResourceType(reftz_ContentAttachment_Edit.value.idResourceType); // 资源类型
    // pobjtz_ContentAttachmentEN.SetTextContent(this.textContent); // 文本内容
    pobjtz_ContentAttachmentEN.SetCourseId(clsPubLocalStorage.courseId);
    pobjtz_ContentAttachmentEN.SetOrderNum(30);
    switch (reftz_ContentAttachment_Edit.value.contentTypeId) {
      case '0001':
        pobjtz_ContentAttachmentEN.SetTableNameKey(reftz_ContentAttachment_Edit.value.questionId);
        break;
      case '0006':
        pobjtz_ContentAttachmentEN.SetTableNameKey(
          reftz_ContentAttachment_Edit.value.questionOptionId,
        );
        break;
      default:
        const strMsg = Format(
          '内容类型(contentTypeId):{0}在PutDataTotz_ContentAttachmentClass函数的switch中没有被处理！',
          reftz_ContentAttachment_Edit.value.contentTypeId,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
    }

    pobjtz_ContentAttachmentEN.SetContentTypeId(reftz_ContentAttachment_Edit.value.contentTypeId); //代表问题表；
    pobjtz_ContentAttachmentEN.SetFilePath(
      tz_ContentAttachment_EditEx.uploadResponseData.imgFilePathOne,
    );
    // pobjtz_ContentAttachmentEN.SetUploadDate(clsPubFun4Web.getNowDate()); //	上传时间
    pobjtz_ContentAttachmentEN.SetUploadPerson(userStore.userId); //上传人
    pobjtz_ContentAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjtz_ContentAttachmentEN.SetUpdUserId(userStore.userId); // 修改用户Id
  }

  /* 函数功能:把类对象的属性内容显示到界面上
 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
  如果在设置数据库时,就应该一级字段在前,二级字段在后
  (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
  <param name = "pobjtz_ContentAttachmentEN">表实体类对象</param>
*/
  public async GetDataFromtz_ContentAttachmentClassBak(
    pobjtz_ContentAttachmentEN: clstz_ContentAttachmentEN,
  ) {
    reftz_ContentAttachment_Edit.value.attachmentTitle = pobjtz_ContentAttachmentEN.attachmentTitle; // 附件标题
    reftz_ContentAttachment_Edit.value.idResourceType = pobjtz_ContentAttachmentEN.idResourceType; // 资源类型

    $('#hdnFileOne').val(pobjtz_ContentAttachmentEN.filePath);

    // this.textContent = pobjtz_ContentAttachmentEN.textContent; // 文本内容
  }

  ////添加题目标准
  //public async btnAddContentAttachment_Click(strQuestionId: number) {
  //    //调用添加函数；
  //    this.btnAddNewRecord_Click();
  //    //存入隐藏控件
  //    this.strQuestionId = strQuestionId;

  //}

  /*
   * 文本内容 (Used In Clear())
   */
  public set textContent(value: string) {
    SetTextAreaValueInDivObj(this.thisDivLayout, 'txtTextContent', value);
  }
  /*
   * 文本内容 (Used In PutDataToClass())
   */
  public get textContent(): string {
    return GetTextAreaValueInDivObj(this.thisDivLayout, 'txtTextContent');
  }
  public Clear() {
    reftz_ContentAttachment_Edit.value.attachmentTitle = '文本';
    ClearSelectValueByIdInDivObj(divVarSet.refDivEdit, 'ddlIdResourceType');
    this.textContent = '';
  }
}
