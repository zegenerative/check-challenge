import { Workload } from "./types"

type Employee = "S" | "F" | "M"
export type Employees = Record<string, Employee>

export const employees: Employees = {
    swapper: "S",
    fixer: "F",
    mechanic: "M"
}

export const workLoadInMinutes = {
    [employees.swapper]: 1,
    [employees.fixer]: 5,
    [employees.mechanic]: 8 
}

export const    workloads: Workload[] = [
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
