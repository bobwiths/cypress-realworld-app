# Bug Report

|Title|Transaction completed successfully even withou sufficient balance in the account|
|---|---|
|Steps to reproduce|1. Click to initiate a new transfer.|
| |2. Select a contact.|
| |3. Enter the amount to be transferred.|
| |4. Enter a note.|
| |5. Click to pay|
|Expected result|The system should check the user's balance before completing the transaction. <br>If the balance is sufficient -> deduct the amount from the balance and complete the transaction. <br>If the balance is insufficient -> show a message: "Transaction not completed. Insufficiente balance.|
|Actual result|Success in any transaction (without correct/any amount in balance)|
|Test environment|"DEV" Environment|
|Priority|Critical|
|Type|Functional, Security|
|Evidence 1| <img src="https://snipboard.io/HaDCoF.jpg" alt="antes_teste" /> |
|Evidence 2| <img src="https://snipboard.io/Lf8unW.jpg" alt="depois_teste" /> |

