import Navbar from "../components/navbar";

function Proker() {
    return (
        <>
        <Navbar/>
        <div>
            <h2>Program Kerja</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bidang</th>
                        <th>Tujuan Program</th>
                        <th>Nama Program</th>
                        <th>Sasaran</th>
                        <th>Penanggung Jawab</th>
                        <th>Waktu</th>
                        <th>Biaya</th>
                        <th>Terlaksana</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Personal</td>
                        <td>Agar siswa dan siswi madrasah lebih cepat mengetahui informasi dll</td>
                        <td>Pembuatan Website Osis</td>
                        <td>Warga Madrasah</td>
                        <td>Alzam</td>
                        <td>Secepatnya</td>
                        <td>Swadanya</td>
                        <td>Belum</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Proker;