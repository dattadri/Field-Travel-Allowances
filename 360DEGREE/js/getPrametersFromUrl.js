class getUrlParams {
    

      GetUrlParameter(sParam) {
        var sPageURL = window.location.href;
        var url = new URL(sPageURL);
        var parameter = url.searchParams.get(sParam);
        var parameter2=window.atob(parameter);
        return parameter2;
    }

}
