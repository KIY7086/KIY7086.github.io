window.onload=function()
    {
        window.requestAnimationFrame(getDate);
    }
    function getDate()
    {
    window.setTimeout(function(){
        window.requestAnimationFrame(getDate);
        },1000/2)
        var d=new Date();   
        var month=d.getMonth()+1;
        var day=d.getDay();
        var days=d.getDate();
        var hour=d.getHours();
        var minute=d.getMinutes();
        var second=d.getSeconds();
        if(days<10) days="0"+days;
        if(hour<10) hour="0"+hour;
        if(minute<10) minute="0"+minute;
        if(second<10) second="0"+second;
        var week=new Array("周日","周一","周二","周三","周四","周五","周六");
        var Tools=document.getElementById("hm");
        var Time=+hour+":"+minute;
        Tools.innerHTML=Time;
        var Tools=document.getElementById("myweek");
        var MonthDateWeek=month+"月"+day+"日"+week[day];
        Tools.innerHTML=MonthDateWeek;
    }