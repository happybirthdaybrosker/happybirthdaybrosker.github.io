$(function() {
  var birthday = new Date('December 13 2015'),
      _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24,
      timer;

  var options = {
    scaleColor: false,
    trackColor: 'rgba(0,0,0,.08)',
    barColor: '#fff',
    lineWidth: 6,
    lineCap: 'butt',
    size: 100,
    animate: 200
  };

  var $daysChart = $('#days'),
      $daysChartText = $daysChart.find('span');
  $daysChart.easyPieChart(options);

  var $hoursChart = $('#hours'),
      $hoursChartText = $hoursChart.find('span');
  $hoursChart.easyPieChart(options);

  var $minutesChart = $('#minutes'),
      $minutesChartText = $minutesChart.find('span');
  $minutesChart.easyPieChart(options);

  var $secondsChart = $('#seconds'),
      $secondsChartText = $secondsChart.find('span');
  $secondsChart.easyPieChart(options);

  function showRemaining() {

    var now = new Date(),
        distance = birthday - now;

    var days = Math.floor(distance / _day),
        hours = Math.floor((distance % _day) / _hour),
        minutes = Math.floor((distance % _hour) / _minute),
        seconds = Math.floor((distance % _minute) / _second);

    var daysPercentage = 100 - ((days / 365) * 100),
        hoursPercentage = 100 - ((hours / 24) * 100),
        minutesPercentage = 100 - ((minutes / 60) * 100),
        secondsPercentage = 100 - ((seconds * 60) / 3600 * 100);

    $daysChart.data('easyPieChart').update(daysPercentage);
    $daysChartText.text(days);

    $hoursChart.data('easyPieChart').update(hoursPercentage);
    $hoursChartText.text(hours);

    $minutesChart.data('easyPieChart').update(minutesPercentage);
    $minutesChartText.text(minutes);

    $secondsChart.data('easyPieChart').update(secondsPercentage);
    $secondsChartText.text(seconds);
  }

  timer = setInterval(showRemaining, 1000);
});