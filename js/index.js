var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
           "Maximum Supply",
           "Burned Supply",
           "Circulating Supply",
        ],
        datasets: [{
            // label: '# of Votes',
            data: [1000000000000,500000000000,500000000000],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)'
            // ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
        }],
        
    }, options: {
        title: {
            display : false
        }
    }
})