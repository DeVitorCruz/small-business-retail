import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Credentials } from './credentials';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgFor } from '@angular/common';
import { Authority } from './authority';
import { RouterOutlet } from '@angular/router';
import { MatIconButton } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatIconButton,
    RouterModule,
    NgFor,
    RouterOutlet
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  
  isRegister: boolean = false;

  activeTextIndex: number = 0;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private route: ActivatedRoute) {
    
    this.matIconRegistry.addSvgIcon(
      'twitter-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/x-twitter-brands-solid (1).svg')
    );
    
    this.matIconRegistry.addSvgIcon(
      'instagram-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram-brands-solid.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/circle-solid.svg')
    );

  }

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(urlSegments => {  
      const currentPath = urlSegments.map(segment => segment.path).join('/');
      this.isRegister = currentPath.includes('register');
    });
  }

  toggleAuth(): void {
    this.isRegister = !this.isRegister; 
  }

  changeText(index: number): void {
    this.activeTextIndex = index;
  }
}
