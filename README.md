# Moos-Sensor

# About App

This application processes sensor readings from IoT-enabled sensors and calculates stock levels based on the grid data. The sensors provide a snake-patterned binary string as input, where each '1' represents pressure (an item is present) and '0' represents no pressure. The application identifies 2x2 and 3x1 (or 1x3) items within the sensor grid and outputs the total number of items detected.

# Prerequisites
- Node.js.
- Docker.


# Commands

npm install

docker build -t moos-sensor .

echo "1101101100010111" | docker run -i moos-app

