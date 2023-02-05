import React from "react";

/*** Images ***/
import dollar from "../../Images/dollar-square.png";
import bag from "../../Images/bag-2.png";
import coin from "../../Images/coin.png";

import "./dashboardMain.css";
import Search from "./Search";
import BoxInfo from "./BoxInfo";
import BoxOrders from "./BoxOrders";
import Statistics from "./statistics/Statistics";
import Chart from "./statistics/Chart";
import Selling from "./sellingProducts /Selling";
import FooterMain from "./FooterMain";

function DashboardMain() {
  const boxesList = [
    {
      id: 1,
      title: "Total Sales",
      content: "100.00 SR",
      trend: true,
      valTrend: 10,
      icon: dollar,
      color: "var(--second-blue-color)",
    },
    {
      id: 2,
      title: "Total Orders",
      content: "100 Orders",
      trend: true,
      valTrend: 10,
      icon: bag,
      color: "var(--red-color)",
    },
    {
      id: 3,
      title: "Total Income",
      content: "100.00 SR",
      trend: false,
      valTrend: 10,
      icon: coin,
      color: "var(--orange-color)",
    },
  ];

  const boxesOrdersList = [
    {
      id: 1,
      title: "New Orders",
      color: "var(--second-blue-color)",
    },
    {
      id: 2,
      title: "Shipped Orders",
      color: "var(--orange-color)",
    },
    {
      id: 3,
      title: "Completed Orders",
      color: "var(--green-color)",
    },
    {
      id: 4,
      title: "Returned Applications",
      color: "var(--red-color)",
    },
  ];

  const statisticsList = [
    {
      id: 1,
      title: "the best branch performance",
      list: [
        {
          id: 1,
          title: "Khobar Branch",
        },
        {
          id: 2,
          title: "Dammam branch",
        },
        {
          id: 3,
          title: "Riyadh Branch",
        },
      ],
      valuesStat: [15, 15, 15],
    },
    {
      id: 2,
      semiTitle: "Sales",
      list: [
        {
          id: 1,
          title: "Standad Vat Rate",
          price: "1000 SR",
        },
        {
          id: 2,
          title: "Not Subject To Vat",
          price: "1000 SR",
        },
        {
          id: 3,
          title: "Exempt From Vat",
          price: "1000 SR",
        },
        {
          id: 4,
          title: "Zero vAT rated ",
          price: "1000 SR",
        },
      ],
      valuesStat: [15, 15, 12, 15],
    },
    {
      id: 3,
      semiTitle: "Purchases",
      list: [
        {
          id: 1,
          title: "Standad Vat Rate",
          price: "1000 SR",
        },
        {
          id: 2,
          title: "Not Subject To Vat",
          price: "1000 SR",
        },
        {
          id: 3,
          title: "Exempt From Vat",
          price: "1000 SR",
        },
        {
          id: 4,
          title: "Zero vAT rated ",
          price: "1000 SR",
        },
      ],
      valuesStat: [15, 15, 12, 15],
    },
  ];
  const resultBoxes = boxesList.map((box) => {
    return (
      <BoxInfo
        key={box.id}
        title={box.title}
        content={box.content}
        trend={box.trend}
        valTrend={box.valTrend}
        icon={box.icon}
        color={box.color}
      />
    );
  });

  const resultBoxOrders = boxesOrdersList.map((box) => {
    return <BoxOrders key={box.id} title={box.title} color={box.color} />;
  });

  const resutlStat = statisticsList.map((s) => {
    return (
      <Statistics
        key={s.id}
        title={s.title}
        semiTitle={s.semiTitle}
        list={s.list}
        valuesStat={s.valuesStat}
      />
    );
  });
  return (
    <div className="dashboard-main">
      <div className="bar flex-between">
        <span className="material-icons-outlined menu rad-10">menu</span>
        <p>rate us in marouf to take a free month</p>
        <span className="material-icons-outlined">close</span>
      </div>
      <Search />
      <div className="boxes grid">{resultBoxes}</div>
      <div className="boxes-orders">{resultBoxOrders}</div>
      <div className="statistics grid">
        <Chart />
        {resutlStat}
      </div>
      <Selling />
      <FooterMain />
    </div>
  );
}

export default DashboardMain;
