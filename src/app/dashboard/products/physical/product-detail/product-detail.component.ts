import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectorRef } from '@angular/core'; 

interface Product {
  name: string;
  price: number;
  quantity: number;
  description: string;
  sub_categories: SubCategory;
  images: Images[];
  product_reviews: ProductReview[]
}

interface SubCategory {
  name: string;
  variations: Variations[]
}

interface Variations {
  color: string;
  size: string;
  gender: string;
}

interface Images {
  image_path: string;
  alt_text: string;
}

interface ProductReview {
  stars: number;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    NgFor,
    NgIf,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productView: Product = {
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    sub_categories: {
      name: '',
      variations: [
        {
          color: '',
          size: '',
          gender: '',
        }
      ]
    },
    images: [{
      image_path: '',
      alt_text: ''
    }],
    product_reviews: [{
      stars: 0
    }]
  };

  productDetail: Product & {VARIATIONS: Variations[], PRODUCTS_IMAGES: string[], PRODUCTS_ALT_TEXT: string[], PRODUCT_REVIEWS: number[] } = {
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    sub_categories: {
      name: '',
      variations: [
        {
          color: '',
          size: '',
          gender: '',
        }
      ]
    },
    images: [{
      image_path: '',
      alt_text: ''
    }],
    product_reviews: [{
      stars: 0
    }],
    VARIATIONS: [{
      color: '',
      size: '',
      gender: ''
    }],
    PRODUCTS_IMAGES: [],
    PRODUCTS_ALT_TEXT: [],
    PRODUCT_REVIEWS: []
  };

  selectedImage: string = this.productView.images[0].image_path;

  selectedAltText: string = this.productView.images[0].alt_text;

  selectedVariationColor: string = this.productView.sub_categories.variations[0].color;

  selectedVariationSize: string = this.productView.sub_categories.variations[0].size;

  selectedVariationGender: string = this.productView.sub_categories.variations[0].gender;

  imageSelectedText: boolean = false;

  quantity: number = 1;

  productId: number | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.getProductView(this.productId);
    });
  }

  getProductView(productId: number): void {
    this.productService.getProduct(productId).subscribe((data) => {
      console.log(data);

      this.productView = data;

      this.cdr.detectChanges();

      console.log(this.productView);

    });
  }

  flattenProducts(grossProduct: Product): void {
    
    const VARIATIONS = grossProduct.sub_categories.variations.map((productVariations: Variations) => ({
      color: productVariations.color,
      size: productVariations.size,
      gender: productVariations.gender
    })) || [];

    const PRODUCTS_IMAGES = grossProduct.images.map((productImage: Images) => productImage.image_path) || [];

    const PRODUCTS_ALT_TEXT = grossProduct.images.map((productImage: Images) => productImage.alt_text);

    const PRODUCT_REVIEWS = grossProduct.product_reviews.map((productReview: ProductReview) => productReview.stars);

    this.productDetail = {
      ...grossProduct,
      VARIATIONS,
      PRODUCTS_IMAGES,
      PRODUCTS_ALT_TEXT,
      PRODUCT_REVIEWS
    };

  }

  onImageSelect(image: string): void {
    this.selectedImage = image;
  }

  ratingCalculating(productView: Product): number {
  
    let allPlusRate: number = 0;

    for (let rate of productView.product_reviews) {
      allPlusRate += rate.stars;
    }

    let rateResult: number = (allPlusRate)/(productView.product_reviews.length);

    return rateResult? rateResult : 3;

  }

  onEdit(): void {
    console.log('Edit product');
  }

  onDelete(): void {
    console.log('Delete product');
  }

}
