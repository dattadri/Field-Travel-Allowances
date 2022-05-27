class URLParams {


    GetUrlParameter(sParam) {
        var sPageURL = window.location.href;
        console.log("Full Url :" + sPageURL);
        var url = new URL(sPageURL);
        var parameter = url.searchParams.get(sParam);
        console.log(sParam + ":" + parameter);
        return parameter;
    }



    /* GetUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1);

            var sURLVariables = sPageURL.split('&');

            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] == sParam)

                {
                    return sParameterName[1];
                }
            }
        }*/


}
