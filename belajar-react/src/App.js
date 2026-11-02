import logo from './logo.svg';
import KartuMahasiswa from './components/ProfilMahasiswa';
import { useState } from "react";

function Counter(){
  // const count = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
      {mahasiswa.map((mhs) => (
        <KartuMahasiswa
          nama={mhs.nama}
          nim={mhs.nim}
          program_studi={mhs.program_studi}
        />
      ))}
    </div>
  );
}

function KartuMahasiswa(props = {}) {

   return (
     <div>
       <p>Nama: {nama}</p>
       <p>NIM: {nim}</p>
       <p>Program Studi: {program_studi}</p>
       <p>Semester: {semester}</p>
     </div>
   )
}
// function App(){
//   return (
//     <div>
//       <ProfilMahasiswa 
//         nama="Kina"
//         nim="2422114016"
//         program_studi="Sistem Informasi"
//         semester="5"
//       />

//       <ProfilMahasiswa 
//         nama="Dipad"
//         nim="2422121717"
//         program_studi="Teknik Informatika"
//         semester="5"
//       />

//       <ProfilMahasiswa 
//         nama="Tiara"
//         nim="2422114010"
//         program_studi="Sistem Informasi"
//         semester="5"
//       />
//     </div>
//   )
// }

export default App;