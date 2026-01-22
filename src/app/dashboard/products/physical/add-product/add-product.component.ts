import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SubCategoryService } from '../../../../core/services/sub-category/sub-category.service';
import { VariationValuesService } from '../../../../core/services/variation-values/variation-values.service';
import { ProductService } from '../../../../core/services/product/product.service';
import { MatIconModule } from '@angular/material/icon';
import { ProductImageDialogComponent } from './product-image-dialog/product-image-dialog.component';
import { MatDialog } from '@angular/material/dialog';  
import { ChangeDetectorRef } from '@angular/core';


interface SubCategory {
  id: number;
  name: string;
};

interface ProductVariations {
  variation_type_id:number;
  variation_id: number;
};

interface ProductInventoryImage {
  sub_category_id?: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  product_code: string; 
  images?: ProductImage[];
  variations?: ProductVariations[];
};

interface SubCategoryVariation {
  id: number;
  name: string;
  variations_types: VariationsType[]
};

interface VariationsType {
  id: number;
  name: string;
  variations: Variation[];
  control: FormControl;
};

interface Variation {
  id: number;
  sub_category_id: number;
  variation_type_id: number;
  value: string;
}

interface ProductImage {
  image_path: string;
  alt_text: string;
};

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  
  productInventoryImage: ProductInventoryImage = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    sub_category_id: undefined,
    product_code: '',
    images: [],
    variations: []
  };
  productForm: FormGroup;
  subCategories: SubCategory[] = [];
  productImages: ProductImage[] = Array(6).fill({ image_path: '', alt_text: '' });
  variationsTypes: VariationsType[] = [];
  variations: Variation[] = [];

  subCategoryVariation?: SubCategoryVariation;

  constructor (
    private fb: FormBuilder, 
    private subCategoryService: SubCategoryService, 
    private variationValuesService: VariationValuesService, 
    private productService: ProductService, 
    private dialog: MatDialog, 
    private cdr: ChangeDetectorRef) {

    this.productForm = this.fb.group(this.productInventoryImage); 

  }

  ngOnInit(): void {
      this.loadSubCategories();
  }

  loadSubCategories(): void {
    this.subCategoryService.getAllSubCategories().subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    });
  }

  onSubCategoryChange(sub_category_id: number): void {
    this.variationValuesService.getSubCategoryVariationTypes(sub_category_id).subscribe((subCategoryVariation: SubCategoryVariation) => {
      
      this.variationsTypes = subCategoryVariation.variations_types.map((variationsType: VariationsType) => ({
        ...variationsType,
        control: new FormControl(''),
      }));

      this.variationsTypes.forEach((variationsType: VariationsType) => {
        this.productForm.addControl(variationsType.name, variationsType.control);
      });

    });
  }

  onSubmit(): void {
    const productDataLog: ProductInventoryImage = this.productForm.value;

    productDataLog.variations = this.variationsTypes.map((variationsType: VariationsType) => ({
      variation_type_id: variationsType.id,
      variation_id: variationsType.control.value
    }));
    
    productDataLog.images = this.productImages.filter((productImage: ProductImage) => productImage.image_path !== '');

    this.productService.createProduct(productDataLog).subscribe({
      next: () => console.log('Product was added successfully!'), 
      error: () => console.error('The product creation was failed'), 
      complete: () => console.info('Product was added successfully!') 
    });

  }

  openImageDialog(index: number): void {
    const dialogRef = this.dialog.open(ProductImageDialogComponent, {
      width: "400px",
      data: { image: { ...this.productImages[index]} }
    });

    dialogRef.afterClosed().subscribe((productImage: ProductImage) => {
      if (productImage) {
        this.productImages[index] = productImage;
      
        this.cdr.detectChanges();
      }
    });

  }

}
