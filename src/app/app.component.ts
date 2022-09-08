import { Component } from '@angular/core';
import { ToastService, TOAST_STATE } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toast-demo';

  constructor(public toast: ToastService) {}

  showCancelToastr() {
    this.toast.showToast(
      TOAST_STATE.danger,
      'Something went wrong, could not register'
    );

    this.dismissError();
  }

  showAcceptToastr() {
    this.toast.showToast(
      TOAST_STATE.success,
      'Congratulations'
    );

    this.dismissError();
  }


  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
