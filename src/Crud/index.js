import React, { Component } from 'react'
import NavbarComponent from './navbarcomponent'
import Tabel from './tabel'
import Formulir from './formulir'

export default class Cruds extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bukus : [],
      namaPeminjam: "",
      nama: "",
      author: "",
      deskripsi : "",
      tanggalMasuk: "",
      tanggalKeluar: "", 
      harga : "", 
      id : "",
    }
  }

  handleChange = (event) =>  {
    this.setState ({
      [event.target.name] : event.target.value  
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      id,
      bukus,
      namaPeminjam,
      nama,
      author,
      deskripsi,
      tanggalMasuk,
      tanggalKeluar,
      harga,
    } = this.state;
    
    if(id === "")
      this.setState({
        bukus: [
          ...bukus,
          {
            id: bukus.length + 1,
            namaPeminjam,
            nama,
            author,
            deskripsi,
            tanggalMasuk,
            tanggalKeluar,
            harga,
          },  
        ],
      });
    else {
        const bukuYangDipilih = bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => {
          return filterBuku
        });

        this.setState({
          bukus: [
            ...bukuYangDipilih,
            {
              id: bukus.length + 1,
              namaPeminjam,
              nama,
              author,
              deskripsi,
              tanggalMasuk,
              tanggalKeluar,
              harga,
            },  
          ],
        });
    }

    this.setState({
      namaPeminjam: "",
      nama: "",
      author: "",
      deskripsi : "",
      tanggalMasuk: "",
      tanggalKeluar: "", 
      harga : "0", 
      id : "",
    });
    
  };

  editData = (id) => {
    const bukuYangDipilih = this.state.bukus
    .filter((buku) => buku.id === id)
    .map((filterBuku) => {
      return filterBuku
    })

    this.setState({
      namaPeminjam: bukuYangDipilih[0].namaPeminjam,
      nama: bukuYangDipilih[0].nama,
      author: bukuYangDipilih[0].author,
      deskripsi: bukuYangDipilih[0].deskripsi,
      tanggalMasuk: bukuYangDipilih[0].tanggalMasuk,
      tanggalKeluar: bukuYangDipilih[0].tanggalKeluar,
      harga: bukuYangDipilih[0].harga,
      id: bukuYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
    .filter((buku) => buku.id !== id)
    .map((filterBuku) => filterBuku);

    this.setState({
      bukus : bukuBaru
    })
  }

  render() {
    console.log(this.state.bukus);
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-4'> 
        <Tabel bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
        <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
