import { Component, OnInit } from '@angular/core';
import { SubCategory } from './sub-category.mode';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SubCategoryService } from '../../core/services/sub-category/sub-category.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sub-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sub-categories.component.html',
  styleUrl: './sub-categories.component.css'
})
export class SubCategoriesComponent implements OnInit {
  subCategories: SubCategory[] = [];

  displayColumns: string[] = ['name', 'category', 'actions'];
  
  constructor(private subCategoryService: SubCategoryService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadSubCategories();
  }

  loadSubCategories(): void {
    this.subCategoryService.getAllSubCategories().subscribe((data) => { 
      this.subCategories = data; 
      this.cdr.detectChanges();
    }); 
  }


}
