const fetch = require('node-fetch');

const studentStats = {

  minAge: 30,

  filterList(data){
    const result = [];
    // console.log(json);
    data.filter(el=>{
      const {age,name,  project1, project2, project3, project4} = el;
      // console.log(age, project1, el);
      if (age >this.minAge && project1 === 'pass' && project2 === 'pass' && project3 === 'pass' && project4 ==='pass'){
        // console.log(el);
        result.push({name, age});
      }
    })
    console.log(result);
    // console.log(result);
    return result;
  },


  getPassingStudentsOverAge(){
  
    // console.log(result)
  //  try{
    fetch('http://localhost:3000/students')
   
    .then(data=>data.json())
    .then(json=>

     this.filterList(this.minAge)
      // console.log(json)
    )
     .catch(err=>{
      return []
      // throw new Error('error');
      // console.log(err);
    })
  //  }
  //   catch(err){
  //     throw new Error('error')
  //     // console.log(err)
  //   }
    
   
  }
}

module.exports = studentStats;