"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalWorkloadDuration_1 = require("../calculateTotalWorkloadDuration");
const consts_1 = require("../consts");
describe("calculateTotalWorkloadDuration", () => {
    it("should output 37", () => {
        const result = (0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[0]);
        expect(result).toEqual(37);
    });
    it("should output 91", () => {
        const result = (0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[1]);
        expect(result).toEqual(91);
    });
    it("should output 198", () => {
        const result = (0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[2]);
        expect(result).toEqual(198);
    });
});
