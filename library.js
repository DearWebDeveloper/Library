
function Books(){
  list = [];
  list.push(new Book("We Were The Lucky Ones", true, "February 14, 2017", Book.CheckoutDate, "112233"),new Author("Georgia", "Hunter"));
  list.push(new Book("Chasing Fireflies", true, "February 10, 2008", Book.CheckoutDate, "223344","Charles", "Martin"),new Author("Charles","Martin"));
  list.push(new Book("The Silent Wife", true, "June 25, 2013", Book.CheckoutDate, "334455","A.S.A.", "Harrison"),new Author("A.S.A.", "Harrison"));
  list.push(new Book("All the Light We Cannot See", true, "May 6, 2014", Book.CheckoutDate, "445566","Anthony", "Doerr"),new Author("Anthony", "Doerr"));
  list.push(new Book("The Couple Next Door", true, "August 23, 2016", Book.CheckoutDate, "556677","Shari", "Lapena"),new Author("Shari", "Lapena"));
  return list;
}

function Author(FirstName, LastName){
  this.FirstName = FirstName;
  this.LastName = LastName;
  var names = FirstName +"\n"+LastName;
  return names;
}

function Book(Title, Available, PublicationDate, CheckoutDate, CallNumber, Author){
  this.Title = Title;
  this.Available = Available;
  this.PublicationDate = PublicationDate;
  this.CheckoutDate = CheckOut();
  this.CallNumber = CallNumber;
  var Author =  [];
}

function CheckOut(){
  var d = new Date;
  var value = Math.floor(Math.random() * 5) + 1;
  Book.Available = false;
  CheckoutDate = d - value;

  return CheckoutDate;
}

function CheckIn(){
  this.Book.Available = true;
}

function isOverdue(){
  if (CheckoutDate < Date - 5){
    Patron.fine += 5.00;
  }
}

function isCheckedOut(){
  if (Available == true){
    return true;
  }
  return false;
}

var catalog = Books();

function Patron(FirstName, LastName, LibraryCardNumber, BooksOut, Fine){
  this.FirstName = FirstName
  this.LastName = LastName
  this.LibraryCardNumber = LibraryCardNumber
  this.BooksOut = []
  this.fine = 0.00
}

var patrons = customers();

function customers(){
  list= [];
  list.push(new Patron("John","Smith","040404",[], 0.00 ));
  list.push(new Patron("Guy", "Fierri", "009909", [], 0.00 ));
  list.push(new Patron("Joe", "Biden", "776770", [], 0.00 ));
  list.push(new Patron("Michael", "Jackson", "925", [], 0.00 ));
  list.push(new Patron("Frank", "Sinatra", "8103", [], 0.00));
  return list;
}


Patron.read = function(){
  for (var i = 0; i < catalog.Length; i++){
    console.log(i)
    if (Patron.BooksOut == undefined){
      console.log("No books currently checked out")
      if (Book.Available == true){
      this.Patron.BooksOut.push(catalog[i]);
      console.log (this.Patron.BooksOut[i]);
      CheckOut();
      }
    }
  }
}


Patron.return = function(){
  if ( isOverdue() == true){
    CheckIn();
    BooksOut.pop();
  }
  console.log ("Book has been returned successfully.")
}


var day = 0;
function test(){
  console.log("Test is beginning")
  for(var i = 0; day < 90; i++){
    if(i == 5){
      i = 0;
    }
    console.log(i)
    if (Patron.BooksOut == null){
      Patron.read();
      isOverdue();
      console.log(patrons[i]) + console.log("Has checked out a book");
      if (i == catalog.length){
        console.log("Day: "+ day);
        day++; i= 0;
      }
    }
  }
}
 test();
