import { Component, ViewEncapsulation } from '@angular/core';
//import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  /*constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.limit = 100;
    this.toastyConfig.showClose = true;
  }*/

  /*addToast() {
    // Just add default Toast with title only
    this.toastyService.default('Hi there');
    // Or create the instance of ToastOptions
    var toastOptions: ToastOptions = {
      title: "My title",
      msg: "The message",
      //showClose: true,
      timeout: 5000,
      //theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };

    this.toastyService.info(toastOptions);
    this.toastyService.success(toastOptions);
    this.toastyService.wait(toastOptions);
    this.toastyService.error(toastOptions);
    this.toastyService.warning(toastOptions);
  }*/

  
}
