import { clsge_GameLevel } from '@/ts/L0Entity/Knowledges/clsge_GameLevel';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { ge_GameLevel_GetObjByGameLevelIdAsync } from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface ge_GameLevelSimEN {
//   GameLevelId: string;
//   gameLevelName: string;
// }

export function ge_GameLevelEx_CopyTo(objge_GameLevelENS: clsge_GameLevelEN): clsge_GameLevel {
  const strThisFuncName = ge_GameLevelEx_CopyTo.name;
  const objge_GameLevelENT = new clsge_GameLevel();
  try {
    ObjectAssign(objge_GameLevelENT, objge_GameLevelENS);
    return objge_GameLevelENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objge_GameLevelENT;
  }
}
export function ge_GameLevelEx_CopyToEN(objge_GameLevelS: clsge_GameLevel): clsge_GameLevelEN {
  const strThisFuncName = ge_GameLevelEx_CopyTo.name;
  const objge_GameLevelENT = new clsge_GameLevelEN();
  try {
    ObjectAssign(objge_GameLevelENT, objge_GameLevelS);
    return objge_GameLevelENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objge_GameLevelENT;
  }
}
// 定义 TabsState
export interface ge_GameLevelState {
  ge_GameLevelLst: clsge_GameLevel[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usege_GameLevelStore = defineStore('ge_GameLevel', {
  state(): ge_GameLevelState {
    return {
      ge_GameLevelLst: [],
    };
  },

  actions: {
    async getGameLevelName(strGameLevelId: string): Promise<string> {
      if (strGameLevelId == '') return '';
      if (strGameLevelId == null) return '';
      const objge_GameLevel0 = this.ge_GameLevelLst.find(
        (x: any) => x.gameLevelId === strGameLevelId,
      );
      if (objge_GameLevel0 != null && objge_GameLevel0 != undefined)
        return objge_GameLevel0.gameLevelName;
      let objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
      if (objge_GameLevelEN == null) {
        const strMsg = `GameLevelId=${strGameLevelId} 的ge_GameLevel中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objge_GameLevel = ge_GameLevelEx_CopyTo(objge_GameLevelEN);
      this.ge_GameLevelLst.push(objge_GameLevel);
      return objge_GameLevel.gameLevelName;
    },

    async getIdCurrEduCls(strGameLevelId: string): Promise<string> {
      if (strGameLevelId == '') return '';
      if (strGameLevelId == null) return '';
      const objge_GameLevel0 = this.ge_GameLevelLst.find(
        (x: any) => x.gameLevelId === strGameLevelId,
      );
      if (objge_GameLevel0 != null && objge_GameLevel0 != undefined)
        return objge_GameLevel0.idCurrEduCls;
      let objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
      if (objge_GameLevelEN == null) {
        const strMsg = `GameLevelId=${strGameLevelId} 的ge_GameLevel中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objge_GameLevel = ge_GameLevelEx_CopyTo(objge_GameLevelEN);
      this.ge_GameLevelLst.push(objge_GameLevel);
      return objge_GameLevel.idCurrEduCls;
    },

    async getObj(strGameLevelId: string): Promise<clsge_GameLevel | null> {
      if (strGameLevelId == '') return null;
      if (strGameLevelId == null) return null;
      const objge_GameLevel0 = this.ge_GameLevelLst.find(
        (x: any) => x.gameLevelId === strGameLevelId,
      );
      if (objge_GameLevel0 != null && objge_GameLevel0 != undefined) return objge_GameLevel0;

      let objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
      if (objge_GameLevelEN == null) {
        const strMsg = `GameLevelId=${strGameLevelId} 的ge_GameLevel中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objge_GameLevel = ge_GameLevelEx_CopyTo(objge_GameLevelEN);
      this.ge_GameLevelLst.push(objge_GameLevel);
      return objge_GameLevel;
    },
    async getObjEN(strGameLevelId: string): Promise<clsge_GameLevelEN | null> {
      if (strGameLevelId == '') return null;
      if (strGameLevelId == null) return null;
      const objge_GameLevel0 = this.ge_GameLevelLst.find(
        (x: any) => x.gameLevelId === strGameLevelId,
      );
      if (objge_GameLevel0 != null && objge_GameLevel0 != undefined)
        return ge_GameLevelEx_CopyToEN(objge_GameLevel0);

      let objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
      if (objge_GameLevelEN == null) {
        const strMsg = `GameLevelId=${strGameLevelId} 的ge_GameLevel中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objge_GameLevel = ge_GameLevelEx_CopyTo(objge_GameLevelEN);
      this.ge_GameLevelLst.push(objge_GameLevel);
      return objge_GameLevelEN;
    },
    getGameLevelIdLstByGameLevelName(
      strGameLevelName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrGameLevelId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.ge_GameLevelLst.filter((x: any) => x.gameLevelName === strGameLevelName);
          arrGameLevelId = arrUser.map((x: any) => x.gameLevelId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.ge_GameLevelLst.filter(
            (x: any) => x.gameLevelName.indexOf(strGameLevelName) > -1,
          );
          arrGameLevelId = arrUser.map((x: any) => x.gameLevelId);
          break;
      }
      return arrGameLevelId;
    },

    getGameLevelIdLstByIdCurrEduCls(
      strIdCurrEduCls: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrge_GameLevel;
      let arrGameLevelId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrge_GameLevel = this.ge_GameLevelLst.filter(
            (x: any) => x.idCurrEduCls === strIdCurrEduCls,
          );
          arrGameLevelId = arrge_GameLevel.map((x: any) => x.gameLevelId);
          break;
      }
      return arrGameLevelId;
    },
    getGameLevelIdLstByIdCurrEduClsLst(
      arrIdCurrEduCls: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrge_GameLevel;
      let arrGameLevelId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrge_GameLevel = this.ge_GameLevelLst.filter(
            (x: any) => arrIdCurrEduCls.indexOf(x.idCurrEduCls) > -1,
          );
          arrGameLevelId = arrge_GameLevel.map((x: any) => x.gameLevelId);
          break;
      }
      return arrGameLevelId;
    },
    async getFieldValue(strGameLevelId: string, strOutFldName: string): Promise<string> {
      let objge_GameLevel = this.ge_GameLevelLst.find((x: any) => x.gameLevelId === strGameLevelId);
      if (objge_GameLevel == null) {
        const objge_GameLevelEN = await ge_GameLevel_GetObjByGameLevelIdAsync(strGameLevelId);
        if (objge_GameLevelEN == null) return '';
        objge_GameLevel = ge_GameLevelEx_CopyTo(objge_GameLevelEN);
        this.ge_GameLevelLst.push(objge_GameLevel);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsge_GameLevelEN.con_GameLevelId:
          return objge_GameLevel.gameLevelId;
        case clsge_GameLevelEN.con_GameLevelName:
          return objge_GameLevel.gameLevelName;
        case clsge_GameLevelEN.con_IdCurrEduCls:
          return objge_GameLevel.idCurrEduCls;
        // case clsge_GameLevelEN.con_CollegeName:
        //   return objge_GameLevel.collegeName;
        // case clsge_GameLevelEN.con_IdXzMajor:
        //   return objge_GameLevel.idXzMajor;
        // case clsge_GameLevelEN.con_MajorName:
        //   return objge_GameLevel.majorName;
        // case clsge_GameLevelEN.con_HeadPic:
        //   return objge_GameLevel.headPic;
        // case clsge_GameLevelEN.con_IsGSge_GameLevel:
        //   return objge_GameLevel.isGSge_GameLevel.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[ge_GameLevel]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const ge_GameLevelStore = usege_GameLevelStore();
