import { clscc_KnowledgesExamLibRela } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRela';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import {
  cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId,
  cc_KnowledgesExamLibRelaEx_GetObjLstByQuestionId,
} from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

// 定义 TabsState
export interface cc_KnowledgesExamLibRelaState {
  cc_KnowledgesExamLibRelaLst: clscc_KnowledgesExamLibRela[];
}
// import { SET1_TEXT } from './mutations';

export function cc_KnowledgesExamLibRelaEx_CopyTo(
  objcc_KnowledgesExamLibRelaENS: clscc_KnowledgesExamLibRelaEN,
): clscc_KnowledgesExamLibRela {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_CopyTo.name;
  const objcc_KnowledgesExamLibRelaENT = new clscc_KnowledgesExamLibRela();
  try {
    ObjectAssign(objcc_KnowledgesExamLibRelaENT, objcc_KnowledgesExamLibRelaENS);
    return objcc_KnowledgesExamLibRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgesExamLibRelaENT;
  }
}
// 定义 ModuleA mutations
export const usecc_KnowledgesExamLibRelaStore = defineStore('cc_KnowledgesExamLibRela', {
  state(): cc_KnowledgesExamLibRelaState {
    return {
      cc_KnowledgesExamLibRelaLst: [],
    };
  },

  actions: {
    async getObjLstByCourseKnowledgeId(
      strCourseKnowledgeId: string,
    ): Promise<Array<clscc_KnowledgesExamLibRela>> {
      if (strCourseKnowledgeId == '') return [];
      if (strCourseKnowledgeId == null) return [];

      let arrObjUserRoles = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId(
          strCourseKnowledgeId,
        );
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      return arrObjUserRoles;
    },

    async getObjLstByQuestionId(
      strQuestionId: number,
    ): Promise<Array<clscc_KnowledgesExamLibRela>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrcc_KnowledgesExamLibRela = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrcc_KnowledgesExamLibRela.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrcc_KnowledgesExamLibRela = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrcc_KnowledgesExamLibRela.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      return arrcc_KnowledgesExamLibRela;
    },
    delcc_KnowledgesExamLibRelaByQuestionId(strQuestionId: number): boolean {
      if (strQuestionId == null) return true;
      if (strQuestionId == 0) return true;

      const intIndex = this.cc_KnowledgesExamLibRelaLst.findIndex(
        (x: any) => x.questionId === strQuestionId,
      );

      this.cc_KnowledgesExamLibRelaLst = this.cc_KnowledgesExamLibRelaLst.filter(
        (item: any) => item.questionId !== strQuestionId,
      );

      if (intIndex > -1) {
        console.log(`问题Id:${strQuestionId}在问题选项表中已经移除！`);
        return true;
      }
      {
        console.error(`问题Id:${strQuestionId}在问题选项表中不存在！`);
        return false;
      }
    },

    delcc_KnowledgesExamLibRelaByCourseKnowledgeId(strCourseKnowledgeId: string): boolean {
      if (strCourseKnowledgeId == null) return true;
      if (strCourseKnowledgeId == '') return true;

      const intIndex = this.cc_KnowledgesExamLibRelaLst.findIndex(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );

      this.cc_KnowledgesExamLibRelaLst = this.cc_KnowledgesExamLibRelaLst.filter(
        (item: any) => item.courseKnowledgeId !== strCourseKnowledgeId,
      );

      if (intIndex > -1) {
        console.log(`知识点Id:${strCourseKnowledgeId}在题目知识点关系表中已经移除！`);
        return true;
      }
      {
        console.error(`知识点Id:${strCourseKnowledgeId}在题目知识点关系表中不存在！`);
        return false;
      }
    },
    async getQuestionIdsByCourseKnowledgeId(strCourseKnowledgeId: string): Promise<Array<number>> {
      if (strCourseKnowledgeId == '') return [];
      if (strCourseKnowledgeId == null) return [];

      let arrObjUserRoles = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId(
          strCourseKnowledgeId,
        );
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      const arrQuestionOptionIds = arrObjUserRoles.map((x: any) => x.questionId);
      return arrQuestionOptionIds;
    },

    async getCourseKnowledgeIdsByQuestionId(strQuestionId: number): Promise<Array<string>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrObjUserRoles = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      const arrCourseKnowledgeIds = arrObjUserRoles.map((x: any) => x.courseKnowledgeId);
      return arrCourseKnowledgeIds;
    },

    async getKnowledgeNamesByQuestionId(strQuestionId: number): Promise<Array<string>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrclscc_KnowledgesExamLibRela = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrclscc_KnowledgesExamLibRela.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrclscc_KnowledgesExamLibRela = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrclscc_KnowledgesExamLibRela.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      const arrCourseKnowledgeIds = arrclscc_KnowledgesExamLibRela.map(
        (x: any) => x.courseKnowledgeId,
      );
      return arrCourseKnowledgeIds;
    },
    async getObjLst(strCourseKnowledgeId: string): Promise<Array<clscc_KnowledgesExamLibRela>> {
      if (strCourseKnowledgeId == '') return [];
      if (strCourseKnowledgeId == null) return [];

      let arrObjUserRoles = this.cc_KnowledgesExamLibRelaLst.filter(
        (x: any) => x.courseKnowledgeId === strCourseKnowledgeId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await cc_KnowledgesExamLibRelaEx_GetObjLstByCourseKnowledgeId(
          strCourseKnowledgeId,
        );
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(cc_KnowledgesExamLibRelaEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.cc_KnowledgesExamLibRelaLst.push(x);
        });
      }

      return arrObjUserRoles;
    },
  },
});

// export const cc_KnowledgesExamLibRelaStore = usecc_KnowledgesExamLibRelaStore();
