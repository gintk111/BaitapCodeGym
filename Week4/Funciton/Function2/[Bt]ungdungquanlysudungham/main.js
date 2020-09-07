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
    				+'<td><button class="btn btn-outline-light" onclick="updatePlayer('+ i +')">Sửa</button></td>' 
    				+'<td><button class="btn btn-outline-danger" onclick="deletePlayer('+ i +')">Xóa</button></td>'
    			+'</tr>';
    }				
    document.getElementById('tableplayers').innerHTML = data;
}
function addPlayer() {
	let namePlayer = document.getElementById('namePlayer').value;
	if (namePlayer != "") {
		listPlayer.push(namePlayer);
	}else {
		alert("Vui lòng nhập tên")
	}
	
	showList();
}
function deletePlayer(index){
	if (confirm("Bạn chắc chắn xóa")) {
		listPlayer.splice(index,1);
		showList();
	}
}
function updatePlayer(index){
	let newPlayer = prompt("Nhập tên muốn sửa");
	listPlayer[indexOf] = newPlayer;
	showList();
}