import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MainContentComponent } from '../main-content/main-content.component';
import { CategoryService } from '../../../core/services/category/category.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { FlatTreeControl } from '@angular/cdk/tree';
import { TREE_DATA } from './tree-data.content';
import { SideBarMenu } from './sidebar-menu';
import { SideBarMenuNode } from './sidebar-menu-node';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MainContentComponent,
    MatListModule,
    NgFor,
    NgIf,
    NgClass,
    RouterLink,
    MatExpansionModule,
    CdkAccordionModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})  
export class SideBarComponent { 
  
  menu = TREE_DATA;
  
  isSidebarVisible: boolean = true;

  @Input() isSidebarOpen: boolean = true;

  constructor(private categoryService: CategoryService) {}

  getAllCateregories(): void {

    this.categoryService.getCategories().subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error('Error loading categories data', error);
      }
    });
  }

  hasChildren(item: any): boolean {
    return Array.isArray(item.children) && item.children.length > 0;
  }
}
