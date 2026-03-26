declare const document: any;

//export class clsButton {

/*
 * 获取一个修改按钮，使用icon
 */
export function Button_GetDelete_i(strOnclick: string): HTMLButtonElement {
  const strThisFuncName = 'Button_GetDelete_i';
  //<button title="删除选项" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btn_Click("DelOptionRecord","' + strQuestionOptionId + '")> <i class="layui-icon" >&#xe640;</i></button>';
  const objI = document.createElement('i');
  objI.className = 'layui-icon';
  objI.innerHTML = '&#xe640;';
  const btnDelete = document.createElement('button');
  btnDelete.title = '删除选项';
  btnDelete.className = 'layui-btn layui-btn-warm layui-btn-xs';
  btnDelete.setAttribute('onclick', strOnclick);
  btnDelete.appendChild(objI);
  return btnDelete;
}

/*
 * 获取一个删除按钮，使用icon
 */
export function Button_GetUpdate_i(strOnclick: string): HTMLButtonElement {
  const strThisFuncName = 'Button_GetUpdate_i';
  //<button title="修改选项" class="layui-btn layui-btn layui-btn-xs" onclick = btn_Click("UpdateOptionRecord", "' + strQuestionOptionId + '", "' + strQuestionTypeId + '") > <i class="layui-icon" >& #xe642; </i></button > '
  //<i class="layui-icon" >&#xe642; </i>
  const objI = document.createElement('i');
  objI.className = 'layui-icon';
  objI.innerHTML = '&#xe642;';
  const btnUpdate = document.createElement('button');
  btnUpdate.title = '修改选项';
  btnUpdate.className = 'layui-btn layui-btn layui-btn-xs';
  btnUpdate.setAttribute('onclick', strOnclick);
  btnUpdate.appendChild(objI);
  return btnUpdate;
}

/*
 * 获取一个撤销正确选项按钮，使用icon
 */
export function Button_RevokeCorrect_i(strOnclick: string): HTMLButtonElement {
  const strThisFuncName = 'Button_RevokeCorrect_i';
  //<button title="修改选项" class="layui-btn layui-btn layui-btn-xs" onclick = btn_Click("UpdateOptionRecord", "' + strQuestionOptionId + '", "' + strQuestionTypeId + '") > <i class="layui-icon" >& #xe642; </i></button > '

  //<button title="撤销正确选项" class="layui-btn layui-btn-normal layui-btn-xs" onclick = btn_Click("RevokeCorrect", "' + strQuestionOptionId + '", "' + strQuestionTypeId + '", "' + strQuestionId + '") > <i class="layui-icon" >& #xe605; </i></button > ';

  //<i class="layui-icon" >&#xe642; </i>
  const objI = document.createElement('i');
  objI.className = 'layui-icon';
  objI.innerHTML = '&#xe605;';
  const btnRevokeCorrect = document.createElement('button');
  btnRevokeCorrect.title = '撤销正确选项';
  btnRevokeCorrect.className = 'layui-btn layui-btn-normal layui-btn-xs';
  btnRevokeCorrect.setAttribute('onclick', strOnclick);
  btnRevokeCorrect.appendChild(objI);
  return btnRevokeCorrect;
}

/*
 * 获取一个撤销正确选项按钮，使用icon
 */
export function Button_SetCorrect_i(strOnclick: string): HTMLButtonElement {
  const strThisFuncName = 'Button_RevokeCorrect_i';
  //<button title="设置正确选项" class="layui-btn layui-btn layui-btn-xs" onclick = btn_Click("SetCorrect", "' + strQuestionOptionId + '", "' + strQuestionTypeId + '", "' + strQuestionId + '") > <i class="layui-icon" >& #x1006; </i></button > ';
  //<i class="layui-icon" >&#xe642; </i>
  const objI = document.createElement('i');
  objI.className = 'layui-icon';
  objI.innerHTML = '&#x1006;';
  const btnSetCorrect = <HTMLButtonElement>document.createElement('button');
  btnSetCorrect.title = '设置正确选项';
  btnSetCorrect.className = 'layui-btn layui-btn layui-btn-xs';
  btnSetCorrect.setAttribute('onclick', strOnclick);
  btnSetCorrect.appendChild(objI);
  return btnSetCorrect;
}

//}
