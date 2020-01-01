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
            tr1.id = trsystems[i]['HSC'];
            document.getElementById('table1').appendChild(tr1);
            document.getElementById('table1').addEventListener("click", selectSystem)
        }
        
        // var cilength = configitems.length;
        // var partlength = allparts.length;
        // var obslength = obsolescence.length;
        redisplayTR();
        
    }
    
    catch(ex1)
    {
        
        alert(ex1.message);
        
    }
}

function selectSystem(evt) {
    
    try {
        
        var cilength = configitems.length;
        var allpartslength = allparts.length;
        var obslength = obsolescence.length;
        var hsc = evt.srcElement.parentNode.id;
        var txt1;
        
        if(hsc != '') {
          
            var trhd1 = document.createElement('tr');
            var tdhd1 = document.createElement('td');
            var tdhd2 = document.createElement('td');
            var tdhd3 = document.createElement('td');
            var tdhd4 = document.createElement('td');
            var tdhd5 = document.createElement('td');
            var tdhd6 = document.createElement('td');
            var tdhd7 = document.createElement('td');
            var tdhd8 = document.createElement('td');
            
            document.getElementById('table2').innerHTML = '';
            
            tdhd1.innerHTML = 'HSC';
            tdhd2.innerHTML = 'Title';
            tdhd3.innerHTML = 'Track_for_Obsolescence';
            tdhd4.innerHTML = 'Part_Number';
            tdhd5.innerHTML = 'Cost';
            tdhd6.innerHTML = 'Cost_Date';
            tdhd7.innerHTML = 'OBS_Criticality';
            tdhd8.innerHTML = 'Tech_Refresh_Date';
            tdhd1.setAttribute('class','trhdr');
            tdhd2.setAttribute('class','trhdr');
            tdhd3.setAttribute('class','trhdr');
            tdhd4.setAttribute('class','trhdr');
            tdhd5.setAttribute('class','trhdr');
            tdhd6.setAttribute('class','trhdr');
            tdhd7.setAttribute('class','trhdr');
            tdhd8.setAttribute('class','trhdr');
            trhd1.appendChild(tdhd1);
            trhd1.appendChild(tdhd2);
            trhd1.appendChild(tdhd3);
            trhd1.appendChild(tdhd4);
            trhd1.appendChild(tdhd5);
            trhd1.appendChild(tdhd6);
            trhd1.appendChild(tdhd7);
            trhd1.appendChild(tdhd8);
            document.getElementById('table2').appendChild(trhd1);
            
            for(var i=0;i<cilength;i++) {
                txt1 = configitems[i]['HSC'].substring(0,hsc.length);
                if(txt1 === hsc) { // all HSCs that are subsets of the selected HSC                  
                    for(var j=0;j<allpartslength;j++) {
                        if(allparts[j]['HSC'] === configitems[i]['HSC']) {
                            
                            var tr1 = document.createElement('tr');
                            var td1 = document.createElement('td');
                            var td2 = document.createElement('td');
                            var td3 = document.createElement('td');
                            var td4 = document.createElement('td');
                            var td5 = document.createElement('td');
                            var td6 = document.createElement('td');
                            var td7 = document.createElement('td');
                            var td8 = document.createElement('td');

                            td1.innerHTML = allparts[j]['HSC'];
                            td2.innerHTML = allparts[j]['Title'];
                            td3.innerHTML = allparts[j]['Track_for_Obsolescence'];
                            td4.innerHTML = allparts[j]['Part_Number'];
                            td5.innerHTML = allparts[j]['Cost'];
                            td6.innerHTML = allparts[j]['Cost_Date'];
                            
                            for(var k=0;k<obslength;k++) {
                                if(obsolescence[k]['Part_Number'] === allparts[j]['Part_Number']) {
                                    td7.innerHTML = obsolescence[k]['OBS_Criticality'];
                                    td8.innerHTML = obsolescence[k]['Tech_Refresh_Date'];
                                }
                            }

                            tr1.appendChild(td1);
                            tr1.appendChild(td2);
                            tr1.appendChild(td3);
                            tr1.appendChild(td4);
                            tr1.appendChild(td5);
                            tr1.appendChild(td6);
                            tr1.appendChild(td7);
                            tr1.appendChild(td8);

                            document.getElementById('table2').appendChild(tr1);                            
                            
                        }
                    }               
                } 
            }
        }
    }
    
    catch(ex2) {
        
        alert(ex2.message);
        
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