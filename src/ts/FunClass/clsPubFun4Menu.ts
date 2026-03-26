export function menu_SetActiveItemA(objA: HTMLAnchorElement): boolean {
  const liParent = objA.parentElement;
  if (liParent == null) return false;
  const ulParent = liParent?.parentElement;
  if (ulParent == null) return false;
  const arrA = ulParent.getElementsByTagName('a');
  for (let i = 0; i < arrA.length; i++) {
    const thisA = <HTMLAnchorElement>arrA[i];
    thisA.classList.remove('active');
  }
  objA.classList.add('active');
  return true;
}

export function menu_SetActiveItemLi(objLi: HTMLLIElement): boolean {
  // const liParent = objA.parentElement;
  // if (liParent == null) return false;
  const objA = objLi.firstChild as HTMLAnchorElement;
  if (objA == null) return false;
  const ulParent = objLi.parentElement;
  if (ulParent == null) return false;
  const arrA = ulParent.getElementsByTagName('a');
  for (let i = 0; i < arrA.length; i++) {
    const thisA = <HTMLAnchorElement>arrA[i];
    thisA.classList.remove('active');
  }
  objA.classList.add('active');
  return true;
}
