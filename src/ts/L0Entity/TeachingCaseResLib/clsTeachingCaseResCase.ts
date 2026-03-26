
 /**
 * 类名:clsTeachingCaseResCase
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 12:39:14
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学案例资源案例(TeachingCaseResCase)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsTeachingCaseResCase 
{
public static _CurrTabName= "TeachingCaseResCase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachingCaseResCase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 42;
public static AttributeName = ["idTeachingCaseResCase", "teachingCaseResCaseID", "teachingCaseResCaseName", "teachingCaseResCaseTheme", "teachingCaseResCaseText", "teachingCaseResCaseDate", "teachingCaseResCaseTime", "teachingCaseResCaseDateIn", "teachingCaseResCaseTimeIn", "idCaseType", "idTeachingCaseResCaseType", "courseId", "ownerId", "idStudyLevel", "idTeachingPlan", "idDiscipline", "browseCount", "idSenateGaugeVersion", "idTeachSkill", "caseLevelId", "docFile", "isNeedGeneWord", "wordCreateDate", "isVisible", "isDualVideo", "idXzCollege", "idXzMajor", "courseChapterId", "viewCount", "isShow", "downloadNumber", "fileIntegration", "likeCount", "collectionCount", "recommendedDegreeId", "ftpFileType", "videoUrl", "videoPath", "resErrMsg", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idTeachingCaseResCase = "";    //教学案例资源案例流水号
public teachingCaseResCaseID = "";    //教学案例资源案例ID
public teachingCaseResCaseName = "";    //教学案例资源案例名称
public teachingCaseResCaseTheme = "";    //教学案例资源案例主题词
public teachingCaseResCaseText = "";    //案例文本内容
public teachingCaseResCaseDate = "";    //视频资源日期
public teachingCaseResCaseTime = "";    //视频资源时间
public teachingCaseResCaseDateIn = "";    //案例入库日期
public teachingCaseResCaseTimeIn = "";    //案例入库时间
public idCaseType = "";    //案例类型流水号
public idTeachingCaseResCaseType = "";    //教学案例资源类型流水号
public courseId = "";    //课程Id
public ownerId = "";    //拥有者Id
public idStudyLevel = "";    //学段流水号
public idTeachingPlan = "";    //教案流水号
public idDiscipline = "";    //学科流水号
public browseCount = 0;    //浏览次数
public idSenateGaugeVersion = "";    //评价量表版本流水号
public idTeachSkill = "";    //教学技能流水号
public caseLevelId = "";    //课例等级Id
public docFile = "";    //生成的Word文件名
public isNeedGeneWord = false;    //是否需要生成Word
public wordCreateDate = "";    //Word生成日期
public isVisible = false;    //是否显示
public isDualVideo = false;    //是否双视频
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public courseChapterId = "";    //课程章节ID
public viewCount = 0;    //浏览量
public isShow = false;    //是否启用
public downloadNumber = 0;    //下载数目
public fileIntegration = 0;    //文件积分
public likeCount = 0;    //资源喜欢数量
public collectionCount = 0;    //收藏数量
public recommendedDegreeId = "";    //推荐度Id
public ftpFileType = "";    //ftp文件类型
public videoUrl = "";    //视频Url
public videoPath = "";    //视频目录
public resErrMsg = "";    //资源错误信息
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
case clsTeachingCaseResCase.con_IdTeachingCaseResCase:
return this.idTeachingCaseResCase;
case clsTeachingCaseResCase.con_TeachingCaseResCaseID:
return this.teachingCaseResCaseID;
case clsTeachingCaseResCase.con_TeachingCaseResCaseName:
return this.teachingCaseResCaseName;
case clsTeachingCaseResCase.con_TeachingCaseResCaseTheme:
return this.teachingCaseResCaseTheme;
case clsTeachingCaseResCase.con_TeachingCaseResCaseText:
return this.teachingCaseResCaseText;
case clsTeachingCaseResCase.con_TeachingCaseResCaseDate:
return this.teachingCaseResCaseDate;
case clsTeachingCaseResCase.con_TeachingCaseResCaseTime:
return this.teachingCaseResCaseTime;
case clsTeachingCaseResCase.con_TeachingCaseResCaseDateIn:
return this.teachingCaseResCaseDateIn;
case clsTeachingCaseResCase.con_TeachingCaseResCaseTimeIn:
return this.teachingCaseResCaseTimeIn;
case clsTeachingCaseResCase.con_IdCaseType:
return this.idCaseType;
case clsTeachingCaseResCase.con_IdTeachingCaseResCaseType:
return this.idTeachingCaseResCaseType;
case clsTeachingCaseResCase.con_CourseId:
return this.courseId;
case clsTeachingCaseResCase.con_OwnerId:
return this.ownerId;
case clsTeachingCaseResCase.con_IdStudyLevel:
return this.idStudyLevel;
case clsTeachingCaseResCase.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsTeachingCaseResCase.con_IdDiscipline:
return this.idDiscipline;
case clsTeachingCaseResCase.con_BrowseCount:
return this.browseCount;
case clsTeachingCaseResCase.con_IdSenateGaugeVersion:
return this.idSenateGaugeVersion;
case clsTeachingCaseResCase.con_IdTeachSkill:
return this.idTeachSkill;
case clsTeachingCaseResCase.con_CaseLevelId:
return this.caseLevelId;
case clsTeachingCaseResCase.con_DocFile:
return this.docFile;
case clsTeachingCaseResCase.con_IsNeedGeneWord:
return this.isNeedGeneWord;
case clsTeachingCaseResCase.con_WordCreateDate:
return this.wordCreateDate;
case clsTeachingCaseResCase.con_IsVisible:
return this.isVisible;
case clsTeachingCaseResCase.con_IsDualVideo:
return this.isDualVideo;
case clsTeachingCaseResCase.con_IdXzCollege:
return this.idXzCollege;
case clsTeachingCaseResCase.con_IdXzMajor:
return this.idXzMajor;
case clsTeachingCaseResCase.con_CourseChapterId:
return this.courseChapterId;
case clsTeachingCaseResCase.con_ViewCount:
return this.viewCount;
case clsTeachingCaseResCase.con_IsShow:
return this.isShow;
case clsTeachingCaseResCase.con_DownloadNumber:
return this.downloadNumber;
case clsTeachingCaseResCase.con_FileIntegration:
return this.fileIntegration;
case clsTeachingCaseResCase.con_LikeCount:
return this.likeCount;
case clsTeachingCaseResCase.con_CollectionCount:
return this.collectionCount;
case clsTeachingCaseResCase.con_RecommendedDegreeId:
return this.recommendedDegreeId;
case clsTeachingCaseResCase.con_ftpFileType:
return this.ftpFileType;
case clsTeachingCaseResCase.con_VideoUrl:
return this.videoUrl;
case clsTeachingCaseResCase.con_VideoPath:
return this.videoPath;
case clsTeachingCaseResCase.con_ResErrMsg:
return this.resErrMsg;
case clsTeachingCaseResCase.con_UpdDate:
return this.updDate;
case clsTeachingCaseResCase.con_UpdUserId:
return this.updUserId;
case clsTeachingCaseResCase.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingCaseResCase]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdTeachingCaseResCase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingCaseResCase(): string {return "idTeachingCaseResCase";}    //教学案例资源案例流水号

 /**
 * 常量:"TeachingCaseResCaseID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseID(): string {return "teachingCaseResCaseID";}    //教学案例资源案例ID

 /**
 * 常量:"TeachingCaseResCaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseName(): string {return "teachingCaseResCaseName";}    //教学案例资源案例名称

 /**
 * 常量:"TeachingCaseResCaseTheme"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTheme(): string {return "teachingCaseResCaseTheme";}    //教学案例资源案例主题词

 /**
 * 常量:"TeachingCaseResCaseText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseText(): string {return "teachingCaseResCaseText";}    //案例文本内容

 /**
 * 常量:"TeachingCaseResCaseDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseDate(): string {return "teachingCaseResCaseDate";}    //视频资源日期

 /**
 * 常量:"TeachingCaseResCaseTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTime(): string {return "teachingCaseResCaseTime";}    //视频资源时间

 /**
 * 常量:"TeachingCaseResCaseDateIn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseDateIn(): string {return "teachingCaseResCaseDateIn";}    //案例入库日期

 /**
 * 常量:"TeachingCaseResCaseTimeIn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTimeIn(): string {return "teachingCaseResCaseTimeIn";}    //案例入库时间

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IdTeachingCaseResCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingCaseResCaseType(): string {return "idTeachingCaseResCaseType";}    //教学案例资源类型流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"OwnerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OwnerId(): string {return "ownerId";}    //拥有者Id

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"BrowseCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BrowseCount(): string {return "browseCount";}    //浏览次数

 /**
 * 常量:"IdSenateGaugeVersion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSenateGaugeVersion(): string {return "idSenateGaugeVersion";}    //评价量表版本流水号

 /**
 * 常量:"IdTeachSkill"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachSkill(): string {return "idTeachSkill";}    //教学技能流水号

 /**
 * 常量:"CaseLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CaseLevelId(): string {return "caseLevelId";}    //课例等级Id

 /**
 * 常量:"DocFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DocFile(): string {return "docFile";}    //生成的Word文件名

 /**
 * 常量:"IsNeedGeneWord"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsNeedGeneWord(): string {return "isNeedGeneWord";}    //是否需要生成Word

 /**
 * 常量:"WordCreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WordCreateDate(): string {return "wordCreateDate";}    //Word生成日期

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"IsDualVideo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDualVideo(): string {return "isDualVideo";}    //是否双视频

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"DownloadNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DownloadNumber(): string {return "downloadNumber";}    //下载数目

 /**
 * 常量:"FileIntegration"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FileIntegration(): string {return "fileIntegration";}    //文件积分

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"CollectionCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"RecommendedDegreeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RecommendedDegreeId(): string {return "recommendedDegreeId";}    //推荐度Id

 /**
 * 常量:"ftpFileType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ftpFileType(): string {return "ftpFileType";}    //ftp文件类型

 /**
 * 常量:"VideoUrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VideoUrl(): string {return "videoUrl";}    //视频Url

 /**
 * 常量:"VideoPath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VideoPath(): string {return "videoPath";}    //视频目录

 /**
 * 常量:"ResErrMsg"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResErrMsg(): string {return "resErrMsg";}    //资源错误信息

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