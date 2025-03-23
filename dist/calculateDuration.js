"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDuration = void 0;
const consts_1 = require("./consts");
/**
 * Calculates how much minutes it takes to complete workload per employee
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns total workload duration in minutes
 */
const calculateDuration = (workload, employee) => {
    const workDuration = [];
    workload.mopeds.forEach((moped) => {
        const amountOfWork = (moped.split(employee).length - 1) * consts_1.workLoadInMinutes[employee];
        workDuration.push(amountOfWork);
    });
    const totalWorkDuration = workDuration.reduce((acc, curr) => acc + curr, 0);
    return totalWorkDuration;
};
exports.calculateDuration = calculateDuration;
