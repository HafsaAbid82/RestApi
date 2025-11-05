import requests
api_url= 'https://randomuser.me/api/?results=1'
response = requests.get(api_url)
response.json()
# timezone = { "offset": "+4:00", "description": " Turkmenistan"}
# response = requests.post(api_url, json=timezone)
# response.json()
# timezone = { "offset": "+5:00", "description": "North America"}
# response = requests.put(api_url, json=timezone)
# response.json()
# timezone = { "description": "America"}
# response = requests.patch(api_url, json=timezone)
# response.json()
if response.status_code == 200:
    print("Get response Successful")
    print(response.json())
# elif response.status_code == 201:
#     print("Post response Successful")
# elif response.status_code == 202:
#     print("Put/Patch response Successful")
# elif response.status_code == 204:
#     print("No Content")
# else:
#     print("Invalid Request")
