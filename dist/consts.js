"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workloads = exports.workLoadInMinutes = exports.employees = void 0;
exports.employees = {
    swapper: "S",
    fixer: "F",
    mechanic: "M"
};
exports.workLoadInMinutes = {
    [exports.employees.swapper]: 1,
    [exports.employees.fixer]: 5,
    [exports.employees.mechanic]: 8
};
exports.workloads = [
    {
        mopeds: ["S", "F", "SF", "FF"],
        distance: [2, 4, 3]
    },
    {
        mopeds: ["MMM", "SMF", "FMS"],
        distance: [3, 10],
    },
    {
        mopeds: ["MS", "SFF", "MS", "S", "FM", "MMMM", "FF"],
        distance: [4, 17, 3, 6, 9, 11]
    }
];
