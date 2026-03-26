
 /**
 * 类名:clsSysCommentType
 * 表名:SysCommentType(01120623)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:30:15
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 评论类型表(SysCommentType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSysCommentType 
{
public static _CurrTabName= "SysCommentType"; //当前表名,与该类相关的表名
public static _KeyFldName= "CommentTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["commentTypeId", "commentTypeName", "commentTable", "commentTableId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public commentTypeId = "";    //评论类型Id
public commentTypeName = "";    //评论类型名
public commentTable = "";    //评论表
public commentTableId = "";    //评论表Id
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsSysCommentType.con_CommentTypeId:
return this.commentTypeId;
case clsSysCommentType.con_CommentTypeName:
return this.commentTypeName;
case clsSysCommentType.con_CommentTable:
return this.commentTable;
case clsSysCommentType.con_CommentTableId:
return this.commentTableId;
case clsSysCommentType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SysCommentType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CommentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentTypeId(): string {return "commentTypeId";}    //评论类型Id

 /**
 * 常量:"CommentTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentTypeName(): string {return "commentTypeName";}    //评论类型名

 /**
 * 常量:"CommentTable"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentTable(): string {return "commentTable";}    //评论表

 /**
 * 常量:"CommentTableId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CommentTableId(): string {return "commentTableId";}    //评论表Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumSysCommentType
{
 /**
 * 论文
 **/
static readonly Paper_01 = "01";
 /**
 * 论文子观点
 **/
static readonly PaperSubViewpoint_02 = "02";
 /**
 * 个人观点
 **/
static readonly Viewpoint_03 = "03";
 /**
 * 专家观点
 **/
static readonly Viewpoint_04 = "04";
 /**
 * 主题概念
 **/
static readonly Concept_05 = "05";
 /**
 * 客观事实
 **/
static readonly TopicObjective_06 = "06";
 /**
 * 客观数据
 **/
static readonly TopicObjective_07 = "07";
 /**
 * 人员
 **/
static readonly User_08 = "08";
 /**
 * 技能
 **/
static readonly SysSkill_09 = "09";
 /**
 * 社会关系
 **/
static readonly SysSocialRelations_10 = "10";
 /**
 * 教师问题回答
 **/
static readonly qa_Answer_11 = "11";
 /**
 * 论文汇报
 **/
static readonly gs_PaperReport_12 = "12";
 /**
 * 研究成果
 **/
static readonly gs_ResearchResult_13 = "13";
 /**
 * 主题人员
 **/
static readonly RTUserRela_14 = "14";
 /**
 * 中学课件
 **/
static readonly zx_Text_21 = "21";
 /**
 * 中学个人观点
 **/
static readonly zx_Viewpoint_22 = "22";
 /**
 * 中学专家观点
 **/
static readonly zx_Viewpoint_23 = "23";
 /**
 * 中学概念
 **/
static readonly zx_Concept_24 = "24";
 /**
 * 中学客观事实
 **/
static readonly zx_TopicObjective_25 = "25";
 /**
 * 中学客观数据
 **/
static readonly zx_TopicObjective_26 = "26";
 /**
 * 中学技能
 **/
static readonly zx_Skill_27 = "27";
 /**
 * 中学社会关系
 **/
static readonly zx_SocialRelations_28 = "28";
}