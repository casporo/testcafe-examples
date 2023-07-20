fixture("Airport Gap - Public Endpoints");

test("Calculate the distance between two airports", async (t) => {
  const response = await t.request({
    url: "https://airportgap.dev-tester.com/api/airports/distance",
    method: "post",
    body: { from: "KIX", to: "HNL" },
  });

  await t.expect(response.status).eql(200);
  console.log(response.body);
  const id = response.body.data.id;
  const attributes = response.body.data.attributes;
  console.log("Airport IDs: "+id);
  console.log(attributes.from_airport);
  console.log(attributes.to_airport);
  await t.expect(attributes.kilometers).eql(6613.6637624983405);
  await t.expect(attributes.miles).eql(4106.679303789583);
  await t.expect(attributes.nautical_miles).eql(3568.6050364010352);
});
