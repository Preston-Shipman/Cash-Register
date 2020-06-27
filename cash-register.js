function checkCashRegister(price, cash, cid) {
  if (price >= cash) {
    if (price <= cid) {
      return {status: "CLOSED", change: [...cid]}
    }
    else if (price >= cid) {
      return {status: "OPEN", change: [...]}
    }
  }
  else if (price >= cid) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  var change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
