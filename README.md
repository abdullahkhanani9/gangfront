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


