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
            chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

export const RandomNum = (length) => {
    const digits = "0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
};

export const AlphaNum = (length) => {
    const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

export const APIKEY = (length, separator) => {
    const chars = "ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result.match(/.{1,4}/g).join(separator);
};

export const UUID = () => {
    const segments = [8, 4, 4, 4, 12];
    return segments.map(segment => RandomString(segment, "hex")).join('-');
};


