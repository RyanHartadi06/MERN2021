const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama Pemilik Harus Di Isi"],
  },
  nameBank: {
    type: String,
    require: [true, "Nama Bank Harus Di Isi"],
  },
  noRekening: {
    type: String,
    require: [true, "Nomor Rekening Bank Harus Di isi"],
  },
});

module.exports = mongoose.model("Bank", bankSchema);