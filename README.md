# lascrape
#Overview
The Los Angelas Times Scraper (LAScraper for short) is a scraper app which captures the title, summary and image of articles of The New York Times. In this app, users are able to save their preferred articles, add notes and edit notes to one or multiple articles. Besides, app also provides search feature, allowing users to search in titles according to different key words.

In this repository, you can see source code of LAScraper.

#Key Dependencies
request: enables cheerio to get access to front-end code of https://www.latimes.com/entertainment/music

cheerio: scrapes front-end code from https://www.latimes.com/entertainment/music

mongoose: be in charge of database of scrap

express: builds server-side routes and functions

morgan: logs server-side requests, helping debugging

express-handlebars: a powerful front-end builder without requiring multiple html pages