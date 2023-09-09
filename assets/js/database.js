let DB;


document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let AccountDB = indexedDB.open('Accounts', 1);

    // if there's an error
    AccountDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    AccountDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = AccountDB.result;
        
    }

    // This method runs once (great for creating the schema)
    AccountDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let accountStore = db.createObjectStore('Accounts', { keyPath: 'id', autoIncrement: true });

        // createindex: 
        accountStore.createIndex('username', 'username', { unique: true });
        accountStore.createIndex('password', 'password', { unique: false });
        accountStore.createIndex('email', 'email', { unique: false });
        accountStore.createIndex('gender', 'gender', { unique: false });
        

        let ScoreboardStore = db.createObjectStore('Scoreboard', { keyPath: 'id', autoIncrement: true });

        ScoreboardStore.createIndex('GameName', 'GameName', { unique: false })
        ScoreboardStore.createIndex('Player', 'Player', { unique: false })
        ScoreboardStore.createIndex('Score', 'Score', { unique: false })


        console.log('Database ready and fields created!');
    }

})


