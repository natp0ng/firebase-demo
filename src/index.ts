import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://xxx.firebaseio.com",
    apiKey: "xxx"
};

const app = initializeApp(firebaseConfig);
// console.log(app)
const database = getDatabase(app);
// console.log(database)

const screenId = 'c95b5fb5-2c92-4c0a-a897-d7a2c598e0da'
const starCountRef = ref(database, '/players/' + screenId);
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log('onValue_____', data)
});
