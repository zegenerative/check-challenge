import { calculateDistance } from "./calculateDistance";
import { calculateDuration } from "./calculateDuration";
import { Employees } from './consts';
import { Workload } from "./types";

/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @param workload list of mopeds and distances between them
 * @returns total workload duration in minutes
 */
export const calculateTotalWorkloadDuration = (workload: Workload, employees: Employees): number => {
    const totalWorkDuration = Object.values(employees).reduce((acc, curr) => {
        return acc + calculateDuration(workload, curr)
    }, 0)
    const totalDistance = Object.values(employees).reduce((acc, curr) => {
       return acc + calculateDistance(workload, curr)
    }, 0)

    return totalWorkDuration + totalDistance
}