
 /**
 * 类名:clsResourceENEx
 * 表名:Resource(01120320)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:03:06
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 资源(Resource)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsResourceEN } from "@/ts/L0Entity/ResourceMan/clsResourceEN";

export class  clsResourceENEx extends clsResourceEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsResourceENEx.con_FileRename:
return this.fileRename;
case clsResourceENEx.con_FileName:
return this.fileName;
case clsResourceENEx.con_ResourceTypeName:
return this.resourceTypeName;
case clsResourceENEx.con_FuncModuleName:
return this.funcModuleName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"FileRename"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FileRename(): string {return "fileRename";}    //文件新名

 /**
 * 常量:"FileName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FileName(): string {return "fileName";}    //文件名称

 /**
 * 常量:"ResourceTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ResourceTypeName(): string {return "resourceTypeName";}    //资源类型名称

 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //功能模块名称

public fileRename = "";    //文件新名
public fileName = "";    //文件名称
public resourceTypeName = "";    //资源类型名称
public funcModuleName = "";    //功能模块名称

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsResourceENEx.con_FileRename:
this.fileRename = strValue;
    this.hmProperty["fileRename"] = true;
break;
case clsResourceENEx.con_FileName:
this.fileName = strValue;
    this.hmProperty["fileName"] = true;
break;
case clsResourceENEx.con_ResourceTypeName:
this.resourceTypeName = strValue;
    this.hmProperty["resourceTypeName"] = true;
break;
case clsResourceENEx.con_FuncModuleName:
this.funcModuleName = strValue;
    this.hmProperty["funcModuleName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Resource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsResourceENEx();
const instance = new clsResourceENEx();
return instance.hasOwnProperty(propName);
}
}