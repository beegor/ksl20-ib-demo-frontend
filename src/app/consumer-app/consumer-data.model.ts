import {WorkerInfo} from './worker-info.model';

export class ConsumingStateData {
  constructor(public workerInfos: WorkerInfo[],
              public lastPollRecordsCount: number,
              public producerSpeedMsgPerSec: number,
              public recordProcessingDurationMs: number) {
  }

}
