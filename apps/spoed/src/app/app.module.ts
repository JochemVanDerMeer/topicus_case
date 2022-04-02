import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ButtonComponent } from './components/button/button.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListitemComponent } from './components/recipe-listitem/recipe-listitem.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { GetRecipeComponent } from './components/get-recipe/get-recipe.component';

const appRoutes: Routes = [ 
  {path: '', component: OverviewComponent},
  {path: 'overzicht', component: OverviewComponent},
  {path: 'recepten-beheren', component: EditComponent}
]

@NgModule({
  declarations: [AppComponent, MainComponent, EditComponent, OverviewComponent, ButtonComponent, RecipesComponent, RecipeListitemComponent, AddRecipeComponent, EditRecipeComponent, GetRecipeComponent],
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatDividerModule, MatTableModule, MatInputModule, MatRadioModule, FormsModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA  ]
})
export class AppModule {}
