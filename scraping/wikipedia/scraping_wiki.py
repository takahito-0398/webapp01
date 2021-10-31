import requests

# url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/ja.wikipedia.org/all-access/all-agents/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92/daily/20181201/20181203"
url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/ja.wikipedia.org/all-access/all-agents/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92/daily/20001201/20181205"
# url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/ja.wikipedia.org/all-access/all-agents/daily/20181201/20181203"
headers = {"User-Agent": "your-email@example.com"}

r = requests.get(url, headers=headers)
# print(r.json()["items"][0]["project"])
print(len((r.json())["items"]))
# print(r.json()["items"][0])
