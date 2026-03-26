/**
* 类名:TzMsgBox(界面:XzMajorCRUD)
* 表名:XzMajor(01120065)
* 生成代码版本:2022.11.19.1
* 生成日期:2022/11/21 01:23:09
* 生成者:
工程名称:问卷调查(0112)
CM工程:游戏化教育平台(变量首字母小写)-全部函数集
* 相关数据库:103.116.76.183,9433EduHigh_Jsie
* PrjDataBaseId:0170
* 模块中文名:基本信息维护(CommPage)
* 框架-层名:WA_编辑区后台_TS(TS)(WA_ViewScript_EditCS_TS)
* 编程语言:TypeScript
**/
import { clsXzMajorEN } from 'share-stu-study-base-lib';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { clsge_GameLevelENEx } from '@/ts/L0Entity/Knowledges/clsge_GameLevelENEx';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { XzMajor_GetObjByIdXzMajorAsync, XzMajor_IsExistAsync } from 'share-stu-study-base-lib';
import {
  GetButtonHtmlInDiv,
  GetCheckBoxValueInDiv,
  GetInputValueInDiv,
  GetSelectValueInDiv,
  SetButtonHtmlInDiv,
  SetCheckBoxValueByIdInDiv,
  SetInputValueByIdInDiv,
  SetSelectValueByIdInDiv,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Ref } from 'vue';

