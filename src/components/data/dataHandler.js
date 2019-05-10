//should handle all data

//fetch data from url and store in state.

//get id:s

//get stuff for 'short card'

//get stuff for 'ad'
import tempFakeJson from './tempFakeJson.js';
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
      let respData = [];
        try{
            //const response = await fetch('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json');
            //const data =  await response.json();
            respData = tempFakeJson;
            //let fetchedData = await JSON.parse(rawData);
            //console.log(fetchedData);
        }
        catch(err){
            return err;
        }
        //6535
        this.formatData(respData);
        //console.log('outside try ', respData);  
    }
    
    formatData = (rawData) => {
      let formatedObj = {};
      for (let object in rawData) 
      {
        let id = rawData[object].id;
        console.log(id);
        let tempObj = {};
        tempObj = { id: id,
          data: {
          short:{
            id: id,
            company: {
              logo: rawData[object].company.logo,
              name: rawData[object].company.name,
              employmentType: rawData[object].employment_type,
              },
            workCategory: rawData[object].function,
            jobTitle: rawData[object].title
            },
          full:{
              id: id,
              company: {
                coverImg: rawData[object].company.cover,
                desc: {__html: rawData[object].company.desc},
                industry: rawData[object].industry,
                logo: rawData[object].company.logo,
                name: rawData[object].company.name,
                website: rawData[object].company.website
              },
              contact:{
                photo: rawData[object].contact.photo,
                name: rawData[object].contact.name,
                phone: rawData[object].contact.phone,
                email: rawData[object].contact.email
              },
              departments: rawData[object].departments,
              workDesc: {__html: rawData[object].desc},
              workDetails: {
                employmentType: rawData[object].employment_type,
                exp: rawData[object].experience,
                startDate: rawData[object].from_date,
                workCategory: rawData[object].function,
                location: rawData[object].locations,
                skills: {__html: rawData[object].skills},
                slug: rawData[object].slug,
                workTitle: rawData[object].title,
                adUrl: rawData[object].urls.ad,
                applyUrl: rawData[object].urls.apply
              }
            }
          }
        }
        formatedObj = Object.assign(tempObj);
      }
      console.log(formatedObj);
      //this.data = formatedObj;
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
  export default dataHandler;


