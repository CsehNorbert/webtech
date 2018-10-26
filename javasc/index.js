$(document).ready(function(){
        $("#content").load("lorem.html");

        $.each($('.menuButton'),function(mbIndex,mbValue){
            $(mbValue).click(function(event)){
                event.preventDefault();
                if(!($(this).find('a').attr('href')=="indexhtml")){
                    $('#content').load($(this).find())
                }
                else {
                open('index.html',"_self");
                }
            }
    })
});

function loadauthors(){
    $.getJSON("$button",function (data){
        var table = $('<table>id="authorstable"></table>');
        table.append('<tr><th>Name</th><th>Nationality</th><th>Birth Date</th></tr>')
        $.each(data, function (key,value){
            var row=$('<tr></tr>');
            var nameCell=$('<td inclick="openBooks"('+"'"+value.name+"'"+')">'+value.name+'</td>');
            var nationCell=$('<td>'+value.nationality+'</td>');
            var birthCell=$('<td>'+value.birthDate+'</td>');
            row.append(nameCell);
            row.append(nationCell);
            row.append(birthCell);
            table.append(row);
        });
        $(#content).html(table);
    });
}

function openBooks(author){
    $.getJSON("$button2",function (data){
        var table = $('<table>id="authorstable"></table>');
        table.append('<tr><th>Name</th><th>kiado</th><th>oldalszam</th></tr>')
        $.each(data, function (key,value){
            var row=$('<tr></tr>');
            var nameCell=$('<td inclick="openBooks"('+"'"+value.name+"'"+')">'+value.name+'</td>');
            var kiadoCell=$('<td>'+value.kiado+'</td>');
            var oldalszamCell=$('<td>'+value.oldalszam+'</td>');
            row.append(nameCell);
            row.append(kiadoCell);
            row.append(oldalszamCell);
            table.append(row);
        });
        $(#content).html(table);
    });
}