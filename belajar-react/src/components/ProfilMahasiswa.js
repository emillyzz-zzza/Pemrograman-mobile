// function ProfilMahasiswa({nama, nim, program_studi, semester}) {
//   const bluetext = {color: "blue"};

//    return (
//      <div>
//        <p style={{color: "pink"}}>Nama: {nama}</p>
//        <p style={{color: "yellow"}}>NIM: {nim}</p>
//        <p>Program Studi: {program_studi}</p>
//        <p>Semester: {semester}</p>
//      </div>
//    )
// }

function KartuMahasiswa(props = {}) {

   return (
     <div>
       <p style={{color: "pink"}}>Nama: {props.nama}</p>
       <p style={{color: "yellow"}}>NIM: {props.nim}</p>
       <p>Program Studi: {props.program_studi}</p>
       <p>Semester: {props.semester}</p>
     </div>
   )
}

export default KartuMahasiswa;