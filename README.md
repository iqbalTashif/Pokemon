**Pokémon Viewer**

Overview

This project fetches and displays Pokémon data from an API. It includes functionalities to view all Pokémon, search through them, and dynamically render their images based on their ID.

**Features**

1. Fetch and Render Pokémon
2. Fetches a total of 1302 Pokémon records.
3. Renders all Pokémon on the page.

**Important:**
1. Pokémon images are not fetched individually for each record.
All images share a common URL structure, which includes the Pokémon's number/ID. The image URL is constructed by appending the Pokémon ID to the base URL.

2. Pagination was considered but not implemented. All Pokémon are loaded and rendered at once.

**Search Functionality**

Implemented search using array filters to allow users to find specific Pokémon.
Pagination


