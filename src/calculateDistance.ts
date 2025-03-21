import { Workload } from "./types";

/**
 * Calculates the farthest an employee has to travel
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns total workload distance in minutes
 */
export const calculateDistance = (workload: Workload, employee: string): number => {
    const reversedArray: string[] = workload.mopeds.slice().reverse()
    const taskNeededPerMoped: number[] = reversedArray.map((moped) => moped.indexOf(employee))
    // Find the first index where a task is needed, otherwhise return -1
    const earliestIndex: number = taskNeededPerMoped.reduce((acc, value, index) => {
        return acc === -1 && value >= 0 ? index : acc;
    }, -1);

    // No employee needed for moped
    if(earliestIndex < 0) return 0

    const furthestIndex: number = workload.mopeds.length - 1 - earliestIndex
    const totalDistance: number = workload.distance.reduce((acc, curr, index) => {
        if(index >= furthestIndex) return acc
        return acc + curr
    }, 0)

    return totalDistance
}