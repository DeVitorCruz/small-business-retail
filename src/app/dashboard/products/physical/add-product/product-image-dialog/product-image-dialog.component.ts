import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface ProductImage {
  image_path: string;
  alt_text: string;
};

interface ImageFeatures {
  image: ProductImage
}

@Component({
  selector: 'app-product-image-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './product-image-dialog.component.html',
  styleUrl: './product-image-dialog.component.css'
})
export class ProductImageDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ImageFeatures,
    private dialogRef: MatDialogRef<ProductImageDialogComponent>
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data.image);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

}
