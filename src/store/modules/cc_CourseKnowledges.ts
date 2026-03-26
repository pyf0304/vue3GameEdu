import { clscc_CourseKnowledges } from 'share-stu-study-base-lib';
import { clscc_CourseKnowledgesEN } from 'share-stu-study-base-lib';
import { cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync } from 'share-stu-study-base-lib';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface cc_CourseKnowledgesSimEN {
//   courseKnowledgeId: string;
//   knowledgeName: string;
// }

export function cc_CourseKnowledgesEx_CopyTo(
  objcc_CourseKnowledgesENS: clscc_CourseKnowledgesEN_T,
): clscc_CourseKnowledges_T {
  const strThisFuncName = cc_CourseKnowledgesEx_CopyTo.name;
  const objcc_CourseKnowledgesENT = new clscc_CourseKnowledges();
  try {
    ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesENS);
    return objcc_CourseKnowledgesENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseKnowledgesENT;
  }
}
export function cc_CourseKnowledgesEx_CopyToEN(
  objcc_CourseKnowledgesS: clscc_CourseKnowledges_T,
): clscc_CourseKnowledgesEN_T {
  const strThisFuncName = cc_CourseKnowledgesEx_CopyTo.name;
  const objcc_CourseKnowledgesENT = new clscc_CourseKnowledgesEN();
  try {
    ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesS);
    return objcc_CourseKnowledgesENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseKnowledgesENT;
  }
}
// 定义 TabsState
export interface cc_CourseKnowledgesState {
  cc_CourseKnowledgesLst: clscc_CourseKnowledges_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usecc_CourseKnowledgesStore = defineStore('cc_CourseKnowledges', {
  state(): cc_CourseKnowledgesState {
    return {
      cc_CourseKnowledgesLst: [],
    };
  },

  actions: {
    async getKnowledgeName(strCourseKnowledgeId: string): Promise<string> {
      if (strCourseKnowledgeId == '') return '';
      if (strCourseKnowledgeId == null) return '';
      // console.log('strCourseKnowledgeId:(in getKnowledgeName)', strCourseKnowledgeId);
      const objcc_CourseKnowledges0 = this.cc_CourseKnowledgesLst.find(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledges0 != null && objcc_CourseKnowledges0 != undefined)
        return objcc_CourseKnowledges0.knowledgeName;
      let objcc_CourseKnowledgesEN = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(
        strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledgesEN == null) {
        const strMsg = `courseKnowledgeId=${strCourseKnowledgeId} 的cc_CourseKnowledges中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objcc_CourseKnowledges = cc_CourseKnowledgesEx_CopyTo(objcc_CourseKnowledgesEN);
      this.cc_CourseKnowledgesLst.push(objcc_CourseKnowledges);
      // console.log(objcc_CourseKnowledges, 'objcc_CourseKnowledges:');
      return objcc_CourseKnowledges.knowledgeName;
    },

    async getObj(strCourseKnowledgeId: string): Promise<clscc_CourseKnowledges_T | null> {
      if (strCourseKnowledgeId == '') return null;
      if (strCourseKnowledgeId == null) return null;
      const objcc_CourseKnowledges0 = this.cc_CourseKnowledgesLst.find(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledges0 != null && objcc_CourseKnowledges0 != undefined)
        return objcc_CourseKnowledges0;

      let objcc_CourseKnowledgesEN = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(
        strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledgesEN == null) {
        const strMsg = `courseKnowledgeId=${strCourseKnowledgeId} 的cc_CourseKnowledges中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_CourseKnowledges = cc_CourseKnowledgesEx_CopyTo(objcc_CourseKnowledgesEN);
      this.cc_CourseKnowledgesLst.push(objcc_CourseKnowledges);
      return objcc_CourseKnowledges;
    },
    async getObjEN(strCourseKnowledgeId: string): Promise<clscc_CourseKnowledgesEN_T | null> {
      if (strCourseKnowledgeId == '') return null;
      if (strCourseKnowledgeId == null) return null;
      const objcc_CourseKnowledges0 = this.cc_CourseKnowledgesLst.find(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledges0 != null && objcc_CourseKnowledges0 != undefined)
        return cc_CourseKnowledgesEx_CopyToEN(objcc_CourseKnowledges0);

      let objcc_CourseKnowledgesEN = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(
        strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledgesEN == null) {
        const strMsg = `courseKnowledgeId=${strCourseKnowledgeId} 的cc_CourseKnowledges中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_CourseKnowledges = cc_CourseKnowledgesEx_CopyTo(objcc_CourseKnowledgesEN);
      this.cc_CourseKnowledgesLst.push(objcc_CourseKnowledges);
      return objcc_CourseKnowledgesEN;
    },
    getcourseKnowledgeIdLstByknowledgeName(
      strKnowledgeName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrCourseKnowledgeId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.cc_CourseKnowledgesLst.filter(
            (x: any) => x.knowledgeName === strKnowledgeName,
          );
          arrCourseKnowledgeId = arrUser.map((x: any) => x.courseKnowledgeId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.cc_CourseKnowledgesLst.filter(
            (x: any) => x.knowledgeName.indexOf(strKnowledgeName) > -1,
          );
          arrCourseKnowledgeId = arrUser.map((x: any) => x.courseKnowledgeId);
          break;
      }
      return arrCourseKnowledgeId;
    },

    getCourseKnowledgeIdLstBycourseId(
      strCourseId: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_CourseKnowledges;
      let arrCourseKnowledgeId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_CourseKnowledges = this.cc_CourseKnowledgesLst.filter(
            (x: any) => x.courseId === strCourseId,
          );
          arrCourseKnowledgeId = arrcc_CourseKnowledges.map((x: any) => x.courseKnowledgeId);
          break;
      }
      return arrCourseKnowledgeId;
    },
    getcourseKnowledgeIdLstBycourseIdLst(
      arrcourseId: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_CourseKnowledges;
      let arrCourseKnowledgeId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrcc_CourseKnowledges = this.cc_CourseKnowledgesLst.filter(
            (x: any) => arrcourseId.indexOf(x.courseId) > -1,
          );
          arrCourseKnowledgeId = arrcc_CourseKnowledges.map((x: any) => x.courseKnowledgeId);
          break;
      }
      return arrCourseKnowledgeId;
    },
    async getFieldValue(strCourseKnowledgeId: string, strOutFldName: string): Promise<string> {
      let objcc_CourseKnowledges = this.cc_CourseKnowledgesLst.find(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (objcc_CourseKnowledges == null) {
        const objcc_CourseKnowledgesEN = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(
          strCourseKnowledgeId,
        );
        if (objcc_CourseKnowledgesEN == null) return '';
        objcc_CourseKnowledges = cc_CourseKnowledgesEx_CopyTo(objcc_CourseKnowledgesEN);
        this.cc_CourseKnowledgesLst.push(objcc_CourseKnowledges);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
          return objcc_CourseKnowledges.courseKnowledgeId;
        case clscc_CourseKnowledgesEN.con_KnowledgeName:
          return objcc_CourseKnowledges.knowledgeName;
        case clscc_CourseKnowledgesEN.con_CourseId:
          return objcc_CourseKnowledges.courseId;

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[cc_CourseKnowledges]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const cc_CourseKnowledgesStore = usecc_CourseKnowledgesStore();
