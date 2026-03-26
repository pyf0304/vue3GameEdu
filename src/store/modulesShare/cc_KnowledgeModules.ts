import { clscc_KnowledgeModules } from 'share-stu-study-base-lib';
import { clscc_KnowledgeModulesEN } from 'share-stu-study-base-lib';
import { cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync } from 'share-stu-study-base-lib';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface cc_KnowledgeModulesSimEN {
//   KnowledgeModuleId: string;
//   knowledgeModuleName: string;
// }

export function cc_KnowledgeModulesEx_CopyTo(
  objcc_KnowledgeModulesENS: clscc_KnowledgeModulesEN_T,
): clscc_KnowledgeModules_T {
  const strThisFuncName = cc_KnowledgeModulesEx_CopyTo.name;
  const objcc_KnowledgeModulesENT = new clscc_KnowledgeModules();
  try {
    ObjectAssign(objcc_KnowledgeModulesENT, objcc_KnowledgeModulesENS);
    return objcc_KnowledgeModulesENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgeModulesENT;
  }
}
export function cc_KnowledgeModulesEx_CopyToEN(
  objcc_KnowledgeModulesS: clscc_KnowledgeModules_T,
): clscc_KnowledgeModulesEN_T {
  const strThisFuncName = cc_KnowledgeModulesEx_CopyTo.name;
  const objcc_KnowledgeModulesENT = new clscc_KnowledgeModulesEN();
  try {
    ObjectAssign(objcc_KnowledgeModulesENT, objcc_KnowledgeModulesS);
    return objcc_KnowledgeModulesENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgeModulesENT;
  }
}
// 定义 TabsState
export interface cc_KnowledgeModulesState {
  cc_KnowledgeModulesLst: clscc_KnowledgeModules_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usecc_KnowledgeModulesStore = defineStore('cc_KnowledgeModules', {
  state(): cc_KnowledgeModulesState {
    return {
      cc_KnowledgeModulesLst: [],
    };
  },

  actions: {
    async getKnowledgeModuleName(strKnowledgeModuleId: string): Promise<string> {
      if (strKnowledgeModuleId == '') return '';
      if (strKnowledgeModuleId == null) return '';
      const objcc_KnowledgeModules0 = this.cc_KnowledgeModulesLst.find(
        (x: any) => x.knowledgeModuleId === strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModules0 != null && objcc_KnowledgeModules0 != undefined)
        return objcc_KnowledgeModules0.knowledgeModuleName;
      let objcc_KnowledgeModulesEN = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(
        strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModulesEN == null) {
        const strMsg = `KnowledgeModuleId=${strKnowledgeModuleId} 的cc_KnowledgeModules中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objcc_KnowledgeModules = cc_KnowledgeModulesEx_CopyTo(objcc_KnowledgeModulesEN);
      this.cc_KnowledgeModulesLst.push(objcc_KnowledgeModules);
      return objcc_KnowledgeModules.knowledgeModuleName;
    },

    async getCourseId(strKnowledgeModuleId: string): Promise<string> {
      if (strKnowledgeModuleId == '') return '';
      if (strKnowledgeModuleId == null) return '';
      const objcc_KnowledgeModules0 = this.cc_KnowledgeModulesLst.find(
        (x: any) => x.knowledgeModuleId === strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModules0 != null && objcc_KnowledgeModules0 != undefined)
        return objcc_KnowledgeModules0.courseId;
      let objcc_KnowledgeModulesEN = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(
        strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModulesEN == null) {
        const strMsg = `KnowledgeModuleId=${strKnowledgeModuleId} 的cc_KnowledgeModules中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objcc_KnowledgeModules = cc_KnowledgeModulesEx_CopyTo(objcc_KnowledgeModulesEN);
      this.cc_KnowledgeModulesLst.push(objcc_KnowledgeModules);
      return objcc_KnowledgeModules.courseId;
    },

    async getObj(strKnowledgeModuleId: string): Promise<clscc_KnowledgeModules_T | null> {
      if (strKnowledgeModuleId == '') return null;
      if (strKnowledgeModuleId == null) return null;
      const objcc_KnowledgeModules0 = this.cc_KnowledgeModulesLst.find(
        (x: any) => x.knowledgeModuleId === strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModules0 != null && objcc_KnowledgeModules0 != undefined)
        return objcc_KnowledgeModules0;

      let objcc_KnowledgeModulesEN = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(
        strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModulesEN == null) {
        const strMsg = `KnowledgeModuleId=${strKnowledgeModuleId} 的cc_KnowledgeModules中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_KnowledgeModules = cc_KnowledgeModulesEx_CopyTo(objcc_KnowledgeModulesEN);
      this.cc_KnowledgeModulesLst.push(objcc_KnowledgeModules);
      return objcc_KnowledgeModules;
    },
    async getObjEN(strKnowledgeModuleId: string): Promise<clscc_KnowledgeModulesEN_T | null> {
      if (strKnowledgeModuleId == '') return null;
      if (strKnowledgeModuleId == null) return null;
      const objcc_KnowledgeModules0 = this.cc_KnowledgeModulesLst.find(
        (x: any) => x.knowledgeModuleId === strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModules0 != null && objcc_KnowledgeModules0 != undefined)
        return cc_KnowledgeModulesEx_CopyToEN(objcc_KnowledgeModules0);

      let objcc_KnowledgeModulesEN = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(
        strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModulesEN == null) {
        const strMsg = `KnowledgeModuleId=${strKnowledgeModuleId} 的cc_KnowledgeModules中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objcc_KnowledgeModules = cc_KnowledgeModulesEx_CopyTo(objcc_KnowledgeModulesEN);
      this.cc_KnowledgeModulesLst.push(objcc_KnowledgeModules);
      return objcc_KnowledgeModulesEN;
    },

    delObj(strKnowledgeModuleId: string): boolean {
      if (strKnowledgeModuleId == null) return true;
      if (strKnowledgeModuleId == '') return true;
      const intIndex = this.cc_KnowledgeModulesLst.findIndex(
        (x: any) => !(x.knowledgeModuleId == strKnowledgeModuleId),
      );

      this.cc_KnowledgeModulesLst = this.cc_KnowledgeModulesLst.filter(
        (item: any) => !(item.knowledgeModuleId == strKnowledgeModuleId),
      );

      if (intIndex > -1) {
        console.log(`KnowledgeModuleId:${strKnowledgeModuleId}在知识点模块表中已经移除！`);
        return true;
      } else {
        console.error(`KnowledgeModuleId:${strKnowledgeModuleId}在知识点模块表中不存在！`);
        return false;
      }
    },

    getKnowledgeModuleIdLstByKnowledgeModuleName(
      strKnowledgeModuleName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrKnowledgeModuleId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.cc_KnowledgeModulesLst.filter(
            (x: any) => x.knowledgeModuleName === strKnowledgeModuleName,
          );
          arrKnowledgeModuleId = arrUser.map((x: any) => x.knowledgeModuleId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.cc_KnowledgeModulesLst.filter(
            (x: any) => x.knowledgeModuleName.indexOf(strKnowledgeModuleName) > -1,
          );
          arrKnowledgeModuleId = arrUser.map((x: any) => x.knowledgeModuleId);
          break;
      }
      return arrKnowledgeModuleId;
    },

    getKnowledgeModuleIdLstByIdCurrEduCls(
      strIdCurrEduCls: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_KnowledgeModules;
      let arrKnowledgeModuleId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcc_KnowledgeModules = this.cc_KnowledgeModulesLst.filter(
            (x: any) => x.courseId === strIdCurrEduCls,
          );
          arrKnowledgeModuleId = arrcc_KnowledgeModules.map((x: any) => x.knowledgeModuleId);
          break;
      }
      return arrKnowledgeModuleId;
    },
    getKnowledgeModuleIdLstByIdCurrEduClsLst(
      arrIdCurrEduCls: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcc_KnowledgeModules;
      let arrKnowledgeModuleId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrcc_KnowledgeModules = this.cc_KnowledgeModulesLst.filter(
            (x: any) => arrIdCurrEduCls.indexOf(x.courseId) > -1,
          );
          arrKnowledgeModuleId = arrcc_KnowledgeModules.map((x: any) => x.knowledgeModuleId);
          break;
      }
      return arrKnowledgeModuleId;
    },
    async getFieldValue(strKnowledgeModuleId: string, strOutFldName: string): Promise<string> {
      let objcc_KnowledgeModules = this.cc_KnowledgeModulesLst.find(
        (x: any) => x.knowledgeModuleId === strKnowledgeModuleId,
      );
      if (objcc_KnowledgeModules == null) {
        const objcc_KnowledgeModulesEN = await cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync(
          strKnowledgeModuleId,
        );
        if (objcc_KnowledgeModulesEN == null) return '';
        objcc_KnowledgeModules = cc_KnowledgeModulesEx_CopyTo(objcc_KnowledgeModulesEN);
        this.cc_KnowledgeModulesLst.push(objcc_KnowledgeModules);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clscc_KnowledgeModulesEN.con_KnowledgeModuleId:
          return objcc_KnowledgeModules.knowledgeModuleId;
        case clscc_KnowledgeModulesEN.con_KnowledgeModuleName:
          return objcc_KnowledgeModules.knowledgeModuleName;
        case clscc_KnowledgeModulesEN.con_CourseId:
          return objcc_KnowledgeModules.courseId;
        // case clscc_KnowledgeModulesEN.con_CollegeName:
        //   return objcc_KnowledgeModules.collegeName;
        // case clscc_KnowledgeModulesEN.con_IdXzMajor:
        //   return objcc_KnowledgeModules.idXzMajor;
        // case clscc_KnowledgeModulesEN.con_MajorName:
        //   return objcc_KnowledgeModules.majorName;
        // case clscc_KnowledgeModulesEN.con_HeadPic:
        //   return objcc_KnowledgeModules.headPic;
        // case clscc_KnowledgeModulesEN.con_IsGScc_KnowledgeModules:
        //   return objcc_KnowledgeModules.isGScc_KnowledgeModules.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[cc_KnowledgeModules]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const cc_KnowledgeModulesStore = usecc_KnowledgeModulesStore();
