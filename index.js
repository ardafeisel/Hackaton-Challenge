//contoh output ketika submit button dipencet
// {
//   nomorResi: 'ABC001'
//   namaPengirim: 'Joni',
//   namaPenerima: 'Jono',
//   alamatPenerima: 'Gang Buntu',
//   beratBarang: '5', //dalam satuan kg
//   estimasiJarak: '3', //dalam satuan km
//   lamaPengiriman: '1', //dalam satuan hari
//   ongkir: '15000' //dalam satuan Rp
// }

document.getElementById('submit').addEventListener('click', submit)

let penampungData = []

function submit() {
  const daftarKotaTujuan = {
    Jakarta: 5,
    Bogor: 42,
    Depok: 12,
    Tangerang: 13,
    Bekasi: 17,
    Bandung: 115
  }

  let namaPengirim = document.getElementById('namaPengirim').value
  let namaPenerima = document.getElementById('namaPenerima').value
  let alamatPenerima = document.getElementById('alamatPenerima').value
  let kotaPengirim = document.getElementById('kotaPengirim').value
  let kotaTujuan = document.getElementById('kotaTujuan').value
  let beratBarang = document.getElementById('beratBarang').value
  let opsiKirim = document.getElementById('opsiKirim').value
  let lamaPengiriman = 0
  let ongkir = 0
  let jarak = 0

  //penentuan jarak
  for (let key in daftarKotaTujuan) {
    if (key === kotaTujuan) {
      jarak = daftarKotaTujuan[key]
    }
  }

  //penentuan lama pengiriman
  if (opsiKirim === 'xpress') {
    lamaPengiriman = 1
  } else if (opsiKirim === 'regular') {
    lamaPengiriman = 3
  }

  //penentuan ongkir
  //ongkos per km = Rp 500
  //kalau Xpress ditambah Rp 20000
  //kalau berat barang diatas 5kg ditambah 15000
  //kalau berat barang diatas 10kg ditambah 30000
  if (lamaPengiriman === 1) {
    if (beratBarang > 10) {
      ongkir = (500 * jarak) + 20000 + 30000
    } else if (beratBarang > 5) {
      ongkir = (500 * jarak) + 20000 + 15000
    } else {
      ongkir = (500 * jarak) + 20000
    }
  } else if (lamaPengiriman === 3) {
    if (beratBarang > 10) {
      ongkir = (500 * jarak) + 30000
    } else if (beratBarang > 5) {
      ongkir = (500 * jarak) + 15000
    } else {
      ongkir = 500 * jarak
    }
  }

  //penentuan nomor resi
  let nomorResi = 'DNTRN'
  let randomNum = Math.ceil(Math.random()*100)
  if (randomNum.toString().length === 1) {
    nomorResi += '00'
  } else if (randomNum.toString.length === 2) {
    nomorResi += '0'
  }
  nomorResi += randomNum

  let result = {
    nomorResi,
    namaPengirim,
    namaPenerima,
    alamatPenerima,
    kotaPengirim,
    kotaTujuan,
    beratBarang,
    jarak,
    lamaPengiriman,
    ongkir
  }
  console.log(result);
  penampungData.push(result)

  if (result.kotaPengirim === result.kotaTujuan) {
    alert(`Order pengiriman di dalam kota telah diterima!
    Nomor resi: ${result.nomorResi}
    Estimasi lama pengiriman: ${result.lamaPengiriman} hari
    Ongkos kirim: ${result.ongkir}`)
  } else {
    alert(`Order pengiriman barang dari ${result.kotaPengirim} ke ${result.kotaTujuan} telah diterima!
    Nomor resi: ${result.nomorResi}
    Estimasi lama pengiriman: ${result.lamaPengiriman} hari
    Ongkos kirim: ${result.ongkir}`)
  }

  let k = '<tbody>'
  k+= "<tr>";
  for (let i = 0; i < penampungData.length; i++) {
  k+= "<td>" + penampungData[i].nomorResi + "</td>";
  k+= "<td>" + penampungData[i].namaPengirim + "</td>";
  k+= "<td>" + penampungData[i].namaPenerima + "</td>";
  k+= "<td>" + penampungData[i].alamatPenerima + "</td>";
  k+= "<td>" + penampungData[i].kotaPengirim + "</td>";
  k+= "<td>" + penampungData[i].kotaTujuan + "</td>";
  k+= "<td>" + penampungData[i].beratBarang + "</td>";
  k+= "<td>" + penampungData[i].lamaPengiriman + "</td>";
  k+= "<td>" + penampungData[i].ongkir + "</td>";
  k+= "</tr>"
  }
  k+= "</tbody>"
  document.getElementById("tableData").innerHTML = k
}

