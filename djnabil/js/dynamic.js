const data = [
    {
        Horodateur: '2019/03/02 5:25:59 PM UTC+2',
        "Nom d'utilisateur": 'tamomandelson@gmail.com',
        Civility: 'M.',
        'First name': 'Mandelson',
        'Last name': 'TAMO',
        'Phone Number': 648131357,
        Age: '23',
        Address: '15 Avenue Victor Hugo',
        '1st Year : Description': 'LP 3 OCI',
        '1st Year : From': '2018-09-15',
        '1st Year : To': '2019-08-31',
        '2nd Year : Description': 'BTS SIO SLAM',
        '2nd Year : From': '2017-09-01',
        '2nd Year : To': '',
        '3rd Year : Description': 'ESIEE Paris Prépa intégré',
        '3rd Year : From': '2014-09-01',
        '3rd Year : To': '',
        '1st Year : Description': 'Vendeur en boulangerie',
        '1st Year : From': '2013-09-01',
        '1st Year : To': '2018-06-30',
        '2nd Year : Description': "Hôte d'accueil à l'hôtel Manet",
        '2nd Year : From': '2013-07-15',
        '2nd Year : To': '2013-08-25',
        '3rd Year : Description': 'Professeur particulier de Mathématiques',
        '3rd Year : From': '2014-10-01',
        '3rd Year : To': '2015-05-31',
        'Skills set 1': 'C, JAVA, Python, PHP, html',
        'Skills set 2': 'Pack office, pack google, github, netvibes',
        'Skills set 3': 'Recherches google, notes, rapports'
    },
    {
        Horodateur: '2019/03/03 7:52:29 PM UTC+2',
        "Nom d'utilisateur": 'timziiiba95@gmail.com',
        Civility: 'Mme',
        'First name': 'Fatimata',
        'Last name': 'BA',
        'Phone Number': 767468688,
        Age: '',
        Address: '10 rue jacques deschamps bonnieres sur seine',
        '1st Year : Description': 'Licence professionnel OCI',
        '1st Year : From': '2018-09-01',
        '1st Year : To': '2019-07-30',
        '2nd Year : Description': 'Licence informatique',
        '2nd Year : From': '2015-10-01',
        '2nd Year : To': '2017-07-31',
        '3rd Year : Description': 'BAC Scientifique S2',
        '3rd Year : From': '2014-10-01',
        '3rd Year : To': '',
        '1st Year : Description': 'Stage developpement web ',
        '1st Year : From': '2017-11-06',
        '1st Year : To': '2018-04-30',
        '2nd Year : Description': 'Maintenance reseau et informatique  CSE',
        '2nd Year : From': '2015-09-01',
        '2nd Year : To': '2015-10-30',
        '3rd Year : Description': '',
        '3rd Year : From': '',
        '3rd Year : To': '',
        'Skills set 1': '',
        'Skills set 2': '',
        'Skills set 3': ''
    },
    {
        Horodateur: '2019/03/03 7:55:46 PM UTC+2',
        "Nom d'utilisateur": 'julessaunier@hotmail.fr',
        Civility: 'M.',
        'First name': 'Jules',
        'Last name': 'Saunier',
        'Phone Number': 628725237,
        Age: '22',
        Address: '23 avenue gabriel peri',
        '1st Year : Description': 'BTS SNIR',
        '1st Year : From': '2019-09-01',
        '1st Year : To': '2019-05-31',
        '2nd Year : Description': 'BTS SNIR',
        '2nd Year : From': '2019-09-01',
        '2nd Year : To': '2019-05-31',
        '3rd Year : Description': 'Licence pro OCI',
        '3rd Year : From': '2019-09-01',
        '3rd Year : To': '2019-05-31',
        '1st Year : Description': '',
        '1st Year : From': '',
        '1st Year : To': '',
        '2nd Year : Description': '',
        '2nd Year : From': '',
        '2nd Year : To': '',
        '3rd Year : Description': '',
        '3rd Year : From': '',
        '3rd Year : To': '',
        'Skills set 1': 'C/C#/C++',
        'Skills set 2': 'Java',
        'Skills set 3': 'Android/IOS'
    },
    {
        Horodateur: '2019/03/05 11:13:37 AM UTC+2',
        "Nom d'utilisateur": 'samuel.szoniecky@univ-paris8.fr',
        Civility: 'M.',
        'First name': 'Samuel',
        'Last name': 'Szoniecky',
        'Phone Number': 149406758,
        Age: 'KJKJHK',
        Address: 'UFR-6 - Université de Paris 8 - 2, rue de la Liberté',
        '1st Year : Description': '',
        '1st Year : From': '',
        '1st Year : To': '',
        '2nd Year : Description': '',
        '2nd Year : From': '',
        '2nd Year : To': '',
        '3rd Year : Description': '',
        '3rd Year : From': '',
        '3rd Year : To': '',
        '1st Year : Description': '',
        '1st Year : From': '',
        '1st Year : To': '',
        '2nd Year : Description': '',
        '2nd Year : From': '',
        '2nd Year : To': '',
        '3rd Year : Description': '',
        '3rd Year : From': '',
        '3rd Year : To': '',
        'Skills set 1': '',
        'Skills set 2':
            'LKLKJLJK\n\nSDSDSDF\nFSDFSDF\nSDFSDF\nSDFSDFSDZERZEA\nZEERZ\n',
        'Skills set 3': 'ZER'
    }
];

var url_string = window.location.href;
var url_param = new URL(url_string);
var idEtu = url_param.searchParams.get('id');

var arrVal = {
    'pas bon': 50,
    'trop fort': 60,
    mauvais: 5,
    génie: 100,
    médiocre: 10,
    'connais pas': 0
};

const work = d3.select('.work ul');
let experiences = [[], [], []];
let year = 1;
let i = 0;
for (let experience in data[idEtu]) {
    if (experience.includes(' Year : ')) {
        const index = parseInt(i / 3);
        experiences.push(experience);
        // experiences[index].push(experience);
        i++;
    }
}
let li = work
    .selectAll('li')
    .data(experiences)
    .enter()
    .append('li')
    .html(d => {
        // experiences;
        if (d.includes('Description')) {
            let value = `<span>${data[idEtu][d]}</span>`;
            return value;
        }
        return ``;
    });

console.log(data);
const name = d3
    .select('.name')
    .html(`${data[idEtu]['First name']} ${data[idEtu]['Last name']}`);
const phone = d3.select('.call span').html(`${data[idEtu]['Phone Number']}`);
const email = d3
    .select('.email span')
    .html(`${data[idEtu]["Nom d'utilisateur"]}`);
