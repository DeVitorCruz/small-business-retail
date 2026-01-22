import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../../../../core/services/sub-category/sub-category.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

interface SubCategory {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  sub_category_id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-sub-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export class SubCategoriesComponent implements OnInit {
  
  displayColumns: string[] = ['image', 'name', 'price', 'status', 'sub-category', 'options'];
  
  subCategories: SubCategory[] = [];

  searchTerm: string = '';

  products: Array<Product & {subCategory: string}> = [];

  constructor(private subCategoryService: SubCategoryService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getProductsSubCategories();  
  }

  getProductsSubCategories(): void {
    this.subCategoryService.getProductsCategories().subscribe((data) => {
      this.subCategories = data;
      this.flattenProducts();

      console.log(this.products);
      
    });
  }

  flattenProducts(): void {
    this.products = this.subCategories.reduce((acc: any[], subCategory: SubCategory) => {
      const productsFormSubCategory = subCategory.products.map((product: Product) => {
        return {
          ...product,
          subCategory: subCategory.name
        };
      });

      return [...acc, ...productsFormSubCategory];

    }, []);

    this.cdr.detectChanges();
  }

  onSearch(): void {}

  openAddCategoryDialog(): void {}

  editCategory(product: any): void {}

  deleteCategory(id: number): void {}

}
