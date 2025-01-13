const { isValidUrl } = require("../views/js/checkURL");

describe('URL Validation Tests', () => {
    it('should return false for invalid URL strings', () => {
        expect(isValidUrl("read")).toBe(false);
    });

    it('should return false for email addresses', () => {
        expect(isValidUrl("mailto:ahmed@gmail.com")).toBe(false);
    });
});