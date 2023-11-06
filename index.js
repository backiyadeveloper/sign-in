function passvalues(){
    var username=document.getElementById('user').value;
    localStorage.setItem("textvalue",username);
    var Admin=document.getElementById("admin").value;
    localStorage.setItem("adminno",Admin);
    var dept=document.getElementById('dept').value;
    localStorage.setItem("department",dept)
    var role=document.getElementById('role').value;
    localStorage.setItem("rolework",role);
    var textarea=document.getElementById('myTextarea').value;
    localStorage.setItem("textaddress",textarea);
    var Bloodgroup=document.getElementById('Bloodgroup').value;
    localStorage.setItem("blood",Bloodgroup);
    }
function storeImage() {
    const input = document.getElementById('image');
    const imageFile = input.files[0]; // Get the selected image file

    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Store the image data in local storage
            localStorage.setItem('userImage', event.target.result);

            // Navigate to the page to display the image
            window.location.href = "id.html";
        };

        // Read the file as a data URL
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please select an image.");
    }
}


