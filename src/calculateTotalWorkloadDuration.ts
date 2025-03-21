import { calculateDistance } from "./calculateDistance"
import { calculateDuration } from "./calculateDuration"
import { employees } from "./consts"
import { Workload } from "./types"

/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @param workload list of mopeds and distances between them
 * @returns total distance duration in minutes
 */
export const calculateTotalWorkloadDuration = (workload: Workload): number => {
    const totalWorkDuration = calculateDuration(workload, employees.swapper)
        + calculateDuration(workload, employees.fixer)
        + calculateDuration(workload, employees.mechanic) 
    const totalDistance = calculateDistance(workload, employees.swapper)
        + calculateDistance(workload, employees.fixer) + calculateDistance(workload, employees.mechanic)

    return totalWorkDuration + totalDistance
}