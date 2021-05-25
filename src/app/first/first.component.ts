import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router) { }

  onSubmit(form: NgForm){
    this.router.navigate(['second'])
    console.log("sunbmit")
  }
  ngOnInit(): void {
  }

}
