import { Component, OnInit } from '@angular/core';
import { SubCategoryVariationService } from '../../../../core/services/sub-category-variation/sub-category-variation.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { VariationDialogComponent } from './variation-dialog/variation-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface DataResponse {
  subCategoriesVariationTypes: SubCategory[];
  variationTypes: VariationTypes[];
};

interface SubCategory {
  id: number,
  name: string;
  category_id: number;
  categories: Category;
  variations_types: VariationTypes[];
};

interface VariationTypes {
  id: number;
  name: string;
};

interface Category {
  id: number;
  name: string;
};

@Component({
  selector: 'app-variations',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './variations.component.html',
  styleUrl: './variations.component.css'
})
export class VariationsComponent implements OnInit {

  dataResponse: DataResponse = {
    subCategoriesVariationTypes: [],
    variationTypes: []
  };

  searchTerm: string = '';

  variationTypes: VariationTypes[] = [];

  selectedSubCategoryVariations: VariationTypes[] = [];

  displayedColumns: string[] = ['name', 'category', 'actions'];

  variationColumns: string[] = ['variationType'];

  selectedSubCategoryId?: number;

  constructor(private subCategoryVariationService: SubCategoryVariationService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.loadSubCategoryVariation();
  }
  
  loadSubCategoryVariation(): void {
    this.subCategoryVariationService.getSubCategoriesWithVariations().subscribe((data) => {
      
      this.dataResponse.subCategoriesVariationTypes = data.subCategoriesVariationTypes;

      this.dataResponse.variationTypes = data.variationTypes;

      this.cdr.detectChanges();

    });
  }

  openVariationDialog(subCategoryVariation: SubCategory | null = null): void {
    
    this.selectedSubCategoryId = subCategoryVariation?.id;
        
    this.variationTypes = this.dataResponse.variationTypes.map((type: VariationTypes) => ({
      ...type,
      selected: subCategoryVariation?.variations_types.some(
        (associatedType: VariationTypes) => associatedType.id === type.id 
      ),
    }));

    const dialogRef = this.dialog.open(VariationDialogComponent, {
      width: '400px',
      data: {
        subCategoryId: this.selectedSubCategoryId,
        variationTypes: this.variationTypes,
        subCategories: this.dataResponse.subCategoriesVariationTypes
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.saveVariations(result);
      }
    });

  }

  saveVariations(selectedVariationTypeIds: number[]): void {
    
    this.subCategoryVariationService.postSubCategoryVariations({
      sub_category_id: this.selectedSubCategoryId,
      variation_type_ids: selectedVariationTypeIds
    })
    .subscribe(() => {
      this.loadSubCategoryVariation();
    }); 
  
  }

  onSearch(): void {
    
  }

}
