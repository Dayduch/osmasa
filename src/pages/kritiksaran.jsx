import Navbar from "../components/navbar";

function KritikSaran() {
  return (
    <>
      <Navbar />
      <div class="container mt-5">
        <h2>Kirim Kritik Dan Saran Anda</h2>
        <form action="proses_email.php" method="post">
          <div class="mb-3">
            <label for="nama" class="form-label">
              Nama Anda:
            </label>
            <input
              type="text"
              class="form-control"
              id="nama"
              name="nama"
              required
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Alamat Email Anda:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
            />
          </div>

          <div class="mb-3">
            <label for="pesan" class="form-label">
              Pesan:
            </label>
            <textarea
              class="form-control"
              id="pesan"
              name="pesan"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Kirim
          </button>
        </form>
      </div>
    </>
  );
}

export default KritikSaran