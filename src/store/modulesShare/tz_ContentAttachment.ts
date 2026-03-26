import { clstz_ContentAttachment } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachment';
import { clstz_ContentAttachmentEN } from '@/ts/L0Entity/ResourceMan/clstz_ContentAttachmentEN';
import { tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId } from '@/ts/L3ForWApiEx/ResourceMan/clstz_ContentAttachmentExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface tz_ContentAttachmentSimEN {
//   ContentTypeId: string;
//   attachmentTitle: string;
// }

export function tz_ContentAttachmentEx_CopyTo(
  objtz_ContentAttachmentENS: clstz_ContentAttachmentEN,
): clstz_ContentAttachment {
  const strThisFuncName = tz_ContentAttachmentEx_CopyTo.name;
  const objtz_ContentAttachmentENT = new clstz_ContentAttachment();
  try {
    ObjectAssign(objtz_ContentAttachmentENT, objtz_ContentAttachmentENS);
    return objtz_ContentAttachmentENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objtz_ContentAttachmentENT;
  }
}
export function tz_ContentAttachmentEx_CopyToEN(
  objtz_ContentAttachmentS: clstz_ContentAttachment,
): clstz_ContentAttachmentEN {
  const strThisFuncName = tz_ContentAttachmentEx_CopyTo.name;
  const objtz_ContentAttachmentENT = new clstz_ContentAttachmentEN();
  try {
    ObjectAssign(objtz_ContentAttachmentENT, objtz_ContentAttachmentS);
    return objtz_ContentAttachmentENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objtz_ContentAttachmentENT;
  }
}
// 定义 TabsState
export interface tz_ContentAttachmentState {
  tz_ContentAttachmentLst: clstz_ContentAttachment[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usetz_ContentAttachmentStore = defineStore('tz_ContentAttachment', {
  state(): tz_ContentAttachmentState {
    return {
      tz_ContentAttachmentLst: [],
    };
  },

  actions: {
    async getObjLst(
      strContentTypeId: string,
      strTableNameKey: string,
    ): Promise<Array<clstz_ContentAttachment> | null> {
      if (strContentTypeId == '') return null;
      if (strContentTypeId == null) return null;
      if (strTableNameKey == '') return null;
      if (strTableNameKey == null) return null;
      const arrtz_ContentAttachment0 = this.tz_ContentAttachmentLst.filter(
        (x: any) => x.contentTypeId === strContentTypeId && x.tableNameKey === strTableNameKey,
      );
      if (arrtz_ContentAttachment0 != null && arrtz_ContentAttachment0.length > 0)
        return arrtz_ContentAttachment0;
      const arrtz_ContentAttachmentEN =
        await tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId(
          strContentTypeId,
          strTableNameKey,
        );
      if (arrtz_ContentAttachmentEN.length == 0) {
        const strMsg = `ContentTypeId=${strContentTypeId},TableNameKey=${strTableNameKey} 的tz_ContentAttachment中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const arrtz_ContentAttachment = arrtz_ContentAttachmentEN.map(tz_ContentAttachmentEx_CopyTo);
      for (const obj of arrtz_ContentAttachment) {
        this.tz_ContentAttachmentLst.push(obj);
      }
      return arrtz_ContentAttachment;
    },

    async getObjENLst(
      strContentTypeId: string,
      strTableNameKey: string,
    ): Promise<Array<clstz_ContentAttachmentEN> | null> {
      if (strContentTypeId == '') return null;
      if (strContentTypeId == null) return null;
      if (strTableNameKey == '') return null;
      if (strTableNameKey == null) return null;
      const arrtz_ContentAttachment0 = this.tz_ContentAttachmentLst.filter(
        (x: any) => x.contentTypeId === strContentTypeId && x.tableNameKey === strTableNameKey,
      );
      if (arrtz_ContentAttachment0 != null && arrtz_ContentAttachment0.length > 0)
        return arrtz_ContentAttachment0.map(tz_ContentAttachmentEx_CopyToEN);
      let arrtz_ContentAttachmentEN =
        await tz_ContentAttachmentEx_GetObjLstByTableNameKeyContentTypeId(
          strContentTypeId,
          strTableNameKey,
        );
      if (arrtz_ContentAttachmentEN.length == 0) {
        const strMsg = `ContentTypeId=${strContentTypeId},TableNameKey=${strTableNameKey} 的tz_ContentAttachment中不存在，请检查！`;
        // console.error(strMsg);
        return null;
      }
      const arrtz_ContentAttachment = arrtz_ContentAttachmentEN.map(tz_ContentAttachmentEx_CopyTo);
      for (const obj of arrtz_ContentAttachment) {
        this.tz_ContentAttachmentLst.push(obj);
      }
      return arrtz_ContentAttachmentEN;
    },

    delObjLst(strContentTypeId: string, strTableNameKey: string): boolean {
      if (strContentTypeId == '') return false;
      if (strContentTypeId == null) return false;
      if (strTableNameKey == '') return false;
      if (strTableNameKey == null) return false;

      const intIndex = this.tz_ContentAttachmentLst.findIndex(
        (x: any) => !(x.contentTypeId === strContentTypeId && x.tableNameKey === strTableNameKey),
      );

      this.tz_ContentAttachmentLst = this.tz_ContentAttachmentLst.filter(
        (item: any) =>
          !(item.contentTypeId === strContentTypeId && item.tableNameKey === strTableNameKey),
      );

      if (intIndex > -1) {
        console.log(
          `ContentTypeId=${strContentTypeId},TableNameKey=${strTableNameKey}在tz_ContentAttachment表中已经移除！`,
        );
        return true;
      }
      {
        console.error(
          `ContentTypeId=${strContentTypeId},TableNameKey=${strTableNameKey}在tz_ContentAttachment表中不存在！`,
        );
        return false;
      }
    },
  },
});

// export const tz_ContentAttachmentStore = usetz_ContentAttachmentStore();
