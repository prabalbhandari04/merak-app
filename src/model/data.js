import { COLORS, FONTS, SIZES, icons, images } from "../global/constants";

export var EXPENSE_DATA = [
  {
    id: "e1",
    title: "Food",
    img: require("../icon/meal.png"),
    icon: icons.food,
    type: "-",
    color: COLORS.gray,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e2",
    title: "Clothes",
    img: require("../icon/male-clothes.png"),
    icon: icons.cloth_icon,
    type: "-",
    color: COLORS.lightBlue,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e3",
    title: "Shopping",
    img: require("../icon/online-shopping.png"),
    icon: icons.baby_car,
    type: "-",
    color: COLORS.darkgreen,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e4",
    title: "Rent",
    img: require("../icon/rent.png"),
    icon: icons.education,
    type: "-",
    color: COLORS.peach,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e5",
    title: "Leisure",
    img: require("../icon/leisure.png"),
    icon: icons.sports_icon,
    type: "-",
    color: COLORS.purple,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e6",
    title: "Health Care",
    icon: icons.healthcare,
    img: require("../icon/health-insurance.png"),
    type: "-",
    color: COLORS.red,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e7",
    title: "Transport",
    img: require("../icon/car.png"),
    color: COLORS.primary,
    type: "-",
    icon: icons.car,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e8",
    title: "Bill",
    img: require("../icon/bill.png"),
    icon: icons.bill,
    type: "-",
    color: COLORS.black,
    expenses: [],
    canDelete: false,
  },

  {
    id: "e9",
    title: "Education",
    img: require("../icon/book.png"),
    icon: icons.book,
    type: "-",
    color: COLORS.blue,
    expenses: [],
    canDelete: false,
  },
];

export var SAVING_DATA = [
  {
    id: "s1",
    title: "Saving",
    img: require("../icon/salary-2.png"),
    type: "-",
    canDelete: false,
  },
];

export var INCOME_DATA = [
  {
    id: "i1",
    title: "Salary",
    img: require("../icon/salary.png"),
    type: "+",
    canDelete: false,
  },

  {
    id: "i2",
    title: "Bonus",
    img: require("../icon/bonus.png"),
    type: "+",
    canDelete: false,
  },

];

export var IN_CASH_DATA = [
  {
    id: "ch1",
    title: "CASH",
    img: require("../icon/money-2.png"),
    canDelete: false,
  },
];

export var IN_CARD_DATA = [
  {
    id: "cd1",
    title: "CARD",
    img: require("../icon/debit-card.png"),
    canDelete: false,
  },
];
