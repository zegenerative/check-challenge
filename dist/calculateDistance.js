"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
/**
 * Calculates the farthest an employee has to travel
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns
 */
const calculateDistance = (workload, employee) => {
    const reversedArray = workload.mopeds.slice().reverse();
    const taskNeededPerMoped = reversedArray.map((moped) => moped.indexOf(employee));
    // Find the first index where a task is needed, otherwhise return -1
    const earliestIndex = taskNeededPerMoped.reduce((acc, value, index) => {
        return acc === -1 && value >= 0 ? index : acc;
    }, -1);
    // No employee needed for moped
    if (earliestIndex < 0)
        return 0;
    const furthestIndex = workload.mopeds.length - 1 - earliestIndex;
    const totalDistance = workload.distance.reduce((acc, curr, index) => {
        if (index >= furthestIndex)
            return acc;
        return acc + curr;
    }, 0);
    return totalDistance;
};
exports.calculateDistance = calculateDistance;
