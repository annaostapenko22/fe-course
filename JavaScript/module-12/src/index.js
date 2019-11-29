import './styles.css';
import axios from 'axios';
import countries from './templates/template.hbs';
import debounce from 'lodash.debounce';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import oneCountry from './templates/oneCountryTemplate.hbs';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';
const refs = {
  search: document.querySelector('[type = search]'),
  //   countryList: document.querySelector('.countryList'),
  //   countryInfo: document.querySelector('.oneCountryInfo')
};

function getCountries(name) {
  return axios.get(`/name/${name}`);
}
const countryList = document.querySelector('.countryList');
const countryInfo = document.querySelector('.oneCountryInfo');

function getCountryInfo(evt) {
  if (!evt.target.value) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
  }
  if (evt.target.value) {
    getCountries(evt.target.value)
      .then(({ data }) => {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';

        if (data.length >= 10) {
          PNotify.error({
            text: 'Too many matches found. Please enter a more specific query!',
          });
        }
        if (data.length === 1) {
          countryInfo.insertAdjacentHTML('beforeend', oneCountry(data[0]));
        } else {
          data.forEach(item => {
            countryInfo.innerHTML = '';

            if (!item) {
              countryInfo.innerHTML = '';
              countryList.innerHTML = '';
            }
            if (
              item.name.toLowerCase().includes(evt.target.value.toLowerCase())
            ) {
              countryList.innerHTML = '';
              if (data.length < 10 && data.length >= 2) {
                data.forEach(item => {
                  countryList.insertAdjacentHTML('beforeend', countries(item));
                });
                PNotify.closeAll();
              }
            }
          });
        }
      })
      .catch(data => {
        PNotify.alert({
          text: 'Entered invalid value',
        });
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
      });
  }
}

refs.search.addEventListener('input', debounce(getCountryInfo, 500));
