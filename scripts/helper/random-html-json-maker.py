import subprocess
import json

# thjis is stupdid
htmlList = subprocess.run(["find", "../../", "-name", "*.html"], capture_output=True, text=True)
htmlList = htmlList.stdout.strip().splitlines()

for i in range(0, len(htmlList)):
  # i know i can use a lambda but nahhh
  htmlList[i] = htmlList[i][6:]
  

if "../../index.html" in htmlList:
  htmlList.remove("../../index.html")

with open("../json/html-list.json", "w") as f:
  json.dump(htmlList, f, indent=2) # indent = good i think