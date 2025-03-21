const employees = {
    swapper: "S",
    fixer: "F",
    mechanic: "M"
}

const workLoadInMinutes = {
    [employees.swapper]: 1,
    [employees.fixer]: 5,
    [employees.mechanic]: 8 
}

type Workload = {
    mopeds: string[]
    distance: number[]
}

const workloads: Workload[] = [
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
]

/**
 * Calculates the farthest an employee has to travel
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns 
 */
const calculateDistance = (workload: Workload, employee: string): number => {
    const reversedArray: string[] = workload.mopeds.slice().reverse()
    const taskNeededPerMoped: number[] = reversedArray.map((moped) => moped.indexOf(employee))
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

const calculateWorkloadDuration = (workload: Workload): number => {
    const workDuration: number[] = []

    workload.mopeds.forEach((moped) => {
        const amountOfWorkForSwapper: number = (moped.split(employees.swapper).length - 1) * workLoadInMinutes[employees.swapper]
        const amountOfWorkForFixer: number = (moped.split(employees.fixer).length - 1) * workLoadInMinutes[employees.fixer]
        const amountOfWorkForMechanic: number = (moped.split(employees.mechanic).length - 1) * workLoadInMinutes[employees.mechanic]

        workDuration.push(amountOfWorkForSwapper, amountOfWorkForFixer, amountOfWorkForMechanic)
    })
    
    const totalWorkDuration = workDuration.reduce((acc, curr) => acc + curr, 0)

    return totalWorkDuration
}

/**
 * Calculates how much minutes it takes to complete all tasks per moped
 * @returns total duration in minutes
 */
const calculateTotalWorkloadDuration = (workload: Workload): number => {
    const totalWorkDuration = calculateWorkloadDuration(workload)
    const totalDistance = calculateDistance(workload, employees.swapper)
        + calculateDistance(workload, employees.fixer) + calculateDistance(workload, employees.mechanic)

    return totalWorkDuration + totalDistance
}

console.log(calculateTotalWorkloadDuration(workloads[0]))
console.log(calculateTotalWorkloadDuration(workloads[1]))
console.log(calculateTotalWorkloadDuration(workloads[2]))
