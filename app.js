// app.js - Flight Search Application Logic

// Flight data (dummy data)
const flights = [
    { id: 1, airline: 'Airline A', price: 200, source: 'City A', destination: 'City B', date: '2026-02-10' },
    { id: 2, airline: 'Airline B', price: 150, source: 'City A', destination: 'City C', date: '2026-02-11' },
    { id: 3, airline: 'Airline C', price: 300, source: 'City B', destination: 'City A', date: '2026-02-12' },
];

// Function to handle flight search
function searchFlights(source, destination, date) {
    return flights.filter(flight =>
        flight.source === source &&
        flight.destination === destination &&
        flight.date === date
    );
}

// Function to sort flights by price
function sortFlights(flights, order = 'asc') {
    return flights.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
}

// Function to book a flight
function bookFlight(flightId) {
    const flight = flights.find(f => f.id === flightId);
    if (flight) {
        console.log(`Flight booked: ${flight.airline} from ${flight.source} to ${flight.destination}`);
    } else {
        console.log('Flight not found!');
    }
}

// Example usage
const availableFlights = searchFlights('City A', 'City B', '2026-02-10');
const sortedFlights = sortFlights(availableFlights);

console.log('Available Flights:', sortedFlights);

// Book the first flight
if (sortedFlights.length > 0) {
    bookFlight(sortedFlights[0].id);
}