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



function submit(e) {
  e.preventDefault()
  const daftarKotaTujuan = {
    jakarta: 5,
    bogor: 42,
    depok: 12,
    tangerang: 13,
    bekasi: 17,
    bandung: 115
  }

  let namaPengirim = document.getElementById('namaPengirim').value
  let namaPenerima = document.getElementById('namaPenerima').value
  let alamatPenerima = document.getElementById('alamatPenerima').value
  let kotaTujuan = document.getElementById('kotaTujuan')
  let beratBarang = document.getElementById('beratBarang').value
  let opsiPengiriman = document.getElementById('opsiPengiriman').value
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
  if (opsiPengiriman === 'Xpress') {
    lamaPengiriman = 1
  } else if (opsiPengiriman === 'Regular') {
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
    beratBarang,
    jarak,
    lamaPengiriman,
    ongkir
  }
  console.log(result);
  return result
}
