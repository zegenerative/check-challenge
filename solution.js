var _a;
var employees = {
    swapper: "S",
    fixer: "F",
    mechanic: "M"
};
var workLoadInMinutes = (_a = {},
    _a[employees.swapper] = 1,
    _a[employees.fixer] = 5,
    _a[employees.mechanic] = 8,
    _a);
var workloads = [
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
/**
 * Calculates the farthest an employee has to travel
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns
 */
var calculateDistance = function (workload, employee) {
    var reversedArray = workload.mopeds.slice().reverse();
    var taskNeededPerMoped = reversedArray.map(function (moped) { return moped.indexOf(employee); });
    var earliestIndex = taskNeededPerMoped.reduce(function (acc, value, index) {
        return acc === -1 && value >= 0 ? index : acc;
    }, -1);
    // No employee needed for moped
    if (earliestIndex < 0)
        return 0;
    var furthestIndex = workload.mopeds.length - 1 - earliestIndex;
    var totalDistance = workload.distance.reduce(function (acc, curr, index) {
        if (index >= furthestIndex)
            return acc;
        return acc + curr;
    }, 0);
    return totalDistance;
};
var calculateWorkloadDuration = function (workload) {
    var workDuration = [];
    workload.mopeds.forEach(function (moped) {
        var amountOfWorkForSwapper = (moped.split(employees.swapper).length - 1) * workLoadInMinutes[employees.swapper];
        var amountOfWorkForFixer = (moped.split(employees.fixer).length - 1) * workLoadInMinutes[employees.fixer];
        var amountOfWorkForMechanic = (moped.split(employees.mechanic).length - 1) * workLoadInMinutes[employees.mechanic];
        workDuration.push(amountOfWorkForSwapper, amountOfWorkForFixer, amountOfWorkForMechanic);
    });
    var totalWorkDuration = workDuration.reduce(function (acc, curr) { return acc + curr; }, 0);
    return totalWorkDuration;
};
/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @returns total duration in minutes
 */
var calculateTotalWorkloadDuration = function (workload) {
    var totalWorkDuration = calculateWorkloadDuration(workload);
    var totalDistance = calculateDistance(workload, employees.swapper)
        + calculateDistance(workload, employees.fixer) + calculateDistance(workload, employees.mechanic);
    return totalWorkDuration + totalDistance;
};
console.log(calculateTotalWorkloadDuration(workloads[0]));
console.log(calculateTotalWorkloadDuration(workloads[1]));
console.log(calculateTotalWorkloadDuration(workloads[2]));
