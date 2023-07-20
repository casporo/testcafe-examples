fixture("Airport Gap - Public Endpoints");

const favoriteId = 'KIX';

test("Fetch airports by ID", async (t) => {
   const response = await t.request({
      url: 'https://airportgap.dev-tester.com/api/airports/'+favoriteId,
      method: "get"
    });

  console.log(response.statusText)
  console.log(response.body)
});
