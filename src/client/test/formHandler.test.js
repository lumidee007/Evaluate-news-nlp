import { submitRequest } from "../js/formHandler";

describe('Testing the submitRequest functionality', () => {
    test('Testing the submitRequest() function', () => {
        expect(typeof submitRequest).toBe("function");
        expect(submitRequest).toBeDefined();
    });
});