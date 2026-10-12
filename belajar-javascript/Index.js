// let sisaPercobaan = 3;
// while (sisaPercobaan > 0) {
//   console.log(`Login gagal, sisa ${sisaPercobaan} kali`);
//   sisaPercobaan--;
// }

// const daftarNilai = [3.45, 3.82, 3.2, 3.61, 2.95];
// let total = 0;
// for (const nilai of daftarNilai) {
//   total = total + nilai;
// }
// console.log(`Total IPK: ${total}`); // Total IPK: 17.03

// function tambah(nilai1, nilai2){
// //   return nilai1 + nilai2;
// // }

// // console.log(`Hasilnya adalah ${tambah(5, 10)}`);

// const tambah = function(nilai1, nilai2){
//   return nilai1 + nilai2;
// }

// console.log(`Hasilnya adalah ${tambah(5, 10)}`);

// const buah1 = "apel";
// const buah2 = "jeruk";
// const buah3 = "mangga";
// const buah4 = "pisang"; 
// const buah = ["apel", "jeruk", "mangga", "pisang"];

// console.log(`Buah : ${buah[3]}`);
// console.log(`Jumlah buah : ${buah.length}`);

// // const mahasiswa = { 
// //   nim: '2201001', 
// //   nama: 'Budi Santoso', 
// //   ipk: 3.45 
// // };

// // console.log(mahasiswa.nama);
// // console.log(mahasiswa.ipk);

// // const { nim: nimMahasiswa, ipk: ipkMahasiswa } = { 
// //   nim: '2201001', 
// //   nama: 'Budi Santoso', 
// //   ipk: 3.45 
// // };

// // console.log(nimMahasiswa);
// // console.log(ipkMahasiswa);

// // const mahasiswa = [
// //   {
// //     NIM: 2201001,
// //     Nama: "Budi Santoso",
// //     Prodi: "Sistem Informasi",
// //     IPK: 3.45
// //   },
// //   {
// //     NIM: 2201002,
// //     Nama: "Siti Aminah",
// //     Prodi: "Teknik Informatika",
// //     IPK: 3.82
// //   },
// //   {
// //     NIM: 2201003,
// //     Nama: "Agus Wijaya",
// //     Prodi: "Informatika",
// //     IPK: 3.20
// //   },
// //   {
// //     NIM: 2201004,
// //     Nama: "Dewi Lestari",
// //     Prodi: "Rekayasa Perangkat Lunak",
// //     IPK: 3.61
// //   },
// //   {
// //     NIM: 2201005,
// //     Nama: "Rizky Pratama",
// //     Prodi: "Sistem Informasi",
// //     IPK: 2.95
// //   }
// // ];

// // for (let i = 0; i < mahasiswa.length; i++) {
// //   console.log(`Nama : ${mahasiswa[i].Nama}`);
// // }

// mahasiswa.map((mahasiswa) => {
//   console.log(`Nama : ${mahasiswa.Nama} 
//       IPK : ${mahasiswa.IPK}`);
// });

// // ambil data ipk diatas 3.5
// // const ipkTinggi = mahasiswa.filter(
// //   function(mahasiswa){
// //     return mahasiswa.IPK > 3.5;
// //     .map((mahasiswa) => {
// //           console.log(`Nama : ${mahasiswa.Nama} 
// //               IPK : ${mahasiswa.IPK}`);
// //         });
// //   });

// // console.log(ipkTinggi);


// // function grade(nilai) {
// //     if (nilai <= 4 && nilai > 3.5) {
// //         return "Cum Laude (Dengan Pujian)";
// //     } else if (nilai <= 3.5 && nilai > 2.7) {
// //         return "Sangat Memuaskan";
// //     } else if (nilai <= 2.7 && nilai > 2) {
// //         return "Memuaskan";
// //     } else {
// //         return "Tidak memenuhi kategori";
// //     }
// // }

// // console.log(grade(3.8));
// // console.log(grade(3.2));
// // console.log(grade(2.5));

// // mahasiswa.map( mahasiswa => {
// //   // console.log(`Nama : ${mahasiswa.Nama} IPK : ${mahasiswa.IPK}`);
// //   console.log(`Nama : ${mahasiswa.Nama} 
// //       Status: ${predikatKelulusan(mahasiswa.IPK)}`);
// // });

// const { predikatKelulusan } = require("./predikat.js");

// const mahasiswa = [
//     {
//         NIM: 2201001,
//         Nama: "Budi Santoso",
//         Prodi: "Sistem Informasi",
//         IPK: 3.45
//     },
//     {
//         NIM: 2201002,
//         Nama: "Siti Aminah",
//         Prodi: "Teknik Informatika",
//         IPK: 3.82
//     },
//     {
//         NIM: 2201003,
//         Nama: "Agus Wijaya",
//         Prodi: "Informatika",
//         IPK: 3.20
//     },
//     {
//         NIM: 2201004,
//         Nama: "Dewi Lestari",
//         Prodi: "Rekayasa Perangkat Lunak",
//         IPK: 3.61
//     },
//     {
//         NIM: 2201005,
//         Nama: "Rizky Pratama",
//         Prodi: "Sistem Informasi",
//         IPK: 2.95
//     }
// ];

// // const mahasiswaSI = mahasiswa.filter(function(Mahasiswa) {
// //     return Mahasiswa.Prodi === "Sistem Informasi";
// // });

// // console.log(mahasiswaSI);

// mahasiswa.map( mahasiswa => {
//   // console.log(`Nama : ${mahasiswa.Nama} IPK : ${mahasiswa.IPK}`);
//   console.log(`Nama : ${mahasiswa.Nama} 
//       Status: ${predikatKelulusan(mahasiswa.IPK)}`);
// });

// module.exports = {
//     predikatKelulusan
// }

function predikatKelulusan(ipk) {
  if (ipk >= 2.00 && ipk <= 2.75) {
    return "Memuaskan";
  } else if (ipk >= 2.76 && ipk <= 3.50) {
    return "Sangat Memuaskan";
  } else if (ipk >= 3.51 && ipk <= 4.00) {
    return "Cum Laude (Dengan Pujian)";
  } else {
    return "IPK tidak valid";
  }
}

module.exports = {
    predikatKelulusan
}