fixture("Airport Gap - Public Endpoints");

const dataSet = require('./data.json');

dataSet.forEach(data => {
    test("Fetch airports by ID", async (t) => {
       const response = await t.request({
          url: 'https://airportgap.dev-tester.com/api/airports/'+data.ID,
          method: "get"
        });

      console.log(response.statusText)
      console.log(response.body)
      const id = response.body.data.id;
      const type = response.body.data.type;
      const attributes = response.body.data.attributes;
      console.log("Airport ID: "+id);
      console.log("Type: "+type);
      console.log("City: "+attributes.city);
      console.log("Country: "+attributes.country);
      await t.expect(attributes.iata).eql(data.IATA);
      await t.expect(attributes.icao).eql(data.ICAO);
    });
});


