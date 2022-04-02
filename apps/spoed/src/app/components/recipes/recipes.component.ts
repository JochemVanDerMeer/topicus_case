import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'spoed-epd-use-case-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe).subscribe(() => (this.recipes=this.recipes.filter((r) => r.id !== recipe.id)));
  }

  addRecipe(recipe: Recipe) {
    this.recipeService.addRecipe(recipe).subscribe(recipes => this.recipes.push(recipe));
  }

}
