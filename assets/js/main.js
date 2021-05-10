function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}
$(document).ready(function(e) {
    $.getJSON("assets/js/member.json").done(function(j) {
        full_code = ""
        for(var k in shuffle(j)){
            data = j[k]
            /* name, hp, field, comment */
            if(data['name'] == 'rbtree'){
                var hp = "http://" + data['hp'];
            }
            else{
                var hp = "https://" + data['hp'];
            }
            html = "<div class=\"col-lg-4 profile\">\
                <img class=\"pic\" src=\"assets/images/"+data['name']+".jpg\" />\
                <div class=\"name\">\
                    <div class=\"val\">"+data['name']+"\
                    <sup>\
                        <a href=\""+hp+"\"><i class=\"fas fa-link\"></i></a>\
                    </sup>\
                    </div>\
                </div>\
                <div class=\"field\">\
                    <div class=\"val\">\n"
            for(var f in data['field']){
                html += "<span class=\"badge badge-secondary\">"+data['field'][f]+"</span>\n"
            }
            html +="</div>\
                </div>\
                <div class=\"comment\">\
                    <i class=\"fas fa-quote-left\"></i>\
                    <span>"+data['comment']+"</span>\
                    <i class=\"fas fa-quote-right\"></i>\
                </div>\
            </div>"
            $(".member").append(html);
        }
        
    }).fail(function(jqXHR, status, e) {
        console.log(status, e);
    });
});