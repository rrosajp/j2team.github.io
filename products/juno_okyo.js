var DEBUG=!1;jQuery(document).ready(function(b){loadData("web_apps",!0);setTimeout(function(){loadData("software");loadData("browser_ext");var c,d=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(c=document.createElement("script"),c.id="facebook-jssdk",c.src="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.4",d.parentNode.insertBefore(c,d))},500)});
function loadData(b,c){$.ajax({url:"cache/"+b+".json",type:"GET",dataType:"json"}).done(function(d){if(d.success){var e=$("#"+b+"_list"),a="";$.each(d.data,function(c,d){var b=parseInt(d.type),b='<span class="glyphicon glyphicon-eye-'+(0===b?"open":"close"),b=b+'"></span>';a+="<tr>";a+="<td>"+(c+1)+"</td>";a+="<td>"+createURL(d.url,d.name)+"</td>";a+="<td>"+d.description+"</td>";a+="<td>"+b+"</td>";a+="</tr>"});e.html(a);c&&console.log("SQLite Version: "+d[0].sqlite_version.versionString);return!0}return!1}).fail(function(){console.log("error")})}
function createURL(b,c){return'<a href="'+b+'" target="_blank" title="'+c+'">'+c+"</a>"};