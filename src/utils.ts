import { IMenu } from "~/types/mainDataType";
import { checkIsNumberOnly, checkLetters } from "./validation/inputValidation";

const changeAllItemHidden = (menuItems: IMenu[]): any[] => {
  return menuItems.map((menuItem) => {
    if (menuItem.haveSub) {
      return {
        ...menuItem,
        visible: false,
        subMenu: changeAllItemHidden(menuItem.subMenu ?? []),
      };
    }
    return { ...menuItem, visible: false };
  });
};
export const changeMenuItemRecursiv = (
  menuItems: IMenu[],
  itemIds: any[],
  i: number = 0
): any[] => {
  const id = itemIds[i];
  const newMenu = menuItems.map((menuItem) => {
    if (menuItem.id === id) {
      const newI = i + 1;
      if (menuItem.haveSub && itemIds[newI]) {
        itemIds.shift();
        return {
          ...menuItem,
          visible: true,
          subMenu: changeMenuItemRecursiv(
            menuItem.subMenu ?? [],
            itemIds ?? []
          ),
        };
      }
      return { ...menuItem, visible: !menuItem.visible };
    }
    if (menuItem.haveSub) {
      return {
        ...menuItem,
        visible: false,
        subMenu: changeAllItemHidden(menuItem.subMenu ?? []),
      };
    }
    return menuItem;
  });
  return newMenu;
};
//
export const getOnlyNumber = (str: string) => str.match(/\d+/g) || [];
//
export const updateInputStatus = (
  fieldName: string,
  status: string,
  message: string,
  initialState: any
) => {
  return (prevState: any) => ({
    ...initialState,
    [fieldName]: {
      ...prevState[fieldName],
      status,
      message,
    },

    ...Object.keys(prevState)
      .filter((key) => key !== fieldName)
      .reduce(
        (result, key) => ({
          ...result,
          [key]: {
            ...prevState[key],
            status: "",
            message: "",
          },
        }),
        {}
      ),
  });
};

export const validateRequired = (value: string) => {
  return value.toString().trim() !== "";
};

export const checkAllUnchecked = (arr: any[]) => {
  const isCheck = arr.some((item) => item.checked);

  const isSelect = arr.every((item) => {
    if (item.checked && item.userTypeId === 0) {
      return false;
    }
    return true;
  });

  if (!isCheck) {
    return "isCheck";
  }
  if (!isSelect) {
    return "isSelect";
  }

  return "";
};

export const validateForm = (requiredFields: any[], initialState: any) => {
  const errors: Record<string, string> = {};

  requiredFields.forEach((field) => {
    const value = initialState[field.name];
    if (field.type === "text" && !validateRequired(value)) {
      errors[field.name] = `${field.label} boş buraxıla bilməz`;
    }
    if (field.type === "select" && value === null) {
      errors[field.name] = `${field.label} boş buraxıla bilməz`;
    }
  });

  return errors;
};

