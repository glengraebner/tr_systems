function loadTR()
{   
    try
    {      
        redisplayTMOF();
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

function redisplayTMOF()
{
    try
    {
        document.getElementById('div_main').style.width = '700px';
        document.getElementById('div_top').style.width = '650px';
        document.getElementById('div_top_left').style.width = '300px';
        document.getElementById('div_top_right').style.width = '300px';
        document.getElementById('div_bottom').style.width = '650px';
        document.getElementById('div_bottom_left').style.width = '300px';
        document.getElementById('div_bottom_right').style.width = '300px';        
    }
    catch(ex)
    {
        alert(ex.message);
    }
}