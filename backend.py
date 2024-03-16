from flask import Flask, request, jsonify
from flask_cors import CORS
import graph_genertor as gg
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

searched_query = ""  # Variable to store the searched query

@app.route('/update_search', methods=['POST'])
def update_search():
    global searched_query
    data = request.json
    searched_query = data.get('searchedQuery', '')
    gg.get_news_articles(searched_query)
    return jsonify({'message': f'Recieved Search: {searched_query}'})
    

@app.route('/get_search', methods=['GET'])
def get_search():
    global searched_query
    return jsonify({'searchedQuery': searched_query})

if __name__ == '__main__':
    app.run(debug=True)
