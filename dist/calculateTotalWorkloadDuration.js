"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalWorkloadDuration = void 0;
const calculateDistance_1 = require("./calculateDistance");
const calculateDuration_1 = require("./calculateDuration");
/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @param workload list of mopeds and distances between them
 * @returns total workload duration in minutes
 */
const calculateTotalWorkloadDuration = (workload, employees) => {
    const totalWorkDuration = Object.values(employees).reduce((acc, curr) => {
        return acc + (0, calculateDuration_1.calculateDuration)(workload, curr);
    }, 0);
    const totalDistance = Object.values(employees).reduce((acc, curr) => {
        return acc + (0, calculateDistance_1.calculateDistance)(workload, curr);
    }, 0);
    return totalWorkDuration + totalDistance;
};
exports.calculateTotalWorkloadDuration = calculateTotalWorkloadDuration;
