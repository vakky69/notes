// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the search button and input field
    var searchButton = document.querySelector(".ert");
    var searchInput = document.querySelector(".search input");
  
    // Add click event listener to the search button
    searchButton.addEventListener("click", function(event) {
      event.preventDefault();
      var searchTerm = searchInput.value.trim();
  
      // Perform search operation based on the search term
      if (searchTerm !== "") {
        // Redirect to the search results page with the search term as a query parameter
        window.location.href = "search.html?q=" + encodeURIComponent(searchTerm);
      }
    });
  });
  