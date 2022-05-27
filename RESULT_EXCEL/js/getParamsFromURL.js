class URLParams {


      GetUrlParameter(sParam) {
          var sPageURL = window.location.href;
        var url = new URL(sPageURL);
        var parameter = url.searchParams.get(sParam);
        try{
        var parameter2=window.atob(parameter);
            
        }
        catch(err) {
 // document.getElementById("demo").innerHTML = err.message;
 alert(err);
}
        return parameter2;
      }
    
}
