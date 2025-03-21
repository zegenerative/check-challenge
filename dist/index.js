"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalWorkloadDuration_1 = require("./calculateTotalWorkloadDuration");
const consts_1 = require("./consts");
console.log((0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[0]), (0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[1]), (0, calculateTotalWorkloadDuration_1.calculateTotalWorkloadDuration)(consts_1.workloads[2]));
