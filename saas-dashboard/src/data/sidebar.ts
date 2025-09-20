export type MenuItem = {
    label: string;
    icon?: string; // optional MUI icon name
    path?: string;
    children?: MenuItem[];
  };
  
  export const sidebarConfig: MenuItem[] = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'Orders', children: [
        { label: 'All Orders', path: '/orders' },
        { label: 'Pending', path: '/orders/pending' },
        { label: 'Completed', path: '/orders/completed' }
      ]
    },
    { label: 'Products', path: '/products' },
    { label: 'Reports', children: [ { label: 'Sales', path: '/reports/sales'} ] }
  ];
  