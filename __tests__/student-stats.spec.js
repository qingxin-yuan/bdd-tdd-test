//jset.setMock('node-fetch', require('../__mocks__/nodefetch));

const studentStats = require ('../src/student-stats');
const {processedData} = require('../__mocks__/mock-data');
const apiData = require("../__mocks__/mock-api");

describe("students stats", () => {
  describe("Rewards for Older Graduates", () => {
    //list of names of students graduated and are older than 30
    describe("successful api fetch", () => {
      test("should fetch a list of students over 30 who passed", () => {
        const list = studentStats.filterList(apiData);
        console.log(list);
          expect(list).toEqual(processedData)
      
      });
    });
    
    describe('api fetch failed',()=>{
      test('should return empty array if api fetch fails', ()=>{
        const list = studentStats.filterList([]);
        expect(list).toEqual([])
      })
      
    })


  });

});
