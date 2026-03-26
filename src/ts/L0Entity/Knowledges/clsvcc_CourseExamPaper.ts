
 /**
 * 类名:clsvcc_CourseExamPaper
 * 表名:vcc_CourseExamPaper(01120098)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/12 12:42:24
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
 * v考卷(vcc_CourseExamPaper)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvcc_CourseExamPaper 
{
public static _CurrTabName= "vcc_CourseExamPaper"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseExamPaperId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 40;
public static AttributeName = ["courseExamPaperId", "courseId", "courseName", "examPaperName", "paperIndex", "examPaperTypeId", "examPaperTypeName", "isShow", "totalScore", "viewCount", "doneNumber", "paperTime", "downloadNumber", "collectionCount", "likeCount", "idXzMajor", "majorName", "paperDispModeId", "paperDispModeName", "examCreateTime", "createUserID", "userName", "isOpenToAllStu", "isOpenToSchool", "isOpenToSocial", "courseChapterId", "courseChapterName", "chapterId", "sectionId", "chapterName", "sectionName", "chapterNameSim", "sectionNameSim", "isAutoGeneQuestion", "isCanMultiDo", "updDate", "updUserId", "memo", "questionNum", "bigTopicNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseExamPaperId = "";    //考卷流水号
public courseId = "";    //课程Id
public courseName = "";    //课程名称
public examPaperName = "";    //考卷名称
public paperIndex = 0;    //试卷序号
public examPaperTypeId = "";    //试卷类型Id
public examPaperTypeName = "";    //试卷类型名称
public isShow = false;    //是否启用
public totalScore = 0;    //总得分
public viewCount = 0;    //浏览量
public doneNumber = 0;    //已做人数
public paperTime = 0;    //考试时间（分钟）
public downloadNumber = 0;    //下载数目
public collectionCount = 0;    //收藏数量
public likeCount = 0;    //资源喜欢数量
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public paperDispModeId = "";    //试卷显示模式Id
public paperDispModeName = "";    //试卷显示模式名称
public examCreateTime = "";    //考卷建立时间
public createUserID = "";    //建立用户ID
public userName = "";    //用户名
public isOpenToAllStu = false;    //全校师生
public isOpenToSchool = false;    //全校师生公开
public isOpenToSocial = false;    //社会公众
public courseChapterId = "";    //课程章节ID
public courseChapterName = "";    //课程章节名称
public chapterId = "";    //章Id
public sectionId = "";    //节Id
public chapterName = "";    //章名
public sectionName = "";    //节名
public chapterNameSim = "";    //章名简称
public sectionNameSim = "";    //节名简称
public isAutoGeneQuestion = false;    //是否自动生成题目
public isCanMultiDo = false;    //是否可以做多次
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public questionNum = 0;    //题目数
public bigTopicNum = 0;    //大标题数

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
case clsvcc_CourseExamPaper.con_CourseExamPaperId:
return this.courseExamPaperId;
case clsvcc_CourseExamPaper.con_CourseId:
return this.courseId;
case clsvcc_CourseExamPaper.con_CourseName:
return this.courseName;
case clsvcc_CourseExamPaper.con_ExamPaperName:
return this.examPaperName;
case clsvcc_CourseExamPaper.con_PaperIndex:
return this.paperIndex;
case clsvcc_CourseExamPaper.con_ExamPaperTypeId:
return this.examPaperTypeId;
case clsvcc_CourseExamPaper.con_ExamPaperTypeName:
return this.examPaperTypeName;
case clsvcc_CourseExamPaper.con_IsShow:
return this.isShow;
case clsvcc_CourseExamPaper.con_TotalScore:
return this.totalScore;
case clsvcc_CourseExamPaper.con_ViewCount:
return this.viewCount;
case clsvcc_CourseExamPaper.con_DoneNumber:
return this.doneNumber;
case clsvcc_CourseExamPaper.con_PaperTime:
return this.paperTime;
case clsvcc_CourseExamPaper.con_DownloadNumber:
return this.downloadNumber;
case clsvcc_CourseExamPaper.con_CollectionCount:
return this.collectionCount;
case clsvcc_CourseExamPaper.con_LikeCount:
return this.likeCount;
case clsvcc_CourseExamPaper.con_IdXzMajor:
return this.idXzMajor;
case clsvcc_CourseExamPaper.con_MajorName:
return this.majorName;
case clsvcc_CourseExamPaper.con_PaperDispModeId:
return this.paperDispModeId;
case clsvcc_CourseExamPaper.con_PaperDispModeName:
return this.paperDispModeName;
case clsvcc_CourseExamPaper.con_ExamCreateTime:
return this.examCreateTime;
case clsvcc_CourseExamPaper.con_CreateUserID:
return this.createUserID;
case clsvcc_CourseExamPaper.con_UserName:
return this.userName;
case clsvcc_CourseExamPaper.con_IsOpenToAllStu:
return this.isOpenToAllStu;
case clsvcc_CourseExamPaper.con_IsOpenToSchool:
return this.isOpenToSchool;
case clsvcc_CourseExamPaper.con_IsOpenToSocial:
return this.isOpenToSocial;
case clsvcc_CourseExamPaper.con_CourseChapterId:
return this.courseChapterId;
case clsvcc_CourseExamPaper.con_CourseChapterName:
return this.courseChapterName;
case clsvcc_CourseExamPaper.con_ChapterId:
return this.chapterId;
case clsvcc_CourseExamPaper.con_SectionId:
return this.sectionId;
case clsvcc_CourseExamPaper.con_ChapterName:
return this.chapterName;
case clsvcc_CourseExamPaper.con_SectionName:
return this.sectionName;
case clsvcc_CourseExamPaper.con_ChapterNameSim:
return this.chapterNameSim;
case clsvcc_CourseExamPaper.con_SectionNameSim:
return this.sectionNameSim;
case clsvcc_CourseExamPaper.con_IsAutoGeneQuestion:
return this.isAutoGeneQuestion;
case clsvcc_CourseExamPaper.con_IsCanMultiDo:
return this.isCanMultiDo;
case clsvcc_CourseExamPaper.con_UpdDate:
return this.updDate;
case clsvcc_CourseExamPaper.con_UpdUserId:
return this.updUserId;
case clsvcc_CourseExamPaper.con_Memo:
return this.memo;
case clsvcc_CourseExamPaper.con_QuestionNum:
return this.questionNum;
case clsvcc_CourseExamPaper.con_BigTopicNum:
return this.bigTopicNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_CourseExamPaper]中不存在!`;
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
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

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
 * 常量:"ExamPaperTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExamPaperTypeName(): string {return "examPaperTypeName";}    //试卷类型名称

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
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"PaperDispModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperDispModeId(): string {return "paperDispModeId";}    //试卷显示模式Id

 /**
 * 常量:"PaperDispModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PaperDispModeName(): string {return "paperDispModeName";}    //试卷显示模式名称

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
 * 常量:"UserName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

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
 * 常量:"CourseChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"SectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"SectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

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

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"BigTopicNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BigTopicNum(): string {return "bigTopicNum";}    //大标题数
}