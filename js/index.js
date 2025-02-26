fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("catFacts").innerHTML = data.fact;
  });
