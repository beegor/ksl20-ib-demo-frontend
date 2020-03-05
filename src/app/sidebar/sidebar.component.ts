import {Component, OnInit} from '@angular/core';
import {ConsumerAppService} from '../consumer-app.service';
import {ConsumerAppInfo} from '../consumer-app/consumer-data.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  protected consumerApps: ConsumerAppInfo[] = [];

  closeResult: string;

  constructor(private consumerAppService: ConsumerAppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.consumerAppService.getConsumerAppList().subscribe(value => {
      this.consumerApps = value;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
