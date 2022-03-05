import requests
import json
from pprint import pprint
import os

def format_prepped_request(prepped, encoding=None):
    # prepped has .method, .path_url, .headers and .body attribute to view the request
    encoding = encoding or requests.utils.get_encoding_from_headers(prepped.headers)
    body = prepped.body.decode(encoding) if encoding else '<binary data>' 
    headers = '\n'.join(['{}: {}'.format(*hv) for hv in prepped.headers.items()])
    return f"""\
{prepped.method} {prepped.path_url} HTTP/1.1
{headers}

{body}"""


API_KEY = "2b10189SmpQJ3XHmESgf2Hz9k"	# Your API_KEY here
api_endpoint = f"https://my-api.plantnet.org/v2/identify/all?api-key={API_KEY}"


def plant_recognition(image_path_1, file):
    image_data_1 = open(image_path_1, 'rb')

    data = {
        'organs': ['flower']
    }

    files = [
        ('images', (image_path_1, image_data_1))
    ]

    req = requests.Request('POST', url=api_endpoint, files=files, data=data)
    prepared = req.prepare()

    print(format_prepped_request(prepared))

    s = requests.Session()
    response = s.send(prepared)
    json_result = json.loads(response.text)

    pprint(image_path_1, stream=file)
    pprint(response.status_code, stream=file)
    pprint(json_result, stream=file)
    pprint("\n", stream=file)

imgs_path = 'B:/dev/school/SYDE-461/FYDP/img-recog/test_images'
f = open("test_results.txt", "a")
for filename in os.listdir(imgs_path):
    plant_recognition(imgs_path + '/' + filename, f)
    # print(filename[:-4])

f.close()

# \[\{'gbif': .*\n\s+'score': .*\n\s+'species': \{'.*