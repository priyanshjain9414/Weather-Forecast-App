#  Weather Forecast App

A full-stack **Weather Forecast Web Application** that allows users to fetch and view **live weather updates** for any city around the world.  
Built using **Node.js**, **Express**, and the **WeatherAPI**, it provides real-time temperature, humidity, wind speed, and more in a clean and responsive UI.

---

##  Overview

This app fetches live weather information from [WeatherAPI.com](https://www.weatherapi.com/) and displays:
-  **City, Region, Country**
-  **Temperature & Weather Conditions**
-  **Wind Speed & Direction**
-  **Humidity & Cloud Coverage**
-  **Local Time and Weather Icon**

---

##  Features

 Real-time weather updates for any city  
 Clean, responsive user interface  
 Displays temperature, humidity, and wind data  
 Simple REST API integration with **WeatherAPI**  
 Backend built on **Node.js** and **Express.js**  
 Secure API keys using **dotenv**  
 Deployed easily on **Render**, **Vercel**, or **Netlify**

---

##  Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **API** | [WeatherAPI.com](https://www.weatherapi.com/) |
| **HTTP Client** | Axios |
| **Environment Management** | dotenv |

---

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/priyanshjain9414/Weather-Forecast-App.git
cd Weather-Forecast-App
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
In the root folder, create a `.env` file and add:
```env
WEATHER_API_KEY=your_weather_api_key_here
PORT=5000
```

### 4. Run the Server
```bash
node server.js
```

Now open 👉 **http://localhost:5000** to view your app.

---

## 📁 Project Structure

```bash
Weather-Forecast-App/
├── server.js            # Backend server file
├── package.json         # Dependencies and scripts
├── package-lock.json
├── .gitignore           # (ignored by Git)
├── index.html           # Main frontend page
├── styles.css           # Styling file
└── script.js            # Frontend logic for fetching and displaying data
```

---

##  Deployment

You can deploy easily using these platforms:

- [Render](https://render.com/)

---

##  Example `.env` File

```env
WEATHER_API_KEY=81f7344d4cef430c8d0122008250510
PORT=5000
```

---

## Live Link
👉 [Live Demo](https://weather-forecast-app-demo.vercel.app/)

---

## Contributing

Contributions are welcome! To contribute:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature-name

# 3. Commit your changes
git commit -m "Add new feature"

# 4. Push to your branch
git push origin feature-name

# 5. Open a Pull Request
```

---

##  Author

**Priyansh Jain**  
  **Connect on GitHub: [@priyanshjain9414](https://github.com/priyanshjain9414)**
  **Connect on E-mail: priyanshjain903@gmail.com**
---

####  If you like this project, don’t forget to star the repo!
