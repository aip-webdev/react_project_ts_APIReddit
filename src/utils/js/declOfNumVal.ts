/**
 * Склонение слова в зависиости от числа, к которому оно относится
 * к примеру declOfNum(5, ['день', 'дня', 'дней'])
 **/
export const declOfNum = (n: number, text_forms: string[]) => {
    n = Math.abs(n) % 100;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    n = n%10
    if (n > 1 && n < 5) {
        return text_forms[1];
    }
    if (n === 1) {
        return text_forms[0];
    }
    return text_forms[2];
}
