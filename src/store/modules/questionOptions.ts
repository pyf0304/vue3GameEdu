import { clsQuestionOptions } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptions';
import { clsQuestionOptionsEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionOptionsEN';
import { QuestionOptions_GetObjByQuestionOptionIdAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionOptionsWApi';
import { QxRoles_GetObjLstCache } from 'share-gen-plat-base-lib';
import { QuestionOptionsEx_GetObjLstByQuestionId } from '@/ts/L3ForWApiEx/QuestionaireEdit/clsQuestionOptionsExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

// 定义 TabsState
export interface QuestionOptionsState {
  questionOptionsLst: clsQuestionOptions[];
}
// import { SET1_TEXT } from './mutations';

export function QuestionOptionsEx_CopyTo(
  objQuestionOptionsENS: clsQuestionOptionsEN,
): clsQuestionOptions {
  const strThisFuncName = QuestionOptionsEx_CopyTo.name;
  const objQuestionOptionsENT = new clsQuestionOptions();
  try {
    ObjectAssign(objQuestionOptionsENT, objQuestionOptionsENS);
    return objQuestionOptionsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQuestionOptionsENT;
  }
}
// 定义 ModuleA mutations
export const useQuestionOptionsStore = defineStore('QuestionOptions', {
  state(): QuestionOptionsState {
    return {
      questionOptionsLst: [],
    };
  },

  actions: {
    async getOptionName(strQuestionOptionId: string): Promise<string> {
      if (strQuestionOptionId == '') return '';
      if (strQuestionOptionId == null) return '';
      const objQuestionnaire0 = this.questionOptionsLst.find(
        (x: any) => x.questionOptionId === strQuestionOptionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.optionName;
      let objQuestionnaireEN = await QuestionOptions_GetObjByQuestionOptionIdAsync(
        strQuestionOptionId,
      );
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionOptionId=${strQuestionOptionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionOptionsEx_CopyTo(objQuestionnaireEN);
      this.questionOptionsLst.push(objQuestionnaire);
      return objQuestionnaire.optionName;
    },

    async getObjLstByQuestionId(strQuestionId: number): Promise<Array<clsQuestionOptions>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrObjUserRoles = this.questionOptionsLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(QuestionOptionsEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.questionOptionsLst.push(x);
        });
      }

      return arrObjUserRoles;
    },

    delQuestionOptionsByQuestionId(strQuestionId: number): boolean {
      if (strQuestionId == null) return true;
      if (strQuestionId == 0) return true;

      const intIndex = this.questionOptionsLst.findIndex(
        (x: any) => x.questionId === strQuestionId,
      );

      this.questionOptionsLst = this.questionOptionsLst.filter(
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
    async getQuestionOptionIds(strQuestionId: number): Promise<Array<string>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrObjUserRoles = this.questionOptionsLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(QuestionOptionsEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.questionOptionsLst.push(x);
        });
      }

      const arrQuestionOptionIds = arrObjUserRoles.map((x: any) => x.questionOptionId);

      return arrQuestionOptionIds;
    },
    async getObjLst(strQuestionId: number): Promise<Array<clsQuestionOptions>> {
      if (strQuestionId == 0) return [];
      if (strQuestionId == null) return [];

      let arrObjUserRoles = this.questionOptionsLst.filter(
        (x: any) => x.questionId === strQuestionId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QuestionOptionsEx_GetObjLstByQuestionId(strQuestionId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(QuestionOptionsEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.questionOptionsLst.push(x);
        });
      }

      return arrObjUserRoles;
    },
  },
});

// export const questionOptionsStore = useQuestionOptionsStore();
