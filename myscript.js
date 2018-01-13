
//an array for all of the data

  var text = '{"comics":[' +
'{"Name":"shiver","author":"Junji Ito", "publischer":"Google books","Geners":"graphic comics" },' +
'{"Name":"nimona","author":"Noelle Stevenson", "publischer":"Google books","Geners":"Fantasy " },' +
'{"Name":"Runaways","author":" Brian K. Vaughan", "publischer":"Google books","Geners":"Fantasy "  },' +
'{"Name":"Woodwalkers","author":"Katja Brandis", "publischer":"Belletristik","Geners":"bild"  },' +
'{"Name":"Foundation","author":"Isaac Asimov", "publischer":"Heyne","Geners":"Fantasy Science Fiction"  },' +
'{"Name":"Modesty Blaise","author":"Peter ODonnell", "publischer":"Titan Books","Geners":"mystery"  },' +
'{"Name":"The Sandman","author":"Neil Gaiman", "publischer":"Vertigo","Geners":"fantasy"  },' +
'{"Name":"Thor","author":"Jason Aaron", "publischer":"Google books","Geners":"graphic comics"  },' +
'{"Name":"Diamond Life","author":"sade", "publischer":"Epics","Geners":"smooth soul"  },' +
'{"Name":"Dylan","author":"Bob Dylan", "publischer":"Dylan","Geners":"Rock"  },' +
'{"Name":"Idont blieve","author":"selena gomez", "publischer":"Revival","Geners":"Pop"  },' +
'{"Name":"City lights","author":"Charlie Chaplin", "publischer":"United Artists","Geners":"Romantic Comedy"  },' +
'{"Name":"Avatar","author":" James Cameron", "publischer":"i dont know","Geners":"Fantasy"  },' +
'{"Name":"Atlantics","author":"unknown", "publischer":"unknown","Geners":"explosive"  },' +
'{"Name":"Lawrence of Arabia","author":"T.E.Lawrence", "publischer":"Columbia Picturesphic ","Geners":"Historical Drama" },' +

'{"Name":"Runaways","author":" Brian K. Vaughan", "publischer":"Google books","Geners":"Fantasy "  }]}';

//using id to return some text to html


obj = JSON.parse(text);
document.getElementById("first1").innerHTML =
"Name : "+ obj.comics[0].Name + "<br> " +"Author : "+ obj.comics[0].author+"<br>"+"Publisher : "+ obj.comics[0].publischer + "<br> " +"Geners : "+ obj.comics[0].Geners;


obj = JSON.parse(text);
document.getElementById("sec1").innerHTML =
"Name : "+ obj.comics[2].Name + "<br> " +"Author : "+ obj.comics[2].author+"<br>"+"Publisher : "+ obj.comics[2].publischer + "<br> " +"Geners : "+ obj.comics[2].Geners;



obj = JSON.parse(text);
document.getElementById("third1").innerHTML =
"Name : "+ obj.comics[1].Name + "<br> " +"Author : "+ obj.comics[1].author+"<br>"+"Publisher : "+ obj.comics[1].publischer + "<br> " +"Geners : "+ obj.comics[1].Geners;



obj = JSON.parse(text);
document.getElementById("forth1").innerHTML =
"Name : "+ obj.comics[3].Name + "<br> " +"Author : "+ obj.comics[3].author+"<br>"+"Publisher : "+ obj.comics[3].publischer + "<br> " +"Geners : "+ obj.comics[3].Geners;

obj = JSON.parse(text);
document.getElementById("b1").innerHTML =
"Name : "+ obj.comics[4].Name + "<br> " +"Author : "+ obj.comics[4].author+"<br>"+"Publisher : "+ obj.comics[4].publischer + "<br> " +"Geners : "+ obj.comics[4].Geners;

obj = JSON.parse(text);
document.getElementById("b2").innerHTML =
"Name : "+ obj.comics[5].Name + "<br> " +"Author : "+ obj.comics[5].author+"<br>"+"Publisher : "+ obj.comics[5].publischer + "<br> " +"Geners : "+ obj.comics[5].Geners;


obj = JSON.parse(text);
document.getElementById("b3").innerHTML =
"Name : "+ obj.comics[6].Name + "<br> " +"Author : "+ obj.comics[6].author+"<br>"+"Publisher : "+ obj.comics[6].publischer + "<br> " +"Geners : "+ obj.comics[6].Geners;

obj = JSON.parse(text);
document.getElementById("b4").innerHTML =
"Name : "+ obj.comics[7].Name + "<br> " +"Author : "+ obj.comics[7].author+"<br>"+"Publisher : "+ obj.comics[7].publischer + "<br> " +"Geners : "+ obj.comics[7].Geners;


obj = JSON.parse(text);
document.getElementById("m1").innerHTML =
"Name : "+ obj.comics[8].Name + "<br> " +"Author : "+ obj.comics[8].author+"<br>"+"Publisher : "+ obj.comics[8].publischer + "<br> " +"Geners : "+ obj.comics[8].Geners;

