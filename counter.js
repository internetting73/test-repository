function counter(min, max, time, elem)
{
    var timer = setInteval(function(){
        var count = min++;
        if (count < 10) count = '0' + count;
        document.querySelector(elem).innerHTML = count;
        if (count === max) clearInterval(timer);
    }, time);
}