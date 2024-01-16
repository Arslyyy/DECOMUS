import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Formulir = ({ id, namaPeminjam, nama, author, deskripsi, tanggalMasuk, tanggalKeluar, harga, handleChange, handleSubmit }) => {
  return (
    
    <div className="mt-5" id='form'>
      <Row>
        <Col>
          <h4 id='judul'>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>


            <Row>
              <Col id='kolom'>
                <Form.Group className="mb-3" controlId="namaPeminjam">
                  <Form.Label id='judul'>Nama Peminjam :</Form.Label>
                  <Form.Control type="text" name='namaPeminjam' value={namaPeminjam} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="nama">
                  <Form.Label id='judul'>Nama Buku :</Form.Label>
                  <Form.Control type="text" name='nama' value={nama} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="author">
                  <Form.Label id='judul'>Author :</Form.Label>
                  <Form.Control type="text" name='author' value={author} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label id='judul'>Deskripsi :</Form.Label>
              <Form.Control as='textarea' rows='3' type="text" name='deskripsi' value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Row>
              <Col id='kolomm'>
                <Form.Group className="mb-3" controlId="tanggalMasuk">
                  <Form.Label id='judul'>Tanggal Masuk :</Form.Label>
                  <Form.Control type="date" name='tanggalKeluar' value={tanggalKeluar} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col id='kolomm'>
                <Form.Group className="mb-3" controlId="tanggalKeluar">
                  <Form.Label id='judul'>Tanggal Keluar :</Form.Label>
                  <Form.Control type="date" name='tanggalMasuk' value={tanggalMasuk} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col id='kolomm'>
                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label id='judul'>Harga : </Form.Label>
                  <Form.Control type="number" name='harga' value={harga} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" id='button'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Formulir;