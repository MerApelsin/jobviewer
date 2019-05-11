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
    }

    fetchData = async () => {
      let respData = [];
        try{
            //const response = await fetch('https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json');
            //const data =  await response.json();
            respData = tempFakeJson;
        }
        catch(err) {
            return err;
        }

        this.formatData(respData);
        
    }
    
    formatData = (rawData) => {
      let formatedObj = {};
      for (let object in rawData) 
      {
        let id = rawData[object].id;
        
        let tempObj = {};
        let tempLocationObj = {};

        tempLocationObj = {
            ...rawData[object].locations[0].location
        }
        
        tempObj = {
          data: {
          short:{
            id: id,
            company: {
              logo: rawData[object].company.logo,
              name: rawData[object].company.name,
              },
            employmentType: rawData[object].employment_type,
            workCategory: rawData[object].function,
            jobTitle: rawData[object].title,
            location: {...tempLocationObj},
            },
          full:{
              id: id,
              company: {
                coverImg: rawData[object].company.cover,
                desc: {__html: rawData[object].company.descr},
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
              workDetails: {
                departments: rawData[object].departments,
                employmentType: rawData[object].employment_type,
                exp: rawData[object].experience,
                workDesc: {__html: rawData[object].descr},
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
        formatedObj[rawData[object].id] = tempObj;
      }
      this.data = formatedObj;
      
    }

    getShortAds = () =>{
        let shortAds = []
        for (let ads in this.data) 
        {
          shortAds[shortAds.length] = this.data[ads].data.short;
        }

        return shortAds;
    }

    getFullAd = (id) => {
        let foundKey = Object.keys(this.data).find(key => this.data[key].data.full.id === id);
        return this.data[foundKey].data.full;
    }
  }

  const dataHandler = new DataHandler();

  //exponerar bara den faktiskta instansen av firebase vilket gör att andra filer inte kan/ska initisera firebase på flera ställen
  export default dataHandler;


