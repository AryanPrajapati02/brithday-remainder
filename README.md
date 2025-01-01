# [Birthday Reminder App](https://collegebirthday.netlify.app/)

## Overview

The Birthday Reminder App is a simple and effective solution to keep track of birthdays. This application displays a list of upcoming birthdays with relevant details such as the person's name and age. Built using HTML, Tailwind CSS, and JavaScript, it is designed for seamless performance and an intuitive user experience.

---

## Features

1. **Birthday List Display**:
   - Shows a list of people whose birthdays are being tracked.
   - Displays their name, age, and any associated avatar.

2. **Clear All Feature**:
   - Provides a button to clear the entire birthday list with a single click.
   - Useful for refreshing the list or starting over.

3. **Dynamic Updates**:
   - Automatically adjusts the age based on the current date.

4. **Responsive Design**:
   - Fully responsive and works seamlessly on devices of all sizes using Tailwind CSS.

---

## Installation and Setup

### Prerequisites

Ensure you have a modern web browser installed to run the application.

### Steps to Run the App

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AryanPrajapati02/brithday-remainder.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd brithday-remainder
   ```

3. **Open the Application**:
   Open the `index.html` file in your browser to view the application.

---

## Project Structure

```plaintext
brithday-remainder/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Key Files

- **`index.html`**:
  - The main HTML file containing the structure of the application.

- **`style.css`**:
  - Contains the Tailwind CSS setup and custom styling for the application.

- **`script.js`**:
  - Contains the JavaScript logic for managing the birthday list and dynamic age calculations.

---

## Functionalities Explained

1. **Rendering the Birthday List**:
   - The JavaScript in `script.js` dynamically generates the list of birthdays from a predefined array of data.
   - Iterates over the list and displays each person's name, age, and avatar on the page.

2. **Clear All Button**:
   - Provides a `Clear All` button that, when clicked, clears the list from the page.

3. **Age Calculation**:
   - Uses JavaScript to calculate the current age of each person based on their date of birth and the current date.

4. **Responsive Design**:
   - Uses Tailwind CSS for consistent styling across devices and screen sizes.

---

## Usage Example

1. Clone and open the app in your browser.
2. View the list of birthdays and details on the homepage.
3. Click the `Clear All` button to reset the list.

---

## Future Enhancements

1. Add functionality to **add new birthdays**.
2. Implement **notifications** for upcoming birthdays.
3. Allow users to **edit or delete** individual entries.
4. Store data persistently using local storage or a database.

---

## Contributions

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

For any questions or suggestions, feel free to raise an issue or contact the repository owner.

