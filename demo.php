<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<link rel="stylesheet" href="<?php echo base_url('bootstrap-3.3.7/dist/css/bootstrap.min.css');?>">
 <script type="text/javascript" src="<?php echo base_url('js/location.json');?>">
  <script src="<?php echo base_url('bootstrap-3.3.7/dist/js/bootstrap.min.js');?>"></script>
<script src="<?php echo base_url('bootstrap-3.3.7/js/jquery-1.10.2.js');?>" type="text/javascript"> </script>
<script type="text/javascript" src="<?php echo base_url('bootstrap-3.3.7/js/validate.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('js/myjs.js');?>"></script>

</head>

<body>





<div class="container">
  <h2>Register your Data</h2>
  <form class="form-horizontal" id="myform" name="myform" method="post" >
 <div class="form-group">
     <label class="control-label col-sm-2" for="email"></label>
      <div class="col-sm-2">
      <select name="sel" class="form-control" id="sel">
     
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
       
      </select>
      </div>
   </div>
  
   
    <div class="form-group">
    
      <label class="control-label col-sm-2"  for="usr">FirstName:</label>
      
      <div class="col-sm-4">
        <input type="text" class="form-control" value="" id="fname" placeholder="Enter FirstName" name="fname"><span id="msgfname" style="color:#F00"></span>
        <span id="msgfname"></span>
      </div>
    </div>
    
    
    
    <div class="form-group">
     <label class="control-label col-sm-2" for="usr">LastName:</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="lname" placeholder="Enter LastName" name="lname">
        <span id="msglname" style="color:#F00"></span>
      </div>
    </div>
    
    <div class="form-group">
     <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-4">
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
        <span id="msgemail" style="color:#F00"></span>
      </div>
    </div>
    
    <div class="form-group">
     <label class="control-label col-sm-2" for="usr">Address:</label>
      <div class="col-sm-4">
        <textarea type="text" class="form-control" id="address" placeholder="Enter Address" name="address"></textarea>
      </div>
    </div>
    
    <div class="form-group">
     <label class="control-label col-sm-2" for="email">Pincode:</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="pin" placeholder="Enter Pincode" name="pincode">
        <span id="msgpin" style="color:#F00"></span>
      </div>
    </div>
    
     <div class="form-group">
     <label class="control-label col-sm-2" for="email">Mobile no:</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="mobile" placeholder="Enter Mobile no." name="mobile">
        <span id="msgmo" style="color:#F00"></span>
      </div>
    </div>
    
     <div class="form-group">
     <label class="control-label col-sm-2" for="email">Location:</label>
      <div class="col-sm-2">
      <select name="country" class="form-control" id="country" onchange="state1(this.value);" >
      <option value="Country" id="optcountry">Country</option>
      <script> country1(); </script>
      </select>
      </div>
      <div class="col-sm-2">
        <select  name="state" class="form-control" id="state" onchange="city1(this.value);">
        <option value="State" id="optstate">State</option>
        <script> state1(); </script>
      </select>
      </div>
      <div class="col-sm-2">
        <select name="city" class="form-control" id="city">
       <option value="City" id="optcity">City</option>
        <script> city1(); </script>
      </select>
      </div>
    </div>
    
     <div class="form-group">
     <label class="control-label col-sm-2"  for="usr">Date of Birth:</label>
      <div class="col-sm-4">
        <input type="date" id="dob" name="dob" size="16"   > 
      </div>
    </div>
    
    <div class="form-group">
     	<label class="control-label col-sm-2" for="usr">Gender:</label>
      	<div class="col-sm-1">
      		<label class="radio-inline">
      		<input type="radio" value="Male" id="gender"  name="gender">Male
    		</label>
    	</div>
     	<div class="col-sm-1">
    		<label class="radio-inline">
      		<input type="radio" value="Female" id="gender" name="gender">Female
    		</label>
    	</div>
    </div>
    
     <div class="form-group">
     <label class="control-label col-sm-2" for="usr">Hobby:</label>
     	<div class="col-sm-2">
      		<div class="checkbox">
      			<label><input type="checkbox" id="hobbies" name="hobbies" value="Music">Music</label>
    		</div>
    		<div class="checkbox">
      			<label><input type="checkbox" id="hobbies"  name="hobbies"  value="Games">Games</label>
    		</div>
    		<div class="checkbox ">
      			<label><input type="checkbox"  id="hobbies"  name="hobbies" value="Reading" >Reading</label>
    		</div>
		</div>
    </div>
   
     <div class="form-group">
     <label class="control-label col-sm-2" for="email">Education:</label>
      <div class="col-sm-2">
      <select name="edu" id="edu" class="form-control"   multiple="multiple" >
      
        <option id=""  value="S.S.C.">S.S.C.</option>
        <option  value="H.S.C.">H.S.C.</option>
        <option value="B.C.A.">B.C.A.</option>
        <option value="B.COM">B.COM</option>
        <option value="B.B.A.">B.B.A</option>
        <option value="M.C.A.">M.C.A.</option>
      </select>
      </div>
      </div>
    
  
  
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-6">
        <button type="button" onclick="insert()" id="submit" class="btn btn-default">Submit</button>
        <button type="button" name="update" onclick="updateper(this.value)" value="update"  id="update" class="btn btn-default">Update</button>
        
        <p id="u"></p>
      </div>
    </div>
  </form>
</div>


<div class="container">
  <h2>Table</h2>
                 
  <div class="table-responsive">
          
  <table id="table" class="table table-bordered">
  
    
  </table>

  </div>
  
</div>

<script>
	
</script>


</body>
</html>