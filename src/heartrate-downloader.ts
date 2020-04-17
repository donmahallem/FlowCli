import { FlowDate } from "@donmahallem/flow-api-types";

export class HeartRateDownloader {

    public downloadRange(startdate: string | FlowDate,
        enddate: string | FlowDate,
        samples: number,
        throttle: number = 5000) {
        const convStartDate: FlowDate = (startdate instanceof FlowDate) ? startdate : FlowDate.fromString(startdate);
        const convEndDate: FlowDate = (enddate instanceof FlowDate) ? enddate : FlowDate.fromString(enddate);
        const downloadDates: FlowDate[] = FlowDate.toDateArray(convStartDate, convEndDate);
        setTimeout(() => {

        }, throttle);
    }

    public download(startdate: string, samples: number) {

    }
}
