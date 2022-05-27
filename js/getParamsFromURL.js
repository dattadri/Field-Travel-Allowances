class getEmpid {
    
    
    
      GetUrlParameter(sParam) {
        var sPageURL = window.location.href;
        console.log("Full Url :" + sPageURL);
        var url = new URL(sPageURL);
        var parameter = url.searchParams.get(sParam);
        console.log("before:"+sParam + ":" + parameter);
        var parameter2=window.atob(parameter);
        console.log(sParam + ":" + parameter2);
        return parameter2;
    }

    // GetUrlParameter(sParam) {
    //     var sPageURL = window.location.search.substring(1);

    //     var sURLVariables = sPageURL.split('&');

    //     for (var i = 0; i < sURLVariables.length; i++) {
    //         var sParameterName = sURLVariables[i].split('=');

    //         if (sParameterName[0] == sParam)

    //         {
    //             return sParameterName[1];
    //         }
    //     }
    // }






}
