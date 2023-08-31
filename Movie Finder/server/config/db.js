const { MongoClient } = require('mongodb');

async function main() {
   const URI =
      'mongodb+srv://Nitsan_new:UM5pItXRUusNjfwu@cluster0.gpc3z.mongodb.net/';
   const client = new MongoClient(URI);

   try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await listDatabases(client);
   } catch (e) {
      console.error(e);
   } finally {
      await client.close();
   }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */

async function listDatabases(client) {
   databasesList = await client.db().admin().listDatabases();

   console.log('Databases:');
   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}