fixture("Airport Gap - Public Endpoints");

test("Fetch favorite airport", async (t) => {
    const getTokenResponse = await t.request({
      url: "https://airportgap.dev-tester.com/api/tokens",
      body: { email: "test@airportgap.com", password: "airportgappassword"},
      method: "post"
        });
   const AIRPORT_GAP_TOKEN = getTokenResponse.body.token;

   const getFavouriteAirportResponse = await t.request({
      url: "https://airportgap.dev-tester.com/api/favorites",
      method: "get",
      headers: {
            Authorization: 'Token '+ AIRPORT_GAP_TOKEN,
          },
    });

  console.log(getFavouriteAirportResponse.statusText)
  console.log(getFavouriteAirportResponse.body)
  const test = getFavouriteAirportResponse.body.data;
  console.log(test);
});
