import {WorkerInfo} from './worker-info.model';

export class ConsumingStateData {
  constructor(public consumerAppId: string,
              public consumerAppType: string,
              public workerInfos: WorkerInfo[],
              public lastPollRecordsCount: number,
              public recordProcessingDurationMs: number) {
  }
}

export class ConsumerAppInfo {

  constructor(public implementation: string,
              public consumerAppId: String) {
  }


}
