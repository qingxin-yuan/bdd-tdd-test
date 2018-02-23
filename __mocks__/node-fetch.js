// overwrite node-fetch function

const mockApiData = require('./mock-api');

module.exports = ()=>{
  return {
    then: function (){
      return {
        then: function(){
          return {
            catch: function(){
              return [];
            }
          }
        }
       
      }
      
    }
  }
}