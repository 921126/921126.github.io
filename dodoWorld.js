
var searchBtn = document.querySelector(".search-btn");

searchBtn.onclick = function(){
    var search = document.querySelector(".search");
    var arr = ['도도', 'eheh', 'dodo', 'DODO', 'dog', 'DOG', '강아지', '개', '하준', 'hajun', 'cat', 'doojun', 'dujun', '고양이'];

    console.log(search.value);
    for(var i = 0; i < arr.length; i++){
        if(search.value == arr[i]){
            if(i < 8){
                window.location.href = "http://127.0.0.1:5500/Search_dog.html";
                search.value = "";
            }else if( 7 < i){
                window.location.href = "http://127.0.0.1:5500/Search_cat.html"
                search.value = "";
            }
            
        }
    }

}