db.mobil.insertMany([
  {
    "_id": "CAR001",
    "Merek": "Toyota",
    "Nama_Mobil": "Toyota Avanza",
    "Harga_Jt": 250,
    "Konsumsi_bbm_km": {
      "a": 12,
      "b": 14,
      "c": 16
    },
    "Tenaga": {
      "min": 98,
      "max": 106,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR002",
    "Merek": "Toyota",
    "Nama_Mobil": "Toyota Rush",
    "Harga_Jt": 275,
    "Konsumsi_bbm_km": {
      "a": 11,
      "b": 13,
      "c": 15
    },
    "Tenaga": {
      "min": 104,
      "max": 104,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR003",
    "Merek": "Honda",
    "Nama_Mobil": "Honda Jazz",
    "Harga_Jt": 270,
    "Konsumsi_bbm_km": {
      "a": 14,
      "b": 16,
      "c": 17
    },
    "Tenaga": {
      "min": 120,
      "max": 120,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR004",
    "Merek": "Honda",
    "Nama_Mobil": "Honda BR-V",
    "Harga_Jt": 290,
    "Konsumsi_bbm_km": {
      "a": 13,
      "b": 14,
      "c": 16
    },
    "Tenaga": {
      "min": 121,
      "max": 121,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR005",
    "Merek": "Suzuki",
    "Nama_Mobil": "Suzuki Ertiga",
    "Harga_Jt": 230,
    "Konsumsi_bbm_km": {
      "a": 14,
      "b": 16,
      "c": 17
    },
    "Tenaga": {
      "min": 104,
      "max": 104,
      "tipe": "solar"
    }
  },
  {
    "_id": "CAR006",
    "Merek": "Daihatsu",
    "Nama_Mobil": "Daihatsu Terios",
    "Harga_Jt": 240,
    "Konsumsi_bbm_km": {
      "a": 13,
      "b": 14,
      "c": 16
    },
    "Tenaga": {
      "min": 103,
      "max": 103,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR007",
    "Merek": "Nissan",
    "Nama_Mobil": "Nissan Livina",
    "Harga_Jt": 220,
    "Konsumsi_bbm_km": {
      "a": 12,
      "b": 13,
      "c": 15
    },
    "Tenaga": {
      "min": 105,
      "max": 105,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR008",
    "Merek": "Mazda",
    "Nama_Mobil": "Mazda 2",
    "Harga_Jt": 300,
    "Konsumsi_bbm_km": {
      "a": 13,
      "b": 15,
      "c": 16
    },
    "Tenaga": {
      "min": 108,
      "max": 108,
      "tipe": "bensin"
    }
  },
  {
    "_id": "CAR009",
    "Merek": "Ford",
    "Nama_Mobil": "Ford Ranger",
    "Harga_Jt": 280,
    "Konsumsi_bbm_km": {
      "a": 12,
      "b": 13,
      "c": 14
    },
    "Tenaga": {
      "min": 123,
      "max": 123,
      "tipe": "solar"
    }
  },
  {
    "_id": "CAR010",
    "Merek": "Hyundai",
    "Nama_Mobil": "Hyundai Creta",
    "Harga_Jt": 320,
    "Konsumsi_bbm_km": {
      "a": 13,
      "b": 14,
      "c": 15
    },
    "Tenaga": {
      "min": 115,
      "max": 115,
      "tipe": "bensin"
    }
  }
]);


db.ratingPenjualan.insertMany([
  {
    "_id": "RAT001",
    "Rating": 4.5,
    "Keamanan": {
     "a": "4 Star",
     "b": "Global NCAP",
     "c": "2024"
    },
    "Penjualan_2024": 19000
  },
  {
    "_id": "RAT002",
    "Rating": 4.4,
    "Keamanan": {
     "a": "4 Star",
     "b": "ASEAN NCAP",
    },
    "Penjualan_2024": 17000
  },
  {
    "_id": "RAT003",
    "Rating": 4.7,
    "Keamanan": {
     "a": "5 Star",
     "b": "Global NCAP",
     "c": "2024"
    },
    "Penjualan_2024": 18500
  },
  {
    "_id": "RAT004",
    "Rating": 4.6,
    "Keamanan": {
     "a": "5 Star",
     "b": "ASEAN NCAP",
    },
    "Penjualan_2024": 16000
  },
  {
    "_id": "RAT005",
    "Rating": 4.3,
    "Keamanan": {
     "a": "4 Star",
     "b": "JNCAP",
    },
    "Penjualan_2024": 11800 
  },
  {
    "_id": "RAT006",
    "Rating": 4.2,
    "Keamanan": {
     "a": "3 Star",
     "b": "ASEAN NCAP",
    },
    "Penjualan_2024": 11950
  },
  {
    "_id": "RAT007",
    "Rating": 4.3,
    "Keamanan": {
     "a": "3 Star",
     "b": "Global NCAP",
    },
    "Penjualan_2024": 8500
  },
  {
    "_id": "RAT008",
    "Rating": 4.5,
    "Keamanan": {
     "a": "4 Star",
     "b": "JNCAP",
     "c": "2023"
    },
    "Penjualan_2024": 9700
  },
  {
    "_id": "RAT009",
    "Rating": 4.3,
    "Keamanan": {
     "a": "3 Star",
     "b": "NCAP",
    },
    "Penjualan_2024": 8900
  },
  {
    "_id": "RAT010",
    "Rating": 4.6,
    "Keamanan": {
     "a": "5 Star",
     "b": "ASEAN NCAP",
     "c": "2024"
    },
    "Penjualan_2024": 14400
  }
]);