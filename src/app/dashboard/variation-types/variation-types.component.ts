import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VariationTypesService } from '../../core/services/variation-types/variation-types.service';
import { MatDialog } from '@angular/material/dialog';
import { TypesDialogComponent } from './types-dialog/types-dialog.component';

interface VariationType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-variation-types',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './variation-types.component.html',
  styleUrl: './variation-types.component.css'
})
export class VariationTypesComponent implements OnInit {

  variationTypes: VariationType[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor (private variationTypesService: VariationTypesService, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadVariationTypes();
  }

  loadVariationTypes(): void {
    this.variationTypesService.getAllVariationTypes().subscribe((response) => {

      this.variationTypes = response;
      
      this.cdr.detectChanges();
    });
  }

  openVariationTypesDialog(variationType: VariationType | null = null): void {
    
    const config = {
      width: '400px',
      data: variationType || {}, 
    };
    
    const dialogRef = this.dialog.open(TypesDialogComponent, config);

    dialogRef.afterClosed().subscribe((response) => {
      if(response) {
        this.saveVariationTypes(response);
      }
    });

  }

  saveVariationTypes(variationType: VariationType): void {
    if(variationType.id) { 
      this.variationTypesService.updateVariationType(variationType).subscribe(() => {
        this.loadVariationTypes();
      });
    } else {
      this.variationTypesService.postVariationType(variationType).subscribe(() => {
        this.loadVariationTypes();
      });
    }
  }

  deleteVariationTypes(id: number): void {
    this.variationTypesService.deleteVariationType(id).subscribe(() => {
      this.loadVariationTypes();
    });
  }

}
