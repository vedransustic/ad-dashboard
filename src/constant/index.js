import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const widgetData = [
  {
    title: "users",
    isMoney: false,
    number: 250,
    linkText: "See all users",
    linkTo: "#",
    percentage: 5,
    icon: <PeopleOutlineRoundedIcon />,
    bgColor: "#FFCCCB",
    color: "#FF1D18",
  },
  {
    title: "orders",
    isMoney: false,
    number: 260,
    linkText: "View all orders",
    linkTo: "#",
    percentage: 2,
    icon: <ShoppingCartIcon />,
    bgColor: "#FEF247",
    color: "#F4BB00",
  },
  {
    title: "earnings",
    isMoney: true,
    number: 4.6,
    linkText: "View net earnings",
    linkTo: "#",
    percentage: 12,
    icon: <CurrencyExchangeIcon />,
    bgColor: "#98DB92",
    color: "#3F9D38",
  },
  {
    title: "my balance",
    isMoney: true,
    number: 7.8,
    linkText: "See details",
    linkTo: "#",
    percentage: -34,
    icon: <AccountBalanceWalletIcon />,
    bgColor: "#97BAEC",
    color: "#1727AE",
  },
];