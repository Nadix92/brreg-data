function dynamicdropdown(listindex) {
  switch (listindex) {
    case '0':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      break;

    // Oslo
    case '3':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('OSLO', '301');
      break;

    // Rogaland
    case '11':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('BJERKREIM', '1114');
      document.getElementById('kommunenr').options[2] = new Option('BOKN', '1145');
      document.getElementById('kommunenr').options[3] = new Option('EIGERSUND', '1101');
      document.getElementById('kommunenr').options[4] = new Option('GJESDAL', '1122');
      document.getElementById('kommunenr').options[5] = new Option('HAUGESUND', '1106');
      document.getElementById('kommunenr').options[6] = new Option('HJELMELAND', '1133');
      document.getElementById('kommunenr').options[7] = new Option('HÅ', '1119');
      document.getElementById('kommunenr').options[8] = new Option('KARMØY', '1149');
      document.getElementById('kommunenr').options[9] = new Option('KLEPP', '1120');
      document.getElementById('kommunenr').options[10] = new Option('KVITSØY', '1144');
      document.getElementById('kommunenr').options[11] = new Option('LUND', '1112');
      document.getElementById('kommunenr').options[12] = new Option('RANDABERG', '1127');
      document.getElementById('kommunenr').options[13] = new Option('SANDNES', '1108');
      document.getElementById('kommunenr').options[14] = new Option('SAUDA', '1136');
      document.getElementById('kommunenr').options[15] = new Option('SOKNDAL', '1111');
      document.getElementById('kommunenr').options[16] = new Option('SOLA', '1124');
      document.getElementById('kommunenr').options[17] = new Option('STAVANGER', '1103');
      document.getElementById('kommunenr').options[18] = new Option('STRAND', '1130');
      document.getElementById('kommunenr').options[19] = new Option('SULDAL', '1134');
      document.getElementById('kommunenr').options[20] = new Option('TIME', '1121');
      document.getElementById('kommunenr').options[21] = new Option('TYSVÆR', '1146');
      document.getElementById('kommunenr').options[22] = new Option('UTSIRA', '1151');
      document.getElementById('kommunenr').options[23] = new Option('VINDAFJORD', '1160');
      break;

    // Møre og Romsdal
    case '15':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('AUKRA', '1547');
      document.getElementById('kommunenr').options[2] = new Option('AURE', '1576');
      document.getElementById('kommunenr').options[3] = new Option('AVERØY', '1554');
      document.getElementById('kommunenr').options[4] = new Option('FJORD', '1578');
      document.getElementById('kommunenr').options[5] = new Option('GISKE', '1532');
      document.getElementById('kommunenr').options[6] = new Option('GJEMNES', '1557');
      document.getElementById('kommunenr').options[7] = new Option('HAREID', '1517');
      document.getElementById('kommunenr').options[8] = new Option('HERØY', '1515');
      document.getElementById('kommunenr').options[9] = new Option('HUSTADVIKA', '1579');
      document.getElementById('kommunenr').options[10] = new Option('KRISTIANSUND', '1505');
      document.getElementById('kommunenr').options[11] = new Option('MOLDE', '1506');
      document.getElementById('kommunenr').options[12] = new Option('RAUMA', '1539');
      document.getElementById('kommunenr').options[13] = new Option('SANDE', '1514');
      document.getElementById('kommunenr').options[14] = new Option('SMØLA', '1573');
      document.getElementById('kommunenr').options[15] = new Option('STRANDA', '1525');
      document.getElementById('kommunenr').options[16] = new Option('SULA', '1531');
      document.getElementById('kommunenr').options[17] = new Option('SUNNDAL', '1563');
      document.getElementById('kommunenr').options[18] = new Option('SURNADAL', '1566');
      document.getElementById('kommunenr').options[19] = new Option('SYKKYLVEN', '1528');
      document.getElementById('kommunenr').options[20] = new Option('TINGVOLL', '1560');
      document.getElementById('kommunenr').options[21] = new Option('ULSTEIN', '1516');
      document.getElementById('kommunenr').options[22] = new Option('VANYLVEN', '1511');
      document.getElementById('kommunenr').options[23] = new Option('VESTNES', '1535');
      document.getElementById('kommunenr').options[24] = new Option('VOLDA', '1577');
      document.getElementById('kommunenr').options[25] = new Option('ØRSTA', '1520');
      document.getElementById('kommunenr').options[26] = new Option('ÅLESUND', '1507');
      break;

    // Nordland
    case '18':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('ALSTAHAUG', '1820');
      document.getElementById('kommunenr').options[2] = new Option('ANDØY', '1871');
      document.getElementById('kommunenr').options[3] = new Option('BEIARN', '1839');
      document.getElementById('kommunenr').options[4] = new Option('BINDAL', '1811');
      document.getElementById('kommunenr').options[5] = new Option('BODØ', '1804');
      document.getElementById('kommunenr').options[6] = new Option('BRØNNØY', '1813');
      document.getElementById('kommunenr').options[7] = new Option('BØ', '1867');
      document.getElementById('kommunenr').options[8] = new Option('DØNNA', '1827');
      document.getElementById('kommunenr').options[9] = new Option('EVENES', '1853');
      document.getElementById('kommunenr').options[10] = new Option('FAUSKE', '1841');
      document.getElementById('kommunenr').options[11] = new Option('FLAKSTAD', '1859');
      document.getElementById('kommunenr').options[12] = new Option('GILDESKÅL', '1838');
      document.getElementById('kommunenr').options[13] = new Option('GRANE', '1825');
      document.getElementById('kommunenr').options[14] = new Option('HADSEL', '1866');
      document.getElementById('kommunenr').options[15] = new Option('HAMARØY', '1875');
      document.getElementById('kommunenr').options[16] = new Option('HATTFJELLDAL', '1826');
      document.getElementById('kommunenr').options[17] = new Option('HEMNES', '1832');
      document.getElementById('kommunenr').options[18] = new Option('HERØY', '1818');
      document.getElementById('kommunenr').options[19] = new Option('LEIRFJORD', '1822');
      document.getElementById('kommunenr').options[20] = new Option('LURØY', '1834');
      document.getElementById('kommunenr').options[21] = new Option('LØDINGEN', '1851');
      document.getElementById('kommunenr').options[22] = new Option('MELØY', '1837');
      document.getElementById('kommunenr').options[23] = new Option('MOSKENES', '1874');
      document.getElementById('kommunenr').options[24] = new Option('NARVIK', '1806');
      document.getElementById('kommunenr').options[25] = new Option('NESNA', '1828');
      document.getElementById('kommunenr').options[26] = new Option('RANA', '1833');
      document.getElementById('kommunenr').options[27] = new Option('RØDØY', '1836');
      document.getElementById('kommunenr').options[28] = new Option('RØST', '1856');
      document.getElementById('kommunenr').options[29] = new Option('SALTDAL', '1840');
      document.getElementById('kommunenr').options[30] = new Option('SORTLAND', '1870');
      document.getElementById('kommunenr').options[31] = new Option('STEIGEN', '1848');
      document.getElementById('kommunenr').options[32] = new Option('SØMNA', '1812');
      document.getElementById('kommunenr').options[33] = new Option('SØRFOLD', '1845');
      document.getElementById('kommunenr').options[34] = new Option('TRÆNA', '1835');
      document.getElementById('kommunenr').options[35] = new Option('VEFSN', '1824');
      document.getElementById('kommunenr').options[36] = new Option('VEGA', '1815');
      document.getElementById('kommunenr').options[37] = new Option('VESTVÅGØY', '1860');
      document.getElementById('kommunenr').options[38] = new Option('VEVELSTAD', '1816');
      document.getElementById('kommunenr').options[39] = new Option('VÆRØY', '1857');
      document.getElementById('kommunenr').options[40] = new Option('VÅGAN', '1865');
      document.getElementById('kommunenr').options[41] = new Option('ØKSNES', '1868');
      break;

    // Svalbard
    case '21':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('SVALBARD', '2100');

      break;

    // Viken
    case '30':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('AREMARK', '3012');
      document.getElementById('kommunenr').options[2] = new Option('ASKER', '3025');
      document.getElementById('kommunenr').options[3] = new Option('AURSKOG-HØLAND', '3026');
      document.getElementById('kommunenr').options[4] = new Option('BÆRUM', '3024');
      document.getElementById('kommunenr').options[5] = new Option('DRAMMEN', '3005');
      document.getElementById('kommunenr').options[6] = new Option('EIDSVOLL', '3035');
      document.getElementById('kommunenr').options[7] = new Option('ENEBAKK', '3028');
      document.getElementById('kommunenr').options[8] = new Option('FLESBERG', '3050');
      document.getElementById('kommunenr').options[9] = new Option('FLÅ', '3039');
      document.getElementById('kommunenr').options[10] = new Option('FREDRIKSTAD', '3004');
      document.getElementById('kommunenr').options[11] = new Option('FROGN', '3022');
      document.getElementById('kommunenr').options[12] = new Option('GJERDRUM', '3032');
      document.getElementById('kommunenr').options[13] = new Option('GOL', '3041');
      document.getElementById('kommunenr').options[14] = new Option('HALDEN', '3001');
      document.getElementById('kommunenr').options[15] = new Option('HEMSEDAL', '3042');
      document.getElementById('kommunenr').options[16] = new Option('HOL', '3044');
      document.getElementById('kommunenr').options[17] = new Option('HOLE', '3038');
      document.getElementById('kommunenr').options[18] = new Option('HURDAL', '3037');
      document.getElementById('kommunenr').options[19] = new Option('HVALER', '3011');
      document.getElementById('kommunenr').options[20] = new Option('INDRE ØSTFOLD', '3014');
      document.getElementById('kommunenr').options[21] = new Option('JEVNAKER', '3053');
      document.getElementById('kommunenr').options[22] = new Option('KONGSBERG', '3006');
      document.getElementById('kommunenr').options[23] = new Option('KRØDSHERAD', '3046');
      document.getElementById('kommunenr').options[24] = new Option('LIER', '3049');
      document.getElementById('kommunenr').options[25] = new Option('LILLESTRØM', '3030');
      document.getElementById('kommunenr').options[26] = new Option('LUNNER', '3054');
      document.getElementById('kommunenr').options[27] = new Option('LØRENSKOG', '3029');
      document.getElementById('kommunenr').options[28] = new Option('MARKER', '3013');
      document.getElementById('kommunenr').options[29] = new Option('MODUM', '3047');
      document.getElementById('kommunenr').options[30] = new Option('MOSS', '3002');
      document.getElementById('kommunenr').options[31] = new Option('NANNESTAD', '3036');
      document.getElementById('kommunenr').options[32] = new Option('NES', '3034');
      document.getElementById('kommunenr').options[33] = new Option('NESBYEN', '3040');
      document.getElementById('kommunenr').options[34] = new Option('NESODDEN', '3023');
      document.getElementById('kommunenr').options[35] = new Option('NITTEDAL', '3031');
      document.getElementById('kommunenr').options[36] = new Option('NORDRE FOLLO', '3020');
      document.getElementById('kommunenr').options[37] = new Option('NORE OG UVDAL', '3052');
      document.getElementById('kommunenr').options[38] = new Option('RAKKESTAD', '3016');
      document.getElementById('kommunenr').options[39] = new Option('RINGERIKE', '3007');
      document.getElementById('kommunenr').options[40] = new Option('ROLLAG', '3051');
      document.getElementById('kommunenr').options[41] = new Option('RÆLINGEN', '3027');
      document.getElementById('kommunenr').options[41] = new Option('RÅDE', '3017');
      document.getElementById('kommunenr').options[42] = new Option('SARPSBORG', '3003');
      document.getElementById('kommunenr').options[43] = new Option('SIGDAL', '3045');
      document.getElementById('kommunenr').options[44] = new Option('SKIPTVET', '3015');
      document.getElementById('kommunenr').options[45] = new Option('ULLENSAKER', '3033');
      document.getElementById('kommunenr').options[46] = new Option('VESTBY', '3019');
      document.getElementById('kommunenr').options[47] = new Option('VÅLER', '3018');
      document.getElementById('kommunenr').options[48] = new Option('ØVRE EIKER', '3048');
      document.getElementById('kommunenr').options[49] = new Option('ÅL', '3043');
      document.getElementById('kommunenr').options[50] = new Option('ÅS', '3021');
      break;

    // Innlandet
    case '34':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('ALVDAL', '3428');
      document.getElementById('kommunenr').options[2] = new Option('DOVRE', '3431');
      document.getElementById('kommunenr').options[3] = new Option('EIDSKOG', '3416');
      document.getElementById('kommunenr').options[4] = new Option('ENGERDAL', '3425');
      document.getElementById('kommunenr').options[5] = new Option('ETNEDAL', '3450');
      document.getElementById('kommunenr').options[6] = new Option('FOLLDAL', '3429');
      document.getElementById('kommunenr').options[7] = new Option('GAUSDAL', '3441');
      document.getElementById('kommunenr').options[8] = new Option('GJØVIK', '3407');
      document.getElementById('kommunenr').options[9] = new Option('GRAN', '3446');
      document.getElementById('kommunenr').options[10] = new Option('GRUE', '3417');
      document.getElementById('kommunenr').options[11] = new Option('HAMAR', '3403');
      document.getElementById('kommunenr').options[12] = new Option('KONGSVINGER', '3401');
      document.getElementById('kommunenr').options[13] = new Option('LESJA', '3432');
      document.getElementById('kommunenr').options[14] = new Option('LILLEHAMMER', '3405');
      document.getElementById('kommunenr').options[15] = new Option('LOM', '3434');
      document.getElementById('kommunenr').options[16] = new Option('LØTEN', '3412');
      document.getElementById('kommunenr').options[17] = new Option('NORD-AURDAL', '3451');
      document.getElementById('kommunenr').options[18] = new Option('NORD-FRON', '3436');
      document.getElementById('kommunenr').options[19] = new Option('NORD-ODAL', '3414');
      document.getElementById('kommunenr').options[20] = new Option('NORDRE LAND', '3448');
      document.getElementById('kommunenr').options[21] = new Option('OS', '3430');
      document.getElementById('kommunenr').options[22] = new Option('RENDALEN', '3424');
      document.getElementById('kommunenr').options[23] = new Option('RINGEBU', '3439');
      document.getElementById('kommunenr').options[24] = new Option('RINGSAKER', '3411');
      document.getElementById('kommunenr').options[25] = new Option('SEL', '3437');
      document.getElementById('kommunenr').options[26] = new Option('SKJÅK', '3433');
      document.getElementById('kommunenr').options[27] = new Option('STANGE', '3413');
      document.getElementById('kommunenr').options[28] = new Option('STOR-ELVDAL', '3423');
      document.getElementById('kommunenr').options[29] = new Option('SØNDRE LAND', '3447');
      document.getElementById('kommunenr').options[30] = new Option('SØR-AURDAL', '3449');
      document.getElementById('kommunenr').options[31] = new Option('SØR-FRON', '3438');
      document.getElementById('kommunenr').options[32] = new Option('SØR-ODAL', '3415');
      document.getElementById('kommunenr').options[33] = new Option('TOLGA', '3426');
      document.getElementById('kommunenr').options[34] = new Option('TRYSIL', '3421');
      document.getElementById('kommunenr').options[35] = new Option('TYNSET', '3427');
      document.getElementById('kommunenr').options[36] = new Option('VANG', '3454');
      document.getElementById('kommunenr').options[37] = new Option('VESTRE SLIDRE', '3452');
      document.getElementById('kommunenr').options[38] = new Option('VESTRE TOTEN', '3443');
      document.getElementById('kommunenr').options[39] = new Option('VÅGÅ', '3435');
      document.getElementById('kommunenr').options[40] = new Option('VÅLER', '3419');
      document.getElementById('kommunenr').options[41] = new Option('ØSTRE TOTEN', '3442');
      document.getElementById('kommunenr').options[41] = new Option('ØYER', '3440');
      document.getElementById('kommunenr').options[42] = new Option('ØYSTRE SLIDRE', '3453');
      document.getElementById('kommunenr').options[43] = new Option('ÅMOT', '3422');
      document.getElementById('kommunenr').options[44] = new Option('ÅSNES', '3418');
      break;

    // Vestfold og Telemark
    case '38':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('BAMBLE', '3813');
      document.getElementById('kommunenr').options[2] = new Option('DRANGEDAL', '3815');
      document.getElementById('kommunenr').options[3] = new Option('FYRESDAL', '3823');
      document.getElementById('kommunenr').options[4] = new Option('FÆRDER', '3811');
      document.getElementById('kommunenr').options[5] = new Option('HJARTDAL', '3819');
      document.getElementById('kommunenr').options[6] = new Option('HOLMESTRAND', '3802');
      document.getElementById('kommunenr').options[7] = new Option('HORTEN', '3801');
      document.getElementById('kommunenr').options[8] = new Option('KRAGERØ', '3814');
      document.getElementById('kommunenr').options[9] = new Option('KVITESEID', '3821');
      document.getElementById('kommunenr').options[10] = new Option('LARVIK', '3805');
      document.getElementById('kommunenr').options[11] = new Option('MIDT-TELEMARK', '3817');
      document.getElementById('kommunenr').options[12] = new Option('NISSEDAL', '3822');
      document.getElementById('kommunenr').options[13] = new Option('NOME', '3816');
      document.getElementById('kommunenr').options[14] = new Option('NOTODDEN', '3808');
      document.getElementById('kommunenr').options[15] = new Option('PORSGRUNN', '3806');
      document.getElementById('kommunenr').options[16] = new Option('SANDEFJORD', ' 3804');
      document.getElementById('kommunenr').options[17] = new Option('SELJORD', '3820');
      document.getElementById('kommunenr').options[18] = new Option('SILJAN', '3812');
      document.getElementById('kommunenr').options[19] = new Option('SKIEN', '3807');
      document.getElementById('kommunenr').options[20] = new Option('TINN', '3818');
      document.getElementById('kommunenr').options[21] = new Option('TOKKE', '3824');
      document.getElementById('kommunenr').options[22] = new Option('TØNSBERG', '3803');
      document.getElementById('kommunenr').options[23] = new Option('VINJE', '3825');
      break;

    // Agder
    case '42':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('ARENDAL', '4203');
      document.getElementById('kommunenr').options[2] = new Option('BIRKENES', '4216');
      document.getElementById('kommunenr').options[3] = new Option('BYGLAND', '4220');
      document.getElementById('kommunenr').options[4] = new Option('BYKLE', '4222');
      document.getElementById('kommunenr').options[5] = new Option('EVJE OG HORNNES', '4219');
      document.getElementById('kommunenr').options[6] = new Option('FARSUND', '4206');
      document.getElementById('kommunenr').options[7] = new Option('FLEKKEFJORD', '4207');
      document.getElementById('kommunenr').options[8] = new Option('FROLAND', '4214');
      document.getElementById('kommunenr').options[9] = new Option('GJERSTAD', '4211');
      document.getElementById('kommunenr').options[10] = new Option('GRIMSTAD', '4202');
      document.getElementById('kommunenr').options[11] = new Option('HÆGEBOSTAD', '4226');
      document.getElementById('kommunenr').options[12] = new Option('IVELAND', '4218');
      document.getElementById('kommunenr').options[13] = new Option('KRISTIANSAND', '4204');
      document.getElementById('kommunenr').options[14] = new Option('KVINESDAL', '4227');
      document.getElementById('kommunenr').options[15] = new Option('LILLESAND', '4215');
      document.getElementById('kommunenr').options[16] = new Option('LINDESNES', ' 4205');
      document.getElementById('kommunenr').options[17] = new Option('LYNGDAL', '4225');
      document.getElementById('kommunenr').options[18] = new Option('RISØR', '4201');
      document.getElementById('kommunenr').options[19] = new Option('SIRDAL', '4228');
      document.getElementById('kommunenr').options[20] = new Option('TVEDESTRAND', '4213');
      document.getElementById('kommunenr').options[21] = new Option('VALLE', '4221');
      document.getElementById('kommunenr').options[22] = new Option('VEGÅRSHEI', '4212');
      document.getElementById('kommunenr').options[23] = new Option('VENNESLA', '4223');
      document.getElementById('kommunenr').options[23] = new Option('ÅMLI', '4217');
      document.getElementById('kommunenr').options[23] = new Option('ÅSERAL', '4224');
      break;

    // Vestland
    case '46':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('ALVER', '4631');
      document.getElementById('kommunenr').options[2] = new Option('ASKVOLL', '4645');
      document.getElementById('kommunenr').options[3] = new Option('ASKØY', '4627');
      document.getElementById('kommunenr').options[4] = new Option('AURLAND', '4641');
      document.getElementById('kommunenr').options[5] = new Option('AUSTEVOLL', '4625');
      document.getElementById('kommunenr').options[6] = new Option('AUSTRHEIM', '4632');
      document.getElementById('kommunenr').options[7] = new Option('BERGEN', '4601');
      document.getElementById('kommunenr').options[8] = new Option('BJØRNAFJORDEN', '4624');
      document.getElementById('kommunenr').options[9] = new Option('BREMANGER', '4648');
      document.getElementById('kommunenr').options[10] = new Option('BØMLO', '4613');
      document.getElementById('kommunenr').options[11] = new Option('EIDFJORD', '4619');
      document.getElementById('kommunenr').options[12] = new Option('ETNE', '4611');
      document.getElementById('kommunenr').options[13] = new Option('FEDJE', '4633');
      document.getElementById('kommunenr').options[14] = new Option('FITJAR', '4615');
      document.getElementById('kommunenr').options[15] = new Option('FJALER', '4646');
      document.getElementById('kommunenr').options[16] = new Option('GLOPPEN', '4650');
      document.getElementById('kommunenr').options[17] = new Option('GULEN', '4635');
      document.getElementById('kommunenr').options[18] = new Option('HYLLESTAD', '4637');
      document.getElementById('kommunenr').options[19] = new Option('HØYANGER', '4638');
      document.getElementById('kommunenr').options[20] = new Option('KINN', '4602');
      document.getElementById('kommunenr').options[21] = new Option('KVAM', '4622');
      document.getElementById('kommunenr').options[22] = new Option('KVINNHERAD', '4617');
      document.getElementById('kommunenr').options[23] = new Option('LUSTER', '4644');
      document.getElementById('kommunenr').options[24] = new Option('LÆRDAL', '4642');
      document.getElementById('kommunenr').options[25] = new Option('MASFJORDEN', '4634');
      document.getElementById('kommunenr').options[26] = new Option('MODALEN', '4629');
      document.getElementById('kommunenr').options[27] = new Option('OSTERØY', '4630');
      document.getElementById('kommunenr').options[28] = new Option('SAMNANGER', '4623');
      document.getElementById('kommunenr').options[29] = new Option('SOGNDAL', '4640');
      document.getElementById('kommunenr').options[30] = new Option('SOLUND', '4636');
      document.getElementById('kommunenr').options[31] = new Option('STAD', '4649');
      document.getElementById('kommunenr').options[32] = new Option('STORD', '4614');
      document.getElementById('kommunenr').options[33] = new Option('STRYN', '4651');
      document.getElementById('kommunenr').options[34] = new Option('SUNNFJORD', '4647');
      document.getElementById('kommunenr').options[35] = new Option('SVEIO', '4612');
      document.getElementById('kommunenr').options[36] = new Option('TYSNES', '4616');
      document.getElementById('kommunenr').options[37] = new Option('ULLENSVANG', '4618');
      document.getElementById('kommunenr').options[38] = new Option('ULVIK', '4620');
      document.getElementById('kommunenr').options[39] = new Option('VAKSDAL', '4628');
      document.getElementById('kommunenr').options[40] = new Option('VIK', '4639');
      document.getElementById('kommunenr').options[41] = new Option('VOSS', '4621');
      document.getElementById('kommunenr').options[41] = new Option('ØYGARDEN', '4626');
      document.getElementById('kommunenr').options[42] = new Option('ÅRDAL', '4643');
      break;

    // Trøndelag
    case '50':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('FLATANGER', '5049');
      document.getElementById('kommunenr').options[2] = new Option('FROSTA', '5036');
      document.getElementById('kommunenr').options[3] = new Option('FRØYA', '5014');
      document.getElementById('kommunenr').options[4] = new Option('GRONG', '5045');
      document.getElementById('kommunenr').options[5] = new Option('HEIM', '5055');
      document.getElementById('kommunenr').options[6] = new Option('HITRA', '5056');
      document.getElementById('kommunenr').options[7] = new Option('HOLTÅLEN', '5026');
      document.getElementById('kommunenr').options[8] = new Option('HØYLANDET', '5046');
      document.getElementById('kommunenr').options[9] = new Option('INDERØY', '5053');
      document.getElementById('kommunenr').options[10] = new Option('INDRE FOSEN', '5054');
      document.getElementById('kommunenr').options[11] = new Option('LEKA', '5052');
      document.getElementById('kommunenr').options[12] = new Option('LEVANGER', '5037');
      document.getElementById('kommunenr').options[13] = new Option('LIERNE', '5042');
      document.getElementById('kommunenr').options[14] = new Option('MALVIK', '5031');
      document.getElementById('kommunenr').options[15] = new Option('MELHUS', '5028');
      document.getElementById('kommunenr').options[16] = new Option('MERÅKER', '5034');
      document.getElementById('kommunenr').options[17] = new Option('MIDTRE GAULDAL', '5027');
      document.getElementById('kommunenr').options[18] = new Option('NAMSOS', '5007');
      document.getElementById('kommunenr').options[19] = new Option('NAMSSKOGAN', '5044');
      document.getElementById('kommunenr').options[20] = new Option('NÆRØYSUND', '5060');
      document.getElementById('kommunenr').options[21] = new Option('OPPDAL', '5021');
      document.getElementById('kommunenr').options[22] = new Option('ORKLAND', '5059');
      document.getElementById('kommunenr').options[23] = new Option('OSEN', '5020');
      document.getElementById('kommunenr').options[24] = new Option('OVERHALLA', '5047');
      document.getElementById('kommunenr').options[25] = new Option('RENNEBU', '5022');
      document.getElementById('kommunenr').options[26] = new Option('RINDAL', '5061');
      document.getElementById('kommunenr').options[27] = new Option('RØROS', '5025');
      document.getElementById('kommunenr').options[28] = new Option('RØYRVIK', '5043');
      document.getElementById('kommunenr').options[29] = new Option('SELBU', '5032');
      document.getElementById('kommunenr').options[30] = new Option('SKAUN', '5029');
      document.getElementById('kommunenr').options[31] = new Option('SNÅSA', '5041');
      document.getElementById('kommunenr').options[32] = new Option('STEINKJER', '5006');
      document.getElementById('kommunenr').options[33] = new Option('STJØRDAL', '5035');
      document.getElementById('kommunenr').options[34] = new Option('TRONDHEIM', '5001');
      document.getElementById('kommunenr').options[35] = new Option('TYDAL', '5033');
      document.getElementById('kommunenr').options[36] = new Option('VERDAL', '5038');
      document.getElementById('kommunenr').options[37] = new Option('ØRLAND', '5057');
      document.getElementById('kommunenr').options[38] = new Option('ÅFJORD', '5058');
      break;

    // Troms og Finnmark
    case '52':
      document.getElementById('kommunenr').options[0] = new Option('ALLE', '0');
      document.getElementById('kommunenr').options[1] = new Option('ALTA', '5403');
      document.getElementById('kommunenr').options[2] = new Option('BALSFJORD', '5422');
      document.getElementById('kommunenr').options[3] = new Option('BARDU', '5416');
      document.getElementById('kommunenr').options[4] = new Option('BERLEVÅG', '5440');
      document.getElementById('kommunenr').options[5] = new Option('BÅTSFJORD', '5443');
      document.getElementById('kommunenr').options[6] = new Option('DYRØY', '5420');
      document.getElementById('kommunenr').options[7] = new Option('GAMVIK', '5439');
      document.getElementById('kommunenr').options[8] = new Option('GRATANGEN', '5414');
      document.getElementById('kommunenr').options[9] = new Option('HAMMERFEST', '5406');
      document.getElementById('kommunenr').options[10] = new Option(' HARSTAD', '5402');
      document.getElementById('kommunenr').options[11] = new Option(' HASVIK', '5433');
      document.getElementById('kommunenr').options[12] = new Option(' IBESTAD', '5413');
      document.getElementById('kommunenr').options[13] = new Option(' KARASJOK', '5437');
      document.getElementById('kommunenr').options[14] = new Option(' KARLSØY', '5423');
      document.getElementById('kommunenr').options[15] = new Option(' KAUTOKEINO', '5430');
      document.getElementById('kommunenr').options[16] = new Option(' KVÆFJORD', '5411');
      document.getElementById('kommunenr').options[17] = new Option(' KVÆNANGEN', '5429');
      document.getElementById('kommunenr').options[18] = new Option(' KÅFJORD', '5426');
      document.getElementById('kommunenr').options[19] = new Option(' LAVANGEN', '5415');
      document.getElementById('kommunenr').options[20] = new Option(' LEBESBY', '5438');
      document.getElementById('kommunenr').options[21] = new Option(' LOPPA', '5432');
      document.getElementById('kommunenr').options[22] = new Option(' LYNGEN', '5424');
      document.getElementById('kommunenr').options[23] = new Option(' MÅLSELV', '5418');
      document.getElementById('kommunenr').options[24] = new Option(' MÅSØY', '5434');
      document.getElementById('kommunenr').options[25] = new Option(' NESSEBY', '5442');
      document.getElementById('kommunenr').options[26] = new Option(' NORDKAPP', '5435');
      document.getElementById('kommunenr').options[27] = new Option(' NORDREISA', '5428');
      document.getElementById('kommunenr').options[28] = new Option(' PORSANGER', '5436');
      document.getElementById('kommunenr').options[29] = new Option(' SALANGEN', '5417');
      document.getElementById('kommunenr').options[30] = new Option(' SENJA', '5421');
      document.getElementById('kommunenr').options[31] = new Option(' SKJERVØY', '5427');
      document.getElementById('kommunenr').options[32] = new Option(' STORFJORD', '5425');
      document.getElementById('kommunenr').options[33] = new Option(' SØR-VARANGER', '5444');
      document.getElementById('kommunenr').options[34] = new Option(' SØRREISA', '5419');
      document.getElementById('kommunenr').options[35] = new Option(' TANA', '5441');
      document.getElementById('kommunenr').options[36] = new Option(' TJELDSUND', '5412');
      document.getElementById('kommunenr').options[37] = new Option(' TROMSØ', '5401');
      document.getElementById('kommunenr').options[38] = new Option(' VADSØ', '5405');
      document.getElementById('kommunenr').options[39] = new Option('  VARDØ', '5404');
      break;
  }
  return true;
}

