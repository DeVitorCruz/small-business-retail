import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface VariationType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-types-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './types-dialog.component.html',
  styleUrl: './types-dialog.component.css'
})
export class TypesDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<TypesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VariationType
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

}
