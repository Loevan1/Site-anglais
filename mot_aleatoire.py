import requests

def mot_aleatoire():
    url="https://random-word-api.herokuapp.com/word"
    response = requests.get(url)
    return response.json()[0]

def definition(mot):
    url=f"https://api.dictionaryapi.dev/api/v2/entries/en/{mot}"
    reponse= requests.get(url)
    data=reponse.json()
    
    return data[0]["meanings"][0]["definitions"][0]["definition"]

mot=mot_aleatoire()
print(mot)
def_mot=definition(mot)
print(def_mot)

