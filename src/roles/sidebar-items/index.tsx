// import { MdOutlineAccountCircle } from "react-icons/md";
import DashboardIcon from "../../assets/images/sidebar/dashboard.png";
import DashboardIconActive from "../../assets/images/sidebar/dashboard-active.png";
import ProductManagementIcon from "../../assets/images/sidebar/product-management.png";
import ProductManagementIconActive from "../../assets/images/sidebar/product-management-active.png";
import PackageManagementIcon from "../../assets/images/sidebar/package-management.png";
import PackageManagementIconActive from "../../assets/images/sidebar/package-management-active.png";
import OrderManagementIcon from "../../assets/images/sidebar/order-management.png";
import OrderManagementIconActive from "../../assets/images/sidebar/order-management-active.png";
import CustomerManagementIcon from "../../assets/images/sidebar/customer-management.png";
import CustomerManagementIconActive from "../../assets/images/sidebar/customer-management-active.png";
import DispatcherIcon from "../../assets/images/sidebar/dispatcher.png";
import DispatcherIconActive from "../../assets/images/sidebar/dispatcher-active.png";

const ADMINItems = {
  home: [
    {
      href: `/dashboard`,
      icon: <img src={DashboardIconActive} alt="" width={18} />,
      icon2: <img src={DashboardIcon} alt="" width={18} />,
      title: "Dashboard",
    },
    {
      href: `/product-management`,
      icon: <img src={ProductManagementIconActive} alt="" width={20} />,
      icon2: <img src={ProductManagementIcon} alt="" width={20} />,
      title: "Product Management",
    },
    {
      href: `/package-management`,
      icon: <img src={PackageManagementIconActive} alt="" width={20} />,
      icon2: <img src={PackageManagementIcon} alt="" width={20} />,
      title: "Package Management",
      children: [
        { title: "Package Plans", href: "/package-management/package-plans" },
        {
          title: "Customer Subscription",
          href: "/package-management/customer-subscription",
        },
        {
          title: "Notifications & Alerts",
          href: "/package-management/notifications-and-alerts",
        },
      ],
    },
    {
      href: `/order-management`,
      icon: <img src={OrderManagementIconActive} alt="" width={16} />,
      icon2: <img src={OrderManagementIcon} alt="" width={16} />,
      title: "Order Management",
    },
    {
      href: `/customer-management`,
      icon: <img src={CustomerManagementIconActive} alt="" width={22} />,
      icon2: <img src={CustomerManagementIcon} alt="" width={22} />,
      title: "Customer Management",
    },
    {
      href: `/dispatcher`,
      icon: <img src={DispatcherIconActive} alt="" width={22} />,
      icon2: <img src={DispatcherIcon} alt="" width={22} />,
      title: "Dispatcher",
    },
  ],
  // others: [
  //   {
  //     href: `/account`,
  //     icon: <MdOutlineAccountCircle size={20} />,
  //     icon2: <MdOutlineAccountCircle size={20} />,
  //     title: "Account",
  //   },
  // ],
};

export const SidebarItems = {
  ADMIN: { ...ADMINItems },
};
