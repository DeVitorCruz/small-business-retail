import { Routes } from '@angular/router';
import { dashboardGuard } from './core/guards/dashboard/dashboard.guard';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path:'', redirectTo: 'auth/login', pathMatch: 'full'},
    { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./auth/login/login.component')
                    .then(m => m.LoginComponent),
            },
            {
                path: 'register',
                loadComponent: () => import('./auth/register/register.component')
                    .then(m => m.RegisterComponent),
            }
        ]
    },
    { 
        path:'control', 
        component: LayoutComponent, 
        canActivate: [dashboardGuard],
        children: [
            { 
                path: 'categories', 
                loadComponent: () => import('./dashboard/products/physical/categories/categories.component')
                    .then(m => m.CategoriesComponent) 
            },
            { 
                path: 'dashboard', 
                loadComponent: () => import('./dashboard/dashboard.component')
                    .then(m => m.DashboardComponent) 
            },
            {
                path: 'sub-categories',
                loadComponent: () => import('./dashboard/products/physical/sub-categories/sub-categories.component')
                    .then(m => m.SubCategoriesComponent)
            },
            {
                path: 'product-list',
                loadComponent: ()=> import('./dashboard/products/physical/produtct-list/produtct-list.component')
                    .then(m => m.ProdutctListComponent)
            },
            {
                path: 'product-detail/:id',
                loadComponent: () => import('./dashboard/products/physical/product-detail/product-detail.component')
                .then(m => m.ProductDetailComponent),
            },
            {
                path: 'all-categories',
                loadComponent: () => import('./dashboard/categories/categories.component')
                .then(m => m.CategoriesComponent),
            },
            {
                path: 'all-sub-categories',
                loadComponent: () => import('./dashboard/sub-categories/sub-categories.component')
                .then(m => m.SubCategoriesComponent),
            },
            {
                path: 'all-sub-categories-variations',
                loadComponent: () => import('./dashboard/products/physical/variations/variations.component')
                .then(m => m.VariationsComponent),
            },
            {
                path: 'all-variation-types',
                loadComponent: () => import('./dashboard/variation-types/variation-types.component')
                .then(m => m.VariationTypesComponent)
            },
            {
                path: 'variations-value',
                loadComponent: () => import('./dashboard/products/physical/variations-value/variations-value.component')
                .then(m => m.VariationsValueComponent)
            },
            {
                path: 'add-product',
                loadComponent: () => import('./dashboard/products/physical/add-product/add-product.component')
                .then(m => m.AddProductComponent)
            },
        ] 
    },
    { 
        path:'web', 
        loadComponent:  () => import('./web/layout/layout.component')
            .then(m => m.LayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./web/features/home/home.component')
                    .then(m => m.HomeComponent)
            }
        ]
    },
    { path:'mobile', redirectTo: 'mobile/layout', pathMatch: 'full'},
    { 
        path:'mobile', 
        loadComponent:  () => import('./mobile/tabs/tabs.component')
            .then(m => m.TabsComponent),
        children: [
            {
                path: 'layout',
                loadComponent: () => import('./mobile/layout/layout.component')
                    .then(m => m.LayoutComponent),
                children: [
                    {
                        path: 'home',
                        loadComponent: ()=>import('./mobile/features/home/home.component')
                            .then(m => m.HomeComponent)
                    }
                ]

            }
        ]
    },
    { path:'**', redirectTo: 'auth/login' }
];