obj = JSON.parse(text);
document.getElementById("m2").innerHTML =
"Name : "+ obj.comics[9].Name + "<br> " +"Author : "+ obj.comics[9].author+"<br>"+"Publisher : "+ obj.comics[9].publischer + "<br> " +"Geners : "+ obj.comics[9].Geners;

obj = JSON.parse(text);
document.getElementById("m3").innerHTML =
"Name : "+ obj.comics[10].Name + "<br> " +"Author : "+ obj.comics[10].author+"<br>"+"Publisher : "+ obj.comics[10].publischer + "<br> " +"Geners : "+ obj.comics[10].Geners;


obj = JSON.parse(text);
document.getElementById("mo1").innerHTML =
"Name : "+ obj.comics[11].Name + "<br> " +"Author : "+ obj.comics[11].author+"<br>"+"Publisher : "+ obj.comics[11].publischer + "<br> " +"Geners : "+ obj.comics[11].Geners;

obj = JSON.parse(text);
document.getElementById("mo2").innerHTML =
"Name : "+ obj.comics[12].Name + "<br> " +"Author : "+ obj.comics[12].author+"<br>"+"Publisher : "+ obj.comics[12].publischer + "<br> " +"Geners : "+ obj.comics[12].Geners;

obj = JSON.parse(text);
document.getElementById("mo3").innerHTML =
"Name : "+ obj.comics[13].Name + "<br> " +"Author : "+ obj.comics[13].author+"<br>"+"Publisher : "+ obj.comics[13].publischer + "<br> " +"Geners : "+ obj.comics[13].Geners;

obj = JSON.parse(text);
document.getElementById("mo4").innerHTML =
"Name : "+ obj.comics[14].Name + "<br> " +"Author : "+ obj.comics[14].author+"<br>"+"Publisher : "+ obj.comics[14].publischer + "<br> " +"Geners : "+ obj.comics[14].Geners;










//giving some style with jquery
$("p").css("color", "red");

//making library

var mask = "bookInfo",//final result
  id = 0;
  
/*Add book to localStorage*/
function addBook() {
  var newBook = {
    Author: $('input[name="author"]')[0].value,
    Title: $('input[name="title"]')[0].value,
    Year: $('input[name="year"]')[0].value,
    Pages: $('input[name="pageNumber"]')[0].value
  };
  var dataStr = JSON.stringify(newBook);

  $(".book-storage").children().each(function(index) {
    var previousId = $(this).attr('data-itemid').slice(8);
    if (previousId > id) {
      id = previousId;
    }
  });
  id++;

  localStorage.setItem(mask + id, dataStr);

  $('input[type!="submit"]').val("");
  $(".book-storage li").remove();
  showBooks();
  return false;
}

/*Get data from localStorage and add it to book storage*/
function showBooks() {
  if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.indexOf(mask) == 0) {
        var dataStr = localStorage.getItem(key);
        var data = JSON.parse(dataStr);
        $('<li></li>').attr('data-itemid', key).html("<div class='book-info'><p>" + data.Author + "</p><p>" + data.Title + "</p><div>").appendTo(".book-storage").append("<button class='btn btn-default' onclick='return editBook($(this));'>edit</button><button class='btn btn-default' onclick='return deleteBook($(this));'>remove</button>");
      }
    }
  }
}

/*Delete current book from localStorage and book storage*/
function deleteBook(el) {
  var ID = $(el).parent().attr('data-itemid').slice(8);
  localStorage.removeItem(mask + ID);
  $(el).parent().remove();
  return false;
}

/*Edit current book: take existing data and insert it in form fields*/
function editBook(el) {
  item = $(el).parent().attr('data-itemid');
  console.log(item);
  var obj = JSON.parse(localStorage.getItem(item));
  $('#author').val(obj.Author);
  $('#title').val(obj.Title);
  $('#year').val(obj.Year);
  $('#pageNumber').val(obj.Pages);
  $("form input[type='submit']").attr("onclick", "return update();").attr("value", "Update");
}

/*Update book information in localStorage and book storage*/
function update() {
  var updateBook = {
    "Author": $('input[name="author"]')[0].value,
    "Title": $('input[name="title"]')[0].value,
    "Year": $('input[name="year"]')[0].value,
    "Pages": $('input[name="pageNumber"]')[0].value
  };
  var dataStr = JSON.stringify(updateBook);
  console.log(item);
  localStorage.setItem(item, dataStr);
  $(".book-storage li").remove();
  showBooks();
  $('input[type!="submit"]').val("");
  $("form input[type='submit']").attr("onclick", "return addBook();").attr("value", "Add new Book");
  return false;
}

/*Clean all form fields*/
function resetForm() {
  $('input[type!="submit"]').val("");
  $("form input[type='submit']").attr("onclick", "return addBook();").attr("value", "Add new Book");
  return false;
}

$(document).ready(function() {
  showBooks();
});





