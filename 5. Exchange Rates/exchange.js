$(document).ready(function() {

  $('#myInput').keyup(function () {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  })



$("#myTable tr").click(function() {
  let myCurrency= $(this).find('td').html()
  console.log(myCurrency)
  endpoint = 'live';
  access_key = '1c7910d65922432b4f7ba9117cefedc7';
// &source=${myCurrency}

  $.ajax({
          url: `http://apilayer.net/api/${endpoint}?access_key=${access_key}`,
          dataType: 'jsonp',
          success: true,
      }).then(function(data){
        let newArray = Object.entries(data.quotes)
        $.each(newArray, function(index, quote){
          let messageEl = document.createElement('ul')
          messageEl.className = "returned-rates";
          messageEl.innerHTML = `${index}-->${quote[0]}: ${quote[1]}`;
          $('.exchange-rates').append(messageEl)
      } )
  });
})
});
