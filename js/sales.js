// Line Chart
var salesData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Front",
      fillColor: "rgba(195, 40, 96, 0.1)",
      strokeColor: "rgba(195, 40, 96, 1)",
      pointColor: "rgba(195, 40, 96, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [3400, 3000, 2500, 4500, 2500, 3400, 3000]
    },
    {
      label: "Middle",
      fillColor: "rgba(255, 172, 100, 0.1)",
      strokeColor: "rgba(255, 172, 100, 1)",
      pointColor: "rgba(255, 172, 100, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1900, 1700, 2100, 3600, 2200, 2500, 2000]
    }
  ]
};
var ctx = document.getElementById("salesData").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData, {
  pointDotRadius : 6,
  pointDotStrokeWidth : 2,
  datasetStrokeWidth : 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth : 2,
  scaleShowGridLines : true,
  scaleGridLineColor : "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 9,
  scaleStepWidth: 500,
  scaleStartValue: 0,

  responsive: true

});

//Credit Sales
var numViews01 = new ProgressBar.Circle('#numViews01', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var royaltiesEarned01 = new ProgressBar.Circle('#royaltiesEarned01', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});

var numViews02 = new ProgressBar.Circle('#numViews02', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var royaltiesEarned02 = new ProgressBar.Circle('#royaltiesEarned02', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var numViews03 = new ProgressBar.Circle('#numViews03', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var royaltiesEarned03 = new ProgressBar.Circle('#royaltiesEarned03', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});

var numViews04 = new ProgressBar.Circle('#numViews04', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var royaltiesEarned04 = new ProgressBar.Circle('#royaltiesEarned04', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});

var numViews05 = new ProgressBar.Circle('#numViews05', {
  color: '#e81760',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});
var royaltiesEarned05 = new ProgressBar.Circle('#royaltiesEarned05', {
  color: '#e88e3c',
  strokeWidth: 3,
  trailWidth: 3,
  duration: 1500,
  text: {
    value: '0%'
  },
  step: function(state, bar) {
    bar.setText((bar.value() * 100).toFixed(0) + "%");
  }
});

numViews01.animate(0.8);
royaltiesEarned01.animate(0.54);

numViews02.animate(0.6);
royaltiesEarned02.animate(0.45);

numViews03.animate(0.5);
royaltiesEarned03.animate(0.24);

numViews04.animate(0.75);
royaltiesEarned04.animate(0.66);

numViews05.animate(0.5);
royaltiesEarned05.animate(0.35);

