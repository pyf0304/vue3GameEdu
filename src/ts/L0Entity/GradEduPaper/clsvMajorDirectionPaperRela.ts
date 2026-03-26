
 /**
 * 类名:clsvMajorDirectionPaperRela
 * 表名:vMajorDirectionPaperRela(01120555)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:24:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v专业方向论文关系(vMajorDirectionPaperRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvMajorDirectionPaperRela 
{
public static _CurrTabName= "vMajorDirectionPaperRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["mId", "majorDirectionId", "paperId", "updDate", "updUser", "memo", "idXzMajor", "majorDirectionENName", "majorDirectionName", "majorDirectionExplain", "isVisible", "paperTitle", "paperContent", "periodical", "author", "researchQuestion", "keyword", "literatureSources", "literatureLink", "uploadfileUrl", "isQuotethesis", "checker", "isChecked", "majorId", "majorName", "userName"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public majorDirectionId = "";    //研究方向Id
public paperId = "";    //论文Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public idXzMajor = "";    //专业流水号
public majorDirectionENName = "";    //研究方向英文名
public majorDirectionName = "";    //研究方向名
public majorDirectionExplain = "";    //专业方向说明
public isVisible = false;    //是否显示
public paperTitle = "";    //论文标题
public paperContent = "";    //主题内容
public periodical = "";    //期刊
public author = "";    //作者
public researchQuestion = "";    //研究问题
public keyword = "";    //关键字
public literatureSources = "";    //文献来源
public literatureLink = "";    //文献链接
public uploadfileUrl = "";    //文件地址
public isQuotethesis = false;    //是否引用论文
public checker = "";    //审核人
public isChecked = false;    //是否检查
public majorId = "";    //专业Id
public majorName = "";    //专业名称
public userName = "";    //用户名

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
case clsvMajorDirectionPaperRela.con_mId:
return this.mId;
case clsvMajorDirectionPaperRela.con_MajorDirectionId:
return this.majorDirectionId;
case clsvMajorDirectionPaperRela.con_PaperId:
return this.paperId;
case clsvMajorDirectionPaperRela.con_UpdDate:
return this.updDate;
case clsvMajorDirectionPaperRela.con_UpdUser:
return this.updUser;
case clsvMajorDirectionPaperRela.con_Memo:
return this.memo;
case clsvMajorDirectionPaperRela.con_IdXzMajor:
return this.idXzMajor;
case clsvMajorDirectionPaperRela.con_MajorDirectionENName:
return this.majorDirectionENName;
case clsvMajorDirectionPaperRela.con_MajorDirectionName:
return this.majorDirectionName;
case clsvMajorDirectionPaperRela.con_MajorDirectionExplain:
return this.majorDirectionExplain;
case clsvMajorDirectionPaperRela.con_IsVisible:
return this.isVisible;
case clsvMajorDirectionPaperRela.con_PaperTitle:
return this.paperTitle;
case clsvMajorDirectionPaperRela.con_PaperContent:
return this.paperContent;
case clsvMajorDirectionPaperRela.con_Periodical:
return this.periodical;
case clsvMajorDirectionPaperRela.con_Author:
return this.author;
case clsvMajorDirectionPaperRela.con_ResearchQuestion:
return this.researchQuestion;
case clsvMajorDirectionPaperRela.con_Keyword:
return this.keyword;
case clsvMajorDirectionPaperRela.con_LiteratureSources:
return this.literatureSources;
case clsvMajorDirectionPaperRela.con_LiteratureLink:
return this.literatureLink;
case clsvMajorDirectionPaperRela.con_UploadfileUrl:
return this.uploadfileUrl;
case clsvMajorDirectionPaperRela.con_IsQuotethesis:
return this.isQuotethesis;
case clsvMajorDirectionPaperRela.con_Checker:
return this.checker;
case clsvMajorDirectionPaperRela.con_IsChecked:
return this.isChecked;
case clsvMajorDirectionPaperRela.con_MajorId:
return this.majorId;
case clsvMajorDirectionPaperRela.con_MajorName:
return this.majorName;
case clsvMajorDirectionPaperRela.con_UserName:
return this.userName;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMajorDirectionPaperRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"MajorDirectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionId(): string {return "majorDirectionId";}    //研究方向Id

 /**
 * 常量:"PaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperId(): string {return "paperId";}    //论文Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorDirectionENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionENName(): string {return "majorDirectionENName";}    //研究方向英文名

 /**
 * 常量:"MajorDirectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionName(): string {return "majorDirectionName";}    //研究方向名

 /**
 * 常量:"MajorDirectionExplain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionExplain(): string {return "majorDirectionExplain";}    //专业方向说明

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"PaperTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperTitle(): string {return "paperTitle";}    //论文标题

 /**
 * 常量:"PaperContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperContent(): string {return "paperContent";}    //主题内容

 /**
 * 常量:"Periodical"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Periodical(): string {return "periodical";}    //期刊

 /**
 * 常量:"Author"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Author(): string {return "author";}    //作者

 /**
 * 常量:"ResearchQuestion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResearchQuestion(): string {return "researchQuestion";}    //研究问题

 /**
 * 常量:"Keyword"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Keyword(): string {return "keyword";}    //关键字

 /**
 * 常量:"LiteratureSources"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiteratureSources(): string {return "literatureSources";}    //文献来源

 /**
 * 常量:"LiteratureLink"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiteratureLink(): string {return "literatureLink";}    //文献链接

 /**
 * 常量:"UploadfileUrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UploadfileUrl(): string {return "uploadfileUrl";}    //文件地址

 /**
 * 常量:"IsQuotethesis"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsQuotethesis(): string {return "isQuotethesis";}    //是否引用论文

 /**
 * 常量:"Checker"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Checker(): string {return "checker";}    //审核人

 /**
 * 常量:"IsChecked"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsChecked(): string {return "isChecked";}    //是否检查

 /**
 * 常量:"MajorId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorId(): string {return "majorId";}    //专业Id

 /**
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"UserName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名
}