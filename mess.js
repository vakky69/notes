
  // Wait for the HTML document to load completely
  document.addEventListener("DOMContentLoaded", function() {
    // Get the search input element and search button
    var searchInput = document.querySelector(".search input");
    var searchButton = document.querySelector(".search button");

    // Add a click event listener to the search button
    searchButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the search query from the input field
      var query = searchInput.value;

      // Perform the search
      if (query.trim() !== "") {
        // Get all the lines that contain the search query
        var lines = document.querySelectorAll(".lines");
        var matchingLines = [];

        // Loop through each line and check if it contains the search query
        lines.forEach(function(line) {
          var lineText = line.innerText.toLowerCase();
          if (lineText.includes(query.toLowerCase())) {
            matchingLines.push(line);
          }
        });

        // Show/hide the lines based on the search results
        if (matchingLines.length > 0) {
          lines.forEach(function(line) {
            line.style.display = "none";
          });
          matchingLines.forEach(function(line) {
            line.style.display = "block";
          });
        } else {
          alert("No results found for: " + query);
        }
      } else {
        alert("Please enter a search query");
      }
    });
  });
  // Check if the browser supports the `Object.assign` method
if (!Object.assign) {
  // Create a polyfill for the `Object.assign` method
  Object.assign = function(target, ...sources) {
    const to = Object(target);
    for (const source of sources) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
    return to;
  };
}



