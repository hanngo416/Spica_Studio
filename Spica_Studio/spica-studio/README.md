# Spica Studio Website

Welcome to the **Spica Studio** website project! This is a frontend-only (static) website built with HTML5, CSS3, and Vanilla JavaScript.

## 🚀 How to Run Locally

Since this is a static website, you don't need to install complex backends or databases. You can view it using any of the methods below.

### Method 1: Direct Open (Easiest)
1.  Navigate to the `spica-studio` folder on your computer.
2.  Double-click the **`index.html`** file.
3.  The website will open in your default web browser.

### Method 2: VS Code Live Server (Recommended for Development)
If you are using Visual Studio Code:
1.  Open the `spica-studio` folder in VS Code.
2.  Install the **Live Server** extension (by Ritwick Dey).
3.  Right-click on `index.html` and select **"Open with Live Server"**.
4.  This will launch the site at `http://127.0.0.1:5500`.

### Method 3: Python Simple Server
If you have Python installed, you can start a quick local server:
1.  Open a terminal (Command Prompt / PowerShell).
2.  Navigate to the project folder:
    ```bash
    cd path\to\spica-studio
    ```
3.  Run the command:
    ```bash
    python -m http.server
    ```
4.  Open your browser and go to: [http://localhost:8000](http://localhost:8000)

### Method 4: Node.js `serve`
If you have Node.js installed and prefer `npm`:
1.  Open terminal in the project folder.
2.  Run:
    ```bash
    npx serve .
    ```
3.  Open the URL shown in the terminal (usually `http://localhost:3000`).

## 📂 Project Structure

- **`index.html`**: Home page.
- **`about.html`**: About us information.
- **`coffee-menu.html`**: The café menu.
- **`flower-menu.html`**: The floral products catalog.
- **`workshops.html`**: Information on upcoming workshops.
- **`reservation.html`**: Table booking form.
- **`contact.html`**: Contact details and address.
- **`assets/`**: Contains `css/`, `js/`, and `images/`.

## 📝 Features works without Backend
- **Navigation**: Fully functional links between pages.
- **Responsive Design**: Adapts to mobile and desktop screens.
- **Reservation Form**: Simulates a successful submission with a visual message (does not actually send data).
