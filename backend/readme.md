1° hay que crear un entorno virtual: venv

python3 -m venv venv

para activarlo: source venv/bin/activate

luego empezamos a instalar las aplicaciones necesarias. 

se pueden instalar a mando (pip instamll blabla)

o se puede crear un archivo txt llamado requirements.txt e instalarlo asi: 

pip install -r requirements.txt

pip freeze > requirements.txt --> guarda las librerias instaladas en un archivo


localhost:8000/docs nos lleva a la documentacion de la api y podemos probar nuestro sistema ahi

pydantic biblioteca de python que nos ayuda a establecer un schema