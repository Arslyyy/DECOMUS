import React from 'react'
import { Table} from 'react-bootstrap'
import '../App.css'

const Tabel = ({bukus, editData, hapusData}) => {
    return (
    <div className='table-responsive'>

        <Table striped bordered hover >
            <thead>
            <tr>
                <th>No</th>
                <th>Nama Peminjam</th>
                <th>Nama Buku</th>
                <th>Author</th>
                <th>Deskripsi</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Keluar</th>
                <th>Harga Buku</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
                {bukus.map((buku,index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{buku.namaPeminjam}</td>
                            <td>{buku.nama}</td>
                            <td>{buku.author}</td>
                            <td>{buku.deskripsi}</td>
                            <td>{buku.tanggalMasuk}</td>
                            <td>{buku.tanggalKeluar}</td>
                            <td>{buku.harga}</td>
                            
                            <td>
                                <button className="oren" onClick={() => editData(buku.id) }>Edit</button>
                                <button className="merah" onClick={() => hapusData(buku.id) }>Hapus</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </div>
    )

    }
export default Tabel