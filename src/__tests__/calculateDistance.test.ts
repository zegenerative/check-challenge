import { calculateDistance } from "../calculateDistance";
import { employees, workloads } from "../consts";

describe("calculateDistance", () => {
    it("should return a correct total distance workload for swapper", () => {
        const result = calculateDistance(workloads[0], employees.swapper)
        expect(result).toEqual(6)
    })
     it("should return a correct total distance workload for fixer", () => {
        const result = calculateDistance(workloads[0], employees.fixer)
        expect(result).toEqual(9)
     })
     it("should return a correct total distance workload for mechanic", () => {
        const result = calculateDistance(workloads[0], employees.mechanic)
        expect(result).toEqual(0)
    })
})