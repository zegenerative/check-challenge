"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalWorkloadDuration = void 0;
const calculateDistance_1 = require("./calculateDistance");
const calculateDuration_1 = require("./calculateDuration");
const consts_1 = require("./consts");
/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @returns total distance duration in minutes
 */
const calculateTotalWorkloadDuration = (workload) => {
    const totalWorkDuration = (0, calculateDuration_1.calculateDuration)(workload, consts_1.employees.swapper)
        + (0, calculateDuration_1.calculateDuration)(workload, consts_1.employees.fixer)
        + (0, calculateDuration_1.calculateDuration)(workload, consts_1.employees.mechanic);
    const totalDistance = (0, calculateDistance_1.calculateDistance)(workload, consts_1.employees.swapper)
        + (0, calculateDistance_1.calculateDistance)(workload, consts_1.employees.fixer) + (0, calculateDistance_1.calculateDistance)(workload, consts_1.employees.mechanic);
    return totalWorkDuration + totalDistance;
};
exports.calculateTotalWorkloadDuration = calculateTotalWorkloadDuration;
