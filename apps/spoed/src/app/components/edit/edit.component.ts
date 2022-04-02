import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spoed-epd-use-case-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    console.log("test");
  }

  editRecipe() {
    console.log("editrecipe");
   }
}
