import { clsXzClg } from 'share-stu-study-base-lib';
import { clsXzClgEN } from 'share-stu-study-base-lib';
import { XzClg_GetObjByIdXzCollegeAsync } from 'share-stu-study-base-lib';
import { XzClgEx_GetObjByCollegeId, XzClgEx_GetObjByCollegeName } from 'share-stu-study-base-lib';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface xzClgSimEN {
//   IdXzCollege: string;
//   collegeName: string;
// }

export function XzClgEx_CopyTo(objXzClgENS: clsXzClgEN_T): clsXzClg_T {
  const strThisFuncName = XzClgEx_CopyTo.name;
  const objXzClgENT = new clsXzClg();
  try {
    ObjectAssign(objXzClgENT, objXzClgENS);
    return objXzClgENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objXzClgENT;
  }
}
// 定义 TabsState
export interface XzClgState {
  xzClgLst: clsXzClg_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useXzClgStore = defineStore('XzClg', {
  state(): XzClgState {
    return {
      xzClgLst: [],
    };
  },

  actions: {
    async getCollegeName(strIdXzCollege: string): Promise<string> {
      if (strIdXzCollege == '') return '';
      if (strIdXzCollege == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.idXzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.collegeName;
      let objXzClgEN = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.collegeName;
    },
    async getCollegeId(strIdXzCollege: string): Promise<string> {
      if (strIdXzCollege == '') return '';
      if (strIdXzCollege == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.idXzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.collegeId;
      let objXzClgEN = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.collegeId;
    },
    async getIdXzCollege(strCollegeId: string): Promise<string> {
      if (strCollegeId == '') return '';
      if (strCollegeId == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.collegeId === strCollegeId);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.idXzCollege;
      let objXzClgEN = await XzClgEx_GetObjByCollegeId(strCollegeId);
      if (objXzClgEN == null) {
        const strMsg = `CollegeId=${strCollegeId} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.idXzCollege;
    },
    async getIdXzCollegeByName(strCollegeName: string, strIdSchool: string): Promise<string> {
      if (strCollegeName == '') return '';
      if (strCollegeName == null) return '';
      const objXzClg0 = this.xzClgLst.find((x: any) => x.collegeName === strCollegeName);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0.idXzCollege;
      let objXzClgEN = await XzClgEx_GetObjByCollegeName(strCollegeName, strIdSchool);
      if (objXzClgEN == null) {
        const strMsg = `CollegeName=${strCollegeName} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg.idXzCollege;
    },
    async getObj(strIdXzCollege: string): Promise<clsXzClg_T | null> {
      if (strIdXzCollege == '') return null;
      if (strIdXzCollege == null) return null;
      const objXzClg0 = this.xzClgLst.find((x: any) => x.idXzCollege === strIdXzCollege);
      if (objXzClg0 != null && objXzClg0 != undefined) return objXzClg0;

      let objXzClgEN = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
      if (objXzClgEN == null) {
        const strMsg = `IdXzCollege=${strIdXzCollege} 的XzClg中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objXzClg = XzClgEx_CopyTo(objXzClgEN);
      this.xzClgLst.push(objXzClg);
      return objXzClg;
    },

    getIdXzCollegeLstByCollegeId(
      strCollegeId: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter((x: any) => x.collegeName === strCollegeId);
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
        case enumComparisonOp.Like_03:
          arrxzClg = this.xzClgLst.filter((x: any) => x.collegeName.indexOf(strCollegeId) > -1);
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByCollegeName(
      strCollegeName: string,
      strIdSchool: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter(
            (x: any) => x.collegeName === strCollegeName && x.idSchool === strIdSchool,
          );
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
        case enumComparisonOp.Like_03:
          arrxzClg = this.xzClgLst.filter(
            (x: any) => x.idSchool === strIdSchool && x.collegeName.indexOf(strCollegeName) > -1,
          );
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByIdXzCollege(
      strIdXzCollege: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrxzClg = this.xzClgLst.filter((x: any) => x.idXzCollege === strIdXzCollege);
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    getIdXzCollegeLstByCollegeIdLst(
      arrCollegeId: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrxzClg;
      let arrIdXzCollege: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrxzClg = this.xzClgLst.filter((x: any) => arrCollegeId.indexOf(x.collegeId) > -1);
          arrIdXzCollege = arrxzClg.map((x: any) => x.idXzCollege);
          break;
      }
      return arrIdXzCollege;
    },
    async getFieldValue(strIdXzCollege: string, strOutFldName: string): Promise<string> {
      let objXzClg = this.xzClgLst.find((x: any) => x.idXzCollege === strIdXzCollege);
      if (objXzClg == null) {
        const objXzClgEN = await XzClg_GetObjByIdXzCollegeAsync(strIdXzCollege);
        if (objXzClgEN == null) return '';
        objXzClg = XzClgEx_CopyTo(objXzClgEN);
        this.xzClgLst.push(objXzClg);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsXzClgEN.con_CollegeId:
          return objXzClg.idXzCollege;
        case clsXzClgEN.con_CollegeName:
          return objXzClg.collegeName;
        case clsXzClgEN.con_IdXzCollege:
          return objXzClg.idXzCollege;

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[XzClg]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const xzClgStore = useXzClgStore();
