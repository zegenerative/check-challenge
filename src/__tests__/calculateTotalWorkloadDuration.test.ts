import { calculateTotalWorkloadDuration } from "../calculateTotalWorkloadDuration"
import { employees, workloads } from "../consts"

describe("calculateTotalWorkloadDuration", () => {
    it("should output 37", () => {
        const result = calculateTotalWorkloadDuration(workloads[0], employees)
        expect(result).toEqual(37)
    })
    it("should output 91", () => {
        const result = calculateTotalWorkloadDuration(workloads[1], employees)
        expect(result).toEqual(91)
    })
    it("should output 198", () => {
        const result = calculateTotalWorkloadDuration(workloads[2], employees)
        expect(result).toEqual(198)
    })
})
