const purchasePriceInput = document.querySelector("#purchase-price");
const stockQuantityInput = document.querySelector("#quantity-stocks");
const currentPriceInput = document.querySelector("#current-price");
const checkAction = document.querySelector("#check-btn");
const result = document.querySelector("#result");


function calculate(curr, cost, stocks) {

    if (curr > cost) {
        let percentProfit = (
            ((curr - cost) / cost) *
            100
        ).toFixed(2);
        let absoluteProfit = (
            (curr - cost) *
            stocks
        ).toFixed(2);

        if (percentProfit >= 50) {
        }

        result.innerText = "nafa huva he " + percentProfit + "% ka. Your total profit is " + absoluteProfit + ";))";
    } else if (curr < cost) {
        let percentLoss = (
            ((cost - curr) / cost) *
            100
        ).toFixed(2);
        let absoluteLoss = ((cost - curr) * stocks).toFixed(
            2
        );

        if (percentLoss >= 50) {
        }

        result.innerText = "ghata huva he " + percentLoss + "% ka. Your total loss is " + absoluteLoss + " bartan dhone padenge ab to :(";
    } else if (curr === cost) {
        result.innerText = "nafa nuksan sab mann ka vehem hota he abhi to kuch nai huva he ";
    }
}

function giveResult() {
    result.style.color = "#5F9DF7";
    var curr_price = parseFloat(currentPriceInput.value);
    var cost_price = parseFloat(purchasePriceInput.value);
    var stocks = parseInt(stockQuantityInput.value);

    if (curr_price >= 0 && cost_price >= 0 && stocks >= 0) {
        calculate(curr_price, cost_price, stocks);
    } else {
        result.innerText = "please enter all the valid inputs"
    }
}

checkAction.addEventListener("click", giveResult);