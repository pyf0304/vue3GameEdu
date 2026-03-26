import { useQxPrjMenusStore } from '@/store/modulesShare/qxPrjMenus';
import { useQxPrjMenuSetStore } from '@/store/modulesShare/qxPrjMenuSet';
import { clsQxRoleMenus } from 'share-gen-plat-base-lib';
import { clsQxRoleMenusEN } from 'share-gen-plat-base-lib';

import { QxRoles_GetObjLstCache } from 'share-gen-plat-base-lib';

import {
  QxRoleMenusEx_GetObjLstByCmPrjId,
  QxRoleMenusEx_GetObjLstByMenuId,
  QxRoleMenusEx_GetObjLstByMenuIdAndPrjId,
  QxRoleMenusEx_GetObjLstByMenuSetId,
  QxRoleMenus_SortByCmPrjIdMenuSet,
} from 'share-gen-plat-base-lib';
import { GetDistinctArray } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function QxRoleMenusEx_CopyTo(objQxRoleMenusENS: clsQxRoleMenusEN_T): clsQxRoleMenus_T {
  const strThisFuncName = QxRoleMenusEx_CopyTo.name;
  const objQxRoleMenusENT = new clsQxRoleMenus();
  try {
    ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
    return objQxRoleMenusENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxRoleMenusENT;
  }
}

export interface menuRoleNames {
  menuId: string;
  prjId: string;
  cmPrjId: string;
  roleNames: string;
  roleIds: string;
}

