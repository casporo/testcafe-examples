fixture("Airport Gap - Public Endpoints");

const favoriteId = 'KIX';

test("Fetch airports by ID", async (t) => {
   const response = await t.request({
      url: 'https://airportgap.dev-tester.com/api/airports/'+favoriteId,
      method: "get"
    });

  console.log(response.statusText)
  console.log(response.body)
  const id = response.body.data.id;
  const type = response.body.data.type;
  const attributes = response.body.data.attributes;
  console.log("Airport ID: "+id);
  console.log("Type: "+type);
  console.log("IATA: "+attributes.iata);
  console.log("ICAO: "+attributes.icao);
});
