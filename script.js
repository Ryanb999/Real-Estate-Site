// your_script.js

// Fetch JSON data
// Fetch JSON data from the hosted URL
fetch('https://raw.githubusercontent.com/Ryanb999/Real-Estate-Site/main/data.json')
    .then(response => response.json())
    .then(data => {
        // Once data is fetched, proceed to generate and display listings
        const housingData = data;

        // Function to generate listing HTML
        function generateListing(listing) {
            return `
                <div class="listing">
                    <img src="${listing.images[0]}" />
                    <h2>${listing.address}</h2>
                    <p>Bedrooms: ${listing.bedrooms}</p>
                    <p>Bathrooms: ${listing.bathrooms}</p>
                    <p>Square Footage: ${listing.sqr_footage}</p>
                    <p>Lot Size: ${listing.size_lot}</p>
                    <p>Price: ${listing.price_listed}</p>
                    <p>Description: ${listing.description}</p>
                    <!-- Add more details and styling as needed -->
                </div>
            `;
        }

        // Function to display listings on the webpage
        function displayListings() {
            const listingsContainer = document.getElementById('listings');
            let listingsHTML = '';

            housingData.housing.forEach(listing => {
                listingsHTML += generateListing(listing);
            });

            listingsContainer.innerHTML = listingsHTML;
        }

        // Call the displayListings function to render listings
        displayListings();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Function to generate listing HTML
function generateListing(listing) {
    return `
        <div class="listing">
            <h2>${listing.address}</h2>
            <p>Bedrooms: ${listing.bedrooms}</p>
            <p>Bathrooms: ${listing.bathrooms}</p>
            <p>Square Footage: ${listing.sqr_footage}</p>
            <p>Lot Size: ${listing.size_lot}</p>
            <p>Price: ${listing.price_listed}</p>
            <p>Description: ${listing.description}</p>
            <!-- Add more details and styling as needed -->
        </div>
    `;
}
