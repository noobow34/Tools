Main();
 
function Main()
{
	var cnt = GetLineCount(0);
	var all = "";
	for (var i = 1; i <= cnt; i++) {
		var line = GetLineStr(i).replace("\r","").replace("\n","");
		if(i == 1){
			all += ("(" + line);
		}else if(i == cnt){
			all += ("," + line + ")");
		}else{
			all += ("," + line);
		}
		all += "\r\n";
	}
	
	SelectAll(0);
	InsText(all);
	SelectAll(0);
	Editor.Copy();;
}
