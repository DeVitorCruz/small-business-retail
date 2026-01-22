import { SideBarMenu } from './sidebar-menu';

export const TREE_DATA: SideBarMenu[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: 'dashboard'
  },
  {
    label: 'Product',
    icon: 'storefront',
    expanded:false,
    children: [
      {
        label: 'Physical',
        icon: 'category',
        expanded: false,
        children: [
          { label: 'Category', route: 'categories', icon: 'label' },
          { label: 'Sub Category', route: 'sub-categories', icon: 'label_outline' },
          { label: 'Product List', route: 'product-list', icon: 'list' },
          { label: 'Variations', route: '/control/all-sub-categories-variations', icon: 'filter_list' },
          { label: 'values', route: '/control/variations-value', icon: 'edit' },
          { label: 'Add Product', route: '/control/add-product', icon: 'add_circle' }
        ]
      },
      { 
        label: 'Digital', 
        icon: 'cloud',
        expanded: false,
        route: 'digital-products',
        children: [
          { label: 'Category', route: 'category', icon: 'label' },
          { label: 'Sub Category', route: 'sub-category', icon: 'label_outline' },
          { label: 'Product List', route: 'product-list', icon: 'list' },
          { label: 'Product Detail', route: 'product-detail', icon: 'info' },
          { label: 'Add Product', route: 'add-product', icon: 'add_circle' }
        ] 
      },
      { 
        label: 'Product Review',
        icon: 'rate_review',
        expanded: false, 
        route: 'product-review' 
      }
    ]
  },
  {
    label: 'Orders',
    icon: 'shopping_cart',
    route: 'orders',
    expanded: false,
    children: [
      {
        label: 'Order List',
        icon: 'list',
        route: 'digital-products'
      },
      { 
        label: 'Order Tracking', 
        icon: 'track_changes',
        route: 'digital-products' 
      },
      { 
        label: 'Order Details', 
        icon: 'details',
        route: 'digital-products' 
      }
    ]
  },
  {
    label: 'Sales',
    icon: 'attach_money',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'Orders',
        icon: 'local_grocery_store',
        route: '/digital-products'
      },
      { 
        label: 'Transactions', 
        icon: 'business',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Coupons',
    icon: 'card_membership',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'List Coupons',
        icon: 'list',
        route: '/digital-products'
      },
      { 
        label: 'Create Coupons', 
        icon: 'create',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Pages',
    icon: 'pageview',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'List Page',
        icon: 'list',
        route: '/digital-products'
      },
      { 
        label: 'Create Page', 
        icon: 'create',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Media',
    icon: 'perm_media',
    route: '/sales'
  },
  {
    label: 'Menus',
    icon: 'menu',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'Menu lists',
        icon: 'list',
        route: '/digital-products'
      },
      { 
        label: 'Create Menu', 
        icon: 'create',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Users',
    icon: 'supervised_user_circle',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'User List',
        icon: 'list',
        route: '/digital-products'
      },
      { 
        label: 'Create User', 
        icon: 'create',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Vendros',
    icon: 'supervisor_account',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'Vendor List',
        icon: 'list',
        route: '/digital-products'
      },
      { 
        label: 'Create Vendor', 
        icon: 'create',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Localization',
    icon: 'local_shipping',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'Translations',
        icon: 'track_changes',
        route: '/digital-products'
      },
      { 
        label: 'Currency Rates', 
        icon: 'speaker_phone',
        route: '/digital-products' 
      },
      { 
        label: 'Taxes', 
        icon: 'attach_money',
        route: '/digital-products' 
      }
    ]
  },
  {
    label: 'Support Ticket',
    icon: 'settings_cell',
    route: '/sales'
  },
  {
    label: 'Reports',
    icon: 'report_problem',
    route: '/sales'
  },
  {
    label: 'Settings',
    icon: 'settings',
    route: '/sales',
    expanded: false,
    children: [
      {
        label: 'Profile',
        icon: 'supervisor_account',
        route: '/digital-products'
      }
    ]
  },
  {
    label: 'Invoice',
    icon: 'receipt',
    route: '/sales'
  },
  {
    label: 'Forgot Password',
    icon: ' vpn_key',
    route: '/sales'
  },
  {
    label: 'Login',
    icon: 'assignment_ind',
    route: '/sales'
  },
];