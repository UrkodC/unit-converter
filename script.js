let tempChart = null;

const unitOptions = {
  Temperature: [
    "Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)", "Rankine (°R)",
    "Réaumur (°Ré)", "Delisle (°De)", "Newton (°N)", "Rømer (°Rø)"
  ],
  Length: [
    "Meter (m)", "Kilometer (km)", "Mile (mi)", "Foot (ft)",
    "Inch (in)", "Yard (yd)", "Centimeter (cm)"
  ],
  Weight: [
    "Kilogram (kg)", "Gram (g)", "Pound (lb)", "Ounce (oz)", "Stone (st)"
  ],
  Volume: [
    "Liter (L)", "Milliliter (mL)", "Gallon (US)", "Gallon (UK)",
    "Quart (qt)", "Pint (pt)", "Cup (cup)"
  ],
  Speed: [
    "Kilometers/hour (km/h)", "Meters/second (m/s)", "Miles/hour (mph)", "Knots (kn)"
  ],
  Time: [
    "Seconds (s)", "Minutes (min)", "Hours (h)", "Days (d)",
    "Weeks (wk)", "Months (mo)", "Years (yr)"
  ]
};

function updateUnits() {
  const category = document.getElementById('categorySelect').value;
  const unitSelect = document.getElementById('unitSelect');
  unitSelect.innerHTML = '';
  unitOptions[category].forEach(unit => {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unit;
    unitSelect.appendChild(option);
  });
}

function convert() {
  const category = document.getElementById('categorySelect').value;
  switch(category) {
    case 'Temperature':
      convertTemperature();
      break;
    case 'Length':
      convertLength();
      break;
    case 'Weight':
      convertWeight();
      break;
    case 'Volume':
      convertVolume();
      break;
    case 'Speed':
      convertSpeed();
      break;
    case 'Time':
      convertTime();
      break;
  }
}

function convertTemperature() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let celsius;
  switch(unit) {
    case 'Celsius (°C)': celsius = input; break;
    case 'Fahrenheit (°F)': celsius = (input - 32) * 5/9; break;
    case 'Kelvin (K)': celsius = input - 273.15; break;
    case 'Rankine (°R)': celsius = (input - 491.67) * 5/9; break;
    case 'Réaumur (°Ré)': celsius = input * 1.25; break;
    case 'Delisle (°De)': celsius = 100 - input * 2/3; break;
    case 'Newton (°N)': celsius = input * 100/33; break;
    case 'Rømer (°Rø)': celsius = (input - 7.5) * 40/21; break;
    default: celsius = input;
  }

  const conversions = {
    'Celsius (°C)': celsius,
    'Fahrenheit (°F)': celsius * 9/5 + 32,
    'Kelvin (K)': celsius + 273.15,
    'Rankine (°R)': (celsius + 273.15) * 9/5,
    'Réaumur (°Ré)': celsius * 0.8,
    'Delisle (°De)': (100 - celsius) * 3/2,
    'Newton (°N)': celsius * 33/100,
    'Rømer (°Rø)': celsius * 21/40 + 7.5
  };

  displayResults(conversions);
}

function convertLength() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let meters;
  switch(unit) {
    case 'Meter (m)': meters = input; break;
    case 'Kilometer (km)': meters = input * 1000; break;
    case 'Mile (mi)': meters = input * 1609.34; break;
    case 'Foot (ft)': meters = input * 0.3048; break;
    case 'Inch (in)': meters = input * 0.0254; break;
    case 'Yard (yd)': meters = input * 0.9144; break;
    case 'Centimeter (cm)': meters = input * 0.01; break;
    default: meters = input;
  }

  const conversions = {
    'Meter (m)': meters,
    'Kilometer (km)': meters / 1000,
    'Mile (mi)': meters / 1609.34,
    'Foot (ft)': meters / 0.3048,
    'Inch (in)': meters / 0.0254,
    'Yard (yd)': meters / 0.9144,
    'Centimeter (cm)': meters / 0.01
  };

  displayResults(conversions);
}

