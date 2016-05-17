var wp = document.getElementById('wp');
var tableHTML = [
    '<table>'
];
for (var i=1 ; i<10 ; i++) {
    tableHTML.push('<ul>');

    for (var j=1; j<=i; j++) {
        tableHTML.push('<li>'+i+'*'+j+'='+i*j+'</li>')
    }

    tableHTML.push('</ul>');
};




tableHTML.push('</table>')
console.log(tableHTML);
wp.innerHTML = tableHTML.join('');