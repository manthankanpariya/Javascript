// JavaScript Document  
var personArray = new Array();
function insert()
	{
		var person = new Object();
		person.sel=document.getElementById("sel").value;
		person.fname = document.getElementById("fname").value;
		firstname(person.fname);
		person.lname=document.getElementById("lname").value;
		lastname(person.lname);
		person.email=document.getElementById("email").value;
		valemail(person.email);
		person.address=document.getElementById("address").value;
		person.pin=document.getElementById("pin").value;
		valpincod(person.pin);
		person.mobile=document.getElementById("mobile").value;
		valmobile(person.mobile);
		person.country=document.getElementById("country").value;
		person.state=document.getElementById("state").value;
		person.city=document.getElementById("city").value;
		person.dob=document.getElementById("dob").value;
		var dob=document.getElementById("dob").value;
		var date= new Date();
		var ndob=new Date(dob);
		var age=date.getFullYear()-ndob.getFullYear();
		person.nage=age;
		
		var gender=document.querySelector('[name="gender"]:checked');
		if(gender!=null)
		{
			person.gender=gender.value;	
		}
		var hobbby = [];
		person.hobby=hobbby;
		var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

		for (var i = 0; i < checkboxes.length; i++) 
		{
  			hobbby.push(checkboxes[i].value);
		}
		var edu=[];
		person.edu=edu;
		var educ=document.getElementById("edu");
		for(i=0;i<educ.length;i++)
		{
			if(educ[i].selected)
			{
				edu.push(educ[i].value);
			}
		}	
		person.id=1;
		if(personArray && personArray.length > 0) {
			console.log("id:",person.id= personArray[personArray.length-1].id+1);
		}
		personArray.push(person);
		console.log("Array: ",personArray);
		table();
	}
	
	function table() 
	{
        var  tbl  = document.getElementById('table');
  		while(tbl.hasChildNodes())
		{
			 tbl.removeChild(tbl.firstChild);
		}
       	tr=tbl.insertRow();
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Name"));
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Age"));
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Mobile No."));
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Address"));
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Edit"));
		td=tr.insertCell();
   		td.appendChild(document.createTextNode("Delete"));
		
		//var start=personArray.length-1;
    	for (var m = 0; m < personArray.length; m++) 
		{
			tr=tbl.insertRow();
			td=tr.insertCell();
			td.appendChild(document.createTextNode(personArray[m].sel+" "+personArray[m].fname+" "+personArray[m].lname));
			td=tr.insertCell();
			td.appendChild(document.createTextNode(personArray[m].nage));
			td=tr.insertCell();
			td.appendChild(document.createTextNode(personArray[m].mobile));
			td=tr.insertCell();
			td.appendChild(document.createTextNode(personArray[m].address+" "+personArray[m].city+" "+personArray[m].pin));
			
			td=tr.insertCell();
			var pid=personArray[m].id;
			var index=personArray.findIndex(x => x.id === pid);
			var edit=document.createElement('img');
			edit.src="http://localhost/E_Contract_Service/bootstrap-3.3.7/edit.png";
			edit.setAttribute("width","25px");
			edit.setAttribute("heigth","25px");
			edit.setAttribute("id",index);
			edit.setAttribute("onclick","edit(this.id);");
			editt=td.appendChild(edit);
			
			td=tr.insertCell();
			var del=document.createElement('img');
			del.src="http://localhost/E_Contract_Service/bootstrap-3.3.7/delete.png";
			del.setAttribute("width","25px");
			del.setAttribute("heigth","25px");
			del.setAttribute("id",index);
			del.setAttribute("onclick","deleteper(this.id);");
			del=td.appendChild(del);
		}
		
	}
	
	function deleteper(index)
	{	
		//var index=personArray.findIndex(x => x.id === piid);
		//console.log("index:",index);
		personArray.splice(index,1);
		//console.log("iddddd:",piid);
		table();	 
	}	

	function edit(index)
	{	
		//var index=personArray.findIndex(x => x.id === piid);
		var upindex=index;
		//console.log("index:",index);
		var getvalue=personArray[index];
		console.log("get value:",getvalue);
		//console.log("iddddd:",piid);
		document.getElementById("sel").value=personArray[index].sel;
		document.getElementById("fname").value=personArray[index].fname;
		document.getElementById("lname").value=personArray[index].lname;
		document.getElementById("email").value=personArray[index].email;
		document.getElementById("address").value=personArray[index].address;
		document.getElementById("pin").value=personArray[index].pin;
		document.getElementById("mobile").value=personArray[index].mobile;
		document.getElementById("country").value=personArray[index].country;
		document.getElementById("state").value=personArray[index].state;
		document.getElementById("city").value=personArray[index].city;
		document.getElementById("dob").value=personArray[index].dob;
		document.getElementById("gender").checked=personArray[index].gender;
		var hob=personArray[index].hobby;
		
		document.getElementById("update").value=upindex;		 
	}
	
	function updateper(index)
	{
		var sel=document.getElementById("sel").value;
		var fname = document.getElementById("fname").value;
		firstname(fname);
		var lname=document.getElementById("lname").value;
		lastname(lname);
		var email=document.getElementById("email").value;
		valemail(email);
		var address=document.getElementById("address").value;
		var pin=document.getElementById("pin").value;
		valpincod(pin);
		var mobile=document.getElementById("mobile").value;
		valmobile(mobile);
		var country=document.getElementById("country").value;
		var state=document.getElementById("state").value;
		var city=document.getElementById("city").value;
		var dob=document.getElementById("dob").value;
		var dob=document.getElementById("dob").value;
		var date= new Date();
		var ndob=new Date(dob);
		var age=date.getFullYear()-ndob.getFullYear();
		var nage=age;
		
		var gender=document.querySelector('[name="gender"]:checked');
		if(gender!=null)
		{
			var ngender=gender.value;	
		}
		personArray[index].sel=sel;
		personArray[index].fname=fname;
		personArray[index].lname=lname;
		personArray[index].email=email;
		personArray[index].address=address;
		personArray[index].pin=pin;
		personArray[index].mobile=mobile;
		personArray[index].country=country;
		personArray[index].state=state;
		personArray[index].city=city;
		personArray[index].dob=dob;
		personArray[index].gender=ngender;
		personArray[index].nage=nage;
		
		//console.log("adsdfsfdupindex: ",index);
		//console.log("new array:",personArray);
		table();
	}
	
			
