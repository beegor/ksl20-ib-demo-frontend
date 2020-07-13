export class ProducerInfo {
  constructor(public producerId: string, public targetTopic: string, public speedMsgPerSec: number) {
  }
}
