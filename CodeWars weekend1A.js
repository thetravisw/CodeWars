const validatePIN = (pin) => (/^(?=(?:.{4}|.{6})$)[0-9]*$/gm.test(pin));
//  Didn't put a whiteboard for this, on account of it being a 1 liner.