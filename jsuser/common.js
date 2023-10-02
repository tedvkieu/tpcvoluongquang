var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
var record=2;
function buildSlidePage(obj, codan, pageActive, totalPage) {
    var html = '';
    pageActive = parseInt(pageActive);
    for (i = 1; i <= codan; i++) {
        if (pageActive - i < 0) break;
        html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">' + (pageActive - i + 1) + '</button>' + html;
    }
    // if (pageActive > codan) {
    //     html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">...</button>' + html;
    // }
    html += '<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="' + pageActive + '">' + (pageActive + 1) + '</button>';
    for (i = 1; i <= codan; i++) {
        if (pageActive + i >= totalPage) break;
        html = html + '<button  type="button" class="btn btn-outline btn-default" value="' + (pageActive + i) + '">' + (pageActive + i + 1) + '</button>';
    }
    // if (totalPage - pageActive > codan + 1) {
    //     html = html + '<button type="button" value="' + (pageActive + i) + '" class="btn btn-outline btn-default">...</button>';
    // }
    if (pageActive + 1 < totalPage) {
         obj.html('<button type="button" class="btn btn-outline btn-default" value="0">|&lt;</button><button type="button" class="btn btn-outline btn-default" value="'+(pageActive-1)+'">&lt;&lt;</button>'+html+'<button type="button" class="btn btn-outline btn-default" value="'+(pageActive+1)+'">&gt;&gt;</button><button type="button" class="btn btn-outline btn-default" value="'+(totalPage-1)+'">&gt;|</button>');
    }else{
        obj.html('<button type="button" class="btn btn-outline btn-default" value="0">|&lt;</button><button type="button" class="btn btn-outline btn-default" value="'+(pageActive-1)+'">&lt;&lt;</button>'+html+'<button type="button" class="btn btn-outline btn-default" value="'+(pageActive)+'">&gt;&gt;</button><button type="button" class="btn btn-outline btn-default" value="'+(totalPage-1)+'">&gt;|</button>');
 
    }
}

//Công dụng đưa dữ liệu lên server
function queryData(url, dataSend, callback) {

    $.ajax({
        type: 'GET',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'json',
        success: callback
    });
}
