
  let dateDataDay = [],  lowDataDay = [], openDataDay = [], highDataDay = []
  
  
  async function gmChart() {

    await   getDatos()

  let ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dateDataDay,
      datasets: [
        {
            label: 'AMAZON Datos OPEN',
            backgroundColor: 'green',
            data: openDataDay,
            borderWidth: 1
        },

        {
            label: 'AMAZON Datos HIGH',
            backgroundColor: 'yellow',
            data: highDataDay,
            borderWidth: 1
        },

        {
            label: 'AMAZON Datos LOW',
            backgroundColor: 'red',
            data: lowDataDay,
            borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  async function gmChart1() {

    await   getDatos()

  let ctx = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dateDataDay,
      datasets: [
        {
            label: 'AMAZON Datos OPEN',
            backgroundColor: 'green',
            data: openDataDay,
            borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  async function gmChart2() {

    await   getDatos()

  let ctx = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dateDataDay,
      datasets: [
        {
            label: 'AMAZON Datos HIGH',
            backgroundColor: 'yellow',
            data: highDataDay,
            borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  async function gmChart3() {

    await   getDatos()

  let ctx = document.getElementById('myChart3');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dateDataDay,
      datasets: [
        {
            label: 'AMAZON Datos LOW',
            backgroundColor: 'red',
            data: lowDataDay,
            borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  async function gmChart4() {

    await   getDatos()

  let ctx = document.getElementById('myChart4');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dateDataDay,
      datasets: [
        {
            label: 'AMAZON Datos OPEN',
            backgroundColor: 'green',
            data: openDataDay,
            borderWidth: 1
        },

        {
            label: 'AMAZON Datos HIGH',
            backgroundColor: 'yellow',
            data: highDataDay,
            borderWidth: 1
        },

        {
            label: 'AMAZON Datos LOW',
            backgroundColor: 'red',
            data: lowDataDay,
            borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  gmChart()
  gmChart1()
  gmChart2()
  gmChart3()
  gmChart4()
  

  async function getDatos(){
    const apiUrl = "https://api.marketstack.com/v1/eod?access_key=5cbf6c53b535505bb8ce5870bb8b5795&symbols=AMZN"

    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const date = barChartData.data.map( (x) => x.date )
    const open = barChartData.data.map( (x) => x.open )
    const high = barChartData.data.map( (x) => x.high )
    const low = barChartData.data.map( (x) => x.low )

    console.log(open, high, low, date)

    dateDataDay = date
    openDataDay = open
    highDataDay = high
    lowDataDay = low
  }

