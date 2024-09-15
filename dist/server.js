export const RandomString = (length, type = null) => {
    let chars;
    switch (type) {
        case "uppercase":
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case "lowercase":
            chars = "abcdefghijklmnopqrstuvwxyz";
            break;
        default:
            chars = "aAbBcCdDeEfFgGhHiIjJkKlMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    }
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
export const RandomNum = (length) => {
    const digits = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
};
export const AlphaNum = (length) => {
    const chars = "aAbBcCdDeEfFgGhHiIjJkKlMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
export const APIKEY = (length, separator) => {
    var _a, _b;
    const chars = "ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return (_b = (_a = result.match(/.{1,4}/g)) === null || _a === void 0 ? void 0 : _a.join(separator)) !== null && _b !== void 0 ? _b : "";
};
export const UUID = () => {
    const segments = [8, 4, 4, 4, 12];
    return segments.map((segment) => RandomString(segment, null)).join("-");
};
