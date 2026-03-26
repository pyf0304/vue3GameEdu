import { clsTeacherInfo } from 'share-stu-study-base-lib';
import { clsTeacherInfoEN } from 'share-stu-study-base-lib';
import { TeacherInfo_GetObjByIdTeacherAsync } from 'share-stu-study-base-lib';
import { TeacherInfoEx_GetObjByTeacherId } from 'share-stu-study-base-lib';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface teacherInfoSimEN {
//   IdTeacher: string;
//   teacherName: string;
// }

export function TeacherInfoEx_CopyTo(objTeacherInfoENS: clsTeacherInfoEN_T): clsTeacherInfo_T {
  const strThisFuncName = TeacherInfoEx_CopyTo.name;
  const objTeacherInfoENT = new clsTeacherInfo();
  try {
    ObjectAssign(objTeacherInfoENT, objTeacherInfoENS);
    return objTeacherInfoENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objTeacherInfoENT;
  }
}
// 定义 TabsState
export interface TeacherInfoState {
  teacherInfoLst: clsTeacherInfo_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useTeacherInfoStore = defineStore('TeacherInfo', {
  state(): TeacherInfoState {
    return {
      teacherInfoLst: [],
    };
  },

  actions: {
    async getTeacherName(strIdTeacher: string): Promise<string> {
      if (strIdTeacher == '') return '';
      if (strIdTeacher == null) return '';
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined)
        return objTeacherInfo0.teacherName;
      let objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = `IdTeacher=${strIdTeacher} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo.teacherName;
    },
    async getTeacherId(strIdTeacher: string): Promise<string> {
      if (strIdTeacher == '') return '';
      if (strIdTeacher == null) return '';
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined) return objTeacherInfo0.teacherId;
      let objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = `IdTeacher=${strIdTeacher} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo.teacherId;
    },
    async getIdXzCollege(strIdTeacher: string): Promise<string> {
      if (strIdTeacher == '') return '';
      if (strIdTeacher == null) return '';
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined)
        return objTeacherInfo0.idXzCollege;
      let objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = `IdTeacher=${strIdTeacher} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo.idXzCollege;
    },
    async getIdXzMajor(strIdTeacher: string): Promise<string> {
      if (strIdTeacher == '') return '';
      if (strIdTeacher == null) return '';
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined) return objTeacherInfo0.idXzMajor;
      let objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = `IdTeacher=${strIdTeacher} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo.idXzMajor;
    },

    async getIdXzMajorByTeacherId(strTeacherId: string): Promise<string> {
      if (strTeacherId == '') return '';
      if (strTeacherId == null) return '';
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.teacherId === strTeacherId);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined) return objTeacherInfo0.idXzMajor;
      let objTeacherInfoEN = await TeacherInfoEx_GetObjByTeacherId(strTeacherId);
      if (objTeacherInfoEN == null) {
        const strMsg = `TeacherId=${strTeacherId} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo.idXzMajor;
    },
    async getObj(strIdTeacher: string): Promise<clsTeacherInfo_T | null> {
      if (strIdTeacher == '') return null;
      if (strIdTeacher == null) return null;
      const objTeacherInfo0 = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo0 != null && objTeacherInfo0 != undefined) return objTeacherInfo0;

      let objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = `IdTeacher=${strIdTeacher} 的TeacherInfo中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
      this.teacherInfoLst.push(objTeacherInfo);
      return objTeacherInfo;
    },

    delObj(strIdTeacher: string): boolean {
      if (strIdTeacher == null) return true;
      if (strIdTeacher == '') return true;
      const intIndex = this.teacherInfoLst.findIndex((x: any) => !(x.idTeacher == strIdTeacher));

      this.teacherInfoLst = this.teacherInfoLst.filter(
        (item: any) => !(item.idTeacher == strIdTeacher),
      );

      if (intIndex > -1) {
        console.log(`IdTeacher:${strIdTeacher}在TeacherInfo中已经移除！`);
        return true;
      } else {
        console.error(`IdTeacher:${strIdTeacher}在TeacherInfo中不存在！`);
        return false;
      }
    },
    getIdTeacherLstByTeacherName(
      strTeacherName: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrUser;
      let arrIdTeacher: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.teacherInfoLst.filter((x: any) => x.teacherName === strTeacherName);
          arrIdTeacher = arrUser.map((x: any) => x.idTeacher);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.teacherInfoLst.filter(
            (x: any) => x.teacherName.indexOf(strTeacherName) > -1,
          );
          arrIdTeacher = arrUser.map((x: any) => x.idTeacher);
          break;
      }
      return arrIdTeacher;
    },

    getIdTeacherLstByTeacherId(strTeacherId: string, strComparisonOp: enumComparisonOp): string[] {
      let arrteacherInfo;
      let arrIdTeacher: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrteacherInfo = this.teacherInfoLst.filter((x: any) => x.teacherName === strTeacherId);
          arrIdTeacher = arrteacherInfo.map((x: any) => x.idTeacher);
          break;
        case enumComparisonOp.Like_03:
          arrteacherInfo = this.teacherInfoLst.filter(
            (x: any) => x.teacherName.indexOf(strTeacherId) > -1,
          );
          arrIdTeacher = arrteacherInfo.map((x: any) => x.idTeacher);
          break;
      }
      return arrIdTeacher;
    },
    getIdTeacherLstByIdXzCollege(
      strIdXzCollege: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrteacherInfo;
      let arrIdTeacher: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrteacherInfo = this.teacherInfoLst.filter((x: any) => x.idXzCollege === strIdXzCollege);
          arrIdTeacher = arrteacherInfo.map((x: any) => x.idTeacher);
          break;
      }
      return arrIdTeacher;
    },
    getIdTeacherLstByIdXzCollegeLst(
      arrIdXzCollege: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrteacherInfo;
      let arrIdTeacher: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrteacherInfo = this.teacherInfoLst.filter(
            (x: any) => arrIdXzCollege.indexOf(x.idXzCollege) > -1,
          );
          arrIdTeacher = arrteacherInfo.map((x: any) => x.idTeacher);
          break;
      }
      return arrIdTeacher;
    },
    async getFieldValue(strIdTeacher: string, strOutFldName: string): Promise<string> {
      let objTeacherInfo = this.teacherInfoLst.find((x: any) => x.idTeacher === strIdTeacher);
      if (objTeacherInfo == null) {
        const objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
        if (objTeacherInfoEN == null) return '';
        objTeacherInfo = TeacherInfoEx_CopyTo(objTeacherInfoEN);
        this.teacherInfoLst.push(objTeacherInfo);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsTeacherInfoEN.con_TeacherId:
          return objTeacherInfo.idTeacher;
        case clsTeacherInfoEN.con_TeacherName:
          return objTeacherInfo.teacherName;
        case clsTeacherInfoEN.con_IdXzCollege:
          return objTeacherInfo.idXzCollege;
        // case clsTeacherInfoEN.con_CollegeName:
        //   return objTeacherInfo.collegeName;
        // case clsTeacherInfoEN.con_IdXzMajor:
        //   return objTeacherInfo.idXzMajor;
        // case clsTeacherInfoEN.con_MajorName:
        //   return objTeacherInfo.majorName;
        // case clsTeacherInfoEN.con_HeadPic:
        //   return objTeacherInfo.headPic;
        // case clsTeacherInfoEN.con_IsGSteacherInfo:
        //   return objTeacherInfo.isGSteacherInfo.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[TeacherInfo]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const teacherInfoStore = useTeacherInfoStore();
