// to string
export const toString = (value: any): string => value.toString()
//
export const checkMaxLength = (value: any, maxLength: number,): boolean => {
    const toString: string = value.toString();
    if (toString.length > maxLength) {
        return false
    }
    return true
}
export const checkMinLength = (value: any, maxLength: number,): boolean => {
    const toString: string = value.toString();
    if (value && toString.length > maxLength) {
        return true
    }
    return false
}
//
export const checkEmpty = (value: any): boolean => {
    const toString: string = value.toString();
    if (toString.trim().length == 0) {
        return true
    }
    return false
}
//check is LowerCase
export const checkLetters = (str: string, letters: string): boolean => new RegExp(`[${letters}]`).test(str);
//check is LowerCase
export const checkIsLowerCase = (str: string): boolean => /[a-z]/.test(str);
//check is UpperCase
export const checkIsUpperCase = (str: string): boolean => /[A-Z]/.test(str);

//check is number
export const checkIsNumber = (num: string): boolean => {
    const str = toString(num);
    return /[0-9]/.test(str);
}
export const checkIsNumberOnly = (num: string): boolean => {
    const str = toString(num);
    return /^\d*$/.test(str);
}
export const checkIsFullNumber = (num: string): boolean => {
    const str = toString(num);
    return /^((?!00)(?:(?:\d+\.\d*|\.\d+|\d+)(?:[Ee][+-]?\d+)?|\d*[1-9]\d*|0))?$/.test(str);
}
export const checkIsNumberAndReturn = (prevValue: any, value: any) => {
    if (checkIsNumberOnly(value)) {
        return value
    }
    return prevValue
}


//check is UniqueSymbol
export const checkIsUniqueSymbol = (str: string): boolean => /[?!#%+\-*%.]/.test(str);

//check is UniqueChar
export const checkIsUniqueChar = (str: string): boolean => !/([a-zA-Z])\1+/.test(str);

//check is not Consistent 
export const checkIsNotConsistent = (str: string): boolean => !/([0-9])\1+/.test(str);

//check is Consecutive 
export const checkConsecutive = (numArray: string[]) => { // 156
    if (numArray.length === 0) {
        return true;
    }
    for (let i = 0; i < numArray.length; i++) {
        let num = numArray[i];
        for (let j = 1; j < num.length - 1; j++) {
            if (
                Math.abs(parseInt(num[j]) - parseInt(num[j + 1])) === 1 &&
                Math.abs(parseInt(num[j]) - parseInt(num[j - 1])) === 1
            ) {
                return false;
            }
        }
    }
    return true;
};
