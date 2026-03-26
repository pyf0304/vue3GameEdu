
 /**
 * 类名:clsTeachingCaseResCaseEN
 * 表名:TeachingCaseResCase(01120377)
 * 版本:2025.02.18.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 12:39:11
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:教学案例资源(TeachingCaseResLib)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 教学案例资源案例(TeachingCaseResCase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsTeachingCaseResCaseEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "TeachingCaseResCase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeachingCaseResCase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 42;
public static AttributeName = ["idTeachingCaseResCase", "teachingCaseResCaseID", "teachingCaseResCaseName", "teachingCaseResCaseTheme", "teachingCaseResCaseText", "teachingCaseResCaseDate", "teachingCaseResCaseTime", "teachingCaseResCaseDateIn", "teachingCaseResCaseTimeIn", "idCaseType", "idTeachingCaseResCaseType", "courseId", "ownerId", "idStudyLevel", "idTeachingPlan", "idDiscipline", "browseCount", "idSenateGaugeVersion", "idTeachSkill", "caseLevelId", "docFile", "isNeedGeneWord", "wordCreateDate", "isVisible", "isDualVideo", "idXzCollege", "idXzMajor", "courseChapterId", "viewCount", "isShow", "downloadNumber", "fileIntegration", "likeCount", "collectionCount", "recommendedDegreeId", "ftpFileType", "videoUrl", "videoPath", "resErrMsg", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrIdTeachingCaseResCase = "";    //教学案例资源案例流水号
private mstrTeachingCaseResCaseID = "";    //教学案例资源案例ID
private mstrTeachingCaseResCaseName = "";    //教学案例资源案例名称
private mstrTeachingCaseResCaseTheme = "";    //教学案例资源案例主题词
private mstrTeachingCaseResCaseText = "";    //案例文本内容
private mstrTeachingCaseResCaseDate = "";    //视频资源日期
private mstrTeachingCaseResCaseTime = "";    //视频资源时间
private mstrTeachingCaseResCaseDateIn = "";    //案例入库日期
private mstrTeachingCaseResCaseTimeIn = "";    //案例入库时间
private mstrIdCaseType = "";    //案例类型流水号
private mstrIdTeachingCaseResCaseType = "";    //教学案例资源类型流水号
private mstrCourseId = "";    //课程Id
private mstrOwnerId = "";    //拥有者Id
private mstrIdStudyLevel = "";    //学段流水号
private mstrIdTeachingPlan = "";    //教案流水号
private mstrIdDiscipline = "";    //学科流水号
private mintBrowseCount = 0;    //浏览次数
private mstrIdSenateGaugeVersion = "";    //评价量表版本流水号
private mstrIdTeachSkill = "";    //教学技能流水号
private mstrCaseLevelId = "";    //课例等级Id
private mstrDocFile = "";    //生成的Word文件名
private mbolIsNeedGeneWord = false;    //是否需要生成Word
private mstrWordCreateDate = "";    //Word生成日期
private mbolIsVisible = false;    //是否显示
private mbolIsDualVideo = false;    //是否双视频
private mstrIdXzCollege = "";    //学院流水号
private mstrIdXzMajor = "";    //专业流水号
private mstrCourseChapterId = "";    //课程章节ID
private mintViewCount = 0;    //浏览量
private mbolIsShow = false;    //是否启用
private mintDownloadNumber = 0;    //下载数目
private mintFileIntegration = 0;    //文件积分
private mintLikeCount = 0;    //资源喜欢数量
private mlngCollectionCount = 0;    //收藏数量
private mstrRecommendedDegreeId = "";    //推荐度Id
private mstrftpFileType = "";    //ftp文件类型
private mstrVideoUrl = "";    //视频Url
private mstrVideoPath = "";    //视频目录
private mstrResErrMsg = "";    //资源错误信息
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 教学案例资源案例流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachingCaseResCase (value: string)
{
if (value  != undefined)
{
 this.idTeachingCaseResCase = value;
    this.hmProperty["idTeachingCaseResCase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学案例资源案例ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseID (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseID = value;
    this.hmProperty["teachingCaseResCaseID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学案例资源案例名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseName (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseName = value;
    this.hmProperty["teachingCaseResCaseName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学案例资源案例主题词(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseTheme (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseTheme = value;
    this.hmProperty["teachingCaseResCaseTheme"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例文本内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseText (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseText = value;
    this.hmProperty["teachingCaseResCaseText"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频资源日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseDate (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseDate = value;
    this.hmProperty["teachingCaseResCaseDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频资源时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseTime (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseTime = value;
    this.hmProperty["teachingCaseResCaseTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例入库日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseDateIn (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseDateIn = value;
    this.hmProperty["teachingCaseResCaseDateIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例入库时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTeachingCaseResCaseTimeIn (value: string)
{
if (value  != undefined)
{
 this.teachingCaseResCaseTimeIn = value;
    this.hmProperty["teachingCaseResCaseTimeIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCaseType (value: string)
{
if (value  != undefined)
{
 this.idCaseType = value;
    this.hmProperty["idCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学案例资源类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachingCaseResCaseType (value: string)
{
if (value  != undefined)
{
 this.idTeachingCaseResCaseType = value;
    this.hmProperty["idTeachingCaseResCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 拥有者Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOwnerId (value: string)
{
if (value  != undefined)
{
 this.ownerId = value;
    this.hmProperty["ownerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学段流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudyLevel (value: string)
{
if (value  != undefined)
{
 this.idStudyLevel = value;
    this.hmProperty["idStudyLevel"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教案流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachingPlan (value: string)
{
if (value  != undefined)
{
 this.idTeachingPlan = value;
    this.hmProperty["idTeachingPlan"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdDiscipline (value: string)
{
if (value  != undefined)
{
 this.idDiscipline = value;
    this.hmProperty["idDiscipline"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 浏览次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBrowseCount (value: number)
{
if (value  != undefined)
{
 this.browseCount = value;
    this.hmProperty["browseCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评价量表版本流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSenateGaugeVersion (value: string)
{
if (value  != undefined)
{
 this.idSenateGaugeVersion = value;
    this.hmProperty["idSenateGaugeVersion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学技能流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachSkill (value: string)
{
if (value  != undefined)
{
 this.idTeachSkill = value;
    this.hmProperty["idTeachSkill"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课例等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCaseLevelId (value: string)
{
if (value  != undefined)
{
 this.caseLevelId = value;
    this.hmProperty["caseLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 生成的Word文件名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDocFile (value: string)
{
if (value  != undefined)
{
 this.docFile = value;
    this.hmProperty["docFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否需要生成Word(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsNeedGeneWord (value: boolean)
{
if (value  != undefined)
{
 this.isNeedGeneWord = value;
    this.hmProperty["isNeedGeneWord"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Word生成日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWordCreateDate (value: string)
{
if (value  != undefined)
{
 this.wordCreateDate = value;
    this.hmProperty["wordCreateDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsVisible (value: boolean)
{
if (value  != undefined)
{
 this.isVisible = value;
    this.hmProperty["isVisible"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否双视频(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDualVideo (value: boolean)
{
if (value  != undefined)
{
 this.isDualVideo = value;
    this.hmProperty["isDualVideo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzCollege (value: string)
{
if (value  != undefined)
{
 this.idXzCollege = value;
    this.hmProperty["idXzCollege"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdXzMajor (value: string)
{
if (value  != undefined)
{
 this.idXzMajor = value;
    this.hmProperty["idXzMajor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程章节ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterId (value: string)
{
if (value  != undefined)
{
 this.courseChapterId = value;
    this.hmProperty["courseChapterId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 浏览量(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetViewCount (value: number)
{
if (value  != undefined)
{
 this.viewCount = value;
    this.hmProperty["viewCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否启用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsShow (value: boolean)
{
if (value  != undefined)
{
 this.isShow = value;
    this.hmProperty["isShow"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 下载数目(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDownloadNumber (value: number)
{
if (value  != undefined)
{
 this.downloadNumber = value;
    this.hmProperty["downloadNumber"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 文件积分(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetFileIntegration (value: number)
{
if (value  != undefined)
{
 this.fileIntegration = value;
    this.hmProperty["fileIntegration"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源喜欢数量(说明:;字段类型:int;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLikeCount (value: number)
{
if (value  != undefined)
{
 this.likeCount = value;
    this.hmProperty["likeCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 收藏数量(说明:;字段类型:bigint;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCollectionCount (value: number)
{
if (value  != undefined)
{
 this.collectionCount = value;
    this.hmProperty["collectionCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 推荐度Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRecommendedDegreeId (value: string)
{
if (value  != undefined)
{
 this.recommendedDegreeId = value;
    this.hmProperty["recommendedDegreeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ftp文件类型(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetftpFileType (value: string)
{
if (value  != undefined)
{
 this.ftpFileType = value;
    this.hmProperty["ftpFileType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频Url(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVideoUrl (value: string)
{
if (value  != undefined)
{
 this.videoUrl = value;
    this.hmProperty["videoUrl"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频目录(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVideoPath (value: string)
{
if (value  != undefined)
{
 this.videoPath = value;
    this.hmProperty["videoPath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源错误信息(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResErrMsg (value: string)
{
if (value  != undefined)
{
 this.resErrMsg = value;
    this.hmProperty["resErrMsg"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase:
return this.idTeachingCaseResCase;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID:
return this.teachingCaseResCaseID;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName:
return this.teachingCaseResCaseName;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme:
return this.teachingCaseResCaseTheme;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText:
return this.teachingCaseResCaseText;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate:
return this.teachingCaseResCaseDate;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime:
return this.teachingCaseResCaseTime;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn:
return this.teachingCaseResCaseDateIn;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn:
return this.teachingCaseResCaseTimeIn;
case clsTeachingCaseResCaseEN.con_IdCaseType:
return this.idCaseType;
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType:
return this.idTeachingCaseResCaseType;
case clsTeachingCaseResCaseEN.con_CourseId:
return this.courseId;
case clsTeachingCaseResCaseEN.con_OwnerId:
return this.ownerId;
case clsTeachingCaseResCaseEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsTeachingCaseResCaseEN.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsTeachingCaseResCaseEN.con_IdDiscipline:
return this.idDiscipline;
case clsTeachingCaseResCaseEN.con_BrowseCount:
return this.browseCount;
case clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion:
return this.idSenateGaugeVersion;
case clsTeachingCaseResCaseEN.con_IdTeachSkill:
return this.idTeachSkill;
case clsTeachingCaseResCaseEN.con_CaseLevelId:
return this.caseLevelId;
case clsTeachingCaseResCaseEN.con_DocFile:
return this.docFile;
case clsTeachingCaseResCaseEN.con_IsNeedGeneWord:
return this.isNeedGeneWord;
case clsTeachingCaseResCaseEN.con_WordCreateDate:
return this.wordCreateDate;
case clsTeachingCaseResCaseEN.con_IsVisible:
return this.isVisible;
case clsTeachingCaseResCaseEN.con_IsDualVideo:
return this.isDualVideo;
case clsTeachingCaseResCaseEN.con_IdXzCollege:
return this.idXzCollege;
case clsTeachingCaseResCaseEN.con_IdXzMajor:
return this.idXzMajor;
case clsTeachingCaseResCaseEN.con_CourseChapterId:
return this.courseChapterId;
case clsTeachingCaseResCaseEN.con_ViewCount:
return this.viewCount;
case clsTeachingCaseResCaseEN.con_IsShow:
return this.isShow;
case clsTeachingCaseResCaseEN.con_DownloadNumber:
return this.downloadNumber;
case clsTeachingCaseResCaseEN.con_FileIntegration:
return this.fileIntegration;
case clsTeachingCaseResCaseEN.con_LikeCount:
return this.likeCount;
case clsTeachingCaseResCaseEN.con_CollectionCount:
return this.collectionCount;
case clsTeachingCaseResCaseEN.con_RecommendedDegreeId:
return this.recommendedDegreeId;
case clsTeachingCaseResCaseEN.con_ftpFileType:
return this.ftpFileType;
case clsTeachingCaseResCaseEN.con_VideoUrl:
return this.videoUrl;
case clsTeachingCaseResCaseEN.con_VideoPath:
return this.videoPath;
case clsTeachingCaseResCaseEN.con_ResErrMsg:
return this.resErrMsg;
case clsTeachingCaseResCaseEN.con_UpdDate:
return this.updDate;
case clsTeachingCaseResCaseEN.con_UpdUserId:
return this.updUserId;
case clsTeachingCaseResCaseEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingCaseResCase]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
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
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCase:
this.idTeachingCaseResCase = strValue;
    this.hmProperty["idTeachingCaseResCase"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseID:
this.teachingCaseResCaseID = strValue;
    this.hmProperty["teachingCaseResCaseID"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseName:
this.teachingCaseResCaseName = strValue;
    this.hmProperty["teachingCaseResCaseName"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTheme:
this.teachingCaseResCaseTheme = strValue;
    this.hmProperty["teachingCaseResCaseTheme"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseText:
this.teachingCaseResCaseText = strValue;
    this.hmProperty["teachingCaseResCaseText"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDate:
this.teachingCaseResCaseDate = strValue;
    this.hmProperty["teachingCaseResCaseDate"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTime:
this.teachingCaseResCaseTime = strValue;
    this.hmProperty["teachingCaseResCaseTime"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseDateIn:
this.teachingCaseResCaseDateIn = strValue;
    this.hmProperty["teachingCaseResCaseDateIn"] = true;
break;
case clsTeachingCaseResCaseEN.con_TeachingCaseResCaseTimeIn:
this.teachingCaseResCaseTimeIn = strValue;
    this.hmProperty["teachingCaseResCaseTimeIn"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdCaseType:
this.idCaseType = strValue;
    this.hmProperty["idCaseType"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdTeachingCaseResCaseType:
this.idTeachingCaseResCaseType = strValue;
    this.hmProperty["idTeachingCaseResCaseType"] = true;
break;
case clsTeachingCaseResCaseEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsTeachingCaseResCaseEN.con_OwnerId:
this.ownerId = strValue;
    this.hmProperty["ownerId"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
    this.hmProperty["idStudyLevel"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdTeachingPlan:
this.idTeachingPlan = strValue;
    this.hmProperty["idTeachingPlan"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdDiscipline:
this.idDiscipline = strValue;
    this.hmProperty["idDiscipline"] = true;
break;
case clsTeachingCaseResCaseEN.con_BrowseCount:
this.browseCount = Number(strValue);
    this.hmProperty["browseCount"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdSenateGaugeVersion:
this.idSenateGaugeVersion = strValue;
    this.hmProperty["idSenateGaugeVersion"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdTeachSkill:
this.idTeachSkill = strValue;
    this.hmProperty["idTeachSkill"] = true;
break;
case clsTeachingCaseResCaseEN.con_CaseLevelId:
this.caseLevelId = strValue;
    this.hmProperty["caseLevelId"] = true;
break;
case clsTeachingCaseResCaseEN.con_DocFile:
this.docFile = strValue;
    this.hmProperty["docFile"] = true;
break;
case clsTeachingCaseResCaseEN.con_IsNeedGeneWord:
this.isNeedGeneWord = Boolean(strValue);
    this.hmProperty["isNeedGeneWord"] = true;
break;
case clsTeachingCaseResCaseEN.con_WordCreateDate:
this.wordCreateDate = strValue;
    this.hmProperty["wordCreateDate"] = true;
break;
case clsTeachingCaseResCaseEN.con_IsVisible:
this.isVisible = Boolean(strValue);
    this.hmProperty["isVisible"] = true;
break;
case clsTeachingCaseResCaseEN.con_IsDualVideo:
this.isDualVideo = Boolean(strValue);
    this.hmProperty["isDualVideo"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdXzCollege:
this.idXzCollege = strValue;
    this.hmProperty["idXzCollege"] = true;
break;
case clsTeachingCaseResCaseEN.con_IdXzMajor:
this.idXzMajor = strValue;
    this.hmProperty["idXzMajor"] = true;
break;
case clsTeachingCaseResCaseEN.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clsTeachingCaseResCaseEN.con_ViewCount:
this.viewCount = Number(strValue);
    this.hmProperty["viewCount"] = true;
break;
case clsTeachingCaseResCaseEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clsTeachingCaseResCaseEN.con_DownloadNumber:
this.downloadNumber = Number(strValue);
    this.hmProperty["downloadNumber"] = true;
break;
case clsTeachingCaseResCaseEN.con_FileIntegration:
this.fileIntegration = Number(strValue);
    this.hmProperty["fileIntegration"] = true;
break;
case clsTeachingCaseResCaseEN.con_LikeCount:
this.likeCount = Number(strValue);
    this.hmProperty["likeCount"] = true;
break;
case clsTeachingCaseResCaseEN.con_CollectionCount:
this.collectionCount = Number(strValue);
    this.hmProperty["collectionCount"] = true;
break;
case clsTeachingCaseResCaseEN.con_RecommendedDegreeId:
this.recommendedDegreeId = strValue;
    this.hmProperty["recommendedDegreeId"] = true;
break;
case clsTeachingCaseResCaseEN.con_ftpFileType:
this.ftpFileType = strValue;
    this.hmProperty["ftpFileType"] = true;
break;
case clsTeachingCaseResCaseEN.con_VideoUrl:
this.videoUrl = strValue;
    this.hmProperty["videoUrl"] = true;
break;
case clsTeachingCaseResCaseEN.con_VideoPath:
this.videoPath = strValue;
    this.hmProperty["videoPath"] = true;
break;
case clsTeachingCaseResCaseEN.con_ResErrMsg:
this.resErrMsg = strValue;
    this.hmProperty["resErrMsg"] = true;
break;
case clsTeachingCaseResCaseEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsTeachingCaseResCaseEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsTeachingCaseResCaseEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingCaseResCase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdTeachingCaseResCase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingCaseResCase(): string {return "idTeachingCaseResCase";}    //教学案例资源案例流水号

 /**
 * 常量:"TeachingCaseResCaseID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseID(): string {return "teachingCaseResCaseID";}    //教学案例资源案例ID

 /**
 * 常量:"TeachingCaseResCaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseName(): string {return "teachingCaseResCaseName";}    //教学案例资源案例名称

 /**
 * 常量:"TeachingCaseResCaseTheme"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTheme(): string {return "teachingCaseResCaseTheme";}    //教学案例资源案例主题词

 /**
 * 常量:"TeachingCaseResCaseText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseText(): string {return "teachingCaseResCaseText";}    //案例文本内容

 /**
 * 常量:"TeachingCaseResCaseDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseDate(): string {return "teachingCaseResCaseDate";}    //视频资源日期

 /**
 * 常量:"TeachingCaseResCaseTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTime(): string {return "teachingCaseResCaseTime";}    //视频资源时间

 /**
 * 常量:"TeachingCaseResCaseDateIn"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseDateIn(): string {return "teachingCaseResCaseDateIn";}    //案例入库日期

 /**
 * 常量:"TeachingCaseResCaseTimeIn"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachingCaseResCaseTimeIn(): string {return "teachingCaseResCaseTimeIn";}    //案例入库时间

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IdTeachingCaseResCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingCaseResCaseType(): string {return "idTeachingCaseResCaseType";}    //教学案例资源类型流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"OwnerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OwnerId(): string {return "ownerId";}    //拥有者Id

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"BrowseCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BrowseCount(): string {return "browseCount";}    //浏览次数

 /**
 * 常量:"IdSenateGaugeVersion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSenateGaugeVersion(): string {return "idSenateGaugeVersion";}    //评价量表版本流水号

 /**
 * 常量:"IdTeachSkill"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachSkill(): string {return "idTeachSkill";}    //教学技能流水号

 /**
 * 常量:"CaseLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CaseLevelId(): string {return "caseLevelId";}    //课例等级Id

 /**
 * 常量:"DocFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DocFile(): string {return "docFile";}    //生成的Word文件名

 /**
 * 常量:"IsNeedGeneWord"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsNeedGeneWord(): string {return "isNeedGeneWord";}    //是否需要生成Word

 /**
 * 常量:"WordCreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WordCreateDate(): string {return "wordCreateDate";}    //Word生成日期

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"IsDualVideo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDualVideo(): string {return "isDualVideo";}    //是否双视频

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"DownloadNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DownloadNumber(): string {return "downloadNumber";}    //下载数目

 /**
 * 常量:"FileIntegration"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_FileIntegration(): string {return "fileIntegration";}    //文件积分

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"CollectionCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollectionCount(): string {return "collectionCount";}    //收藏数量

 /**
 * 常量:"RecommendedDegreeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RecommendedDegreeId(): string {return "recommendedDegreeId";}    //推荐度Id

 /**
 * 常量:"ftpFileType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ftpFileType(): string {return "ftpFileType";}    //ftp文件类型

 /**
 * 常量:"VideoUrl"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VideoUrl(): string {return "videoUrl";}    //视频Url

 /**
 * 常量:"VideoPath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VideoPath(): string {return "videoPath";}    //视频目录

 /**
 * 常量:"ResErrMsg"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResErrMsg(): string {return "resErrMsg";}    //资源错误信息

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsTeachingCaseResCaseEN();
const instance = new clsTeachingCaseResCaseEN();
return instance.hasOwnProperty(propName);
}
}