import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      id: [''],
      name: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe((data) => {
      this.category = data;
      this.categoryForm.patchValue(data);
    });
  }

  onSubmit(): void {
    this.categoryService.updateCategory(this.categoryForm.value).subscribe(() => {
      this.router.navigate(['/category-list']);
    });
  }
}
