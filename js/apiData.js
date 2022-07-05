// DOM Elements from inputs
const nameInput = document.getElementById('name-input');
const næringsKode = document.getElementById('nærings-kode');
const organisasjonsform = document.getElementById('orgform');

const tilAntallAnsatte = document.getElementById('tilAntallAnsatte-input');
const fraAntallAnsatte = document.getElementById('fraAntallAnsatte-input');
const postnummer = document.getElementById('postnummer-input');

export const fetchData = async () => {
  let selectElement = document.querySelectorAll('[name=kommune]');
  let optionValues = [...selectElement[0].options].map(o => o.value);
  optionValues.shift();
  let kommuneArray = optionValues.toString();

  let knr = kommunenr.options[kommunenr.selectedIndex].value;
  let seachName = nameInput.value;
  let orgFormVal = organisasjonsform.options[organisasjonsform.selectedIndex].value;

  let postnummerVal = postnummer.value;
  if (postnummerVal !== '') {
    postnummerVal = `&forretningsadresse.postnummer=${postnummerVal}`;
  }

  let fraAAVal = fraAntallAnsatte.value;
  if (fraAAVal !== '') fraAAVal = `&fraAntallAnsatte=${fraAAVal}`;

  let tilAAVal = tilAntallAnsatte.value;
  if (tilAAVal !== '') tilAAVal = `&tilAntallAnsatte=${tilAAVal}`;

  if (orgFormVal === '0') {
    orgFormVal = '';
  } else {
    orgFormVal = `&organisasjonsform=${orgFormVal}`;
  }

  let næringsKodeValue;
  if (næringsKode.value) {
    næringsKodeValue = `&naeringskode=${næringsKode.value.toUpperCase()}`;
  } else {
    næringsKodeValue = '';
  }

  // fix så man får spesific value eller alle!!
  // Lag reset
  if (knr === '0') {
    knr = `&kommunenummer=${kommuneArray}`;
  } else if (knr !== '0') {
    knr = `&kommunenummer=${knr}`;
  }

  // Makes string for fylkesnr
  const fylkesnrStr = fylkesnr.value === '0' ? '' : knr;

  if (seachName) seachName = `&navn=${seachName}`;

  let apiString = `https://data.brreg.no/enhetsregisteret/api/enheter?size=400${fylkesnrStr}${seachName}${næringsKodeValue}${orgFormVal}${tilAAVal}${fraAAVal}${postnummerVal}`;

  const res = await fetch(apiString);

  const data = await res.json();

  if (!res.ok) throw new Error(`${data.feilmelding} (${res.status})`);

  if (data._embedded) return data._embedded.enheter;
  else return null;
};
