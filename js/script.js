$('#selectData').multiSelect();
var winners =[]; // temp array for randomly selected datasets

/*$('#processData').click(function() {
  mashup();
});*/

function mashup(){
  $("#dataListContainer").show(); // unhide results box
  clearList(); // clear results list
  winners =[]; // reset array
  var list = []; // temp array for selected options

  $("#selectData option:selected").each(function () {
    var x = $(this);
    if (x.length) {
      list.push(x.text());
      d = pickData( x.text());
      winners.push(d);
      writeToList(d);
    }
  });
  console.log(winners);
}

// pick a dataset @ random that matches selected topic
function pickData(topic){
  var list = [];
  $.each(dataSets, function(i, v) {
    if (v.topic == topic) {
      list.push(i);
    }
  });

  var rando = list[Math.floor(Math.random()*list.length)];
  console.log(list);
  return rando;
}

function writeToList(n){
  $.each(dataSets, function(i, v) {
    if (i == n) {
      var li = document.createElement("li");
      var lin = document.createTextNode("");
      li.innerHTML = "<a href=\""+v.url+"\">"+n+"</a> <span class=\"source\">("+v.provider+")<span>";
      li.appendChild(lin);
      document.getElementById("dataList").appendChild(li);
    }
  });
}

function clearList(){
  var l = document.getElementById("dataList");
  while (l.firstChild) {
    l.removeChild(l.firstChild);
  }
}
