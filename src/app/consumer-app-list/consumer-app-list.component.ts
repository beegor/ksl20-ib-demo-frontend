import {Component, OnInit} from '@angular/core';
import {ConsumerAppService} from '../consumer-app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consumer-app-list',
  templateUrl: './consumer-app-list.component.html',
  styleUrls: ['./consumer-app-list.component.css']
})
export class ConsumerAppListComponent implements OnInit {

  implementations: string[] = [];

  constructor(private consumerAppService: ConsumerAppService, private router: Router) {
  }

  ngOnInit(): void {
    this.consumerAppService.getConsumerAppTypes().subscribe(value => {
      this.implementations = value;
    });
  }

  protected startConsuming(impl: string) {
    this.consumerAppService.startConsumerApp(impl)
      .subscribe(result => {
        console.log('Started ', impl, ' with result: ', result);
        this.router.navigate(['/consumer-app/' + impl]);
      });
  }

}
