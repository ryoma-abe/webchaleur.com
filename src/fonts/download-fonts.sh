#!/bin/bash

# Download Klee One SemiBold
curl -L "https://fonts.googleapis.com/css2?family=Klee+One:wght@600&display=swap" -o klee-one.css

# Download Zen Maru Gothic Regular
curl -L "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400&display=swap" -o zen-maru.css

echo "Font CSS downloaded. Please manually download the woff2 files from the URLs in the CSS files."
echo "Place them as:"
echo "  - KleeOne-SemiBold.woff2"
echo "  - ZenMaruGothic-Regular.woff2"