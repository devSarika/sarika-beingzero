$.getJSON('/data',function(d){
   // alert(JSON.stringify(d))

    $('#1').text(d.name);
    $('#2').text(d.clg);
})