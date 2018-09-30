import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../services/animations';
//import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
  constructor(private toastr: ToastrService) {
    
  }

  onClick() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
    
    }
}
