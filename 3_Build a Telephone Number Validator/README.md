
# Telephone Number Validator

The **Telephone Number Validator** is a web-based application designed to validate US phone numbers. It ensures the input follows specific formats and includes the necessary area code and country code if provided. Valid numbers adhere to common US phone number patterns.

## Purpose

The purpose of the application is to verify US phone numbers and provide feedback about their validity. It's a simple, user-friendly tool that demonstrates the use of regular expressions and input validation in web development.

## Requirements

- **Web Browser**: A modern browser like Chrome, Firefox, Brave, or Edge.

## How to Use

1. **Open the Telephone Number Validator app**: Access the application through the provided link or by running it locally.
2. **Enter a phone number**: Input a US phone number in any of the accepted formats in the text field labeled "Enter phone number".
3. **Check validity**: Click the "Check" button to validate the input.
4. **Clear results**: Use the "Clear" button to remove the displayed results and input.

## Examples

Here are some examples you can try:

| Input                    | Output                                           |
|--------------------------|-------------------------------------------------|
| `1 555-555-5555`         | `Valid US number: 1 555-555-5555`               |
| `1 (555) 555-5555`       | `Valid US number: 1 (555) 555-5555`             |
| `5555555555`             | `Valid US number: 5555555555`                   |
| `555-555-5555`           | `Valid US number: 555-555-5555`                 |
| `(555)555-5555`          | `Valid US number: (555)555-5555`                |
| `1(555)555-5555`         | `Valid US number: 1(555)555-5555`               |
| `555-5555`               | `Invalid US number: 555-5555`                   |
| `5555555`                | `Invalid US number: 5555555`                    |
| `1 555)555-5555`         | `Invalid US number: 1 555)555-5555`             |
| `1 456 789 4444`         | `Valid US number: 1 456 789 4444`               |
| `123**&!!asdf#`          | `Invalid US number: 123**&!!asdf#`              |
| `(6054756961)`           | `Invalid US number: (6054756961)`               |
| `555)-555-5555`          | `Invalid US number: 555)-555-5555`              |
| `55 55-55-555-5`         | `Invalid US number: 55 55-55-555-5`             |
| `11 555-555-5555`        | `Invalid US number: 11 555-555-5555`            |

## Contribution

Contributions are welcome! If you have ideas to enhance the project, feel free to submit a pull request or open an issue.

## Notes

- The validator assumes the country code must be "1" for valid US numbers.
- Non-standard symbols or incomplete formats will result in an invalid status.

---
**Happy Coding!**
