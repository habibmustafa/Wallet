import { resetTimeHandle } from "~/utils";
export const isValidNumber = () => {
  return {
    required: {
      message: `Boş buraxıla bilməz`,
      value: true,
    },
    validate: (val: any) => {
      const isValid = /^((?!00)(?:(?:\d+\.\d*|\.\d+|\d+)(?:[Ee][+-]?\d+)?|\d*[1-9]\d*|0))?$/.test(val.toString())
      if (!isValid) {
        return 'Rəqəm düzgün daxil edilməyib!';
      }
      return true
    }
  };
}
// Input validation with Props
export const inputValidationProps = (
  inputName: string,
  isRequired = false,
  minLength?: number,
  maxLength?: number | null
) => ({
  required: {
    message: `${inputName} boş buraxıla bilməz`,
    value: isRequired,
  },
  minLength: {
    value: minLength,
    message: `Minimum ${minLength} simvol olmalıdır`,
  },
  maxLength: {
    value: maxLength,
    message: `Maksimum ${maxLength} simvol olmalıdır`,
  },
});
// Select validation with Props
export const selectValidationProps = (
  inputName: string,
  isRequired = false
) => ({
  required: {
    value: isRequired,
    message: `${inputName} mütləq seçilməlidir`,
  },
});

// Check empty and min length for Input
export const inputMinLengthValidation = (
  inputName: string,
  minLength: number
) => ({
  required: {
    message: `${inputName} boş buraxıla bilməz`,
    value: true,
    status: "error",
  },
  minLength: {
    value: minLength,
    message: `Minimum ${minLength} simvol olmalıdır`,
  },
});

// Check empty for Select
export const selectValidation = (inputName: string, isRequired = true) => ({
  required: {
    value: isRequired,
    message: `${inputName} mütləq seçilməlidir`,
  },
});

export const emailInputValidation = (minLength: number) => ({
  minLength: {
    value: minLength,
    message: `Minimum ${minLength} simvol olmalıdır`,
  },
});

export const limitInputValidation = {
  required: {
    value: true,
    message: "Limit boş buraxıla bilməz",
  },
  pattern: {
    value: /^[1-9][0-9]*$/,
    message: "Limit 0-dan yuxarı olmalıdır",
  },
};

export const requiredValidation = (name: string) => ({
  required: {
    value: true,
    message: `${name} boş buraxıla bilməz`,
  },
});
export const rrnValidation = (
  isRequired = false,
) => ({
  required: {
    message: `RRN boş buraxıla bilməz`,
    value: isRequired,
  },
  minLength: {
    value: 6,
    message: `Minimum 6 rəqəm olmalıdır`,
  },
  maxLength: {
    value: 20,
    message: `Maksimum 20 rəqəm olmalıdır`,
  },
  pattern: {
    value: /^[0-9]+$/,
    message: "Yalnız rəqəm daxil edin",
  },
});
// For Phone number
export const foreignPhoneNumberValidation = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Yalnız rəqəm daxil edin",
  },
};
export const numberInputValidation = (
  inputName: string,
  isRequired = false
) => ({
  required: {
    value: isRequired,
    message: `${inputName} boş buraxıla bilməz`,
  },
  pattern: {
    value: /^[0-9]{7}$/,
    message: `${inputName} düzgun daxil edin`,
  },
});
export const phoneValidation = (
  inputName: string,
  isRequired = false,
  isMobile = true
) => ({
  required: {
    value: isRequired,
  },
  pattern: {
    value: isMobile ? /^[0-9]{7}$/ : /^[0-9]{5,20}$/,
    message: `${inputName} düzgun daxil edin`,
  },
});

export const phoneNumberInputValidation = (inputName: string) => ({
  required: {
    value: true,
    message: `${inputName} boş buraxıla bilməz`,
  },
  pattern: {
    value: /^\d{3}-\d{2}-\d{2}$/,
    message: `${inputName} düzgun daxil edin`,
  },
});

