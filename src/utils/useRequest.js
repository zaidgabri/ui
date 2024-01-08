
const isDeveloppement = true
const baseURL = isDeveloppement ? 'http://localhost:8087/api' : 'https://belprof.tryyourweb.site/';
const baseURLtransfert = isDeveloppement ? 'http://localhost:8082/api' : 'https://belprof.tryyourweb.site/api2';
// const baseURL = isDeveloppement ? 'http://localhost:5001' : '';


export {baseURL ,baseURLtransfert}