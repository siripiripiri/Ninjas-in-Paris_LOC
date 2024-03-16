from newspaper import Article
import nltk
nltk.download('punkt')

url = 'https://fortune.com/2024/03/07/byd-electric-vehicles-tesla-australia-china-automotive/'
article = Article(url)

article.download()
article.parse()
article.nlp()

# print(article.keywords)
print(article.text)