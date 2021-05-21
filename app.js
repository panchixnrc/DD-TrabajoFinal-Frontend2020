fetch("https://app.pokemon-api.xyz/pokemon/random", {
  headers: {
    "content-type": "application/json",
  },
})
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    console.log(json);
  });
