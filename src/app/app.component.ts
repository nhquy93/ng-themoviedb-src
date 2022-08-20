import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-themoviedb';

  modalRef: MdbModalRef<LoginComponent> | null = null;
  config = {
    animation: true,
    backdrop: false,
    containerClass: 'center',
    data: {
      title: 'OAuth Demo Dialog',
    },
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-dialog-centered',
  };

  constructor(
    private readonly googleApi: GoogleApiService,
    private modalService: MdbModalService) {
    googleApi.userGoogle.subscribe((user)=> console.log(user));
  }

  openModal() {
    this.modalRef = this.modalService.open(LoginComponent, this.config);
  }
}
