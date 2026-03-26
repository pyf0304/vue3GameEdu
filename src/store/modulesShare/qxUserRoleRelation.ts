import { clsQxUserRoleRelationEN } from 'share-gen-plat-base-lib';
import { clsQxUserRoleRelation } from 'share-gen-plat-base-lib';
import { QxRoles_GetObjLstCache } from 'share-gen-plat-base-lib';

import { QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId } from 'share-gen-plat-base-lib';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function QxUserRoleRelationEx_CopyTo(
  objQxUserRoleRelationENS: clsQxUserRoleRelationEN_T,
): clsQxUserRoleRelation_T {
  const strThisFuncName = QxUserRoleRelationEx_CopyTo.name;
  const objQxUserRoleRelationENT = new clsQxUserRoleRelation();
  try {
    ObjectAssign(objQxUserRoleRelationENT, objQxUserRoleRelationENS);
    return objQxUserRoleRelationENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxUserRoleRelationENT;
  }
}

export interface userRoleNames {
  userId: string;
  prjId: string;
  roleNames: string;
  roleIds: string;
}
// 定义 TabsState
export interface QxUserRoleRelationState {
  qxUserRoleRelationLst: clsQxUserRoleRelation_T[];
  userRoleNamesLst: userRoleNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxUserRoleRelationStore = defineStore('QxUserRoleRelation', {
  state(): QxUserRoleRelationState {
    return {
      qxUserRoleRelationLst: [],
      userRoleNamesLst: [],
    };
  },

  actions: {
    async getRoleNames(strUserId: string, strQxPrjId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.userRoleNamesLst.find(
        (x: any) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrObjUserRoles = this.qxUserRoleRelationLst.filter(
        (x: any) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return '';
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.qxUserRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);
      return strRoleNames;
    },
    async getRoleNamesWithDelButton(strUserId: string, strQxPrjId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.userRoleNamesLst.find(
        (x: any) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrObjUserRoles = this.qxUserRoleRelationLst.filter(
        (x: any) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return '';
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.qxUserRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);
      return strRoleNames;
    },

    delObj(lngMId: number): boolean {
      if (lngMId == null) return true;
      if (lngMId == 0) return true;
      const intIndex = this.qxUserRoleRelationLst.findIndex((x: any) => !(x.mId == lngMId));

      this.qxUserRoleRelationLst = this.qxUserRoleRelationLst.filter(
        (item: any) => !(item.mId == lngMId),
      );

      if (intIndex > -1) {
        console.log(`lngMId:${lngMId}在qxUserRoleRelation中已经移除！`);
        return true;
      } else {
        console.error(`lngMId:${lngMId}在qxUserRoleRelation中不存在！`);
        return false;
      }
    },

    delUser(strUserId: string, strQxPrjId: string): boolean {
      if (strUserId == null) return true;
      if (strUserId == '') return true;
      if (strQxPrjId == null) return true;
      if (strQxPrjId == '') return true;
      const intIndex = this.userRoleNamesLst.findIndex(
        (x: any) => x.userId === strUserId && x.prjId === strQxPrjId,
      );

      this.userRoleNamesLst = this.userRoleNamesLst.filter(
        (item: any) => item.userId !== strUserId,
      );
      this.qxUserRoleRelationLst = this.qxUserRoleRelationLst.filter(
        (item: any) => item.userId !== strUserId,
      );

      if (intIndex > -1) {
        console.log(`用户Id:${strUserId}在角色名列表中已经移除！`);
        return true;
      }
      {
        console.error(`用户Id:${strUserId}在角色名列表中不存在！`);
        return false;
      }
    },
    async getRoleIds(strUserId: string, strQxPrjId: string): Promise<Array<string>> {
      if (strUserId == '') return [];
      if (strUserId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];
      const objRoleNames = this.userRoleNamesLst.find(
        (x: any) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) {
        const arr = objRoleNames.roleIds.split(',');
        return arr;
      }

      let arrObjUserRoles = this.qxUserRoleRelationLst.filter(
        (x: any) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return [];
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.qxUserRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);

      return arrRoleIds;
    },
    async getObjLst(
      strUserId: string,
      strQxPrjId: string,
    ): Promise<Array<clsQxUserRoleRelation_T> | null> {
      if (strUserId == '') return null;
      if (strUserId == null) return null;
      if (strQxPrjId == '') return null;
      if (strQxPrjId == null) return null;

      let arrObjUserRoles = this.qxUserRoleRelationLst.filter(
        (x: any) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x: any) => {
          this.qxUserRoleRelationLst.push(x);
        });
      }

      return arrObjUserRoles;
    },
  },
});

// export const qxUserRoleRelationStore = useQxUserRoleRelationStore();
