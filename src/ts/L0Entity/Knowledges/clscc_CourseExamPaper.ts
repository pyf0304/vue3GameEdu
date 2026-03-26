
 /**
 * 类名:clscc_CourseExamPaper
 * 表名:cc_CourseExamPaper(01120071)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:29
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 考卷(cc_CourseExamPaper)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseExamPaper 
{
public static _CurrTabName= "cc_CourseExamPaper"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseExamPaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["courseExamPaperId", "courseId", "examPaperName", "paperIndex", "examPaperTypeId", "isShow", "totalScore", "viewCount", "doneNumber", "paperTime", "downloadNumber", "collectionCount", "likeCount", "idXzMajor", "paperDispModeId", "examCreateTime", "createUserID", "isOpenToAllStu", "isOpenToSchool", "isOpenToSocial", "courseChapterId", "isAutoGeneQuestion", "isCanMultiDo", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseExamPaperId = "";    //考卷流水号
public courseId = "";    //课程Id
public examPaperName = "";    //考卷名称
public paperIndex = 0;    //试卷序号
public examPaperTypeId = "";    //试卷类型Id
public isShow = false;    //是否启用
public totalScore = 0;    //总得分
public viewCount = 0;    //浏览量
public doneNumber = 0;    //已做人数
public paperTime = 0;    //考试时间（分钟）
public downloadNumber = 0;    //下载数目
public collectionCount = 0;    //收藏数量
public likeCount = 0;    //资源喜欢数量
public idXzMajor = "";    //专业流水号
public paperDispModeId = "";    //试卷显示模式Id
public examCreateTime = "";    //考卷建立时间
public createUserID = "";    //建立用户ID
public isOpenToAllStu = false;    //全校师生
public isOpenToSchool = false;    //全校师生公开
public isOpenToSocial = false;    //社会公众
public courseChapterId = "";    //课程章节ID
public isAutoGeneQuestion = false;    //是否自动生成题目
public isCanMultiDo = false;    //是否可以做多次
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
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
case clscc_CourseExamPaper.con_CourseExamPaperId:
return this.courseExamPaperId;
case clscc_CourseExamPaper.con_CourseId:
return this.courseId;
case clscc_CourseExamPaper.con_ExamPaperName:
return this.examPaperName;
case clscc_CourseExamPaper.con_PaperIndex:
return this.paperIndex;
case clscc_CourseExamPaper.con_ExamPaperTypeId:
return this.examPaperTypeId;
case clscc_CourseExamPaper.con_IsShow:
return this.isShow;
case clscc_CourseExamPaper.con_TotalScore:
return this.totalScore;
case clscc_CourseExamPaper.con_ViewCount:
return this.viewCount;
case clscc_CourseExamPaper.con_DoneNumber:
return this.doneNumber;
case clscc_CourseExamPaper.con_PaperTime:
return this.paperTime;
case clscc_CourseExamPaper.con_DownloadNumber:
return this.downloadNumber;
case clscc_CourseExamPaper.con_CollectionCount:
return this.collectionCount;
case clscc_CourseExamPaper.con_LikeCount:
return this.likeCount;
case clscc_CourseExamPaper.con_IdXzMajor:
return this.idXzMajor;
case clscc_CourseExamPaper.con_PaperDispModeId:
return this.paperDispModeId;
case clscc_CourseExamPaper.con_ExamCreateTime:
return this.examCreateTime;
case clscc_CourseExamPaper.con_CreateUserID:
return this.createUserID;
case clscc_CourseExamPaper.con_IsOpenToAllStu:
return this.isOpenToAllStu;
case clscc_CourseExamPaper.con_IsOpenToSchool:
return this.isOpenToSchool;
case clscc_CourseExamPaper.con_IsOpenToSocial:
return this.isOpenToSocial;
case clscc_CourseExamPaper.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseExamPaper.con_IsAutoGeneQuestion:
return this.isAutoGeneQuestion;
case clscc_CourseExamPaper.con_IsCanMultiDo:
return this.isCanMultiDo;
case clscc_CourseExamPaper.con_UpdDate:
return this.updDate;
case clscc_CourseExamPaper.con_UpdUserId:
return this.updUserId;
case clscc_CourseExamPaper.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseExamPaper]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseExamPaperId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseExamPaperId(): string {return "courseExamPaperId";}    //考卷流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ExamPaperName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamPaperName(): string {return "examPaperName";}    //考卷名称

 /**
 * 常量:"PaperIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperIndex(): string {return "paperIndex";}    //试卷序号

 /**
 * 常量:"ExamPaperTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamPaperTypeId(): string {return "examPaperTypeId";}    //试卷类型Id

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"TotalScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalScore(): string {return "totalScore";}    //总得分

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"DoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DoneNumber(): string {return "doneNumber";}    //已做人数

 /**
 * 常量:"PaperTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperTime(): string {return "paperTime";}    //考试时间（分钟）

 /**
 * 常量:"DownloadNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DownloadNumber(): string {return "downloadNumber";}    //下载数目

 /**
 * 常量:"CollectionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"PaperDispModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperDispModeId(): string {return "paperDispModeId";}    //试卷显示模式Id

 /**
 * 常量:"ExamCreateTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamCreateTime(): string {return "examCreateTime";}    //考卷建立时间

 /**
 * 常量:"CreateUserID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateUserID(): string {return "createUserID";}    //建立用户ID

 /**
 * 常量:"IsOpenToAllStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToAllStu(): string {return "isOpenToAllStu";}    //全校师生

 /**
 * 常量:"IsOpenToSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToSchool(): string {return "isOpenToSchool";}    //全校师生公开

 /**
 * 常量:"IsOpenToSocial"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToSocial(): string {return "isOpenToSocial";}    //社会公众

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"IsAutoGeneQuestion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAutoGeneQuestion(): string {return "isAutoGeneQuestion";}    //是否自动生成题目

 /**
 * 常量:"IsCanMultiDo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCanMultiDo(): string {return "isCanMultiDo";}    //是否可以做多次

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}