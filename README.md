## Getting Started

# Setup

Add a `.env` file in the project root. Add the API key.

```bash
TMDB_API_KEY=
TMDB_API_URL = "https://api.themoviedb.org/3"
```

Run development server

```bash
npm run dev
```

## Use Docker

1. `npm run docker:build`
2. `npm run docker:start`

## Brief

Brief
Martin's Movies is a client who reviews movies online. They have moved all of their movies to an online movie database which is only accessible via an API.

They need to:

- build a new paginated listing page to pull all data from their new database
- allow customers to search by different movie attributes which are:
  - Keyword
- mark a movie as 'watched' so when they open the listing page again in the same browser it will still be marked as 'watched'

Martin's Movies would like to link the Read More button for each movie off to the IMDB page if the imdb_id is set for a movie.

He would like the design to match a theme he liked but make all make all links a dead link (eg <a href="#">x</a>) for now:

https://gnodesign.com/templates/movify/movie-grid3.html (feel free to put a centered search bar just above the listing for search)

Deliverables:

- a ReactJS/NextJS App broken up as you see fit (languages isn't too important so TS is fine too)

We are using The Movie Database which is located here:

https://developers.themoviedb.org/3/getting-started/introduction
