#!/bin/env bash

CHARS=$(cat markdown/* | wc -c)

# write how many characters written
echo "export const charsWritten = $CHARS;" > numOfChars.js

# write list of entries cuz apparently js can't open txt files or something?
# whatever im too lazy to write json
echo "export const postsEntries = [ " > postsEntries.js

for i in markdown/*.md; do
    # i honestly don't know what this does.
    # thanks chatgpt i guess
    f="${i##*/}" 
    cmark "$i" > "html/${f%.md}.html"
    echo "      \"$f\"," >> postsEntries.js
done

echo "];" >> postsEntries.js

