import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private http: HttpClient) {
  }


  public updateProducerSpeed(newSpeedMsgPerSec) {
    const fullUrl = environment.producerBaseUrl + '/speed-set?msgPerSec=' + newSpeedMsgPerSec;
    return this.http.get<boolean>(fullUrl).subscribe(result => {

    });
  }


}
