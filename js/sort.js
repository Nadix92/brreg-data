// Imports
import { fetchData } from './apiData.js';
import { renderData } from './render.js';

// Dom Elements
const seachHeading = document.querySelector('.seach_heading');
const seachTreffInput = document.getElementById('seach-treff-input');

// States

let apiData;
let sortedAsc = true;

export const seachData = async () => {
  apiData = await fetchData();

  seachHeading.classList.remove('hide');
  renderData(apiData);

  seachTreffInput.value = '';
};

export const sortDataName = () => {
  const sortedData = sortedAsc ? apiData.slice().sort() : apiData.slice().sort().reverse();

  renderData(sortedData);
  sortedAsc = !sortedAsc;

  seachTreffInput.value = '';
};

export const sortDataPostNr = () => {
  const sortedData = sortedAsc
    ? apiData.slice().sort((a, b) => a.forretningsadresse.postnummer - b.forretningsadresse.postnummer)
    : apiData.slice().sort((a, b) => b.forretningsadresse.postnummer - a.forretningsadresse.postnummer);

  renderData(sortedData);
  sortedAsc = !sortedAsc;

  seachTreffInput.value = '';
};

export const sortDataOrgNr = () => {
  const sortedData = sortedAsc
    ? apiData.slice().sort((a, b) => a.organisasjonsnummer - b.organisasjonsnummer)
    : apiData.slice().sort((a, b) => b.organisasjonsnummer - a.organisasjonsnummer);

  renderData(sortedData);
  sortedAsc = !sortedAsc;

  seachTreffInput.value = '';
};

export const sortDataAntallAnsatte = () => {
  const sortedData = sortedAsc
    ? apiData.slice().sort((a, b) => a.antallAnsatte - b.antallAnsatte)
    : apiData.slice().sort((a, b) => b.antallAnsatte - a.antallAnsatte);

  renderData(sortedData);
  sortedAsc = !sortedAsc;

  seachTreffInput.value = '';
};

//////////////////////////////////
// FILTER FUNCTIONS

export const seachTreff = e => {
  const bedriftListe = document.querySelectorAll('.bedrift-liste');
  let value = e.target.value.toString().toLowerCase();

  bedriftListe.forEach(user => {
    const isVisible = user.childNodes[3].textContent.toLowerCase().includes(value);
    user.classList.toggle('hide', !isVisible);
  });
};
