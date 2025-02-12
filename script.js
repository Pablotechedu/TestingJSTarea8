function calculateStarWarsAge() {
  let age = document.getElementById("age").value;
  let speciesLifeSpan = document.getElementById("species").value;
  let starWarsAge;

  if (age === "" || age < 0) {
    document.getElementById("result").textContent =
      "Por favor, ingresa una edad válida.";
    return;
  }

  age = Number(age);
  speciesLifeSpan = Number(speciesLifeSpan);

  // Fórmula de conversión
  starWarsAge = (age * speciesLifeSpan) / 80;

  document.getElementById(
    "result"
  ).textContent = `Tu edad equivalente en esa especie es: ${starWarsAge.toFixed(
    2
  )} años.`;
}
