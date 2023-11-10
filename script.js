function Login(){
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "mabim" && password == "mabim"){
        if(confirm("Apakah anda ingin login?") == true){
            window.open("https://github.com/vigiapriliansyah"); //sudah nyoba pake windows.location.href tetap gak bisa kebuka jadi saya ganti jadi window.open
        }else{
            alert("Login ditolak");
        }
    }else{
        if(done == 0){
            alert("Username/Password salah")
        }
    }
}

function Kembali(){
    window.location.href = "index.html"
}