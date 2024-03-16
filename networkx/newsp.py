import newspaper
import requests

paper = newspaper.build('https://www.hindustantimes.com/')

tesla_articles = []
elon_musk_articles = []

for article in paper.articles:
    article.download()
    article.parse()
    if "tesla" in article.text.lower() or "elon musk" in article.text.lower():
        if "tesla" in article.text.lower():
            tesla_articles.append(article.url)
        if "elon musk" in article.text.lower():
            elon_musk_articles.append(article.url)

print("Tesla related articles:")
for article in tesla_articles:
    print(article)

print("Elon Musk related articles:")
for article in elon_musk_articles:
    print(article)
