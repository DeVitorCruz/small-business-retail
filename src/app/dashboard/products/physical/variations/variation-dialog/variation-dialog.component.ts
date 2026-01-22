import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SubCategoryVariationService } from '../../../../../core/services/sub-category-variation/sub-category-variation.service';


interface DialogDataRef {
  subCategoryId?: number;
  variationTypes: VariationTypes[];
  subCategories: SubCategory[];
};

interface VariationTypes {
  id: number;
  name: string;
  selected?: boolean;
};

interface SubCategory {
  id: number,
  name: string;
  category_id: number;
  categories?: Category;
  variations_types: VariationTypes[];
};

interface Category {
  id: number;
  name: string;
};

@Component({
  selector: 'app-variation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './variation-dialog.component.html',
  styleUrl: './variation-dialog.component.css'
})
export class VariationDialogComponent {
  
  variationTypes: VariationTypes[] = [];

  selectedSubCategory?: number;
 
  subCategories: SubCategory[] = [];

  constructor(
    public subCategoryVariationService: SubCategoryVariationService,
    public dialogRef: MatDialogRef<VariationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataRef 
  ) {
    this.variationTypes = data.variationTypes;
    this.subCategories = data.subCategories;
    this.selectedSubCategory = data.subCategoryId;
  }

  save(): void {
    const selectedVariationtypes = this.variationTypes
      .filter((type: VariationTypes) => type.selected)
      .map((type: VariationTypes) => type.id);
    
    this.dialogRef.close(selectedVariationtypes);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
