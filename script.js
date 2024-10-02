function Filteryear() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputyear");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++)
  {
    td = tr[i].getElementsByTagName("td")[0];
    if (td)
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }
}

function Filtermovie() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputmovie");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++)
  {
    td = tr[i].getElementsByTagName("td")[1];
    if (td)
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }
}


function Filterlang() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputlang");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++)
  {
    td = tr[i].getElementsByTagName("td")[2];
    if (td)
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }
}

function Filterrate() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputrate");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++)
  {
    td = tr[i].getElementsByTagName("td")[3];
    if (td)
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }
}


function Filterprint() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputprint");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++)
  {
    td = tr[i].getElementsByTagName("td")[4];
    if (td)
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
        tr[i].style.display = "";
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }
}
