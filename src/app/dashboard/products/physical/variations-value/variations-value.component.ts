import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SubCategoryService } from '../../../../core/services/sub-category/sub-category.service';
import { VariationValuesService } from '../../../../core/services/variation-values/variation-values.service';
import { MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { VariationsValueDialogComponent } from './variations-value-dialog/variations-value-dialog.component';
import { MatDialog } from '@angular/material/dialog';


interface VariationLog {
  variation_id: number;
  value: string;
  sub_category_id: number;
};

interface Variation {
  sub_category_id: number | null;
  variation_type_id: number | null;
  values: string[];
};

interface SubCategory {
  id: number;
  name: string;
};

interface VariationType {
  id: number;
  name: string;
  variations: Value[];
};

interface SubCategoryVariation {
  id: number;
  name: string;
  variations_types: VariationType[];
};

interface Value {
  id: number;
  value: string;
};

interface TransformedVariation {
  type_id?: number;
  type_name?: string;
  variation_id: number;
  value: string;
};

@Component({
  selector: 'app-variations-value',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './variations-value.component.html',
  styleUrl: './variations-value.component.css'
})
export class VariationsValueComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ COMMA, ENTER ];

  variationValues: string[] = [];

  subCategories: SubCategory[] = [];
  variationTypes: VariationType[] = [];
  variationsValues: Value[] = [];
  variations: SubCategoryVariation[] | TransformedVariation[] = [];
  transformedVariations: TransformedVariation[] = [];
  selectedSubCategory: number | null = null;
  selectedVariationType: number | null = null;
  newVariationValue: string = '';

  displayedColumns: string[] = ['type', 'value', 'actions'];

  constructor(private subCategoryService: SubCategoryService, private variationValueService: VariationValuesService, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadSubCategories();
  }

  loadSubCategories(): void {
    this.subCategoryService.getAllSubCategories().subscribe((response: SubCategory[]) => {
      this.subCategories = response;
      this.cdr.detectChanges();
    });
  }

  onSubCategoryChange(event: any): void {
    const subCategoryId: number = event.value;
    this.loadVariationTypes(subCategoryId);
  }

  onVariationTypeChange(event: any): void {
    const variationId: number = event.value;
    this.loadVariationValue(variationId);
  }

  loadVariationTypes(sub_category_id: number): void {
    this.variationValueService.getSubCategoryVariationTypes(sub_category_id).subscribe((response: SubCategoryVariation) => {
      this.variationTypes = response.variations_types;
      this.transformedVariations = this.transFormResponseData(response.variations_types);
      this.cdr.detectChanges();
    });
  }

  loadVariationValue(variation_id: number): void {
    
    this.variationValues = [];
    
    this.variationTypes.forEach((variationType: VariationType) => {
      
      if (variationType.id === variation_id) {
        
        this.variationsValues = variationType.variations;

        this.variationsValues.forEach((variationValue: Value) => {
          this.variationValues.push(variationValue.value);
        });
      } 

      this.cdr.detectChanges();
    });
  }

  addNewVariation(): void {

    const variation: Variation = {
      sub_category_id: this.selectedSubCategory,
      variation_type_id: this.selectedVariationType,
      values: this.variationValues,
    };

    this.variationValueService.postSubCategoryVariationTypes(variation).subscribe({
      next: (response: any) => {
        
        this.reloadTable();
        
        console.log('Varitiona response was posted successfully:', response)
      },
      error: (error: any) => console.error('Error adding variation values:', error),
      complete: () => console.info("It's completed")
    });

  }

  transFormResponseData(typeVariations: VariationType[]): TransformedVariation[] {
    const transformed: TransformedVariation[] = [];
      
    typeVariations.forEach((variationType: VariationType) => {
      variationType.variations.forEach((value: Value) => {
        transformed.push({
          type_id: variationType.id,
          type_name: variationType.name,
          variation_id: value.id,
          value: value.value
        });
      });
    });
    return transformed;
  }

  editVariation(transformedVariation: TransformedVariation): void {

  }

  removeValue(value: string): void {
    const index: number = this.variationValues.indexOf(value);

    if (index >= 0) {
      this.variationValues.splice(index, 1);
    }
  }

  addValue(event: MatChipInputEvent): void {
    const value: string = (event.value || '').trim();

    if (value) {
      this.variationValues.push(value);
    }

    event.chipInput!.clear();

  }

  openVariationDialog(transformedVariation: TransformedVariation): void {

    const dialog = this.dialog.open(VariationsValueDialogComponent, {
      width: '400px',
      data: {
        variation_id: transformedVariation.variation_id,
        value: transformedVariation.value,
        sub_category_id: this.selectedSubCategory
      },
    });

    dialog.afterClosed().subscribe((variationLog: VariationLog) => {
      if (variationLog) {
        this.saveVariation(variationLog);
      }
    });

  }

  saveVariation(VariationLog: VariationLog): void {
    this.variationValueService.updateSubCategoryVariationTypes(VariationLog, VariationLog.variation_id).subscribe({
      next: () => {
        this.reloadTable();
      },
      error: () => console.error("The variation update failed!"),
      complete: ()=> console.info("The variation was updated successufully!")
    });
  }

  deleteVariation(transformedVariation_id: number): void {
    this.variationValueService.deleteSubCategoryVariationTypes(transformedVariation_id).subscribe({
      next: () => {
        this.reloadTable();
      },
      error: () => console.error("The variation update failed!"),
      complete: ()=> console.info("The variation was updated successufully!")
    });
  }

  reloadTable(): void {
    if (this.selectedSubCategory) {
      this.variationValueService.getSubCategoryVariationTypes(this.selectedSubCategory).subscribe((subCategoryVarition: SubCategoryVariation) => {        
        this.variationTypes = subCategoryVarition.variations_types;
        this.transformedVariations = this.transFormResponseData(subCategoryVarition.variations_types);
        this.cdr.detectChanges();
      });
    }
  }

}