// For FIN/PIN
// === NOT USED ===
export const pinValidation = (minLength: number, maxLength?: number, isRequired = true) => ({
  required: {
    message: `FIN boş buraxıla bilməz`,
    value: isRequired,
    status: "error",
  },
  minLength: {
    value: minLength,
    message: `Minimum ${minLength} simvol olmalıdır`,
  },
  maxLength: {
    value: maxLength,
    message: `Maksimum ${maxLength} simvol olmalıdır`,
  },
  pattern: {
    value: /^[A-NP-Za-np-z0-9]*$/,
    message: "Düzgün formatı daxil edin",
  },
});
///
const commonPinValidation = (isRequired: boolean) => ({
  required: {
    message: `FIN boş buraxıla bilməz`,
    value: isRequired,
    status: "error",
  },
  pattern: {
    value: /^[A-NP-Za-np-z0-9]*$/,
    message: "Düzgün formatı daxil edin",
  },
});
const getPinValidationProps = (id: number) => {
  switch (id) {
    case 1:
      return {
        minLength: 7,
        maxLength: 7,
        message: `Mütləq 7 simvol olmalıdır`,
      };
    case 2:
      return {
        minLength: 5,
        maxLength: 6,
        message: `Minimum 5, maksimum 6 simvol olmalıdır`,
      };
    case 9:
      return {
        minLength: 8,
        maxLength: 8,
        message: `Mütləq 8 simvol olmalıdır`,
      };
    default:
      return {};
  }
};
export const pinValidationById = (id: number, isRequired = false) => {
  const { minLength, maxLength, message } = getPinValidationProps(id);

  return {
    ...commonPinValidation(isRequired),
    ...(minLength && { minLength: { value: minLength, message } }),
    ...(maxLength && { maxLength: { value: maxLength, message } }),
  };
};


export const prevDateValidation = (flag: boolean) => {
  if (flag) {
    return;
  }

  return {
    required: true,
    validate: prevDateValidator,
  };
};
const prevDateValidator = (value: any) => {
  const currentDate = resetTimeHandle(new Date());
  const itemDate = resetTimeHandle(value);

  if (currentDate > itemDate) {
    return "Kecmiş tarix secə bilməsiniz";
  }
  return true; // Return true if the validation passes
};

export const prevAndNextDateValidation = (prev: boolean, next: boolean, date: Date, prevErrorMessage = 'Kecmiş tarix secə bilməsiniz', nextErrorMessage = 'Gələcək tarix secə bilməsiniz') => {

  if (prev && next) {
    return;
  }
  return {
    required: true,
    validate: (val: any) => prevAndNextDateValidator(val, prev, next, date, prevErrorMessage, nextErrorMessage),
  };
};
const prevAndNextDateValidator = (value: any, prev: boolean, next: boolean, date: Date, prevErrorMessage: string, nextErrorMessage: string) => {
  const currentDate = resetTimeHandle(new Date(date));
  const itemDate = resetTimeHandle(value);

  if (!prev && currentDate > itemDate) {
    return prevErrorMessage;
  }
  if (!next && currentDate < itemDate) {
    return nextErrorMessage;
  }
  return true; // Return true if the validation passes
};

export const checkValidDate = (permission: boolean, date: Date, errorMessage = '') => {
  if (!permission) {
    return;
  }
  return {
    required: true,
    validate: (val: any) => checkValidDateValidator(val, date, errorMessage),
  };
};
const checkValidDateValidator = (value: any, date: Date, errorMessage: string,) => {
  const itemDate = resetTimeHandle(value);
  const userDate = resetTimeHandle(new Date(date));
  const currentDate = resetTimeHandle(new Date());

  if (itemDate < userDate || itemDate > currentDate) {
    return errorMessage;
  }
  return true; // Return true if the validation passes
};
export const isSelectRequired = (
) => ({
  required: true
});

///
export const numberValidation = (
  inputName: string,
  isRequired = false,
  minLength?: number,
  maxLength?: number
) => ({
  required: {
    value: isRequired,
    message: `${inputName} boş buraxıla bilməz`,
  },
  pattern: {
    value: /^[0-9]*$/,
    message: `${inputName} düzgun daxil edin`,
  },
  minLength: {
    value: minLength,
    message: `Minimum ${minLength} simvol olmalıdır`,
  },
  maxLength: {
    value: maxLength,
    message: `Maksimum ${maxLength} simvol olmalıdır`,
  },
});
/////
export const intermediateDateValidation = (secondDateField: string, range: string, required = false) => {
  return {
    required,
    validate: (val: any, allData: any) => {
      const currentDate = resetTimeHandle(val).getTime();
      const secondDate = resetTimeHandle(allData[secondDateField]).getTime();
      const diff = Math.abs(currentDate - secondDate);
      const days = diff / (1000 * 3600 * 24)
      const rangeToNum = Number(range)

      if (days > rangeToNum) {
        return `Tarix aralığı ${rangeToNum} gündən çox olmamalıdı`
      }
      return true
    },
  };
}