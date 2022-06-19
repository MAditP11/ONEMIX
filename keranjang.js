const renderKeranjang = (data) => {
  return `
  <div class="container">

  <div class="row mb-2">
    <div class="col-md">
      <header class="keranjang-header">
        <h3> Keranjang </h3>
        <div class="keranjang-line"></div>
      </header>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-9">
      <div class="card p-1">
        <div class="card-body">
          <table class="table">
            <thead>
              <th width="20%">Gambar</th>
              <th width="50%">Peralatan</th>
              <th width="20%">Harga</th>
              <th><button type="submit" class="btn btn-sm float-end"><i class="fa fa-sync-alt" style="color: gray;"></i></a></th>
            </thead>
            <tbody>
                <tr>
                  <td><img src="url gambar produk" alt="gambar produk" class="custom-img" width="55"></td>
                  <td><p style="margin-top: 12px">nama produk</p></td>
                  <td><p class="prim-color" style="margin-top: 12px">Harga Produk</p></td>
                  <td><a href="" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="col-3">
      <div class="card p-1">
        <div class="card-body">
          <h5 class="card-title mb-4">Ringkasan Harga Barang</h5>
          <table class="table">
            <tbody>
              <tr>
                <td width="54%">Jumlah Barang</td>
                <td>XXXXX</td>
              </tr>
              <tr>
                <td width="54%">Total</td>
                <td>RpXXXXX</td>
              </tr>
            </tbody>
          </table>
          <a href="" class="btn btn-primary my-2 w-100 btn-custom btn-theme">Checkout</a>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
};

window.addEventListener('load', () => {
  fetch('/api/list')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      const listContainer = document.getElementById('keranjang');
      listContainer.innerHTML = result.map(renderKeranjang).join('');
    })
    .catch((error) => {
      console.log(error);
    });
});
