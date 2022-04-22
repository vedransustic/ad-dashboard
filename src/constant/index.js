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

export const chartData = [
  {
    name: "January",
    netRevenue: 4000,
    income: 2400,
  },
  {
    name: "February",
    netRevenue: 3000,
    income: 1398,
  },
  {
    name: "March",
    netRevenue: 2000,
    income: 9800,
  },
  {
    name: "April",
    netRevenue: 2780,
    income: 3908,
  },
  {
    name: "May",
    netRevenue: 1890,
    income: 4800,
  },
  {
    name: "June",
    netRevenue: 2390,
    income: 3800,
  },
  {
    name: "July",
    netRevenue: 2490,
    income: 3300,
  },
  {
    name: "August",
    netRevenue: 1890,
    income: 2340,
  },
  {
    name: "September",
    netRevenue: 2390,
    income: 3400,
  },
];

export const productRows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
