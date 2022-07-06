import requests
from bs4 import BeautifulSoup
import csv

page = requests.get("https://www.census.gov/programs-surveys/popest.html")
print(page.status_code)
soup = BeautifulSoup(page.text, "html.parser")
link_set = set()
for link in soup.find_all("a"):
    web_links = link.get("href")
    print(web_links)
    link_set.add(web_links)

csvfile = open("code_python.csv", "w+", newline="")
writer = csv.writer(csvfile)
writer.writerow(["Links"])
for link in link_set:
    writer.writerow([link])
csvfile.close()
