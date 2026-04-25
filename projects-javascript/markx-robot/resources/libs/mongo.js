const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://douglastony1235_db_user:WCt5ki1cykuuCwGT@cluster0.dwibwni.mongodb.net/markX?appName=Cluster0';

async function removeTaskFromDatabase(taskName) {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('markX');
        const collection = db.collection('tasks');
        await collection.deleteMany({ text: taskName });
        console.log('Removendo a tarefa ' + taskName);
    } finally {
        await client.close();
    }
}

module.exports = {
    removeTaskFromDatabase
};