/** TzMsgBox 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class TzMsgBox {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';

  public keyId = '';
  public parentPage = 'default';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static objPageEdit: TzMsgBox;

  protected iShowList: IShowList;
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4MsgBox = 'divMsgBox'; //编辑区的Id
  constructor(objShowList: IShowList) {
    this.iShowList = objShowList;
    TzMsgBox.objPageEdit = this;
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.SetEventFunc();
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      //没有定义相关事件
    } catch (e) {
      const strMsg = Format(
        '设置事件函数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    const strThisFuncName = this.BindDdl4EditRegionInDiv.name;
    // 在此处放置用户代码以初始化页面
  }

  /** 在数据表里显示对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBoxInTab_Click)
   **/
  public async btnShowMsgBoxInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnShowMsgBoxInTab_Click.name;
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    try {
      //
      const bolIsSuccess = await this.ShowDialog_TzMsgBox(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'ShowMsgBox';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnCloseReturn = '关闭';

      this.ShowMsgBox(strKeyId);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在显示对话框时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnShowMsgBox_Click)
   **/
  public async btnShowMsgBox_Click(strKeyId: string, strPara: string) {
    const strThisFuncName = this.btnShowMsgBox_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '显示对话框的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    try {
      //
      const bolIsSuccess = await this.ShowDialog_TzMsgBox(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'ShowMsgBox';
      // 为编辑区绑定下拉框
      const conBindDdl = await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnCloseReturn = '关闭';
      const update = await this.ShowMsgBox(strKeyId);
      if (update == false) {
        const strMsg = Format('在显示对话框时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_TzMsgBox('ShowMsgBox');
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在显示对话框时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   **/
  public async btnCloseReturn_Click() {
    const strThisFuncName = this.btnCloseReturn_Click.name;
    const strCommandText: string = this.btnCloseReturn;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          //this.btnCloseReturn = "确认添加";
          //this.btnCancel_XzMajor = "取消添加";
          //await this.AddNewRecord();
          break;
        case '关闭':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.CloseBoxReturn();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In TzMsgBox.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          //alert(strInfo);
          if (returnBool == true) {
            if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_TzMsgBox();
            }
            this.iShowList.BindGv(this.parentPage, returnBool.toString());
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理！(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:把以该关键字的记录内容显示在界面上,
   * 在这里是把值传到表控件中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
   * @param strGameLevelId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strGameLevelId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objXzMajorEN = new clsXzMajorEN();
    try {
      const returnBool = await XzMajor_IsExistAsync(strGameLevelId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strGameLevelId);

        //显示信息框
        alert(strInfo);
      }
    } catch (e) {
      const strMsg = Format(
        '检查相应关键字的记录存在不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }

    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromXzMajorClass(objXzMajorEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjXzMajorEN">表实体类对象</param>
   **/
  public GetDataFromXzMajorClass(pobjXzMajorEN: clsXzMajorEN_T) {
    const strThisFuncName = this.GetDataFromXzMajorClass.name;
    this.majorID = pobjXzMajorEN.majorId; // 专业ID
    this.majorName = pobjXzMajorEN.majorName; // 专业名称
    this.isVisible = pobjXzMajorEN.isVisible; // 是否显示
    this.majorEnglishName = pobjXzMajorEN.majorEnglishName; // 英文名
    this.majorExplain = pobjXzMajorEN.majorExplain; // 专业说明
    this.idXzMajorShoolType = pobjXzMajorEN.idXzMajorShoolType; // 专业类型
    this.idXzCollege = pobjXzMajorEN.idXzCollege; // 学院
    this.majorDirection = pobjXzMajorEN.majorDirection; // 专业方向
    this.memo = pobjXzMajorEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowMsgBox)
   * @param sender">参数列表</param>
   **/
  public async ShowMsgBox(strGameLevelId: string): Promise<boolean> {
    const strThisFuncName = this.ShowMsgBox.name;
    this.keyId = strGameLevelId;
    try {
      const objXzMajorEN_Const = await XzMajor_GetObjByIdXzMajorAsync(strGameLevelId);
      if (objXzMajorEN_Const == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      await this.GetDataFromXzMajorClass(objXzMajorEN_Const);
      console.log('完成ShowMsgBox!');
      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 显示对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CloseBoxReturn)
   **/
  public async CloseBoxReturn(): Promise<boolean> {
    const strThisFuncName = this.CloseBoxReturn.name;
    const objXzMajorEN = new clsXzMajorEN();
    objXzMajorEN.idXzMajor = this.keyId;

    objXzMajorEN.sfUpdFldSetStr = objXzMajorEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objXzMajorEN.idXzMajor == '' || objXzMajorEN.idXzMajor == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }

    try {
      //const returnBool = await XzMajor_ShowMsgBoxAsync(objXzMajorEN);
      //if (returnBool == true) {
      //    XzMajor_ReFreshCache();
      //}
      return true; // returnBool;
    } catch (e) {
      const strMsg = Format(
        '显示对话框不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /**
   * 获取按钮的标题
   **/
  public get btnCloseReturn(): string {
    const strValue = GetButtonHtmlInDiv(this.divName4MsgBox, 'btnCloseReturn');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnCloseReturn(value: string) {
    SetButtonHtmlInDiv(this.divName4MsgBox, 'btnCloseReturn', value);
  }
  /**
   * 学院流水号 (Used In Clear())
   **/
  public set idXzCollege(value: string) {
    SetSelectValueByIdInDiv(this.divName4MsgBox, 'ddlid_XzCollege', value);
  }
  /**
   * 学院流水号 (Used In PutDataToClass())
   **/
  public get idXzCollege(): string {
    const strValue = GetSelectValueInDiv(this.divName4MsgBox, 'ddlid_XzCollege');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 专业学校类型流水号 (Used In Clear())
   **/
  public set idXzMajorShoolType(value: string) {
    SetSelectValueByIdInDiv(this.divName4MsgBox, 'ddlid_XzMajorShoolType', value);
  }
  /**
   * 专业学校类型流水号 (Used In PutDataToClass())
   **/
  public get idXzMajorShoolType(): string {
    const strValue = GetSelectValueInDiv(this.divName4MsgBox, 'ddlid_XzMajorShoolType');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 是否显示 (Used In Clear())
   **/
  public set isVisible(value: boolean) {
    SetCheckBoxValueByIdInDiv(this.divName4MsgBox, 'chkIsVisible', value);
  }
  /**
   * 是否显示 (Used In PutDataToClass())
   **/
  public get isVisible(): boolean {
    const bolValue = GetCheckBoxValueInDiv(this.divName4MsgBox, 'chkIsVisible');
    return bolValue;
  }
  /**
   * 专业方向 (Used In Clear())
   **/
  public set majorDirection(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMajorDirection', value);
  }
  /**
   * 专业方向 (Used In PutDataToClass())
   **/
  public get majorDirection(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMajorDirection');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 专业英文名称 (Used In Clear())
   **/
  public set majorEnglishName(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMajorEnglishName', value);
  }
  /**
   * 专业英文名称 (Used In PutDataToClass())
   **/
  public get majorEnglishName(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMajorEnglishName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 专业说明 (Used In Clear())
   **/
  public set majorExplain(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMajorExplain', value);
  }
  /**
   * 专业说明 (Used In PutDataToClass())
   **/
  public get majorExplain(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMajorExplain');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 专业ID (Used In Clear())
   **/
  public set majorID(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMajorID', value);
  }
  /**
   * 专业ID (Used In PutDataToClass())
   **/
  public get majorID(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMajorID');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 专业名称 (Used In Clear())
   **/
  public set majorName(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMajorName', value);
  }
  /**
   * 专业名称 (Used In PutDataToClass())
   **/
  public get majorName(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMajorName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 备注 (Used In Clear())
   **/
  public set memo(value: string) {
    SetInputValueByIdInDiv(this.divName4MsgBox, 'txtMemo', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改日期 (Used In PutDataToClass())
   **/
  public get modifyDate(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtModifyDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改人 (Used In PutDataToClass())
   **/
  public get modifyUserID(): string {
    const strValue = GetInputValueInDiv(this.divName4MsgBox, 'txtModifyUserID');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /* 
    根据关键字详细信息记录
     (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
     <param name = "sender">参数列表</param>
   */
  public async DetailRecord4Func(objge_GameLevel: clsge_GameLevelEN) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCloseReturn = '关闭';
    try {
      //const objge_GameLevelEN = await ge_GameLevel_GetObjBymIdAsync(lngmId);
      const objge_GameLevelENEx = new clsge_GameLevelENEx();
      ObjectAssign(objge_GameLevelENEx, objge_GameLevel);
      //await ge_GameLevelEx_FuncMapByFldName(clsge_GameLevelENEx.con_GameLevelId, objge_GameLevelENEx);

      this.ShowDetailDataFromge_GameLevelClass4Func(objge_GameLevelENEx);
      console.log('完成DetailRecord4Func!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息4Func不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
     (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
     <param name = "pobjge_GameLevelEN">表实体类对象</param>
   */
  public ShowDetailDataFromge_GameLevelClass4Func(pobjge_GameLevelENEx: clsge_GameLevelENEx) {
    const strThisFuncName = this.ShowDetailDataFromge_GameLevelClass4Func.name;
    //this.userId_d = pobjge_GameLevelENEx.userId;// 用户Id
    //this.cacheKey_d = pobjge_GameLevelENEx.cacheKey;// 缓存关键字
    //this.cacheSize_d = pobjge_GameLevelENEx.cacheSize;// 缓存大小
    //this.memo_d = pobjge_GameLevelENEx.memo;// 说明
    //this.cacheModeName_d = pobjge_GameLevelENEx.cacheModeName;// 缓存方式
    //this.cacheModeENName_d = pobjge_GameLevelENEx.cacheModeENName;// 缓存方式英文名
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_TzMsgBox(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_TzMsgBox.name;
    if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (TzMsgBox.EditRef == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await TzMsgBox.EditRef.value.showDialog();
    }
    TzMsgBox.divEdit = TzMsgBox.EditRef.value.$refs.refDivEdit;
    if (TzMsgBox.divEdit == null) {
      if (TzMsgBox.times4TestShowDialog < 2) {
        TzMsgBox.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_TzMsgBox(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      TzMsgBox.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      // this.btnSubmitTzMsgBox = '确认添加';
      this.btnCloseReturn = '关闭';
    } else if (strOp === 'Update') {
      // this.btnSubmitTzMsgBox = '确认修改';
      this.btnCloseReturn = '关闭';
    }
    return true;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_TzMsgBox() {
    if (TzMsgBox.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      TzMsgBox.EditRef.value.hideDialog();
    }
  }
}
