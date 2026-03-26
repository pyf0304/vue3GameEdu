export function GetInputValue(strTxtId) {
    var txt1 = document.getElementById(strTxtId);
    if (txt1 == null) return "";
    return txt1.value;
}

export function GetSelectValue(strSelectId) {
    var sltSex = document.getElementById(strSelectId);
    var intSelectedIndex = sltSex.selectedIndex;
    var itemValue = sltSex.options[intSelectedIndex].value; 
    return itemValue;
}

export function GetSelectText(strSelectId) {
    var sltSex = document.getElementById(strSelectId);
    var intSelectedIndex = sltSex.selectedIndex;
    var itemText = sltSex.options[intSelectedIndex].text;
    return itemText;
}