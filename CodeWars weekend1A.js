const validatePIN = (pin) => (/^(?=(?:.{4}|.{6})$)[0-9]*$/gm.test(pin));
//