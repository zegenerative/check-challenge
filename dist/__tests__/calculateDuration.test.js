"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateDuration_1 = require("../calculateDuration");
const consts_1 = require("../consts");
describe("calculateDuration", () => {
    it("should calculate the correct duration workload for swapper", () => {
        const result = (0, calculateDuration_1.calculateDuration)(consts_1.workloads[0], consts_1.employees.swapper);
        expect(result).toEqual(2);
    });
    it("should calculate the correct duration workload for swapper", () => {
        const result = (0, calculateDuration_1.calculateDuration)(consts_1.workloads[0], consts_1.employees.fixer);
        expect(result).toEqual(20);
    });
    it("should calculate the correct duration workload for swapper", () => {
        const result = (0, calculateDuration_1.calculateDuration)(consts_1.workloads[0], consts_1.employees.mechanic);
        expect(result).toEqual(0);
    });
});
