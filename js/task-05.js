
const countries = [{name: 'Tunisian Republic',population: 11818618,area:163610,borders: ['DZA','LBY']},
{name: 'Virgin Islands',population: 30237,area:151,borders: []}
,{name: 'Montenegro',population: 621718,area:13812,borders: ['ALB','BIH','HRV','UNK','SRB']}
,{name: 'Federal Democratic Republic of Nepal',population: 29136808,area:147181,borders: ['DZA','CHN','IND']}
,{name: 'Republic of Indonesia',population: 273523621,area:1904569,borders: ['TLS','MYS','PNG']}
,{name: 'Republic of Rwanda',population: 12952209,area:26338,borders: ['BDI','COD','DZA','UGA']}]

// Первернути масив назв країн у яких є сусід 'DZA'

const countryArr =  countries.filter(country => country.borders.includes('DZA') ).map(country => country.name)

console.log(countryArr);









































