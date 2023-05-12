app.service('dataService', function() {
    var data = {};

    return {
      getData: function() {
        return data;
      },
      setData: function(newData) {
        data = newData;
      }
    };
});