function convertWeight() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let kg;
  switch(unit) {
    case 'Kilogram (kg)': kg = input; break;
    case 'Gram (g)': kg = input / 1000; break;
    case 'Pound (lb)': kg = input * 0.453592; break;
    case 'Ounce (oz)': kg = input * 0.0283495; break;
    case 'Stone (st)': kg = input * 6.35029; break;
    default: kg = input;
  }

  const conversions = {
    'Kilogram (kg)': kg,
    'Gram (g)': kg * 1000,
    'Pound (lb)': kg / 0.453592,
    'Ounce (oz)': kg / 0.0283495,
    'Stone (st)': kg / 6.35029
  };

  displayResults(conversions);
}

function convertVolume() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let liters;
  switch(unit) {
    case 'Liter (L)': liters = input; break;
    case 'Milliliter (mL)': liters = input / 1000; break;
    case 'Gallon (US)': liters = input * 3.78541; break;
    case 'Gallon (UK)': liters = input * 4.54609; break;
    case 'Quart (qt)': liters = input * 0.946353; break;
    case 'Pint (pt)': liters = input * 0.473176; break;
    case 'Cup (cup)': liters = input * 0.24; break;
    default: liters = input;
  }

  const conversions = {
    'Liter (L)': liters,
    'Milliliter (mL)': liters * 1000,
    'Gallon (US)': liters / 3.78541,
    'Gallon (UK)': liters / 4.54609,
    'Quart (qt)': liters / 0.946353,
    'Pint (pt)': liters / 0.473176,
    'Cup (cup)': liters / 0.24
  };

  displayResults(conversions);
}

function convertSpeed() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let mps;
  switch(unit) {
    case 'Meters/second (m/s)': mps = input; break;
    case 'Kilometers/hour (km/h)': mps = input / 3.6; break;
    case 'Miles/hour (mph)': mps = input * 0.44704; break;
    case 'Knots (kn)': mps = input * 0.514444; break;
    default: mps = input;
  }

  const conversions = {
    'Meters/second (m/s)': mps,
    'Kilometers/hour (km/h)': mps * 3.6,
    'Miles/hour (mph)': mps / 0.44704,
    'Knots (kn)': mps / 0.514444
  };

  displayResults(conversions);
}

function convertTime() {
  const input = parseFloat(document.getElementById('valueInput').value);
  const unit = document.getElementById('unitSelect').value;
  const resultsDiv = document.getElementById('results');

  if (isNaN(input)) {
    resultsDiv.innerHTML = "<p>Please enter a valid number.</p>";
    clearChart();
    return;
  }

  let seconds;
  switch(unit) {
    case 'Seconds (s)': seconds = input; break;
    case 'Minutes (min)': seconds = input * 60; break;
    case 'Hours (h)': seconds = input * 3600; break;
    case 'Days (d)': seconds = input * 86400; break;
    case 'Weeks (wk)': seconds = input * 604800; break;
    case 'Months (mo)': seconds = input * 2629800; break; // average month
    case 'Years (yr)': seconds = input * 31557600; break; // average year
    default: seconds = input;
  }

  const conversions = {
    'Seconds (s)': seconds,
    'Minutes (min)': seconds / 60,
    'Hours (h)': seconds / 3600,
    'Days (d)': seconds / 86400,
    'Weeks (wk)': seconds / 604800,
    'Months (mo)': seconds / 2629800,
    'Years (yr)': seconds / 31557600
  };

  displayResults(conversions);
}

function displayResults(conversions) {
  const resultsDiv = document.getElementById('results');
  let output = "<h2>Converted Values:</h2><ul>";
  for (const [unit, value] of Object.entries(conversions)) {
    output += `<li>${unit}: ${value.toFixed(4)}</li>`;
  }
  output += "</ul>";
  resultsDiv.innerHTML = output;

  const labels = Object.keys(conversions);
  const data = Object.values(conversions).map(val => parseFloat(val.toFixed(4)));

  const ctx = document.getElementById('tempChart').getContext('2d');

  if (tempChart) {
    tempChart.data.labels = labels;
    tempChart.data.datasets[0].data = data;
    tempChart.update();
  } else {
    tempChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Converted Values',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}

function clearChart() {
  if (tempChart) {
    tempChart.destroy();
    tempChart = null;
  }
}

// Initialize units on page load
updateUnits();