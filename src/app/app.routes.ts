import { Routes } from '@angular/router';

export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: '', redirectTo: '/category-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
