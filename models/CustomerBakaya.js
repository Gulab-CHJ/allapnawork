
// // const mongoose = require("mongoose");

// // const EntrySchema = new mongoose.Schema({
// //   type: {
// //     type: String,
// //     enum: ["DUE", "PAID"],
// //     required: true
// //   },
// //   amount: { type: Number, required: true, min: 0.01 },
// //   reason: { type: String, default: "" },
// //   date: { type: Date, default: Date.now }
// // }, { _id: true });

// // const CustomerBakayaSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   phoneLast4: {
// //     type: String,
// //     required: true,
// //     match: /^\d{4}$/
// //   },
// //   aadhaarLast4: {
// //     type: String,
// //     required: true,
// //     match: /^\d{4}$/
// //   },
// //   pinHash: { type: String, required: true },
// //   entries: [EntrySchema]
// // }, { timestamps: true });

// // module.exports = mongoose.model(
// //   "CustomerBakaya",
// //   CustomerBakayaSchema
// // );



// const mongoose = require("mongoose");

// const EntrySchema = new mongoose.Schema({
//   type: {
//     type: String,
//     enum: ["DUE", "PAID"],
//     required: true
//   },
//   amount: {
//     type: Number,
//     required: true,
//     min: 0.01
//   },
//   reason: {
//     type: String,
//     trim: true,
//     default: ""
//   },
//   date: {
//     type: Date,
//     required: true,
//     default: Date.now
//   },
//   paymentMode: {
//     type: String,
//     enum: ["CASH", "UPI", "BANK", "OTHER"],
//     default: "CASH"
//   }
// });

// const CustomerBakayaSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   phone: {
//     type: String,
//     required: true,
//     match: /^\d{10}$/
//   },
//   phoneLast4: {
//     type: String,
//     required: true,
//     match: /^\d{4}$/
//   },
//   aadhaarLast4: {
//     type: String,
//     required: true,
//     match: /^\d{4}$/
//   },
//   publicReference: {
//     type: String,
//     unique: true,
//     sparse: true,
//     select: false
//   },
//   entries: {
//     type: [EntrySchema],
//     default: []
//   },
//   active: {
//     type: Boolean,
//     default: true
//   }
// }, {
//   timestamps: true
// });

// CustomerBakayaSchema.pre("validate", function () {
//   if (/^\d{10}$/.test(this.phone || "")) {
//     this.phoneLast4 = this.phone.slice(-4);
//   }
// });

// CustomerBakayaSchema.virtual("totalDue").get(function () {
//   return this.entries
//     .filter(x => x.type === "DUE")
//     .reduce((sum, x) => sum + x.amount, 0);
// });

// CustomerBakayaSchema.virtual("totalPaid").get(function () {
//   return this.entries
//     .filter(x => x.type === "PAID")
//     .reduce((sum, x) => sum + x.amount, 0);
// });

// CustomerBakayaSchema.virtual("balance").get(function () {
//   return this.totalDue - this.totalPaid;
// });

// CustomerBakayaSchema.set("toJSON", {
//   virtuals: true,
//   transform(doc, ret) {
//     delete ret.phone;
//     delete ret.publicReference;
//     delete ret.pinHash;
//     return ret;
//   }
// });

// module.exports = mongoose.models.CustomerBakaya ||
//   mongoose.model("CustomerBakaya", CustomerBakayaSchema);




const mongoose = require("mongoose");

// ======================================
// CUSTOMER PAYMENT HISTORY SCHEMA
// ======================================

const EntrySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["DUE", "PAID"],
      required: true
    },

    amount: {
      type: Number,
      required: true,
      min: 0.01
    },

    reason: {
      type: String,
      trim: true,
      default: ""
    },

    date: {
      type: Date,
      required: true,
      default: Date.now
    },

    paymentMode: {
      type: String,
      enum: ["CASH", "UPI", "BANK", "OTHER"],
      default: "CASH"
    }
  },
  {
    _id: true
  }
);

// ======================================
// CUSTOMER BAKAYA MAIN SCHEMA
// ======================================

const CustomerBakayaSchema = new mongoose.Schema(
  {
    // Customer Name
    name: {
      type: String,
      required: true,
      trim: true
    },

    // Full 10-digit Mobile Number
    phone: {
      type: String,
      required: true,
      match: /^\d{10}$/
    },

    // Mobile Last 4 Digits
    phoneLast4: {
      type: String,
      required: true,
      match: /^\d{4}$/
    },

    // Aadhaar Last 4 Digits Only
    aadhaarLast4: {
      type: String,
      required: true,
      match: /^\d{4}$/
    },

    // Unique Private Customer Link
    publicReference: {
      type: String,
      unique: true,
      sparse: true,
      select: false
    },

    // Public Balance Visibility
    publicBalanceVisible: {
      type: Boolean,
      default: false
    },

    // Due and Paid Payment History
    entries: {
      type: [EntrySchema],
      default: []
    },

    // Customer Active Status
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// ======================================
// AUTO GENERATE MOBILE LAST 4 DIGITS
// ======================================

CustomerBakayaSchema.pre("validate", function () {
  if (/^\d{10}$/.test(this.phone || "")) {
    this.phoneLast4 = this.phone.slice(-4);
  }
});

// ======================================
// TOTAL DUE / TOTAL BILL
// ======================================

CustomerBakayaSchema.virtual("totalDue").get(
  function () {
    return (this.entries || [])
      .filter(entry => entry.type === "DUE")
      .reduce(
        (sum, entry) => sum + Number(entry.amount || 0),
        0
      );
  }
);

// ======================================
// TOTAL PAID AMOUNT
// ======================================

CustomerBakayaSchema.virtual("totalPaid").get(
  function () {
    return (this.entries || [])
      .filter(entry => entry.type === "PAID")
      .reduce(
        (sum, entry) => sum + Number(entry.amount || 0),
        0
      );
  }
);

// ======================================
// REMAINING BAKAYA
// ======================================

CustomerBakayaSchema.virtual("balance").get(
  function () {
    return this.totalDue - this.totalPaid;
  }
);

// ======================================
// MASKED MOBILE NUMBER
// ======================================

CustomerBakayaSchema.virtual("maskedPhone").get(
  function () {
    return "******" + (this.phoneLast4 || "****");
  }
);

// ======================================
// MASKED AADHAAR NUMBER
// ======================================

CustomerBakayaSchema.virtual("maskedAadhaar").get(
  function () {
    return "XXXX-XXXX-" + (this.aadhaarLast4 || "****");
  }
);

// ======================================
// JSON SECURITY
// ======================================

CustomerBakayaSchema.set("toJSON", {
  virtuals: true,

  transform(doc, ret) {
    delete ret.phone;
    delete ret.publicReference;
    delete ret.pinHash;
    delete ret.__v;

    return ret;
  }
});

// ======================================
// EXPORT MODEL
// ======================================

module.exports =
  mongoose.models.CustomerBakaya ||
  mongoose.model(
    "CustomerBakaya",
    CustomerBakayaSchema
  );
