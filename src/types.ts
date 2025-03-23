export type Employee = "S" | "F" | "M"
export type Employees = Record<string, Employee>
export type Workload = {
    mopeds: string[]
    distance: number[]
}
