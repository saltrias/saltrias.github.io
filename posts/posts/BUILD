echo "export const charsWritten = $(wc -c markdown/* | tail -n 1 | awk '{print $1}');" > numOfChars.js

for i in markdown/*.md; do
    f=${i##*/}        # test.md
    cmark "$i" > "html/${f%.md}.html"
done