//
export function _calculateAge(birthday: string) {
  // birthday is a date
  let birthdayDate = new Date(birthday);
  const birthYear = birthdayDate.getFullYear();
  const currentYear = new Date().getFullYear();
  if (birthYear >= currentYear) {
    return 0;
  }
  let ageDifMs = Date.now() - birthdayDate.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const checkIsEmptyFields = (body: any) => {
  const newBody: any = {};
  for (const key in body) {
    if (body[key] === "" || body[key] === 0 || body[key] === undefined) {
      newBody[key] = null;
    } else {
      newBody[key] = body[key];
    }
  }
  return newBody;
};
export const checkAndNotReturnEmptyFields = (body: any) => {
  const newBody: any = {};
  for (const key in body) {
    if (
      body[key] !== "" &&
      body[key] !== 0 &&
      body[key] !== undefined &&
      body[key] !== null
    ) {
      newBody[key] = body[key];
    }
  }
  return newBody;
};

export const createQueryString = (body: any) => {
  let queryString: string = "";
  let isFirstIteration = true;
  for (const key in body) {
    if (isFirstIteration) {
      queryString = `?${key}=${body[key]}`;
      isFirstIteration = false;
    } else {
      queryString += `&${key}=${body[key]}`;
    }
  }
  return queryString;
};
export const convertDate = (date: string) => {
  let yourDate = new Date(date);
  const newDate = yourDate.toISOString().split("T")[0];
  return newDate;
};
export const setTimezone = (date: any) => {
  let newDate = new Date(date);
  let timezoneOffset = newDate.getTimezoneOffset();
  newDate.setTime(newDate.getTime() - timezoneOffset * 60 * 1000);
  return newDate;
};
export const mainUserSeachChecker = (
  mainUserSeach: string,
  selectedSearchType: number | null
) => {
  const length = mainUserSeach.length;
  const regex = /^[A-NP-Za-np-z0-9]+$/;

  if (selectedSearchType == 5 || selectedSearchType == 9) return true;
  if (length <= 0) return true;
  if (selectedSearchType == 1) {
    return length !== 7 || !regex.test(mainUserSeach);
  }
  if (selectedSearchType == 2) {
    return !(length == 6 || length == 5) || !regex.test(mainUserSeach);
  }
  return !checkIsNumberOnly(mainUserSeach);
};

export const pinSeachChecker = (
  mainUserSeach: string,
  selectedSearchType: number | null
) => {
  const length = mainUserSeach.length;
  if (length <= 0) return true;
  if (selectedSearchType == 1) {
    return length !== 7 || checkLetters(mainUserSeach, "[A-NP-Za-np-z0-9]");
  }
  if (selectedSearchType == 2) {
    return (
      !(length == 6 || length == 5) ||
      checkLetters(mainUserSeach, "[A-NP-Za-np-z0-9]")
    );
  }
  return false;
};

export const checkDifferenceInDays = (selectedDate: any, type: string) => {
  let result = 0;
  const oneDay = 24 * 60 * 60 * 1000;
  const currentDate = Math.floor(Number(new Date()) / oneDay);
  const givenDate = Math.floor(Number(new Date(selectedDate)) / oneDay);

  if (type == "min") {
    result = givenDate - currentDate;
  }

  if (type == "max") {
    result = currentDate - givenDate;
  }

  return result;
};

// Check 2 number difference
export const checkDifferenceInTime = (selectedDate: Date, type: string) => {
  const currentDate = new Date();
  const givenDate = new Date(selectedDate);

  let result = 0;
  const oneMinute = 60 * 1000;
  // const oneHour = 60 * oneMinute;

  if (type === "min") {
    result = Math.floor(
      (givenDate.getTime() - currentDate.getTime()) / oneMinute
    );
  }

  if (type === "max") {
    result = Math.floor(
      (currentDate.getTime() - givenDate.getTime()) / oneMinute
    );
  }

  const hours = Math.floor(result / 60);
  const minutes = result % 60;

  return { hours, minutes };
};

// Convert all upperCase to camelCase
export const capitalizeSentence = (...words: any) => {
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
};

export const convertToValibleDate = (date: Date): string => {
  const dformat = [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
  ].join("-");

  return dformat;
};

export const resetTimeHandle = (date: Date) => {
  const resetedTime = new Date(date); // take the current time
  resetedTime.setHours(0);
  resetedTime.setMinutes(0);
  resetedTime.setSeconds(0);
  resetedTime.setMilliseconds(0);
  return resetedTime;
};
export const mappingInArrayByKey = (arr: any[], key = "id"): any[] => {
  return arr.map((item) => item[key]);
};
export const convertArrayToString = (arr: any[], key = "id"): string => {
  return mappingInArrayByKey(arr, key).join(",");
};

export const checkedUncheckedTableBody = (
  fullBody: any,
  selectedBody: any,
  type: number
) => {
  let filtered = [];

  let selectededsArr = [...selectedBody?.selectedRowsData];
  let unSelectedArr = fullBody;

  let filteredArrKeys = selectedBody?.selectedRowKeys;
  filteredArrKeys?.map((item: any) => {
    unSelectedArr = unSelectedArr?.filter((rec: any) => rec?.id !== item);
  });

  switch (type) {
    case 1:
      filtered = [...selectededsArr, ...unSelectedArr];
      break;
    case 2:
      filtered = selectededsArr;
      break;
    case 3:
      filtered = unSelectedArr;
      break;
  }
  return filtered;
};

export const stringToNullInObject = (obj: any) => {
  const newObj: any = {}
  for (const key in obj) {
    if (obj[key] === '') {
      newObj[key] = null
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}