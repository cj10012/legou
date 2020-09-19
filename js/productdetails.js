var logodis = document.querySelector(".logmenu");
var leftdis = document.querySelector('.left');
console.log(leftdis);
// console.log(logodis);
var flag = false;
logodis.addEventListener('click', function() {

    if (!flag) {

        leftdis.style.display = 'block'
        flag = true;
    } else {
        leftdis.style.display = 'none'
        flag = !flag;
    }
})