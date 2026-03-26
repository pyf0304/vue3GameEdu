import { clsQxPrjMenuSet } from 'share-gen-plat-base-lib';
import { clsQxPrjMenuSetEN } from 'share-gen-plat-base-lib';
import { QxPrjMenuSet_GetObjByMenuSetIdAsync } from 'share-gen-plat-base-lib';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface qxPrjMenuSetSimEN {
//   MenuSetId: string;
//   menuSetName: string;
// }

export function QxPrjMenuSetEx_CopyTo(objQxPrjMenuSetENS: clsQxPrjMenuSetEN_T): clsQxPrjMenuSet_T {
  const strThisFuncName = QxPrjMenuSetEx_CopyTo.name;
  const objQxPrjMenuSetENT = new clsQxPrjMenuSet();
  try {
    ObjectAssign(objQxPrjMenuSetENT, objQxPrjMenuSetENS);
    return objQxPrjMenuSetENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxPrjMenuSetENT;
  }
}
// 定义 TabsState
export interface QxPrjMenuSetState {
  qxPrjMenuSetLst: clsQxPrjMenuSet_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxPrjMenuSetStore = defineStore('QxPrjMenuSet', {
  state(): QxPrjMenuSetState {
    return {
      qxPrjMenuSetLst: [],
    };
  },

  actions: {
    async getMenuSetName(strMenuSetId: string): Promise<string> {
      if (strMenuSetId == '' || strMenuSetId == '0') return '';
      if (strMenuSetId == null) return '';
      const objQxPrjMenuSet0 = this.qxPrjMenuSetLst.find((x: any) => x.menuSetId === strMenuSetId);
      if (objQxPrjMenuSet0 != null && objQxPrjMenuSet0 != undefined)
        return objQxPrjMenuSet0.menuSetName;
      let objQxPrjMenuSetEN = await QxPrjMenuSet_GetObjByMenuSetIdAsync(strMenuSetId);
      if (objQxPrjMenuSetEN == null) {
        const strMsg = `MenuSetId=${strMenuSetId} 的QxPrjMenuSet中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxPrjMenuSet = QxPrjMenuSetEx_CopyTo(objQxPrjMenuSetEN);
      this.qxPrjMenuSetLst.push(objQxPrjMenuSet);
      return objQxPrjMenuSet.menuSetName;
    },

    async getCmPrjId(strMenuSetId: string): Promise<string> {
      if (strMenuSetId == '') return '';
      if (strMenuSetId == null) return '';
      const objQxPrjMenuSet0 = this.qxPrjMenuSetLst.find((x: any) => x.menuSetId === strMenuSetId);
      if (objQxPrjMenuSet0 != null && objQxPrjMenuSet0 != undefined)
        return objQxPrjMenuSet0.cmPrjId;
      let objQxPrjMenuSetEN = await QxPrjMenuSet_GetObjByMenuSetIdAsync(strMenuSetId);
      if (objQxPrjMenuSetEN == null) {
        const strMsg = `MenuSetId=${strMenuSetId} 的QxPrjMenuSet中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxPrjMenuSet = QxPrjMenuSetEx_CopyTo(objQxPrjMenuSetEN);
      this.qxPrjMenuSetLst.push(objQxPrjMenuSet);
      return objQxPrjMenuSet.cmPrjId;
    },

    async getObj(strMenuSetId: string): Promise<clsQxPrjMenuSet_T | null> {
      if (strMenuSetId == '') return null;
      if (strMenuSetId == null) return null;
      const objQxPrjMenuSet0 = this.qxPrjMenuSetLst.find((x: any) => x.menuSetId === strMenuSetId);
      if (objQxPrjMenuSet0 != null && objQxPrjMenuSet0 != undefined) return objQxPrjMenuSet0;

      let objQxPrjMenuSetEN = await QxPrjMenuSet_GetObjByMenuSetIdAsync(strMenuSetId);
      if (objQxPrjMenuSetEN == null) {
        const strMsg = `MenuSetId=${strMenuSetId} 的QxPrjMenuSet中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objQxPrjMenuSet = QxPrjMenuSetEx_CopyTo(objQxPrjMenuSetEN);
      this.qxPrjMenuSetLst.push(objQxPrjMenuSet);
      return objQxPrjMenuSet;
    },

    getMenuSetIdLstByMenuSetName(
      strMenuSetName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrMenuSetId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.qxPrjMenuSetLst.filter((x: any) => x.menuSetName === strMenuSetName);
          arrMenuSetId = arrUser.map((x: any) => x.menuSetId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.qxPrjMenuSetLst.filter(
            (x: any) => x.menuSetName.indexOf(strMenuSetName) > -1,
          );
          arrMenuSetId = arrUser.map((x: any) => x.menuSetId);
          break;
      }
      return arrMenuSetId;
    },

    getMenuSetIdLstByQxPrjMenuSetId(
      strQxPrjMenuSetId: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrqxPrjMenuSet;
      let arrMenuSetId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrqxPrjMenuSet = this.qxPrjMenuSetLst.filter(
            (x: any) => x.menuSetName === strQxPrjMenuSetId,
          );
          arrMenuSetId = arrqxPrjMenuSet.map((x: any) => x.menuSetId);
          break;
        case enumComparisonOp.Like_03:
          arrqxPrjMenuSet = this.qxPrjMenuSetLst.filter(
            (x: any) => x.menuSetName.indexOf(strQxPrjMenuSetId) > -1,
          );
          arrMenuSetId = arrqxPrjMenuSet.map((x: any) => x.menuSetId);
          break;
      }
      return arrMenuSetId;
    },

    getMenuSetIdLstByCmPrjId(strCmPrjId: string, strComparisonOp: enumComparisonOp): string[] {
      let arrqxPrjMenuSet;
      let arrMenuSetId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrqxPrjMenuSet = this.qxPrjMenuSetLst.filter((x: any) => x.cmPrjId === strCmPrjId);
          arrMenuSetId = arrqxPrjMenuSet.map((x: any) => x.menuSetId);
          break;
      }
      return arrMenuSetId;
    },
    getMenuSetIdLstByCmPrjIdLst(
      arrCmPrjId: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrqxPrjMenuSet;
      let arrMenuSetId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrqxPrjMenuSet = this.qxPrjMenuSetLst.filter(
            (x: any) => arrCmPrjId.indexOf(x.cmPrjId) > -1,
          );
          arrMenuSetId = arrqxPrjMenuSet.map((x: any) => x.menuSetId);
          break;
      }
      return arrMenuSetId;
    },

    delObj(strMenuSetId: string): boolean {
      if (strMenuSetId == null) return true;
      if (strMenuSetId == '') return true;
      const intIndex = this.qxPrjMenuSetLst.findIndex((x: any) => !(x.menuSetId == strMenuSetId));

      this.qxPrjMenuSetLst = this.qxPrjMenuSetLst.filter(
        (item: any) => !(item.menuSetId == strMenuSetId),
      );

      if (intIndex > -1) {
        console.log(`MenuSetId:${strMenuSetId}在QxPrjMenuSet中已经移除！`);
        return true;
      } else {
        console.error(`MenuSetId:${strMenuSetId}在QxPrjMenuSet中不存在！`);
        return false;
      }
    },

    async getFieldValue(strMenuSetId: string, strOutFldName: string): Promise<string> {
      let objQxPrjMenuSet = this.qxPrjMenuSetLst.find((x: any) => x.menuSetId === strMenuSetId);
      if (objQxPrjMenuSet == null) {
        const objQxPrjMenuSetEN = await QxPrjMenuSet_GetObjByMenuSetIdAsync(strMenuSetId);
        if (objQxPrjMenuSetEN == null) return '';
        objQxPrjMenuSet = QxPrjMenuSetEx_CopyTo(objQxPrjMenuSetEN);
        this.qxPrjMenuSetLst.push(objQxPrjMenuSet);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsQxPrjMenuSetEN.con_MenuSetId:
          return objQxPrjMenuSet.menuSetId;
        case clsQxPrjMenuSetEN.con_MenuSetName:
          return objQxPrjMenuSet.menuSetName;
        case clsQxPrjMenuSetEN.con_CmPrjId:
          return objQxPrjMenuSet.cmPrjId;
        // case clsQxPrjMenuSetEN.con_CollegeName:
        //   return objQxPrjMenuSet.collegeName;
        // case clsQxPrjMenuSetEN.con_IdXzMajor:
        //   return objQxPrjMenuSet.idXzMajor;
        // case clsQxPrjMenuSetEN.con_MajorName:
        //   return objQxPrjMenuSet.majorName;
        // case clsQxPrjMenuSetEN.con_HeadPic:
        //   return objQxPrjMenuSet.headPic;
        // case clsQxPrjMenuSetEN.con_IsGSqxPrjMenuSet:
        //   return objQxPrjMenuSet.isGSqxPrjMenuSet.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[QxPrjMenuSet]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const qxPrjMenuSetStore = useQxPrjMenuSetStore();
