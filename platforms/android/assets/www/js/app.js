var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

$(document).on("deviceready", function() {
  deviceReadyDeferred.resolve();
  $('#birthday').focus().on('keyup', function () {
    var value = $(this).val(),
        now = new Date();

    if (this.validity.valid && value) {
      var date = new Date(),
          year = value.substr(0, 3),
          month = value.substr(4, 2),
          life;

      date.setFullYear(parseInt(year, 10) + 1911);
      date.setMonth(parseInt(month, 10) - 1);

      life = now.getTime() - date.getTime();

      $('#result').text(Math.round(life / 1000 / 86400 / 365 * 100) / 100);
    }
  });
});

$(document).on("mobileinit", function () {
  jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
}
