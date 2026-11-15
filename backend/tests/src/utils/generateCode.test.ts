
import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util";

describe("Generate code utilities", () => {

    it("should generate a six digit code", () => {
        const code = generateSixDigitCode();

        expect(code).toHaveLength(6);
    });

    it("should generate a numeric code", () => {
        const code = generateSixDigitCode();

        expect(code).toMatch(/^[0-9]{6}$/);
    });

    it("should generate a code between 100000 and 999999", () => {
        const code = Number(generateSixDigitCode());

        expect(code).toBeGreaterThanOrEqual(100000);
        expect(code).toBeLessThanOrEqual(999999);
    });

});
