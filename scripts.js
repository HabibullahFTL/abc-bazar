$('.fa-bars').click(function(){
    $('.fa-bars').toggleClass('active-btn')
    $('.side-menu').toggleClass('show')
})

// Getting URL Name From GET URL Method (Start Here)
function getURLName(name) {
    var url = window.location.href;
    var urlLength = url.length;
    var hasName = url.search(name);
    var tempURL = url.slice(hasName,urlLength);
    var urlLength = tempURL.length;
    var hasName = tempURL.search(name);
    var nameLength = name.length;
    var equal = tempURL.search('=');
    var endName = tempURL.search('&');
    var hasHash = tempURL.search('#');
    if(endName >= 0 && hasHash == -1){
        return tempURL.slice(hasName+nameLength+1,endName);
    }else if(endName == -1 && hasHash == -1){
        return tempURL.slice(hasName+nameLength+1,urlLength);
    }else if(endName == -1 && hasHash >= 0){
        return tempURL.slice(hasName+nameLength+1,hasHash);
    }else if(endName >= 0 && hasHash >= 0 && endName > hasHash){
        return tempURL.slice(hasName+nameLength+1,hasHash);
    }else if(endName >= 0 && hasHash >= 0){
        return tempURL.slice(hasName+nameLength+1,endName);
    }
}
function hasURLName(name){
    var url = window.location.href;
    var hasName = url.search(name);
    if(hasName == -1){
        return false;
    }else if(hasName>=0){
        return true;
    }
}
// Getting URL Name From GET URL Method (Ends Here)
var a = fetch( `https://api.github.com/users/a/repos`).then(result=>result.json()).then(result=>result[0]["archive_url"])
document.write(a)
console.log(a)

