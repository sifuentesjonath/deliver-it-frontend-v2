interface MenuItem {
  label: string;
  path?: string;
  icon?: { class: string; content: string };
  isLabel?: boolean;
  condition?: string;
  children?: MenuItem[];
}
export const menu: MenuItem[] = [
  {
    label: 'Setup',
    icon: {
      class: 'material-icons',
      content: 'home',
    },
    children: [
      {
        path: '/dashboard/company',
        label: 'Company',
      },
      {
        path: '/dashboard/serviceSetup',
        label: 'Services/Rates',
      },
      {
        path: '/dashboard/miscFeeSetup',
        label: 'Misc Fees',
      },
      {
        path: '/dashboard/zoneSetup',
        label: 'Zones',
      },
      {
        path: '/dashboard/terminals',
        label: 'Terminals',
      },
      {
        path: '/dashboard/customerGroup',
        label: 'Customer Groups',
      },
      {
        path: '/dashboard/salesPerson',
        label: 'Salesperson',
      },
      {
        path: '/dashboard/assignments',
        label: 'Assignments',
      },
    ],
  },
  {
    path: '/dashboard/customers',
    label: 'Customers',
    icon: {
      class: 'material-icons',
      content: 'people',
    },
  },
  {
    label: 'Drivers & Routes',
    icon: {
      class: 'material-icons',
      content: 'people',
    },
    children: [
      {
        path: '/dashboard/drivers',
        label: 'Drivers',
      },
      {
        path: '/dashboard/drivers',
        label: 'Driver Groups',
      },
      {
        path: '/dashboard/drivers',
        label: 'Driver Types',
      },
      {
        path: '/dashboard/route',
        label: 'Routes',
      },
      {
        path: '/dashboard/route',
        label: 'Route Types',
      },
      {
        path: '/dashboard/terminalmaintenance',
        label: 'Terminals',
      },
      {
        path: '/dashboard/route',
        label: 'PayRoll',
      },
      {
        path: '/dashboard/zipcode',
        label: 'ZipCode Maint',
      },
      {
        path: '/dashboard/dispatchgroupmaintenance',
        label: 'Dispatch Group',
      },
    ],
  },
  {
    label: 'Order',
    icon: {
      class: 'material-icons',
      content: 'people',
    },
    children: [
      {
        path: '/dashboard/order-entry',
        label: 'Order-Entry',
      },
      {
        path: '/dashboard/customer-order-entry',
        label: 'Customer Order-Entry',
      },

    ],
  },
  // {
  //   path: '/dashboard/drivers',
  //   label: 'Drivers',
  //   icon: {
  //     class: 'material-icons',
  //     content: 'people',
  //   },
  // },
  // {
  //   path: '/dashboard/route',
  //   label: 'Route',
  //   icon: {
  //     class: 'material-icons',
  //     content: 'people',
  //   },
  // },
];
export default menu;
