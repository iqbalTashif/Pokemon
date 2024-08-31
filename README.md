**Pokemon Viewer**

Overview

This project fetches and displays Pokemon data from an API. It includes functionalities to view all Pokemon, search through them, and dynamically render their images based on their ID.

**Features**

1. Fetch and Render Pokemon
2. Fetches a total of 1302 Pokemon records.
3. Renders all Pokemon on the page.

**Important:**
1. Pokemon images are not fetched individually for each record.
All images share a common URL structure, which includes the Pokemon's number/ID. The image URL is constructed by appending the Pokemon ID to the base URL.

2. Pagination was considered but not implemented. All Pokemon are loaded and rendered at once.

**Search Functionality**

Implemented search using array filters to allow users to find specific Pokemon.



