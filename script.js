// let kommunenummer = 1566;

const komuneNr = document.getElementById('komuneNr');
const fraAntallAnsatte2 = document.getElementById('fraAntallAnsatte2');
const tilAntallAnsatte2 = document.getElementById('tilAntallAnsatte2');

const navn = document.getElementById('navn');
const organisasjonsnummer = document.getElementById('organisasjonsnummer');
const antallAnsatte = document.getElementById('antallAnsatte');

const getData = function (kommunenummer, fraAntallAnsatte2, tilAntallAnsatte2) {
  fetch(
    `https://data.brreg.no/enhetsregisteret/api/enheter?fraAntallAnsatte2=${fraAntallAnsatte2}&tilAntallAnsatte2=${tilAntallAnsatte2}&postadresse.kommunenummer=${kommunenummer}&size=9999`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data._embedded.enheter);

      data._embedded.enheter.forEach(ele => {
        const heading = document.createElement('p');
        heading.className = 'test';

        heading.textContent = `${ele.navn}: organisasjonsnummer ${ele.organisasjonsnummer}, antallAnsatte ${ele.antallAnsatte} `;

        navn.appendChild(heading);
      });
    });
};

// if (seachBtn) {
//   seachBtn.addEventListener('click', () => {
//     getData(komuneNr.value * 1, fraAntallAnsatte2.value * 1, tilAntallAnsatte2.value * 1);
//   });
// }
