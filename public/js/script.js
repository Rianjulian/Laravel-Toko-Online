  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Your Money',
      backgroundColor: 'rgb(2, 118, 250)',
      borderColor: 'rgb(2, 118, 250)',
      data: [0, 10, 5, 2, 20, 25, 45],
    }]
  };


  const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
            x:{
                grid:{
                    display: false
                },
                ticks:{
                    font: {
                        size: 20,
                    }
                },
            },
            y:{
                grid:{
                    display:false
                },
                ticks:{
                    font: {
                        size: 20,
                    }
                },
            }
        }
      }
    };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
