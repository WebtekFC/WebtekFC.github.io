let calender = [
    {
        date: '12.07.2021',
        time: '20:00',
        res: 'vs',
        team1: 'Webtek-FC',
        team2: 'IT-GK FC',
        sted: 'Lerkendal Stadion',
    },
    {
        date: '12.07.2021',
        time: '20:00',
        res: 'vs',
        team1: 'Rosenborg',
        team2: 'Webtek-FC',
        sted: 'Lerkendal Stadion',
    },
    {
        date: '12.07.2021',
        time: '20:00',
        res: 'vs',
        team1: 'Brann',
        team2: 'Webtek-FC',
        sted: 'Lerkendal Stadion',
    },
];

let containerC = document.createElement('div');
containerC.setAttribute('class', 'containerC');

for (let i = 0; i < calender.length; i++){
    div = document.createElement('div');
    div.setAttribute('class', 'result');
    for (let key in calender[i]){
        h4 = document.createElement('h4');
        h4.innerHTML = calender[i][key]
        div.appendChild(h4)
    }
    containerC.appendChild(div);
}

document.body.appendChild(containerC);