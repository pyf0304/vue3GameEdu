import { clsQuestionnaire } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaire';
import { clsQuestionnaireEN } from '@/ts/L0Entity/QuestionaireEdit/clsQuestionnaireEN';
import { Questionnaire_GetObjByQuestionIdAsync } from '@/ts/L3ForWApi/QuestionaireEdit/clsQuestionnaireWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface QuestionnaireSimEN {
//   QuestionId: number;
//   questionName: string;
// }

export function QuestionnaireEx_CopyTo(objQuestionnaireENS: clsQuestionnaireEN): clsQuestionnaire {
  const strThisFuncName = QuestionnaireEx_CopyTo.name;
  const objQuestionnaireENT = new clsQuestionnaire();
  try {
    ObjectAssign(objQuestionnaireENT, objQuestionnaireENS);
    return objQuestionnaireENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQuestionnaireENT;
  }
}
export function QuestionnaireEx_CopyToEN(objQuestionnaireS: clsQuestionnaire): clsQuestionnaireEN {
  const strThisFuncName = QuestionnaireEx_CopyTo.name;
  const objQuestionnaireENT = new clsQuestionnaireEN();
  try {
    ObjectAssign(objQuestionnaireENT, objQuestionnaireS);
    return objQuestionnaireENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQuestionnaireENT;
  }
}
// 定义 TabsState
export interface QuestionnaireState {
  QuestionnaireLst: clsQuestionnaire[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQuestionnaireStore = defineStore('Questionnaire', {
  state: (): QuestionnaireState => ({
    QuestionnaireLst: [],
  }),

  actions: {
    async getQuestionName(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.questionName;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.questionName;
    },

    async getQuestionContent(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.questionContent;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.questionContent;
    },

    async getQuestionTypeId(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.questionTypeId;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      // console.log('objQuestionnaireEN:', objQuestionnaireEN);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.questionTypeId;
    },

    async getCourseChapterId(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.courseChapterId;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      // console.log('objQuestionnaireEN:', objQuestionnaireEN);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.courseChapterId;
    },
    async getDifficultyLevelId(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.difficultyLevelId;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      // console.log('objQuestionnaireEN:', objQuestionnaireEN);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.difficultyLevelId;
    },

    async getCourseId(strQuestionId: number): Promise<string> {
      if (strQuestionId == 0) return '';
      if (strQuestionId == null) return '';
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return objQuestionnaire0.courseId;
      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire.courseId;
    },

    async getObj(strQuestionId: number): Promise<clsQuestionnaire | null> {
      if (strQuestionId == 0) return null;
      if (strQuestionId == null) return null;
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined) return objQuestionnaire0;

      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaire;
    },
    async getObjEN(strQuestionId: number): Promise<clsQuestionnaireEN | null> {
      if (strQuestionId == 0) return null;
      if (strQuestionId == null) return null;
      const objQuestionnaire0 = this.QuestionnaireLst.find(
        (x: any) => x.questionId === strQuestionId,
      );
      if (objQuestionnaire0 != null && objQuestionnaire0 != undefined)
        return QuestionnaireEx_CopyToEN(objQuestionnaire0);

      let objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
      if (objQuestionnaireEN == null) {
        const strMsg = `QuestionId=${strQuestionId} 的Questionnaire中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
      this.QuestionnaireLst.push(objQuestionnaire);
      return objQuestionnaireEN;
    },
    getQuestionIdLstByQuestionName(
      strQuestionName: string,
      strComparisonOp: enumComparisonOp,
    ): number[] {
      let arrUser;
      let arrQuestionId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.QuestionnaireLst.filter((x: any) => x.questionName === strQuestionName);
          arrQuestionId = arrUser.map((x: any) => x.questionId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.QuestionnaireLst.filter(
            (x: any) => x.questionName.indexOf(strQuestionName) > -1,
          );
          arrQuestionId = arrUser.map((x: any) => x.questionId);
          break;
      }
      return arrQuestionId;
    },

    getQuestionIdLstByCourseId(strCourseId: string, strComparisonOp: enumComparisonOp): number[] {
      let arrQuestionnaire;
      let arrQuestionId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQuestionnaire = this.QuestionnaireLst.filter((x: any) => x.courseId === strCourseId);
          arrQuestionId = arrQuestionnaire.map((x: any) => x.questionId);
          break;
      }
      return arrQuestionId;
    },
    getQuestionIdLstByCourseIdLst(
      arrCourseId: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): number[] {
      let arrQuestionnaire;
      let arrQuestionId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrQuestionnaire = this.QuestionnaireLst.filter(
            (x: any) => arrCourseId.indexOf(x.courseId) > -1,
          );
          arrQuestionId = arrQuestionnaire.map((x: any) => x.questionId);
          break;
      }
      return arrQuestionId;
    },
    async getFieldValue(strQuestionId: number, strOutFldName: string): Promise<string> {
      let objQuestionnaire = this.QuestionnaireLst.find((x: any) => x.questionId === strQuestionId);
      if (objQuestionnaire == null) {
        const objQuestionnaireEN = await Questionnaire_GetObjByQuestionIdAsync(strQuestionId);
        if (objQuestionnaireEN == null) return '';
        objQuestionnaire = QuestionnaireEx_CopyTo(objQuestionnaireEN);
        this.QuestionnaireLst.push(objQuestionnaire);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsQuestionnaireEN.con_QuestionId:
          return objQuestionnaire.questionId.toString();
        case clsQuestionnaireEN.con_QuestionName:
          return objQuestionnaire.questionName;
        case clsQuestionnaireEN.con_CourseId:
          return objQuestionnaire.courseId;
        // case clsQuestionnaireEN.con_CollegeName:
        //   return objQuestionnaire.collegeName;
        // case clsQuestionnaireEN.con_IdXzMajor:
        //   return objQuestionnaire.idXzMajor;
        // case clsQuestionnaireEN.con_MajorName:
        //   return objQuestionnaire.majorName;
        // case clsQuestionnaireEN.con_HeadPic:
        //   return objQuestionnaire.headPic;
        // case clsQuestionnaireEN.con_IsGSQuestionnaire:
        //   return objQuestionnaire.isGSQuestionnaire.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[Questionnaire]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const questionnaireStore = useQuestionnaireStore();
