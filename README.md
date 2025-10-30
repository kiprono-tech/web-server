## 📘 **README.md**

````markdown
# 🌦️ Weather Web Server

A simple **Node.js web server** built with **Express** and **Handlebars (HBS)** that provides **real-time weather forecasts** for any location around the world.  
It fetches geolocation data from **MapTiler API** and live weather information from **Weatherstack API**.

---

## 🚀 Features

- 🌍 Search for weather by location name (city, region, or country)
- ☀️ Fetches live temperature, weather description, and "feels like" temperature
- 🧭 Custom 404 and Help pages
- ⚙️ Express routing with dynamic Handlebars templates
- 🎨 Clean UI built using Handlebars partials
- 💬 Frontend connected to backend through Fetch API

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)  
- **Templating:** Handlebars (HBS)  
- **APIs:** 
  - [Weatherstack API](https://weatherstack.com/)
  - [MapTiler Geocoding API](https://www.maptiler.com/cloud/geocoding/)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/web-server.git
   cd web-server
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the server**

   ```bash
   npm start
   ```

4. **Open your browser**

   ```bash
   http://localhost:3000
   ```

---

## 🧩 Folder Structure

```
web-server/
├── public/
│   ├── css/
│   ├── img/
│   ├── js/
├── src/
│   ├── app.js
│   ├── utils/
│   │   ├── forecast.js
│   │   └── geocode.js
├── templates/
│   ├── views/
│   ├── partials/
├── package.json
```

---

## 🌍 API Integration

**Geocoding (MapTiler API)**
Converts a user’s address into geographic coordinates.

**Weather (Weatherstack API)**
Fetches live weather data using latitude and longitude from the geocode response.

---

## 🧠 Learning Highlights

* Setting up a Node.js + Express server
* Implementing HBS as a dynamic template engine
* Handling asynchronous API calls using callbacks
* Structuring modular Node.js projects

---

## 👨‍💻 Author

**Vincent Kiprono**
Software Engineer | Backend & Cloud Developer
📧 [kiprono.tech@gmail.com](mailto:kiprono.tech@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/vincentkiprono)

---

## 📝 License

This project is licensed under the **ISC License**.

```
