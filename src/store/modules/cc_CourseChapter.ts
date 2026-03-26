import { clscc_CourseChapter } from 'share-stu-study-base-lib';
import { clscc_CourseChapterEN } from 'share-stu-study-base-lib';
import { cc_CourseChapter_GetObjByCourseChapterIdAsync } from 'share-stu-study-base-lib';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface cc_CourseChapterSimEN {
//   CourseChapterId: string;
//   chapterName: string;
// }

export function cc_CourseChapterEx_CopyTo(
  objcc_CourseChapterENS: clscc_CourseChapterEN_T,
): clscc_CourseChapter_T {
  const strThisFuncName = cc_CourseChapterEx_CopyTo.name;
  const objcc_CourseChapterENT = new clscc_CourseChapter();
  try {
    ObjectAssign(objcc_CourseChapterENT, objcc_CourseChapterENS);
    return objcc_CourseChapterENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseChapterENT;
  }
}
export function cc_CourseChapterEx_CopyToEN(
  objcc_CourseChapterS: clscc_CourseChapter_T,
): clscc_CourseChapterEN_T {
  const strThisFuncName = cc_CourseChapterEx_CopyTo.name;
  const objcc_CourseChapterENT = new clscc_CourseChapterEN();
  try {
    ObjectAssign(objcc_CourseChapterENT, objcc_CourseChapterS);
    return objcc_CourseChapterENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseChapterENT;
  }
}
// 定义 TabsState
export interface cc_CourseChapterState {
  cc_CourseChapterLst: clscc_CourseChapter_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usecc_CourseChapterStore = defineStore('cc_CourseChapter', {
  state(): cc_CourseChapterState {
    return {
      cc_CourseChapterLst: [],
    };
  },

  actions: {
    async getGameLevelName(strCourseChapterId: string): Promise<string> {
      if (strCourseChapterId == '') return '';
      if (strCourseChapterId == null) return '';
      const objcc_CourseChapter0 = this.cc_CourseChapterLst.find(
        (x: any) => x.courseChapterId === strCourseChapterId,
      );
      if (objcc_CourseChapter0 != null && objcc_CourseChapter0 != undefined)
        return objcc_CourseChapter0.chapterName;
      let objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
        strCourseChapterId,
      );
      if (objcc_CourseChapterEN == null) {
        const strMsg = `CourseChapterId=${strCourseChapterId} 的cc_CourseChapter中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objcc_CourseChapter = cc_CourseChapterEx_CopyTo(objcc_CourseChapterEN);
      this.cc_CourseChapterLst.push(objcc_CourseChapter);
      return objcc_CourseChapter.chapterName;
    },

    async getCourseId(strCourseChapterId: string): Promise<string> {
      if (strCourseChapterId == '') return '';
      if (strCourseChapterId == null) return '';
      const objcc_CourseChapter0 = this.cc_CourseChapterLst.find(
        (x: any) => x.courseChapterId === strCourseChapterId,
      );
      if (objcc_CourseChapter0 != null && objcc_CourseChapter0 != undefined)
        return objcc_CourseChapter0.courseId;
      let objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
        strCourseChapterId,
      );
      if (objcc_CourseChapterEN == null) {
        const strMsg = `CourseChapterId=${strCourseChapterId} 的cc_CourseChapter中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objcc_CourseChapter = cc_CourseChapterEx_CopyTo(objcc_CourseChapterEN);
      this.cc_CourseChapterLst.push(objcc_CourseChapter);
      return objcc_CourseChapter.courseId;
    },

    async getObj(strCourseChapterId: string): Promise<clscc_CourseChapter_T | null> {
      if (strCourseChapterId == '') return null;
      if (strCourseChapterId == null) return null;
      const objcc_CourseChapter0 = this.cc_CourseChapterLst.find(
        (x: any) => x.courseChapterId === strCourseChapterId,
      );
      if (objcc_CourseChapter0 != null && objcc_CourseChapter0 != undefined)
        return objcc_CourseChapter0;

      let objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
        strCourseChapterId,
      );
      if (objcc_CourseChapterEN == null) {
        const strMsg = `CourseChapterId=${strCourseChapterId} 的cc_CourseChapter中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_CourseChapter = cc_CourseChapterEx_CopyTo(objcc_CourseChapterEN);
      this.cc_CourseChapterLst.push(objcc_CourseChapter);
      return objcc_CourseChapter;
    },
    async getObjEN(strCourseChapterId: string): Promise<clscc_CourseChapterEN_T | null> {
      if (strCourseChapterId == '') return null;
      if (strCourseChapterId == null) return null;
      const objcc_CourseChapter0 = this.cc_CourseChapterLst.find(
        (x: any) => x.courseChapterId === strCourseChapterId,
      );
      if (objcc_CourseChapter0 != null && objcc_CourseChapter0 != undefined)
        return cc_CourseChapterEx_CopyToEN(objcc_CourseChapter0);

      let objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
        strCourseChapterId,
      );
      if (objcc_CourseChapterEN == null) {
        const strMsg = `CourseChapterId=${strCourseChapterId} 的cc_CourseChapter中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_CourseChapter = cc_CourseChapterEx_CopyTo(objcc_CourseChapterEN);
      this.cc_CourseChapterLst.push(objcc_CourseChapter);
      return objcc_CourseChapterEN;
    },
    getCourseChapterIdLstByGameLevelName(
      strGameLevelName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrCourseChapterId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.cc_CourseChapterLst.filter((x: any) => x.chapterName === strGameLevelName);
          arrCourseChapterId = arrUser.map((x: any) => x.courseChapterId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.cc_CourseChapterLst.filter(
            (x: any) => x.chapterName.indexOf(strGameLevelName) > -1,
          );
          arrCourseChapterId = arrUser.map((x: any) => x.courseChapterId);
          break;
      }
      return arrCourseChapterId;
    },

    getCourseChapterIdLstByIdCurrEduCls(
      strIdCurrEduCls: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_CourseChapter;
      let arrCourseChapterId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_CourseChapter = this.cc_CourseChapterLst.filter(
            (x: any) => x.courseId === strIdCurrEduCls,
          );
          arrCourseChapterId = arrcc_CourseChapter.map((x: any) => x.courseChapterId);
          break;
      }
      return arrCourseChapterId;
    },
    getCourseChapterIdLstByIdCurrEduClsLst(
      arrIdCurrEduCls: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_CourseChapter;
      let arrCourseChapterId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrcc_CourseChapter = this.cc_CourseChapterLst.filter(
            (x: any) => arrIdCurrEduCls.indexOf(x.courseId) > -1,
          );
          arrCourseChapterId = arrcc_CourseChapter.map((x: any) => x.courseChapterId);
          break;
      }
      return arrCourseChapterId;
    },
    async getFieldValue(strCourseChapterId: string, strOutFldName: string): Promise<string> {
      let objcc_CourseChapter = this.cc_CourseChapterLst.find(
        (x: any) => x.courseChapterId === strCourseChapterId,
      );
      if (objcc_CourseChapter == null) {
        const objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
          strCourseChapterId,
        );
        if (objcc_CourseChapterEN == null) return '';
        objcc_CourseChapter = cc_CourseChapterEx_CopyTo(objcc_CourseChapterEN);
        this.cc_CourseChapterLst.push(objcc_CourseChapter);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clscc_CourseChapterEN.con_CourseChapterId:
          return objcc_CourseChapter.courseChapterId;
        case clscc_CourseChapterEN.con_ChapterName:
          return objcc_CourseChapter.chapterName;
        case clscc_CourseChapterEN.con_CourseId:
          return objcc_CourseChapter.courseId;
        // case clscc_CourseChapterEN.con_CollegeName:
        //   return objcc_CourseChapter.collegeName;
        // case clscc_CourseChapterEN.con_IdXzMajor:
        //   return objcc_CourseChapter.idXzMajor;
        // case clscc_CourseChapterEN.con_MajorName:
        //   return objcc_CourseChapter.majorName;
        // case clscc_CourseChapterEN.con_HeadPic:
        //   return objcc_CourseChapter.headPic;
        // case clscc_CourseChapterEN.con_IsGScc_CourseChapter:
        //   return objcc_CourseChapter.isGScc_CourseChapter.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[cc_CourseChapter]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export1 const cc_CourseChapterStore = usecc_CourseChapterStore();
