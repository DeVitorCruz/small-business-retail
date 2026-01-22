import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../../../../core/services/product/product.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface Product {
  id: number;
  name: string;
  price: number;
  sub_categories: SubCategory;
  images: Images[];
  product_reviews: ProductReview[];
};

interface SubCategory {
  name: string;
  variations: Variations[]
}

interface Images {
  image_path: string;
}

interface Variations {
  color: string;
  size: string;
  gender: string;
}

interface ProductReview {
  stars: number
}

@Component({
  selector: 'app-produtct-list',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatCardImage,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './produtct-list.component.html',
  styleUrl: './produtct-list.component.css'
})
export class ProdutctListComponent implements OnInit {

  products: Product[] = [];

  productsTest: Array<Product & {variations: Variations[], productImage: string[], productReview: number[] } > = [
    {
      id: 0,
      name: 'Title',
      price: 0.00,
      sub_categories: {
        name: 'sub-category',
        variations: [
          {
            color: 'color-value',
            size:'size-value',
            gender:'gender-value'
          }
        ]
      },
      images: [
        {
          image_path: 'http://somevalue.com/some-path'
        }
      ],
      variations: [
        {
          color: 'color-value',
          size:'size-value',
          gender:'gender-value'
        }
      ],
      productImage: [''],
      product_reviews: [
        {
          stars: 3
        }
      ],
      productReview: [3]
    }
  ];

  productsCard: Array<Product & { variations: Variations[], productImage: string[], productReview: number[] }> = [];

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getVariationsProducts();
  }

  getVariationsProducts(): void {
    this.productService.getVariationsProducts().subscribe((data) => {
      this.flattenProducts(data);
      console.log(this.productsCard);
    });
  }

  flattenProducts(grossProducts: any[]): void { 
    this.productsCard = grossProducts.map((product: Product) => {
      
      const productImage = product.images?.map((image: Images) => image.image_path) || [];
      
      const productReview = product.product_reviews?.map((review) => review.stars);

      const variations = product.sub_categories?.variations?.map((variation: Variations) => ({
        color: variation.color,
        size: variation.size,
        gender: variation.gender
      })) || [];
      
      return {
        ...product,
        variations, 
        productImage,
        productReview
      };
    
    });

    this.cdr.detectChanges();
  }
}
