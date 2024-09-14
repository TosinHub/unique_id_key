export const RandomString = (length: number, type: 'uppercase' | 'lowercase' | null = null): string => {
    let chars: string;
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

export const RandomNum = (length: number): string => {
    const digits = "0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
};

export const AlphaNum = (length: number): string => {
    const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

export const APIKEY = (length: number, separator: string): string => {
    const chars = "ABCDEFGlaHgIhJKLjMNwOPqQRsSTcUVWnXYZm012u34f56789";
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const chunks = result.match(/.{1,4}/g);
    return chunks ? chunks.join(separator) : '';
};

export const UUID = (): string => {
    const segments = [8, 4, 4, 4, 12];
    return segments.map(segment => RandomString(segment, null)).join('-');
};