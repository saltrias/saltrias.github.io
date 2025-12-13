import subprocess
import json

# -----------------------------------------------
# | If you don't know what you're doing         |
# | This is not something you might want to see.| 
# | This is just a boring random python script  |
# | I need for just one feature in this website |
# | This is extremely and unsatisfyingly boring.|
# | -al                                         |
# -----------------------------------------------

# please make sure you are in /assets TODO: please fix this im too lazy rn
# TODO: organize your shit with folders
# imageList = os.listdir("../images") # makes list from directory above

listString = subprocess.run(["find", "../../", "-name", "*.png", "-o", "-name", "*.jpg"], capture_output=True, text=True)

imageList = listString.stdout.strip().splitlines()

if "'../../assets/images/linus.jpeg'" in imageList:
  imageList.remove("'../../assets/images/linus.jpeg'")

imageList.sort()

print("writing json file...")

with open("../json/image-list.json", "w") as f:
  json.dump(imageList, f, indent=2) # indent = good i think

print("done!")