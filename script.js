//Get variables
var messagebox = document.querySelector(".message");
var inputdat = document.querySelector(".inputdate");
var calbutton = document.querySelector(".Cal");
inputdat.max = new Date().toISOString().split("T")[0];
//Age Difference
inputdat.addEventListener("contextmenu", function (event){
    event.preventDefault();
})
calbutton.addEventListener("click", () => {
    var CurrentDate = new Date();
    var inputdate = new Date(inputdat.value);
    var bdate = inputdate.getDate();
    var bmonth = inputdate.getMonth() + 1;
    var byear = inputdate.getFullYear();
    var cdate = CurrentDate.getDate();
    var cmonth = CurrentDate.getMonth() + 1;
    var cyear = CurrentDate.getFullYear();
    var fyear = cyear - byear;
    if(cmonth >= bmonth){
        var fmonth = cmonth - bmonth;
    }
    else{
        fyear--;
        var fmonth = 12 + cmonth - bmonth;
    }
    if (cdate >= bdate){
        var fdate = cdate - bdate;
    }
    else{
        fmonth--;
        var fdate = monthstodate(fyear, fmonth, 0) + cdate - bdate;
    }
    if(fmonth < 0){
        fmonth = 11;
        fyear--;
    }
    function monthstodate(year, month){
        return new Date(year, month, 0).getDate()
    }
    console.log("Date" + fdate);
    console.log("month" + fmonth);
    console.log( "year" + fyear);
    messagebox.innerHTML = "You are <span>" + fyear + "</span> years, <span>" + fmonth  + "</span> months and <span>" + fdate + "</span> days old."
})