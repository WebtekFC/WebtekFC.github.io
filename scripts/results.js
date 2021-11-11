//    --Results--

let results = [
    {
        date: '19.06.2021',
        time: '14:20',
        res: '3-1',
        team1: 'Webtek-FC',
        team2: 'IT-GK FC',
        sted: 'Lerkendal Stadion',
    },
    {
        date: '25.05.2021',
        time: '12:20',
        res: '4-2',
        team1: 'Webtek-FC',
        team2: 'Brazil FC',
        sted: 'Lerkendal Stadion',
    },
    {
        date: '20.05.2021',
        time: '18:30',
        res: '1-1',
        team1: 'Viking',
        team2: 'Webtek-FC',
        sted: 'Viking Stadion',
    },
    {
        date: '04.05.2021',
        time: '20:00',
        res: '3-5',
        team1: 'Webtek-FC',
        team2: 'NTNUI FC',
        sted: 'Lerkendal Stadion',
    },
    {
        date: '19.04.2021',
        time: '14:20',
        res: '3-1',
        team1: 'Brazil FC',
        team2: 'Webtek-FC',
        sted: 'Lerkendal Stadion',
    },
];

let containerR = document.createElement('div');
containerR.setAttribute('class', 'containerR');

for (let i = 0; i < results.length; i++){
    div = document.createElement('div');
    div.setAttribute('class', 'result');
    for (let key in results[i]){
        h4 = document.createElement('h4');
        h4.innerHTML = results[i][key]
        div.appendChild(h4)
    }
    containerR.appendChild(div);
}

document.body.appendChild(containerR);
