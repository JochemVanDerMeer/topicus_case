import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spoed-epd-use-case-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  @Output() onAddRecipe: EventEmitter<any> = new EventEmitter();
  name: string;
  quantity: number;
  quantityUnit: string;
  description: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const newRecipe = {
      name: this.name,
      quantity: this.quantity,
      quantityUnit: this.quantityUnit,
      description: this.description,
    };

    this.onAddRecipe.emit(newRecipe);
    alert('Het recept is toegevoegd');
    this.name = '';
    this.quantity = 0;
    this.quantityUnit = '';
    this.description = '';
  }
}