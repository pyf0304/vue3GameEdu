import { GetArray } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';

export default class clsCheck {
  public examId = 0;
  public id = 0;
  public item = '0';
  public answer = '';
  public type = '';
}

export function getCheckValueInDivObj(objDiv: HTMLDivElement, strCheckId: string): boolean {
  // const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objCheck == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', objDiv.id, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  const bolValue = objCheck.checked;
  return bolValue;
}