function country1()
{
	var select = document.getElementById("country");
	//var optcountry=document.getElementById("optcountry");
	//select.appendChild(optcountry);
	for(var i = 0; i < country.length; i++)
	{
		var opt = country[i].cname;
		var el= document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
		//select.options.add(el);  
		//document.getElementById("u").innerHTML=opt.cname;
		//document.write(opt);
		//select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
	}   
}    
function state1(coname)
{	
	console.log("country :",coname);
	var index=country.findIndex(x => x.cname === coname);
	console.log("country index:",index);
	var conid = country[index].cid;
	console.log("country id:",conid);
	
		var select = document.getElementById("state");
		//var optstate=document.getElementById("optstate");
		while(select.hasChildNodes())
		{
			 select.removeChild(select.firstChild);
		}
		//select.appendChild(optstate);
		for(var i = 0; i < state.length; i++)
		{
		   if(conid==state[i].cid)
		   {
			   var optt = state[i].sname;
			   var el= document.createElement("option");
			   el.textContent = optt;
			   el.value = optt;
			   select.appendChild(el);
		 
				//select.options.add(el);  
				//document.getElementById("u").innerHTML=opt.cname;
				//document.write(opt);
				//select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
		   }
		}   
	
}

function city1(statename)
{
		console.log("state name:",statename);
		var index=state.findIndex(a=>a.sname===statename);
		console.log("index state:",index);
		var stid=state[index].sid;
		console.log("state id:",stid);
	var select = document.getElementById("city");
	//var optcity=document.getElementById("optcity");
	//select.appendChild(optcity);
	while(select.hasChildNodes())
	{
		select.removeChild(select.firstChild);
	}
	for(var i = 0; i < city.length; i++)
	{
		if(stid==city[i].sid)
		{
			var opt = city[i].ciname;
			var el= document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			select.appendChild(el);
		}
	//select.options.add(el);  
	 //document.getElementById("u").innerHTML=opt.cname;
	 //document.write(opt);
	   //select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
	}   
}
	// Validation
	
	var msgletter="contain only Letter!";
	var msgemail="Enter valid email!";
	var msgnull="This field Required!";
	var msgno="Number contain only Digit!";
	
	var letter=/^[A-Za-z][A-za-z ]+$/;
	var txtemail=/\S+@\S+\.\S+/;
	var number=/^[0-9]+$/;
	function firstname(inputtxt)
	{
		if(inputtxt!="")
		{
			if(inputtxt.match(letter))
			{
				document.getElementById("msgfname").innerHTML="";
				return true;
			}
			else
			{
				document.getElementById("msgfname").innerHTML=msgletter;
				return aa;	
			}
		}
		else
		{
			document.getElementById("msgfname").innerHTML=msgnull;
			return aa;
		}
		//console.log("fname get only:",inputtxt);
	}
	function lastname(inputtxt)
	{
		if(inputtxt!="")
		{
			if(inputtxt.match(letter))
			{
				document.getElementById("msglname").innerHTML="";
				return true;
			}
			else
			{
				document.getElementById("msglname").innerHTML=msgletter;
				return aa;
				
			}
		}
		else
		{
			document.getElementById("msglname").innerHTML=msgnull;
			return aa;
		}
		//console.log("fname get only:",inputtxt);
	}
	function valemail(inputtxt)
	{
		if(inputtxt!="")
		{
			if(inputtxt.match(txtemail))
			{
				document.getElementById("msgemail").innerHTML="";
				return true;
			}
			else
			{
				document.getElementById("msgemail").innerHTML=msgemail;
				return aa;	
			}
		}
		else
		{
			document.getElementById("msgemail").innerHTML=msgnull;
			return aa;
		}
		//console.log("fname get only:",inputtxt);
	}
	function valpincod(inputtxt)
	{
		console.log("pincode get only:",inputtxt);
		if(inputtxt!="")
		{
			if(!inputtxt.match(number))
			{
				document.getElementById("msgpin").innerHTML=msgno;
				return aa;
			}
			else if(inputtxt.length!=6)
			{
				document.getElementById("msgpin").innerHTML=" Number Contains 6 Digit!";
				return aa;
			}
			else
			{
				document.getElementById("msgpin").innerHTML="";
				return true;	
			}
		}
		else
		{
			document.getElementById("msgpin").innerHTML=msgnull;
			return aa;
		}
		//console.log("fname get only:",inputtxt);
	}
	function valmobile(inputtxt)
	{
		if(inputtxt=="")
		{
			
			document.getElementById("msgmo").innerHTML=msgnull;
			return aa;
		}
		
		else if(!inputtxt.match(number))
		{
			document.getElementById("msgmo").innerHTML=msgno;
			return aa;
			}
		else
		{
			document.getElementById("msgmo").innerHTML="";
			return true;
		}
		//console.log("fname get only:",inputtxt);
	}
		
