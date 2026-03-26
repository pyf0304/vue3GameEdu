import { stuUserLoginInfo } from '@/ts/FunClass/stuUserLoginInfo';
import { GetInputObjInDivObj, GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;

//declare const strcourseID_Hid;

/* UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class IndexBak {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return IndexBak.divLayout;
  }
  //public static divName4List: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public static async PageLoad() {
    // 在此处放置用户代码以初始化页面
    const strThisFuncName = this.PageLoad.name;
    const strUserId_Hid = GetInputValueInDivObj(IndexBak.divLayout, 'hidUserId');
    // const strcourseID_Hid = $("#hidCourseID").val();

    try {
      if (strUserId_Hid != '') {
      } else {
        window.location.href = '/GraduateStudyWebApp/WebApp/Login';
      }
    } catch (e) {
      const strMsg: string = `根据条件获取相应的记录对象的列表不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);

      alert(strMsg);
    }
  }

  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: 'strUrl_Session_SetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key: Key,
          value: value,
        },
        success: function (data) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
获取Session 关键字的值
<param name = "Key">关键字</param>
<return>值</return>
*/
  public static GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key: Key,
        },
        success: function (data) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e) => {
          const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }
}
