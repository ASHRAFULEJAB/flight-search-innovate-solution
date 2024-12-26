# Flight Search Application live link

       https://bd-trip-international.netlify.app/

# Project Overview

This project is a dynamic flight search and management system that allows users to explore flight options, filter results, and dynamically view flight details. It includes components like dropdown menus, sticky sidebars, and dynamic duration formatting for flights.

## Features

- 🛫 **Dynamic Flight Search Results**: Displays flight details like departure, arrival, price, duration, and schedules dynamically.
- 🕒 **Duration Formatting**: Flight durations are formatted into a user-friendly time format (e.g., `1d 2h 30m`).
- 📷 **Image Handling**: Uploads flight images to ImgBB dynamically and displays them in the results.
- 🎚️ **Price Filtering**: Interactive slider to filter flights based on price range.
- ⏳ **Countdown Timer**: Displays a countdown timer for booking availability.
- 📱 **Responsive Design**: Fully responsive UI optimized for different screen sizes.
- 🔄 **Sticky Sidebar**: Ensures sidebar remains visible on large screens.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flight-search-app.git
   cd flight-search-app
   ```

## Setup Instructions

Install dependencies:

```bash
npm install

Create a .env file in the root directory with the following variables:

VITE_IMGBB_API_KEY=<your_imgbb_api_key>

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:5173.
```

## Usage

- Flight Search: Enter your desired search criteria to find flights.

- Filters: Use the sidebar to filter flights by price and time slots.

- Dynamic Dropdown: Select airports using the dynamic dropdown menu with search capabilities.

- View Flight Details: Click on any flight to view its details, including departure and arrival times, duration, and price.

## Contributing

Contributions are welcome! Please follow the steps below:

```bash
Fork the repository.

Create a feature branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Description of changes"

Push to the branch:

git push origin feature-name

Open a pull request.
```
