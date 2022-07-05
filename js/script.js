// Imports
import { kommuneDropdown } from './dropdown.js';
import {
  seachData,
  sortDataAntallAnsatte,
  sortDataName,
  sortDataOrgNr,
  sortDataPostNr,
  seachTreff,
} from './sort.js';

// DOM Elements for even listeners
const fylkesnr = document.getElementById('fylkesnr');
const seachBtn = document.getElementById('seach-btn');
const aaBtn = document.getElementById('antall-ansatte');
const postNrBtn = document.getElementById('post-nr');
const orgNrbtnSort = document.getElementById('org-nr-sort');
const navnBtnSort = document.getElementById('navn-sort');
const seachTreffInput = document.getElementById('seach-treff-input');

// Event listeners
fylkesnr.addEventListener('change', function () {
  document.getElementById('kommunenr').innerHTML = `<option value="0">ALLE</option>`;
  kommuneDropdown(this.options[this.selectedIndex].value);
});
seachBtn.addEventListener('click', seachData);
orgNrbtnSort.addEventListener('click', sortDataOrgNr);
navnBtnSort.addEventListener('click', sortDataName);
aaBtn.addEventListener('click', sortDataAntallAnsatte);
postNrBtn.addEventListener('click', sortDataPostNr);
if (seachTreffInput) seachTreffInput.addEventListener('input', seachTreff);
