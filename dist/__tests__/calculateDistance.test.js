"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateDistance_1 = require("../calculateDistance");
const consts_1 = require("../consts");
describe("calculateDistance", () => {
    it("should return a correct total distance workload for swapper", () => {
        const result = (0, calculateDistance_1.calculateDistance)(consts_1.workloads[0], consts_1.employees.swapper);
        expect(result).toEqual(6);
    });
    it("should return a correct total distance workload for fixer", () => {
        const result = (0, calculateDistance_1.calculateDistance)(consts_1.workloads[0], consts_1.employees.fixer);
        expect(result).toEqual(9);
    });
    it("should return a correct total distance workload for mechanic", () => {
        const result = (0, calculateDistance_1.calculateDistance)(consts_1.workloads[0], consts_1.employees.mechanic);
        expect(result).toEqual(0);
    });
});
