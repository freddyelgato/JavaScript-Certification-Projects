# Cash Register

This project is a web application that simulates a cash register. It calculates the change due to the customer based on the price of the item, the amount of cash provided by the customer, and the cash available in the drawer. The application provides specific messages for different scenarios.

## Objective

The **Cash Register** app helps users understand currency calculations and logic. The app ensures that the correct change is returned to customers, following these scenarios:
- **Status: INSUFFICIENT_FUNDS**: When the cash drawer does not have enough cash or cannot provide the exact change.
- **Status: CLOSED**: When the cash in the drawer equals the change due.
- **Status: OPEN**: When the cash drawer has enough cash to return change, with denominations sorted from highest to lowest.

## Currency Units

| Currency Unit        | Amount      |
|----------------------|-------------|
| Penny               | $0.01 (PENNY) |
| Nickel              | $0.05 (NICKEL) |
| Dime                | $0.10 (DIME) |
| Quarter             | $0.25 (QUARTER) |
| Dollar              | $1.00 (ONE) |
| Five Dollars        | $5.00 (FIVE) |
| Ten Dollars         | $10.00 (TEN) |
| Twenty Dollars      | $20.00 (TWENTY) |
| One Hundred Dollars | $100.00 (ONE HUNDRED) |

## Requirements

- **HTML Input Elements**:
  - An input element with an `id` of `cash`.
  - A button with an `id` of `purchase-btn`.
  - A display area with an `id` of `change-due`.

## User Stories

1. If the cash input is less than the price, an alert displays: `"Customer does not have enough money to purchase the item"`.
2. If the cash input equals the price, the change-due display shows: `"No change due - customer paid with exact cash"`.
3. If cash is sufficient, the application displays change with the status and denominations.

### Examples

| **Scenario**                                                        | **Output**                                                                                  |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| Price: $19.50, Cash: $20, Drawer: [["PENNY", 1.01], ["NICKEL", 2.05]]| `Status: OPEN QUARTER: $0.5`                                                               |
| Price: $3.26, Cash: $100, Drawer: [["PENNY", 1.01], ["QUARTER", 4.25]]| `Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04`|
| Price: $19.50, Cash: $20, Drawer: [["PENNY", 0.01]]                 | `Status: INSUFFICIENT_FUNDS`                                                               |
| Price: $19.50, Cash: $20, Drawer: [["PENNY", 0.5]]                  | `Status: CLOSED PENNY: $0.5`                                                               |

## How to Use

1. Enter the **price** of the item and the **cash provided** in the respective input fields.
2. Click the **Purchase** button.
3. View the status and change details in the **Change Due** display.

## Contribution

- Contributions are welcome! If you want to improve this project, feel free to fork the repository and submit a pull request.

**Happy Coding!**