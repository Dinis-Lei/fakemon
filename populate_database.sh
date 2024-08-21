#!/bin/bash

curl -X POST http://localhost:8000/fakemon/ -H "Content-Type: application/json" -d '{"name": "charmander", "type1": "Fire", "image":"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png", "description": "CHAR >:("}'


curl -X POST http://localhost:8000/fakemon/ -H "Content-Type: application/json" -d '{"name": "bulbasaur", "type1": "Grass", "type2": "Poison", "image":"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png", "description": "hi :)"}'
 

curl -X POST http://localhost:8000/fakemon/ -H "Content-Type: application/json" -d '{"name": "squirtle", "type1": "Water", "image":"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png", "description": "glu glu"}'
