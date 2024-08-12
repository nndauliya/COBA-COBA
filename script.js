// function validasi() 
// {
    
//     // Validasi untuk input email
//     var email = document.getElementById("email").value;
//     var emailRegex = /^\S@\S+\.\S+$/
//     if (email === "" || !emailRegex.test(email))
//     {
//         alert("Email anda belum benar");
//         document.getElementById("email").focus();
//         return false; // Mengentikan pengiriman form
//     }

//     // Validasi untuk input teks
//     var teks = document.forms["formku"]["teks"].value;
//     if (!/^[a-zA-Z]+$/.test(teks))
//     {
//         alert("Data yang diinput harus berupa huruf");
//         document.getElementById("teks").focus();
//         document.formku.teks.value="";
//         return false; // Menghentikan pengiriman form
//     }
    
//     // Validasi untuk input angka
//     var tel = document.forms["formku"]["tel"].value;
//     if (!/^[0-9]+$/.test(tel))
//     {
//         alert("Data yang diinput harus berupa angka");
//         document.getElementById("tel").focus();
//         document.formku.tel.value="";
//         return false; // Menghentikan pengiriman form
//     }
    
    
//      else {
//         alert("Pendaftaran Berhasil");
//     }
// }



function validasi() {
    // Mengambil nilai dari input fields
    var nama = document.forms["fromku"]["nama"].value;
    var email = document.forms["fromku"]["email"].value;
    var telepon = document.forms["fromku"]["telepon"].value;
    var alamat = document.forms["fromku"]["alamat"].value;
    var sekolah = document.forms["fromku"]["sekolah"].value;
    var alasan = document.forms["fromku"]["alasan"].value;

    // Validasi nama lengkap
    if (nama == "") {
        alert("Nama lengkap harus diisi");
        return false;
    }

    // Validasi email
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert("Format email tidak valid");
            return false;
        }
    }

    // Validasi nomor telepon
    if (telepon == "") {
        alert("Nomor telepon harus diisi");
        return false;
    } else {
        var phoneRe = /^[0-9]{10,15}$/;
        if (!phoneRe.test(telepon)) {
            alert("Nomor telepon tidak valid, harus terdiri dari 10-15 angka");
            return false;
        }
    }

    // Validasi alamat
    if (alamat == "") {
        alert("Alamat harus diisi");
        return false;
    }

    // Validasi asal sekolah
    if (sekolah == "") {
        alert("Asal sekolah harus diisi");
        return false;
    }

    // Validasi alasan
    if (alasan == "") {
        alert("Alasan harus diisi");
        return false;
    }

    // Jika semua validasi terpenuhi
    alert("Formulir berhasil disubmit!");
    return true;
}

