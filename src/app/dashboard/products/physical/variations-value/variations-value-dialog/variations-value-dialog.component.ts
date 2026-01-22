import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

interface VariationLog {
  variation_id: number;
  value: string;
  sub_category_id: number;
};

@Component({
  selector: 'app-variations-value-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './variations-value-dialog.component.html',
  styleUrl: './variations-value-dialog.component.css'
})
export class VariationsValueDialogComponent {

  public variation_id?: number;

  public value?: string;

  public sub_category_id?: number;

  constructor(
    public dialogRef: MatDialogRef<VariationsValueDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: VariationLog
  ) {
    this.variation_id = data.variation_id;
    this.value = data.value;
    this.sub_category_id = data.sub_category_id;
  }

  save(): void {
    this.dialogRef.close({
      variation_id: this.variation_id,
      sub_category_id: this.sub_category_id, 
      value: this.value,
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
