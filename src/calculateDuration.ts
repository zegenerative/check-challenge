import { workLoadInMinutes } from './consts';
import { Employee, Workload } from "./types";

/**
 * Calculates how much minutes it takes to complete workload per employee
 * @param workload a list of mopeds and distances between them
 * @param employee either a swapper, fixer or mechanic
 * @returns total workload duration in minutes
 */
export const calculateDuration = (workload: Workload, employee: Employee): number => {
    const workDuration: number[] = []

    workload.mopeds.forEach((moped: string) => {
        const amountOfWork: number = (moped.split(employee).length - 1) * workLoadInMinutes[employee]
        workDuration.push(amountOfWork)
    })
    
    const totalWorkDuration = workDuration.reduce((acc, curr) => acc + curr, 0)

    return totalWorkDuration
}
