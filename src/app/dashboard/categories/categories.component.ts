import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from '../../core/services/category/category.service';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(private categoryService: CategoryService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => { 
      
      this.categories = data; 
      console.log(this.categories); 
      
      this.cdr.detectChanges();

    });
  }

  openCategoryDialog(category?: Category): void {
    
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '400px',
      data: category || {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.id) {
          this.categoryService.updateCategory(result, result.id).subscribe(() => { this.loadCategories(); });
        } else {
          this.categoryService.postCategory(result).subscribe(() => { this.loadCategories(); });
        }
      }
    });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => { this.loadCategories(); });
  }
}
