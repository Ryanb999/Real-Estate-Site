let housingData;

fetch('https://raw.githubusercontent.com/Ryanb999/Real-Estate-Site/main/data.json')
    .then(response => response.json())
    .then(data => {
        housingData = data;

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

        function displayListings() {
            const listingsContainer = document.getElementById('listings');
            let listingsHTML = '';

            housingData.housing.forEach(listing => {
                listingsHTML += generateListing(listing);
            });

            listingsContainer.innerHTML = listingsHTML;
        }

        displayListings();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


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

function searchProperties() {
    var searchQuery = document.getElementById('searchInput').value;
    document.getElementById('searchResults').innerHTML = "<h2>Search Results for '" + searchQuery + "'</h2>";
    
    const listingsContainer = document.getElementById('listings');
    let listingsHTML = '';
    housingData.housing.forEach(listing => {
        if (listing.address.includes(searchQuery)) {
            listingsHTML += generateListing(listing);
        }
    });

    generateListing(housingData);
}