function loadTRSystems()
{   
    try
    {
        var trsyslength = trsystems.length;
        
        var trhd1 = document.createElement('tr');
        var tdhd1 = document.createElement('td');
        var tdhd2 = document.createElement('td');
        var tdhd3 = document.createElement('td');
        var tdhd4 = document.createElement('td');
        var tdhd5 = document.createElement('td');
        var tdhd6 = document.createElement('td');
        var tdhd7 = document.createElement('td');
        var tdhd8 = document.createElement('td');
        var tdhd9 = document.createElement('td');

        tdhd1.innerHTML = 'HSC';
        tdhd2.innerHTML = 'Title';
        tdhd3.innerHTML = 'Type';
        tdhd4.innerHTML = 'Last_Tech_Refresh';
        tdhd5.innerHTML = 'Tech_Refresh_Due';
        tdhd6.innerHTML = 'Tech_Refresh_Scheduled';
        tdhd7.innerHTML = 'MCB';
        tdhd8.innerHTML = 'Criticality';
        tdhd9.innerHTML = 'Total_Cost_of_Hardware';
        tdhd1.setAttribute('class','trhdr');
        tdhd2.setAttribute('class','trhdr');
        tdhd3.setAttribute('class','trhdr');
        tdhd4.setAttribute('class','trhdr');
        tdhd5.setAttribute('class','trhdr');
        tdhd6.setAttribute('class','trhdr');
        tdhd7.setAttribute('class','trhdr');
        tdhd8.setAttribute('class','trhdr');
        tdhd9.setAttribute('class','trhdr');
        trhd1.appendChild(tdhd1);
        trhd1.appendChild(tdhd2);
        trhd1.appendChild(tdhd3);
        trhd1.appendChild(tdhd4);
        trhd1.appendChild(tdhd5);
        trhd1.appendChild(tdhd6);
        trhd1.appendChild(tdhd7);
        trhd1.appendChild(tdhd8);
        trhd1.appendChild(tdhd9);
        document.getElementById('table1').appendChild(trhd1);        
        
        for(var i=0;i<trsyslength;i++) {
            
            var tr1 = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
            var td6 = document.createElement('td');
            var td7 = document.createElement('td');
            var td8 = document.createElement('td');
            var td9 = document.createElement('td');
            
            td1.innerHTML = trsystems[i]['HSC'];
            td2.innerHTML = trsystems[i]['Title'];
            td3.innerHTML = trsystems[i]['Type'];
            td4.innerHTML = trsystems[i]['Last_Tech_Refresh'];
            td5.innerHTML = trsystems[i]['Tech_Refresh_Due'];
            td6.innerHTML = trsystems[i]['Tech_Refresh_Scheduled'];
            td7.innerHTML = trsystems[i]['MCB'];
            td8.innerHTML = trsystems[i]['Criticality'];
            td9.innerHTML = trsystems[i]['Total_Cost_of_Hardware'];
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);
            tr1.appendChild(td5);
            tr1.appendChild(td6);
            tr1.appendChild(td7);
            tr1.appendChild(td8);
            tr1.appendChild(td9);
            document.getElementById('table1').appendChild(tr1);
        }
        
        // var cilength = configitems.length;
        // var partlength = allparts.length;
        // var obslength = obsolescence.length;
        redisplayTR();
    }
    catch(ex)
    {
        alert(ex.message);
    }
}

function redisplayTR()
{
    try
    {
        var winwidth = window.innerWidth;
        var winheight = window.innerHeight;
        var divtopheight = winheight * 0.3;
        // var divtopwidth = document.getElementById('div_top').offsetWidth;
        // var divtopheight = document.getElementById('div_top').offsetHeight;
        
        document.getElementById('div_main').style.width = winwidth.toString() + 'px';
        document.getElementById('div_top').style.width = (winwidth-10).toString() + 'px';
        document.getElementById('div_top').style.height = divtopheight.toString() + 'px';
        //document.getElementById('div_top_left').style.width = '300px';
        //document.getElementById('div_top_right').style.width = '300px';
        document.getElementById('div_bottom').style.width = (winwidth-10).toString() + 'px';
        document.getElementById('div_bottom').style.height = (winheight - divtopheight - 25).toString() + 'px';
        //document.getElementById('div_bottom_left').style.width = '300px';
        //document.getElementById('div_bottom_right').style.width = '300px';        
    }
    catch(ex)
    {
        alert(ex.message);
    }
}