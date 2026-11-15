
import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util";

describe("Password utilities", () => {
    const password1 = "ClaveUno123!";
    const password2 = "ClaveDos456!";

    it("should generate different hashes", async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        expect(hash1).toBeTypeOf("string");
        expect(hash2).toBeTypeOf("string");

        expect(hash1.length).toBeGreaterThan(0);
        expect(hash2.length).toBeGreaterThan(0);

        expect(hash1).not.toBe(password1);
        expect(hash2).not.toBe(password2);
    });

    it("should compare correct passwords", async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        expect(await comparePassword(password1, hash1)).toBe(true);
        expect(await comparePassword(password2, hash2)).toBe(true);
    });

    it("should reject incorrect passwords", async () => {
        const hash1 = await hashPassword(password1);
        const hash2 = await hashPassword(password2);

        expect(await comparePassword(password2, hash1)).toBe(false);
        expect(await comparePassword(password1, hash2)).toBe(false);
    });
});
