var data = {};
var count = 5; 
app.factory('dataService', function() {    
  return {
      getCount: function(){
        return count++;
      },
      getData: function() {
        return data;
      },
      setData: function(newData) {
        data = newData;
      }
    };
});