const fylkesnr = document.getElementById('fylkesnr');
const kommunenr = document.getElementById('kommunenr');

fylkesnr.addEventListener('change', function () {
  document.getElementById('kommunenr').innerHTML = `<option value="0">ALLE</option>`;
  dynamicdropdown(this.options[this.selectedIndex].value);
});

// const seachBtn = document.getElementById('seach-btn');
const seachBtn = document.getElementById('seach-btn');
const nameInput = document.getElementById('name-input');
const næringsKode = document.getElementById('nærings-kode');
const organisasjonsform = document.getElementById('orgform');

const tilAntallAnsatte = document.getElementById('tilAntallAnsatte-input');
const fraAntallAnsatte = document.getElementById('fraAntallAnsatte-input');

if (seachBtn) {
  seachBtn.addEventListener('click', async () => {
    let selectElement = document.querySelectorAll('[name=kommune]');
    let optionValues = [...selectElement[0].options].map(o => o.value);
    optionValues.shift();
    let kommuneArray = optionValues.toString();

    let knr = kommunenr.options[kommunenr.selectedIndex].value;
    let seachName = nameInput.value;
    let orgFormVal = organisasjonsform.options[organisasjonsform.selectedIndex].value;

    let tilAAVal = tilAntallAnsatte.value;
    if (tilAAVal !== '') tilAAVal = `&tilAntallAnsatte=${tilAAVal}`;

    let fraAAVal = fraAntallAnsatte.value;
    if (fraAAVal !== '') fraAAVal = `&fraAntallAnsatte=${fraAAVal}`;

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

    // if (fnr) fnr = `&postadresse.kommunenummer=${fnr}`;
    if (seachName) seachName = `&navn=${seachName}`;

    let apiString = `https://data.brreg.no/enhetsregisteret/api/enheter?size=700${
      fylkesnr.value === '0' ? '' : knr
    }${seachName}${næringsKodeValue}${orgFormVal}${tilAAVal}${fraAAVal}`;

    console.log(apiString);

    await fetch(apiString)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // Reset the div
        navn.innerHTML = '';

        // Check if res is not emty
        if (data._embedded) {
          console.log(data._embedded.enheter);

          console.log(data._embedded.enheter.length);
          let antalSøkEle = document.createElement('p');

          if (data._embedded.enheter.length >= 700) {
            antalSøkEle.innerHTML = `Antal søk: ${data._embedded.enheter.length}+. Prøv flere valg for et mere nøyaktig søk`;
          } else {
            antalSøkEle.innerHTML = `Antal søk: ${data._embedded.enheter.length}`;
          }

          const rowHeading = document.createElement('div');
          rowHeading.innerHTML = `
          <div class="row">
          <div class="liste col-sm-3">
          <b>Orgnr.</b>
          </div>
          <div class="liste col-sm-5">
          <b>Navn</b>
          </div>
          <div class="liste col-sm-3">
          <b>Postnr./sted</b>
          </div>
          </div>
          `;

          // Antal søk
          navn.appendChild(antalSøkEle);

          // Overskrift row
          navn.appendChild(rowHeading);

          data._embedded.enheter.forEach((ele, i) => {
            const divSøkRes = document.createElement('div');
            divSøkRes.innerHTML = `
            <div class="row ${i % 2 == 0 ? 'søk-liste' : ''}" style="margin-bottom:10px;">
            <div class="liste col-sm-3">${ele.organisasjonsnummer}&nbsp;</div>
            <div class="liste col-sm-5">
            <a target="_blank" href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=${
              ele.organisasjonsnummer
            }">${ele.navn}</a>
            </div>
            <div class="liste col-sm-3">${
              ele.forretningsadresse ? ele.forretningsadresse.postnummer : ele.postadresse.postnummer
            }
            ${ele.forretningsadresse ? ele.forretningsadresse.poststed : ele.postadresse.poststed}</div>
            </div>
            `;
            navn.appendChild(divSøkRes);
          });
        } else {
          navn.innerHTML = 'Fant Ingen Søk';
        }
      });

    // End
  });
}
