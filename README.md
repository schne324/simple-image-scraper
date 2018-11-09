# Image scraper

## Setup

* Create a directory (in this project `image-scraper/`) called `data` (`image-scraper/data`).
* Create an `ouput` directory in the `data` directory (`image-scraper/data/output`).
* add images in JSON format as `data/images.json`. Example:
```json
[
  "https://foo.com/bar.png",
  "https://foo.com/baz.png",
]
```

## Running the scraper

```js
node index
```

Once the command finishes, you'll find the images in the `ouput/` directory
