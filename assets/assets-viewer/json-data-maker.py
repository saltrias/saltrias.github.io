import os
import json

# -----------------------------------------------
# | If you don't know what you're doing         |
# | This is not something you might want to see.| 
# | This is just a boring random python script  |
# | I need for just one feature in this website |
# | This is extremely and unsatisfyingly boring.|
# | -al                                         |
# -----------------------------------------------

imageList = os.listdir("../images") # makes list from directory above

if "linus.jpeg" in imageList:
  imageList.remove("linus.jpeg")

imageList.sort()

print("writing json file...")

with open("image-list.json", "w") as f:
  json.dump(imageList, f, indent=2) # indent = good i think

print("done!")