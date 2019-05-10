//should handle all data

//fetch data from url and store in state.

//get id:s

//get stuff for 'short card'

//get stuff for 'ad'

class DataHandler{
    constructor()
    {
        this.data = {};
      //firebase.initializeApp(config);
      //this.auth = firebase.auth();
    }

    /*signIn = (email,password) => {
      return this.auth.signInWithEmailAndPassword(email,password);
    }*/

    fetchData = async () => {
        try{
            const rawData = await fetch('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json');
            let fetchedData = await JSON.parse(rawData);
            console.log(fetchedData);
        }
        catch(err){
            return err;
        }
        
    }
  }
  /*
  function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

  */

  const dataHandler = new DataHandler();

  //exponerar bara den faktiskta instansen av firebase vilket gör att andra filer inte kan/ska initisera firebase på flera ställen
  export default DataHandler;


