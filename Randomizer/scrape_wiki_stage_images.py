'''
quick & dirty python script to pull stage images from https://mrfz.fandom.com/wiki and save them in StageIcons/
Only grabs main story stages, skips existing files (by name)
'''

import requests
import time
from pathlib import Path
import shutil
from urllib.parse import urlencode

IMAGE_DIR = './StageIcons/'

def save_image(code, url):
    path = Path(f'{IMAGE_DIR}{code}_map.png').resolve()
    if not path.exists():
        print(f'saving image {url} => {path}')
        with requests.get(url, stream=True) as response:
            with path.open('wb') as f:
                shutil.copyfileobj(response.raw, f)
        time.sleep(.5)
if __name__ == '__main__':
    query = 'https://mrfz.fandom.com/api.php?action=query&format=json&generator=links&titles=Operation_List%23Main_Story&prop=categories&gpllimit=500&cllimit=500'
    cont = ''
    stagemap = {} # code:categories
    while 1:
        print('querying:',query+cont)
        with requests.get(query+cont) as r:
            json = r.json()
            for page in json['query']['pages'].values():
                if 'categories' in page and page['categories']:
                    stagemap.setdefault(page['title'],[]).extend([c['title'] for c in page['categories']])
            if 'continue' in json:
                cont = f"&{urlencode(json['continue'])}"
            else:
                break
        time.sleep(2)
    for code, cats in stagemap.items():
        categories = ''.join(cats)
        if any(x in categories for x in ('Prologue','Episode','Extreme','Sub')) and not any(x in categories for x in ('Episodes','Interludes','Tutorial')):
            save_image(code, f'https://mrfz.fandom.com/wiki/Special:Redirect/file/{code}_map.png')