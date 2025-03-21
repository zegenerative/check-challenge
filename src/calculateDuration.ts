import { workLoadInMinutes } from './consts';
import { Workload } from "./types";

/**
 * Calculates how much minutes it takes to complete workload per moped
 * @param workload a list of mopeds and distances between them
 * @returns total workload duration in minutes
 */
export const calculateDuration = (workload: Workload, employee: string): number => {
    const workDuration: number[] = []

    workload.mopeds.forEach((moped) => {
        const amountOfWork: number = (moped.split(employee).length - 1) * workLoadInMinutes[employee]
        workDuration.push(amountOfWork)
    })
    
    const totalWorkDuration = workDuration.reduce((acc, curr) => acc + curr, 0)

    return totalWorkDuration
}