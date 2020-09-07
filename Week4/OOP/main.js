listPlayer = ['Stephen Curry', 'Klay Thompson','Draymond Green','Andrew Wiggins'];
showList();
function showList() {	
    let data = '';
    data += '<tr><td colspan="4" ><p>' +'<span>' + listPlayer.length + '</span>' + ' VĐV</p></td>'
   	data += '<tr>'
   				+ '<th> Stt </th>'
   				+ '<th> Ảnh </th>'
   				+ '<th> Tên cầu thủ </th>'
   				+ '<th>  </th>'
   				+ '<th>  </th>'
   			+'</tr>'	
    for (var i = 0; i < listPlayer.length; i++) {
    	data += '<tr>'
    				+'<td>' + (listPlayer.indexOf(listPlayer[i]) + 1) + '</td>'
    				+'<td>' +  + '</td>'
    				+'<td>' + listPlayer[i] + '</td>'
    				+'<td><button class="btn btn-outline-light" onclick="openWindow()">Sửa</button></td>' 
    				+'<td><button class="btn btn-outline-danger" onclick="deletePlayer('+ i +')">Xóa</button></td>'
    			+'</tr>';
    }				
    document.getElementById('tableplayers').innerHTML = data;
}
function updatePlayer(index){
	let newPlayer = document.getElementById('test');
	listPlayer[indexOf] = newPlayer;
	showList();
}
function openWindow()
{
  	windowChild = window.open('test2.html', "windowChild ", "width=500, height=500");
	return false;
}