//import { validateURL, clearText } from './verifyURL'
import { validateURL, clearText } from "../js/verifyURL";

describe('Testing the url validation functionality', () => {
    test('Testing the validateURL() function', () => {
        expect(validateURL('https://www.youtube.com/')).toBe(true);
    })

    test('It should return false if url is valid', () => {
        expect(validateURL('Kirk')).toBe(false);
    })
})


describe('Testing the clearText functionality', () => {
    test('Testing the clearText() function', () => {
        expect(clearText).toBeDefined();
        expect(typeof clearText).toBe("function");
    });
})