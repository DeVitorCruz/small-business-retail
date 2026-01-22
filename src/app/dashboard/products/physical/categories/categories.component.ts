import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryService } from '../../../../core/services/category/category.service';
import { ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Product {
  id: number;
  sub_category_id: number;
  name: string;
  price: number;
  image: string;
};

interface SubCategory {
  id: number;
  name: string;
  products: Product[]
}

interface Category {
  id: number;
  name: string;
  sub_categories: SubCategory[]
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    RouterModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  displayColumns: string[] = ['image', 'name', 'price', 'status', 'category', 'options'];

  categories: Category[] = [];

  searchTerm: string = '';

  products: Array<Product & { category: string; subCategory: string }> = [];

  constructor(private categoryService: CategoryService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getProductCategories();
  }

  openAddCategoryDialog() {
    this.getProductCategories();
  }

  getProductCategories() {
    this.categoryService.getProductCategories().subscribe(data => {
      this.categories = data;
      this.flattenProducts();
      console.log(this.products);
    });
  }

  onSearch() {
    // const search = this.searchTerm.toLowerCase();
    // this.categories.filter = search.trim().toLowerCase();
  }

  editCategory(category: any) { }

  deleteCategory(categoryId: number) { }

  flattenProducts(): void {
    this.products = this.categories.reduce((acc: any[], category: Category) => {
      const productsFormCategory = category.sub_categories.flatMap((subCategory: SubCategory) => {
        return subCategory.products.map((product: Product) => {
          return {
            ...product,
            category: category.name,
            subCategory: subCategory.name
          };
        });
      }); 

      return [...acc, ...productsFormCategory];
    }, []); 

    this.cdr.detectChanges();

  }
}
