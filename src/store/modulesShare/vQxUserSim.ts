import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { useStudentInfoStore } from '@/store/modulesShare/studentInfo';
import { useTeacherInfoStore } from '@/store/modulesShare/teacherInfo';

import { enumQxRoles } from 'share-gen-plat-base/src/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { clsvQxUsersSim } from 'share-gen-plat-base-lib';
import { clsvQxUsersSimEN } from 'share-gen-plat-base-lib';

import {
  Users_GetObjByUserIdAsync,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { QxUsers_GetObjByUserIdAsync, QxUsers_UpdateRecordAsync } from 'share-gen-plat-base-lib';
import { vQxUsersSim_GetObjByUserIdAsync } from 'share-gen-plat-base-lib';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }

export function vQxUsersSimEx_CopyTo(objvQxUsersSimENS: clsvQxUsersSimEN_T): clsvQxUsersSim_T {
  const strThisFuncName = vQxUsersSimEx_CopyTo.name;
  const objvQxUsersSimENT = new clsvQxUsersSim();
  try {
    ObjectAssign(objvQxUsersSimENT, objvQxUsersSimENS);
    return objvQxUsersSimENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objvQxUsersSimENT;
  }
}
// 定义 TabsState
export interface vQxUsersSimState {
  userLst: clsvQxUsersSim_T[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevQxUsersSimStore = defineStore('vUserSim', {
  state(): vQxUsersSimState {
    return {
      userLst: [],
    };
  },

  actions: {
    async getUserName(strUserId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      const objUser = this.userLst.find((x: any) => x.userId === strUserId);
      if (objUser != null && objUser != undefined) return objUser.userName;
      let objvUserSimEN: clsvQxUsersSimEN_T = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
      if (objvUserSimEN == null) {
        const objUserEN = await QxUsers_GetObjByUserIdAsync(strUserId);
        if (objUserEN != null) {
          objUserEN.SetUserId(strUserId);
          objUserEN.SetUserStateId('01');
          await QxUsers_UpdateRecordAsync(objUserEN);
          objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
          if (objvUserSimEN == null) {
            const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
            console.error(strMsg);
            return '';
          }
        } else {
          const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
      this.userLst.push(objvUserSim);
      return objvUserSim.userName;
    },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async getIdXzMajor(strUserId: string, strPrjId: string): Promise<string> {
      // const wsStore = useWsStore();
      const teacherInfoStore = useTeacherInfoStore();
      const studentInfoStore = useStudentInfoStore();
      const qxUserRoleRelationStore = useQxUserRoleRelationStore();
      const arrRoleIds = await qxUserRoleRelationStore.getRoleIds(strUserId, strPrjId);
      let strIdXzMajor = '';
      if (arrRoleIds.indexOf(enumQxRoles.Regular_Student_00620003) > -1) {
        strIdXzMajor = await studentInfoStore.getIdXzMajorByStuId(strUserId);
        return strIdXzMajor;
      } else if (
        arrRoleIds.indexOf(enumQxRoles.System_Admin_00620001) > -1 ||
        arrRoleIds.indexOf(enumQxRoles.Regular_Teacher_00620002) > -1
      ) {
        try {
          return await teacherInfoStore.getIdXzMajorByTeacherId(strUserId);
        } catch (e) {
          console.error(e);
          return '';
        }
      }
      return '';
      // Storage.set('userInfo', this);
    },
    async getObj(strUserId: string): Promise<clsvQxUsersSim_T | null> {
      if (strUserId == '') return null;
      if (strUserId == null) return null;
      const objUser = this.userLst.find((x: any) => x.userId === strUserId);
      if (objUser != null && objUser != undefined) return objUser;

      let objvUserSimEN: clsvQxUsersSimEN_T = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
      if (objvUserSimEN == null) {
        const objUserEN = await Users_GetObjByUserIdAsync(strUserId);
        if (objUserEN != null) {
          objUserEN.SetUserId(strUserId);
          objUserEN.SetUserStateId('01');
          await Users_UpdateRecordAsync(objUserEN);
          objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
          if (objvUserSimEN == null) {
            const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
            console.error(strMsg);
            return null;
          }
        } else {
          const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
      this.userLst.push(objvUserSim);
      return objvUserSim;
    },

    delObj(strUserId: string): boolean {
      if (strUserId == null) return true;
      if (strUserId == '') return true;
      const intIndex = this.userLst.findIndex((x: any) => !(x.userId == strUserId));
      this.userLst = this.userLst.filter((item: any) => !(item.userId == strUserId));
      if (intIndex > -1) {
        console.log(`UserId:${strUserId}在Users中已经移除！`);
        return true;
      } else {
        console.error(`UserId:${strUserId}在Users中不存在！`);
        return false;
      }
    },

    getUserIdLstByUserName(strUserName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrUserId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.userLst.filter((x: any) => x.userName === strUserName);
          arrUserId = arrUser.map((x: any) => x.userId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.userLst.filter((x: any) => x.userName.indexOf(strUserName) > -1);
          arrUserId = arrUser.map((x: any) => x.userId);
          break;
      }
      return arrUserId;
    },

    async getFieldValue(strUserId: string, strOutFldName: string): Promise<string> {
      let objvUserSim = this.userLst.find((x: any) => x.userId === strUserId);
      if (objvUserSim == null) {
        const objvUserSimEN: clsvQxUsersSimEN_T = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
        if (objvUserSimEN == null) return '';
        objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
        this.userLst.push(objvUserSim);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsvQxUsersSimEN.con_UserId:
          return objvUserSim.userId;
        case clsvQxUsersSimEN.con_UserName:
          return objvUserSim.userName;
        case clsvQxUsersSimEN.con_IdXzCollege:
          return objvUserSim.idXzCollege;
        // case clsvQxUsersSimEN.con_CollegeName:
        //   return objvUserSim.collegeName;
        // case clsvQxUsersSimEN.con_IdXzMajor:
        //   return objvUserSim.idXzMajor;
        // case clsvQxUsersSimEN.con_MajorName:
        //   return objvUserSim.majorName;
        // case clsvQxUsersSimEN.con_HeadPic:
        //   return objvUserSim.headPic;
        // case clsvQxUsersSimEN.con_IsGSuser:
        //   return objvUserSim.isGSuser.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[vQxUsersSim]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

// export const vQxUsersSimStore = usevQxUsersSimStore();
