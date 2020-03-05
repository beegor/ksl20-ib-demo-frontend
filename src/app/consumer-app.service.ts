import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PollInfo} from './consumer-app/poll-info.model';
import {ConsumerAppInfo, ConsumingStateData} from './consumer-app/consumer-data.model';


@Injectable({
  providedIn: 'root'
})
export class ConsumerAppService {


  constructor(private http: HttpClient) {
  }

  public getConsumerAppTypes(): Observable<string[]> {
    const fullUrl = environment.consumerAppBaseUrl + '/list-types';
    return this.http.get<string[]>(fullUrl);
  }

  public getConsumerAppList(): Observable<ConsumerAppInfo[]> {
    const fullUrl = environment.consumerAppBaseUrl + '/list';
    return this.http.get<ConsumerAppInfo[]>(fullUrl);
  }

  public startConsumerApp(appType: string): Observable<any> {
    const fullUrl = environment.consumerAppBaseUrl + '/start?impl=' + appType;
    return this.http.get<any>(fullUrl);
  }

  public fetchPollInfo(): Observable<PollInfo[]> {
    const fullUrl = environment.consumerAppBaseUrl + '/poll-history';
    return this.http.get<PollInfo[]>(fullUrl);
  }

  public fetchConsumingStateData(): Observable<ConsumingStateData> {
    const fullUrl = environment.consumerAppBaseUrl + '/state-data';
    return this.http.get<ConsumingStateData>(fullUrl);
  }


  public updateRecordProcessingDuration(durationMs) {
    const fullUrl = environment.consumerAppBaseUrl + '/record-processing-duration-set?durationMs=' + durationMs;
    return this.http.get<boolean>(fullUrl).subscribe(result => {
    });
  }

}
