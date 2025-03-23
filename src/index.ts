import { calculateTotalWorkloadDuration } from "./calculateTotalWorkloadDuration"
import { employees, workloads } from "./consts"

console.log(
calculateTotalWorkloadDuration(workloads[0], employees),
calculateTotalWorkloadDuration(workloads[1], employees),
calculateTotalWorkloadDuration(workloads[2], employees))
