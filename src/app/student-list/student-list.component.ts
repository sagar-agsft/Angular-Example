import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  hiddenFourMonth: boolean;
  
  constructor() { }

  ngOnInit() {
  }
  addStudent(){
    this.hiddenFourMonth = true;
  }
  saveStudent(){
    this.hiddenFourMonth = false;
  }

}
