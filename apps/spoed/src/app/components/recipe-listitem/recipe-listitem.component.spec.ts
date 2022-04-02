import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListitemComponent } from './recipe-listitem.component';

describe('RecipeListitemComponent', () => {
  let component: RecipeListitemComponent;
  let fixture: ComponentFixture<RecipeListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
