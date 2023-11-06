document.getElementById("username").innerHTML=localStorage.getItem("textvalue");
        document.getElementById("Adminno").innerHTML=localStorage.getItem("adminno");
        document.getElementById("Department1").innerHTML=localStorage.getItem("department");
        document.getElementById("role1").innerHTML=localStorage.getItem("rolework");
     // Get the selected file

     // Retrieve the image data from local storage
     const userImage = localStorage.getItem('userImage');

     // Display the retrieved image
     const displayedImage = document.getElementById('image1');
     displayedImage.src = userImage;
     document.getElementById("bloodg").innerHTML=localStorage.getItem("blood");
     document.getElementById("Address").innerHTML=localStorage.getItem("textaddress");