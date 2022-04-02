import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../Recipe';

@Component({
  selector: 'spoed-epd-use-case-recipe-listitem',
  templateUrl: './recipe-listitem.component.html',
  styleUrls: ['./recipe-listitem.component.scss']
})
export class RecipeListitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onDeleteRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(recipe: any) {
    this.onDeleteRecipe.emit(this.recipe);
  }

  onEdit(recipe: any) {
    alert('Deze functionaliteit is niet geimplementeerd.');
  }

}
