import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Recipe } from '../Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http:HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    const url = `${this.apiUrl}/${recipe.id}`;
    return this.http.delete<Recipe>(url);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> { 
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
}
