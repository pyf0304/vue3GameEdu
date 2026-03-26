import $ from 'jquery';
//import * as QQ from "q";
import { useUserStore } from '@/store/modulesShare/user';
import { clsvXzMajorDirectionEN } from 'share-stu-study-base-lib';
import { vXzMajorDirection_GetSubObjLstCache } from 'share-stu-study-base-lib';
import { HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { divVarSet } from './WelcomeVueShare';

declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Welcome {
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    const strThisFuncName = this.PageLoad.name;
    try {
      const userStore = useUserStore();
      //管理员 判断角色
      if (userStore.getRoleId == '00620001') {
        $('#Personaldiv').hide();
      } else {
        //学生00620003 教师
        $('#Personaldiv').show();
      }

      const response1 = await this.Bind_Major();
      //  const response2 = await this.Bind_AllCount();
      //  const response3 = await this.Bind_PersonalAllCount();
      HideDivInDivObj(divVarSet.refDivLayout, 'divLoading');
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  public async Bind_Major() {
    const strThisFuncName = this.Bind_Major.name;
    try {
      const userStore = useUserStore();
      const objvXzMajorDirection_Cond = new clsvXzMajorDirectionEN();
      objvXzMajorDirection_Cond.SetCondFldValue(
        clsvXzMajorDirectionEN.con_IdXzMajor,
        userStore.getIdXzMajor,
        '=',
      );

      const arrvXzMajorDirectionObjLst = await vXzMajorDirection_GetSubObjLstCache(
        objvXzMajorDirection_Cond,
      );

      let strMajorDirection = '';
      for (let i = 0; i < arrvXzMajorDirectionObjLst.length; i++) {
        strMajorDirection += arrvXzMajorDirectionObjLst[i].majorDirectionName + ',';
      }

      $('#spanMajordirection').html(
        userStore.getUserName +
          userStore.getMajorName +
          '专业，专业方向包含(' +
          strMajorDirection +
          ')',
      );
    } catch (e) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      alert(strMsg);
    }
  }
}
