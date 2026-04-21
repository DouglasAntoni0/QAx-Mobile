from robot.api.deco import keyword
from pymongo import MongoClient

client = MongoClient('mongodb+srv://douglastony1235_db_user:WCt5ki1cykuuCwGT@cluster0.dwibwni.mongodb.net/markX?appName=Cluster0')

db = client['markX']

@keyword('Remove task from database')
def remove_task_by_name(task_name):
    collection = db['tasks']
    collection.delete_many({'text': task_name})
    print('Removendo a tarefa ' + task_name)