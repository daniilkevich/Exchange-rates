let usd = 26;
let eur = 30;
let uah = 1;
let rub = 0.34;
let gbp = 36;
let currency;
let amount;
let targetCurrency;

do {
  do {
    currency = prompt(
      "Введите название вашей валюты (usd, eur, uah, rub, gbp)"
    );
  } while (
    currency != "usd" &&
    currency != "eur" &&
    currency != "uah" &&
    currency != "rub" &&
    currency != "gbp"
  );

  do {
    amount = +prompt("Введите сумму");
  } while (amount != amount || amount <= 0);

  do {
    targetCurrency = prompt(
      "Введите название нужной валюты (usd, eur, uah, rub, gbp)"
    );
  } while (
    targetCurrency != "usd" &&
    targetCurrency != "eur" &&
    targetCurrency != "uah" &&
    targetCurrency != "rub" &&
    targetCurrency != "gbp"
  );

  switch (currency) {
    case "usd":
      amount *= usd;
      break;
    case "eur":
      amount *= eur;
      break;
    case "uah":
      amount *= uah;
      break;
    case "rub":
      amount *= rub;
      break;
    case "gbp":
      amount *= gbp;
  }
  switch (targetCurrency) {
    case "usd":
      amount /= usd;
      break;
    case "eur":
      amount /= eur;
      break;
    case "uah":
      amount /= uah;
      break;
    case "rub":
      amount /= rub;
      break;
    case "gbp":
      amount /= gbp;
  }

  alert("Получится " + amount.toFixed(2) + " " + targetCurrency);
} while (confirm("Выполнить еще одну конвертацию?"));
