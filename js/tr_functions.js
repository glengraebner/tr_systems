function loadTR()
{   
    try
    {      
        redisplayTR();
        loadConfigItems(configitems);
    }
    catch(ex)
    {
        alert(ex.message);
    }
}

function loadConfigItems(data) {
    try {
        var arr = data;
    }
    catch(ex) {
        alert(ex.message);
    }
}

function redisplayTR()
{
    try
    {
        var winwidth = window.innerWidth;
        var winheight = window.innerHeight;
        var divtopwidth = document.getElementById('div_top').offsetWidth;
        var divtopwidth = document.getElementById('div_top').offsetHeight;
        
        document.getElementById('div_main').style.width = winwidth.toString() + 'px';
        document.getElementById('div_top').style.width = (winwidth-50).toString() + 'px';
        document.getElementById('div_top_left').style.width = '300px';
        document.getElementById('div_top_right').style.width = '300px';
        document.getElementById('div_bottom').style.width = (winwidth-50).toString() + 'px';
        document.getElementById('div_bottom_left').style.width = '300px';
        document.getElementById('div_bottom_right').style.width = '300px';        
    }
    catch(ex)
    {
        alert(ex.message);
    }
}