// export interface roleMenuNames {
//   roleId: string;
//   menuSetId: string;
//   cmPrjId: string;
//   menuNames: string;
//   menuIds: string;
// }
// 定义 TabsState
export interface QxRoleMenusState {
  qxRoleMenusLst: clsQxRoleMenus_T[];
  menuRoleNamesLst: menuRoleNames[];
  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxRoleMenusStore = defineStore('QxRoleMenus', {
  state(): QxRoleMenusState {
    return {
      qxRoleMenusLst: [],
      menuRoleNamesLst: [],
      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getRoleNamesBak(
      strMenuId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x: any) => x.menuId === strMenuId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: '',
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst
          .filter((x: any) => x.cmPrjId == strCmPrjId)
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },

    delRoleNamesByMenuIdBak(strMenuId: string): boolean {
      if (strMenuId == '') return true;
      if (strMenuId == null) return true;

      let intIndex = this.menuRoleNamesLst.findIndex((x: any) => x.menuId === strMenuId);

      this.menuRoleNamesLst = this.menuRoleNamesLst.filter(
        (item: any) => item.menuId !== strMenuId,
      );

      if (intIndex > -1) {
        console.log(`菜单Id:${strMenuId}在菜单角色名's列表中已经移除！`);
      } else {
        console.error(`菜单Id:${strMenuId}在菜单角色名's列表中不存在！`);
        return false;
      }

      intIndex = this.qxRoleMenusLst.findIndex((x: any) => x.menuId === strMenuId);

      this.qxRoleMenusLst = this.qxRoleMenusLst.filter((item: any) => item.menuId !== strMenuId);

      if (intIndex > -1) {
        console.log(`菜单Id:${strMenuId}在角色菜单列表中已经移除！`);
        return true;
      } else {
        console.error(`菜单Id:${strMenuId}在角色菜单列表中不存在！`);
        return false;
      }
    },
    async getRoleNames(strMenuId: string, strCmPrjId: string, strQxPrjId: string): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strCmPrjId == '') return '';
      if (strCmPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x: any) => x.menuId === strMenuId && x.cmPrjId === strCmPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) => x.menuId === strMenuId && x.cmPrjId === strCmPrjId,
      );

      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: '',
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst
          .filter((x: any) => x.cmPrjId == strCmPrjId)
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    async getRefreshMenuId(strMenuId: string): Promise<boolean> {
      if (strMenuId == '') return false;
      if (strMenuId == null) return false;

      let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuId(strMenuId);
      if (arrObjLst.length == 0) {
        return false;
      }
      const arrRoleMenus = arrObjLst.map(QxRoleMenusEx_CopyTo);
      arrRoleMenus.forEach((x: any) => {
        this.qxRoleMenusLst.push(x);
      });

      return true;
    },
    async getRoleNamesWithDelButton(
      strMenuId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x: any) => x.menuId === strMenuId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst
          .filter((x: any) => x.cmPrjId == strCmPrjId)
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    delMenuId(strMenuId: string, strQxPrjId: string): boolean {
      if (strMenuId == null) return true;
      if (strMenuId == '') return true;
      const intIndex = this.menuRoleNamesLst.findIndex((x: any) => x.menuId === strMenuId);

      this.menuRoleNamesLst = this.menuRoleNamesLst.filter(
        (item: any) => item.menuId !== strMenuId,
      );
      this.qxRoleMenusLst = this.qxRoleMenusLst.filter((item: any) => item.menuId !== strMenuId);

      if (intIndex > -1) {
        console.log(`菜单Id:${strMenuId}在菜单角色关系列表中已经移除！`);
        return true;
      } else {
        console.error(`菜单Id:${strMenuId}在菜单角色关系列表中不存在！`);
        return false;
      }
    },
    async getRoleIds(
      strMenuId: string,
      strMenuSetId: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strMenuId == '') return [];
      if (strMenuId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) => x.menuId === strMenuId && x.menuSetId === strMenuSetId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: '',
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrRoleMenus = arrObjLst
          .filter((x: any) => x.menuSetId === strMenuSetId && x.menuId == strMenuId)
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: '',
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);

      return arrRoleIds;
    },
    async getRoleIdCmPrjIdMenuSetIds(
      strMenuId: string,

      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strMenuId == '') return [];
      if (strMenuId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrRoleMenus = this.qxRoleMenusLst.filter((x: any) => x.menuId === strMenuId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: '',
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrObjLst = arrObjLst.sort(QxRoleMenus_SortByCmPrjIdMenuSet);
        arrRoleMenus = arrObjLst
          .filter((x: any) => x.menuId == strMenuId)
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIdCmPrjIds = arrRoleMenus.map(
        (x: any) => `${x.roleId}|${x.cmPrjId}|${x.menuSetId}`,
      );

      return arrRoleIdCmPrjIds;
    },
    async getRoleIdsByCmPrjId(
      strMenuId: string,
      strMenuSetId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strMenuId == '') return [];
      if (strMenuId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) =>
          x.menuId === strMenuId && x.menuSetId === strMenuSetId && x.cmPrjId === strCmPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrRoleMenus = arrObjLst
          .filter(
            (x: any) =>
              x.menuSetId === strMenuSetId && x.menuId == strMenuId && x.cmPrjId == strCmPrjId,
          )
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x: any) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter(
        (x: any) => arrRoleIds.indexOf(x.roleId) > -1,
      );
      const arrRoleNames = arrQxRolesCache_Sel.map((x: any) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);

      return arrRoleIds;
    },
    async getMenuIdsByCmPrjId(strCmPrjId: string): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter((x: any) => x.cmPrjId === strCmPrjId);
      if (qxRoleMenusLstSel.length > 0) {
        const arr = qxRoleMenusLstSel.map((x: any) => x.menuId);
        return arr;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        this.qxRoleMenusLst.push(obj);
      }
      const arr = arrObjLst.map((x: any) => x.menuId);
      return arr;
    },
    async getMenuNamesByCmPrjId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];
      const qxPrjMenusStore = useQxPrjMenusStore();
      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter(
        (x: any) =>
          x.cmPrjId === strCmPrjId && x.roleId == strRoleId && x.menuSetId == strMenuSetId,
      );
      if (qxRoleMenusLstSel.length > 0) {
        const arrMenuId = qxRoleMenusLstSel.map((x: any) => x.menuId);
        const arrMenuNames: Array<string> = [];
        for (const strMenuId of arrMenuId) {
          const strMenuName = await qxPrjMenusStore.getMenuName(strMenuId);
          arrMenuNames.push(strMenuName);
        }

        return arrMenuNames;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        this.qxRoleMenusLst.push(obj);
      }
      const arrMenuId = arrObjLst
        .filter((x: any) => x.roleId == strRoleId && x.menuSetId == strMenuSetId)
        .map((x: any) => x.menuId);

      const arrMenuNames: Array<string> = [];
      for (const strMenuId of arrMenuId) {
        const strMenuName = await qxPrjMenusStore.getMenuName(strMenuId);
        arrMenuNames.push(strMenuName);
      }

      return arrMenuNames;
    },

    async getUpMenuNamesByCmPrjId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];
      const qxPrjMenusStore = useQxPrjMenusStore();
      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter(
        (x: any) =>
          x.cmPrjId === strCmPrjId && x.roleId == strRoleId && x.menuSetId == strMenuSetId,
      );
      if (qxRoleMenusLstSel.length > 0) {
        const arrMenuId = qxRoleMenusLstSel.map((x: any) => x.menuId);
        const arrMenuNames: Array<string> = [];
        for (const strMenuId of arrMenuId) {
          const strMenuName = await qxPrjMenusStore.getMenuName(strMenuId);
          arrMenuNames.push(strMenuName);
        }
        return arrMenuNames;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        this.qxRoleMenusLst.push(obj);
      }
      const arrMenuId = arrObjLst
        .filter((x: any) => x.roleId == strRoleId && x.menuSetId == strMenuSetId)
        .map((x: any) => x.menuId);
      // const arrQxPrjMenus = await QxPrjMenus_GetObjLstByMenuIdLstCache(arrMenuId, strQxPrjId);
      // const arrUpMenuNames = arrQxPrjMenus
      //   .filter((x:any) => x.upMenuId == '00000000')
      //   .map((x:any) => x.menuName);
      const arrUpMenuNames: Array<string> = [];
      for (const strMenuId of arrMenuId) {
        const objPrjMenus = await qxPrjMenusStore.getObj(strMenuId);
        if (objPrjMenus == null) continue;
        if (objPrjMenus.upMenuId == '00000000') arrUpMenuNames.push(objPrjMenus.menuName);
      }
      return arrUpMenuNames;
    },
    async getMenuIdsByMenuSetId(strMenuSetId: string): Promise<Array<string>> {
      if (strMenuSetId == '') return [];
      if (strMenuSetId == null) return [];

      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter((x: any) => x.menuSetId == strMenuSetId);
      if (qxRoleMenusLstSel.length > 0) {
        const arrMenuId = qxRoleMenusLstSel.map((x: any) => x.menuId);
        return GetDistinctArray(arrMenuId);
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuSetId(strMenuSetId);
      if (arrObjLst.length == 0) {
        return [];
      }

      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        this.qxRoleMenusLst.push(obj);
      }
      const arrMenuId = arrObjLst.map((x: any) => x.menuId);
      return GetDistinctArray(arrMenuId);
    },
    async getMenuIdsByMenuSetIds(arrMenuSetIds: string[]): Promise<Array<string>> {
      if (arrMenuSetIds.length == 0) return [];
      if (arrMenuSetIds == null) return [];

      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter(
        (x: any) => arrMenuSetIds.indexOf(x.menuSetId) > -1,
      );
      if (qxRoleMenusLstSel.length > 0) {
        const arrMenuId = qxRoleMenusLstSel.map((x: any) => x.menuId);
        return GetDistinctArray(arrMenuId);
      }
      let arrMenuIdAll: Array<string> = [];
      for (const strMenuSetId of arrMenuSetIds) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuSetId(strMenuSetId);
        if (arrObjLst.length == 0) {
          return [];
        }

        for (const objQxRoleMenusEN of arrObjLst) {
          const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
          this.qxRoleMenusLst.push(obj);
        }
        const arrMenuId = arrObjLst.map((x: any) => x.menuId);
        for (const strMenuId of arrMenuId) {
          arrMenuIdAll.push(strMenuId);
        }
      }
      return GetDistinctArray(arrMenuIdAll);
    },
    async getMenuIdsByRoleId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const qxRoleMenusLstSel = this.qxRoleMenusLst.filter(
        (x: any) =>
          x.cmPrjId === strCmPrjId && x.menuSetId == strMenuSetId && x.roleId == strRoleId,
      );
      if (qxRoleMenusLstSel.length > 0) {
        const arr = qxRoleMenusLstSel.map((x: any) => x.menuId);
        return arr;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x: any) => x.menuSetId == strMenuSetId);
      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x: any) => x.roleId == strRoleId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        this.qxRoleMenusLst.push(obj);
      }
      const arr = arrObjLst.map((x: any) => x.menuId);
      return arr;
    },

    delMenuIdsByRoleId(strRoleId: string): boolean {
      if (strRoleId == '') return true;
      if (strRoleId == null) return true;

      const intIndex = this.qxRoleMenusLst.findIndex((item: any) => item.roleId != strRoleId);

      this.qxRoleMenusLst = this.qxRoleMenusLst.filter((item: any) => item.roleId != strRoleId);

      if (intIndex > -1) {
        console.log(`角色Id:${strRoleId}在角色名列表中已经移除！`);
        return true;
      } else {
        console.error(`角色Id:${strRoleId}在角色名列表中不存在！`);
        return false;
      }
    },
    async getObjLst(
      strMenuId: string,
      strQxPrjId: string,
    ): Promise<Array<clsQxRoleMenus_T> | null> {
      if (strMenuId == '') return null;
      if (strMenuId == null) return null;
      if (strQxPrjId == '') return null;
      if (strQxPrjId == null) return null;

      let arrRoleMenus = this.qxRoleMenusLst.filter(
        (x: any) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrRoleMenus = arrObjLst.map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x: any) => {
          this.qxRoleMenusLst.push(x);
        });
      }

      return arrRoleMenus;
    },
  },
});

// export const qxRoleMenusStore = useQxRoleMenusStore();
