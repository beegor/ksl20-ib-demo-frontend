export class WorkerInfo {

  constructor(public totalRecords: number, public processedRecords: number, public threadName: string) {
  }

  public getPercentage(): number {
    let percent = this.processedRecords / this.totalRecords;
    percent = Math.round(percent * 100);
    return percent;
  }
}
