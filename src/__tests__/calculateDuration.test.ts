import { calculateDuration } from "../calculateDuration"
import { employees, workloads } from "../consts"

describe("calculateDuration", () => {
    it("should calculate the correct duration workload for swapper", () => {
        const result = calculateDuration(workloads[0], employees.swapper)
        expect(result).toEqual(2)
    })
    it("should calculate the correct duration workload for swapper", () => {
        const result = calculateDuration(workloads[0], employees.fixer)
        expect(result).toEqual(20)
    })
    it("should calculate the correct duration workload for swapper", () => {
        const result = calculateDuration(workloads[0], employees.mechanic)
        expect(result).toEqual(0)
    })
})