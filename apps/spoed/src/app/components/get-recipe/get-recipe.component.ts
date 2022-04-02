import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'spoed-epd-use-case-get-recipe',
  templateUrl: './get-recipe.component.html',
  styleUrls: ['./get-recipe.component.scss']
})
export class GetRecipeComponent implements OnInit {
  recipes: Recipe[] = [];

  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
