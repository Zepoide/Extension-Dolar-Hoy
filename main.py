from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://dolarhoy.com/').text
soup = BeautifulSoup(html_text, 'lxml')

