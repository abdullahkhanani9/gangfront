## README - Citations of Contributions/Code Sources

### Starter Code

- Some starter code in provided GitHub repositories had been given by our AP Computer Science Principles teacher for lessons and work to be built off of in order to develop our own fully original code/projects. Below are links to said GitHub repositories.
  - [Original Teacher-Provided Repository (Backend - Base/Template)](https://github.com/nighthawkcoders/flask_portfolio)
  - [Original Teacher-Provided Repository (Frontend - Base/Template)](https://github.com/nighthawkcoders/teacher_portfolio)
- We used the templates of and cloned the provided repositories to have a base on which to build our projects/code. Below are links to said modified repositories in which we developed our original code for the College Board CPT Project (2023-2024).
  - [Modified Backend Repository](https://github.com/tuckergol/backgang)
  - [Modified Frontend Repository](https://github.com/tuckergol/frontgang)
### Stock Project
---
- Created  by Varun Manoj Pillai ( varunm532)
- files concerning this feature: _posts/2024-04-04-stocks.md, _posts/2024-04-04-stockportfolio.md, _posts/2024-04-04-stocktransactionlog.md, _posts/2024-05-20-bucketstockstort.md, _posts/2024-05-21-stocksortdisplay.md
    - _posts/2024-04-04-stocks.md:
        - display top 25 stocks(get request) , shows account balance( post request ), option to buy sell (post request )
        - updates price of all stocks each time page is reloaded
        - requires uid stored in local storage
        - uses JavaScript and HTML
    -  _posts/2024-04-04-stocktransactionlog.md:
        - requires uid stored in local storage 
        - display transaction log of user  ( post request)
        - uses JavaScript and HTML
    -  _posts/2024-04-04-stockportfolio.md:
        - requires uid stored in local storage
        - displays stocks currently owned (post request), uses AnyChart to dynamically create interactive graph (post request), has feature to sell owned stocks (post request)
        - uses JavaScript and HTML
    -  _posts/2024-05-20-bucketstockstort.md:
        - interactive pie chart with differnt sectors of S&P 500
        - works in tandem with _posts/2024-05-21-stocksortdisplay.md to display storted stocks
        - saves selected sector to localStorage
        - redirects to _posts/2024-05-21-stocksortdisplay.md
        - uses JavaScript and HTML
    - _posts/2024-05-21-stocksortdisplay.md:
        - displays sorted stocks based on sectors
        - has buy feature that shows current price of single stock
        - uses stored sector from localStorage
        - displays account balance
        - uses JavaScript and HTML
### Meme Maker
---
- Created by Tejas Manoj
- files for this feature: 2024-04-04-memmaker.md, memeforge.py, memeforge_functions.py, memeforge_database.py
  - 2024-04-04-mememaker.md's function:
    - Page Layout and Styling: Sets up the HTML structure and CSS styling for a "Meme Maker" webpage, with a title, input fields, and buttons.
    - Image and Text Input: Allows users to upload an image and enter text for the top and bottom of the meme.
    - Meme Generation: Uses JavaScript to send the image and text to an API to create the meme, and displays the generated meme on the page.
    - Meme Downloading: Provides a button for users to download the generated meme. 
  - memeforge.py's function: 
    - Imports and Setup: Imports necessary libraries for building a REST API with Flask, including Flask-RESTful for API creation and Flask-CORS for handling cross-origin requests. Sets up the blueprint for the meme forge API.
    - Meme Creation Endpoint: Defines a POST endpoint (/maker/) that accepts image and text data, generates a meme, and returns the meme image in base64 format. Optionally, it saves the meme to the database.
    - Database Query Endpoint: Defines a GET endpoint (/get_database) that returns all images stored in the database.
    - Add Image Endpoint: Defines a POST endpoint (/add_image) that allows adding a new image to the database.
    - Clear Database Endpoint: Defines a GET endpoint (/clear_database) that clears all entries in the database.
  - memeforge_functions.py's function:
    - Image to Base64 Conversion: Provides a function (imageToBase64) to convert an image into a base64-encoded string, useful for transmitting image data as text.
    - Base64 to Image Conversion: Includes a function (base64toImage) to decode a base64 string back into an image, allowing for the manipulation and display of images encoded as base64.
    - Meme Creation: Implements a function (meme_maker) that takes an image and adds top and bottom text to create a meme. It dynamically adjusts font size based on image dimensions and centers the text with an outline for better visibility.
    - Text Drawing on Image: Uses the ImageDraw and ImageFont modules from PIL to draw text with an outline on the image at specified positions, ensuring the text is visible against various backgrounds.
  - memeforge_database.py's function:
    - Imports and Setup: Imports necessary libraries, including SQLAlchemy for database interactions and PIL for image handling. Sets up the SQLAlchemy database model and initializes the Flask application context.
    - Database Initialization: Defines functions to initialize the database (initializeDatabase and initMeme) and create the necessary tables using SQLAlchemy's ORM.
    - Database Operations: Implements functions to manage database entries, including createImage for adding new images to the database, queryImages for retrieving all images from the database, and clearDatabase for deleting all entries.
    - Meme Model: Defines the Meme class as a SQLAlchemy model to represent meme data within the Flask application's database.
    - Images Model: Defines the Images class as a SQLAlchemy model to represent image data in a separate SQLite database, including columns for image name, function, and base64-encoded image data.

### Painting Project
---
- Created by Deva Sasikumar (devaSas1)
- files concerning this feature: 2024-04-04-gallery.md, 2024-04-04-painter.md, src/gallery.js, src/painter.js
    - 2024-04-04-gallery.md:
        - displays a gallery of saved paintings
        - includes a search function to filter paintings by username
        - fetches painting data from the backend (GET request to /api/paint_api/getPainting/)
        - uses JavaScript and HTML for dynamic content display
    - 2024-04-04-painter.md:
        - provides an interactive canvas for users to create and save paintings
        - allows users to select colors, draw on the canvas, and download their artwork
        - includes a feature to upload paintings to the backend (POST request to /api/paint_api/uploadPainting/)
        - uses JavaScript and HTML for canvas interactions and painting management
    - src/gallery.js:
        - JavaScript code for fetching and displaying paintings in the gallery
        - defines the endpoint for fetching paintings from the server
        - processes and displays fetched paintings, including username attribution
        - handles search functionality to filter displayed paintings by username
    - src/painter.js:
        - JavaScript code for handling canvas drawing functionality
        - includes event listeners for mouse actions and color selection
        - provides a function to download the canvas drawing as an image
        - includes code to upload the painting to the backend with user ID
        - handles file selection and preview for uploading images

### House Price Predictor Project
---
- Created by Deva Sasikumar (devaSas1)
- files concerning this feature: house_prices.html
    - house_prices.html:
        - Input Form: Contains input fields for various parameters such as area, bedrooms, bathrooms, stories, and amenities.
        - Submit Button Event: Listens for form submission events and prevents the default form submission behavior.
        - Form Data Collection: Collects form data using JavaScript and sends it to the backend API as JSON.
        - Backend API Interaction: Sends a POST request to the backend API with the collected form data.
        - Real-time Prediction Display: Displays the predicted price returned by the backend API without refreshing the page.

   
