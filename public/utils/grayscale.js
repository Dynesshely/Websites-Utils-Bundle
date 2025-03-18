function IsHomePage() {
  if (window.location.pathname == "/" || window.location.pathname == "") {
    return true;
  }
  return false;
}

function Grayscale(onlyHomePage = false, forceGray = false) {
  var condition = true;

  if (onlyHomePage) {
    condition = IsHomePage();
  }

  if (forceGray || (IsPublicSacrificeDay() && condition)) {
    document
      .getElementsByTagName("html")[0]
      .setAttribute(
        "style",
        "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);"
      );
  }
}

function IsPublicSacrificeDay() {
  // 1931 年 09 月 18 日, 九一八事变
  // 1937 年 12 月 13 日, 南京大屠杀
  // 1950 年 10 月 25 日, 抗美援朝纪念日
  // 1976 年 09 月 09 日, 毛主席逝世
  // 2022 年 03 月 21 日, 东方航空特大空难
  // 2020 年 04 月 04 日, 新冠肺炎哀悼日, 清明节
  // 2010 年 04 月 14 日, 青海玉树地震
  // 2008 年 05 月 12 日, 四川汶川地震
  // 1937 年 07 月 07 日, 七七事变, 又称卢沟桥事变
  // 2010 年 08 月 07 日, 甘肃舟曲特大泥石流
  // 08 月 14 日, 世界慰安妇纪念日
  // 09 月 30 日, 烈士纪念日

  const publicSacrificeDays = new Array(
    "0321",
    "0322",
    "0403",
    "0404",
    "0405",
    "0406",
    "0414",
    "0512",
    "0707",
    "0807",
    "0814",
    "0909",
    "0918",
    "0930",
    "1025",
    "1130",
    "1213"
  );

  const di = new Date();
  const month = di.getMonth() + 1;
  const date = di.getDate();

  const monthStr = month > 9 ? `${month}` : `0${month}`;
  const dateStr = date > 9 ? `${date}` : `0${date}`;

  const monthAndDateStr = `${monthStr}${dateStr}`;

  return publicSacrificeDays.includes(monthAndDateStr);
}