function country1()
{
	var select = document.getElementById("country");
	//var optcountry=document.getElementById("optcountry");
	//select.appendChild(optcountry);
	for(var i = 0; i < country.length; i++)
	{
		var opt = country[i].cname;
		var el= document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
		 
		//select.options.add(el);  
		//document.getElementById("u").innerHTML=opt.cname;
		//document.write(opt);
		//select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
	}   
}    
function state1(coname)
{	
	console.log("country :",coname);
	var index=country.findIndex(x => x.cname === coname);
	console.log("country index:",index);
	var conid = country[index].cid;
	console.log("country id:",conid);
	
		var select = document.getElementById("state");
		//var optstate=document.getElementById("optstate");
		while(select.hasChildNodes())
		{
			 select.removeChild(select.firstChild);
		}
		
		//select.appendChild(optstate);
		for(var i = 0; i < state.length; i++)
		{
		   if(conid==state[i].cid)
		   {
			   var optt = state[i].sname;
			   var el= document.createElement("option");
			   el.textContent = optt;
			   el.value = optt;
			   select.appendChild(el);
		   }
		}   
	
}

function city1(statename)
{
	//console.log("state name:",statename);
	var index=state.findIndex(a=>a.sname===statename);
	//console.log("index state:",index);
	var stid=state[index].sid;
	//console.log("state id:",stid);
	var select = document.getElementById("city");
	//var optcity=document.getElementById("optcity");
	//select.appendChild(optcity);
	while(select.hasChildNodes())
	{
		select.removeChild(select.firstChild);
	}
	for(var i = 0; i < city.length; i++)
	{
		if(stid==city[i].sid)
		{
			var opt = city[i].ciname;
			var el= document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			select.appendChild(el);
		}
	}   
}
	