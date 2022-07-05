const navn = document.getElementById('navn');

const treff = document.getElementById('søk-treff-info');

export const renderData = function (data) {
  // Reset Content
  navn.innerHTML = '';

  let html = '';

  if (data === null) {
    html = '';
    treff.classList.add('hide');
  } else if (data.length >= 400) {
    html = `Antal treff: ${data.length}+. Prøv flere valg for et mere nøyaktig søk`;
    treff.classList.remove('hide');
  } else {
    html = `Antal treff: ${data.length}`;
    treff.classList.remove('hide');
  }
  document.getElementById('antalSøkEle').innerHTML = html;

  if (data) {
    data.forEach((ele, i) => {
      const divSøkRes = document.createElement('div');
      divSøkRes.innerHTML = `
      <div class="row bedrift-liste ${i % 2 == 0 ? 'søk-liste' : ''}" style="padding: 5px 0;">
        <div class="liste col-sm-2">${ele.organisasjonsnummer}&nbsp;
        </div>
        <div class="liste col-sm-4">
          <a target="_blank" href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=${
            ele.organisasjonsnummer
          }">${ele.navn}</a>
        </div> 
        <div class="liste col-sm-2">${
          ele.forretningsadresse ? ele.forretningsadresse.postnummer : ele.postadresse.postnummer
        }
          ${ele.forretningsadresse ? ele.forretningsadresse.poststed : ele.postadresse.poststed}
        </div>
        <div class="liste col-sm-2 text-center">${ele.antallAnsatte}
        </div> 
      </div> 
    `;
      navn.appendChild(divSøkRes);
    });
  } else {
    navn.innerHTML = 'Fant Ingen Treff';
  }
};
