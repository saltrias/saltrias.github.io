FILENAME="$1"

if [ -z "$FILENAME" ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

./BUILD.sh
git add "markdown/$FILENAME.md"
git add "html/$FILENAME.html"

git commit -m "Published: $URL"
git push
