import { FlowDate, IDaySummary } from "@donmahallem/flow-api-types";
import { FlowApiClient } from "@donmahallem/flowapi";

export class HeartRateDownloader {

    public constructor(private flowClient: FlowApiClient) {

    }
    public async downloadRange(startdate: string | FlowDate,
        enddate: string | FlowDate,
        samples: number,
        throttle: number = 5000): Promise<{ [dates: string]: IDaySummary }> {
        const convStartDate: FlowDate = (startdate instanceof FlowDate) ? startdate : FlowDate.fromString(startdate);
        const convEndDate: FlowDate = (enddate instanceof FlowDate) ? enddate : FlowDate.fromString(enddate);
        const downloadDates: FlowDate[] = FlowDate.toDateArray(convStartDate, convEndDate);
        let currentDay: FlowDate = convStartDate;
        let map = {};
        while (currentDay.distance(convEndDate) >= 0) {
            map[currentDay.toString()] = await this.download(currentDay, samples);
            currentDay = currentDay.nextDay();
            await this.timeout(throttle);
        }
        return map;
    }

    public timeout(time: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(resolve, time);
        })
    }

    public download(startdate: string | FlowDate, samples: number): Promise<IDaySummary> {
        const convStartDate: FlowDate = (startdate instanceof FlowDate) ? startdate : FlowDate.fromString(startdate);
        return this.flowClient.getActivityTimelineForDay(convStartDate, samples);
    }
}
