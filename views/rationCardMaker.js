
// // function RationCardMaker() {
// // return `
// // <!DOCTYPE html>
// // <html lang="hi">
// // <head>
// // <meta charset="UTF-8">
// // <meta name="viewport" content="width=device-width, initial-scale=1">
// // <title>Premium PVC Card Maker | Apna Work</title>

// // <style>
// // * {
// //   box-sizing: border-box;
// // }

// // body {
// //   margin: 0;
// //   padding: 24px 12px;
// //   font-family: Arial, sans-serif;
// //   background: #edf2f8;
// //   color: #14243b;
// // }

// // .wrap {
// //   max-width: 1100px;
// //   margin: auto;
// // }

// // .page-title {
// //   text-align: center;
// //   font-size: 27px;
// //   margin: 0 0 6px;
// //   color: #102c52;
// // }

// // .subtitle {
// //   text-align: center;
// //   font-size: 13px;
// //   color: #65758a;
// //   margin-bottom: 25px;
// // }

// // .form {
// //   background: #fff;
// //   border: 1px solid #dbe3ed;
// //   border-radius: 16px;
// //   padding: 24px;
// //   box-shadow: 0 8px 30px #1b365315;
// // }

// // .form h3 {
// //   color: #16375a;
// //   border-bottom: 2px solid #d6aa54;
// //   padding-bottom: 12px;
// //   margin: 0 0 19px;
// // }

// // .grid {
// //   display: grid;
// //   grid-template-columns: repeat(2, minmax(0,1fr));
// //   gap: 15px 20px;
// // }

// // .field label {
// //   display: block;
// //   font-size: 13px;
// //   font-weight: bold;
// //   margin-bottom: 7px;
// //   color: #34455b;
// // }

// // .field input {
// //   width: 100%;
// //   padding: 12px;
// //   border: 1px solid #cbd5e1;
// //   border-radius: 8px;
// //   outline: none;
// //   font-size: 14px;
// //   background: #fcfdff;
// // }

// // .field input:focus {
// //   border-color: #c89d45;
// //   box-shadow: 0 0 0 3px #d6aa5428;
// // }

// // .actions {
// //   margin-top: 22px;
// //   display: flex;
// //   gap: 12px;
// //   flex-wrap: wrap;
// // }

// // button {
// //   border: none;
// //   padding: 13px 22px;
// //   border-radius: 9px;
// //   font-size: 14px;
// //   font-weight: bold;
// //   cursor: pointer;
// // }

// // .print-btn {
// //   background: linear-gradient(135deg,#153c68,#09203c);
// //   color: #fff;
// // }

// // .reset-btn {
// //   background: #e7edf5;
// //   color: #334155;
// // }

// // .note {
// //   margin-top: 17px;
// //   font-size: 12px;
// //   line-height: 1.7;
// //   color: #64748b;
// // }

// // .preview-title {
// //   text-align: center;
// //   font-size: 20px;
// //   margin: 26px 0 16px;
// // }

// // .sheet-holder {
// //   overflow-x: auto;
// // }

// // .sheet {
// //   width: 210mm;
// //   height: 297mm;
// //   padding: 5mm 10mm;
// //   margin: auto;
// //   background: #fff;
// //   box-shadow: 0 8px 30px #0002;
// // }

// // .cards {
// //   width: 190mm;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: flex-start;
// // }

// // /* STANDARD PVC */
// // .pvc-card {
// //   position: relative;
// //   width: 86mm;
// //   height: 54mm;
// //   flex: 0 0 86mm;
// //   overflow: hidden;
// //   border-radius: 3mm;
// //   border: 0.3mm solid #17314d;
// //   -webkit-print-color-adjust: exact;
// //   print-color-adjust: exact;
// // }

// // /* FRONT SIDE */
// // .front {
// //   background: linear-gradient(
// //     145deg,
// //     #fafdff 0%,
// //     #e1eef8 65%,
// //     #c3d6e5 100%
// //   );
// // }

// // .front-top {
// //   background: linear-gradient(
// //     120deg,
// //     #082541,
// //     #164c7b,
// //     #092946
// //   );
// //   height: 12mm;
// //   text-align: center;
// //   padding-top: 1.5mm;
// //   border-bottom: 0.8mm solid #d7ae5a;
// // }

// // .front-top h2 {
// //   margin: 0;
// //   color: #f4d58d;
// //   font-family: Georgia,serif;
// //   font-size: 15px;
// //   letter-spacing: 1px;
// // }

// // .front-top small {
// //   color: #d6e4f0;
// //   font-size: 6px;
// //   letter-spacing: 0.5px;
// // }

// // .front-content {
// //   padding: 2.5mm 3mm 1mm;
// // }

// // .front-row {
// //   display: flex;
// //   gap: 2mm;
// // }

// // .front-info {
// //   flex: 1;
// //   min-width: 0;
// // }

// // .info-line {
// //   margin-bottom: 1.35mm;
// //   font-size: 8px;
// //   line-height: 1.17;
// //   overflow-wrap: anywhere;
// // }

// // .info-label {
// //   display: block;
// //   color: #526779;
// //   font-size: 6px;
// //   font-weight: bold;
// //   margin-bottom: 0.3mm;
// // }

// // .info-value {
// //   display: block;
// //   font-size: 8px;
// //   font-weight: 800;
// //   color: #102944;
// // }

// // .photo-box {
// //   width: 18mm;
// //   height: 22mm;
// //   flex-shrink: 0;
// //   border: 1.5px solid #bc964a;
// //   background: #fff;
// //   border-radius: 1mm;
// //   overflow: hidden;
// // }

// // .photo-box img {
// //   width: 100%;
// //   height: 100%;
// //   display: none;
// //   object-fit: cover;
// // }

// // .photo-placeholder {
// //   height: 100%;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   text-align: center;
// //   color: #789;
// //   font-size: 8px;
// // }

// // .front-bottom {
// //   margin-top: 1.5mm;
// //   border-top: 1px solid #b2c4d4;
// //   padding-top: 1.5mm;
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   column-gap: 2mm;
// //   row-gap: 1mm;
// // }

// // .front-bottom .info-line {
// //   margin: 0;
// // }

// // .front-bottom .wide {
// //   grid-column: 1 / -1;
// // }

// // .front-footer {
// //   position: absolute;
// //   bottom: 0;
// //   left: 0;
// //   width: 100%;
// //   background: #123452;
// //   color: #e2e8f0;
// //   padding: 1.1mm 3mm;
// //   font-size: 5.5px;
// //   display: flex;
// //   justify-content: space-between;
// // }

// // /* PREMIUM BACK SIDE */
// // .back {
// //   background: linear-gradient(
// //     145deg,
// //     #071b32,
// //     #133e63 55%,
// //     #061a31
// //   );
// //   border: 0.35mm solid #cfa85b;
// //   color: #fff;
// //   padding: 2mm;
// // }

// // .back-frame {
// //   height: 100%;
// //   width: 100%;
// //   border: 0.25mm solid #d4ad63;
// //   border-radius: 2mm;
// //   padding: 1.7mm 2.5mm;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: space-between;
// //   gap: 0.6mm;
// //   text-align: center;
// //   overflow: hidden;
// // }

// // .back-brand {
// //   font-family: Georgia,serif;
// //   font-size: 15px;
// //   line-height: 1.1;
// //   font-weight: bold;
// //   letter-spacing: 0.6px;
// //   color: #f2d18a;
// //   margin: 0;
// // }

// // .back-tagline {
// //   font-size: 7px;
// //   color: #e0ebf4;
// //   margin: 0;
// //   line-height: 1.2;
// // }

// // .gold-divider {
// //   width: 70%;
// //   height: 0.25mm;
// //   background: #cfa85b;
// //   flex-shrink: 0;
// // }

// // .back-heading {
// //   margin: 0;
// //   font-size: 8.5px;
// //   font-weight: bold;
// //   color: #ffe2a0;
// //   line-height: 1.2;
// // }

// // .back-sub {
// //   margin: 0;
// //   max-width: 100%;
// //   font-size: 7px;
// //   color: #fff;
// //   line-height: 1.25;
// // }

// // .contact-bar {
// //   width: 95%;
// //   border: 1px solid #c8a45e;
// //   border-radius: 2mm;
// //   padding: 1mm 2mm;
// //   background: #081c32;
// //   font-size: 10px;
// //   font-weight: bold;
// //   color: #ffe3a0;
// //   line-height: 1.15;
// //   white-space: nowrap;
// // }

// // .services {
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   width: 100%;
// //   gap: 1mm 2mm;
// //   text-align: left;
// //   font-size: 7.5px;
// //   font-weight: 700;
// //   color: #f2f6fc;
// //   line-height: 1.2;
// // }

// // .services span {
// //   padding: 0.5mm;
// // }

// // .back-footer {
// //   color: #f1d18a;
// //   font-size: 7px;
// //   line-height: 1.2;
// //   font-weight: bold;
// //   margin: 0;
// // }

// // .back-disclaimer {
// //   font-size: 5.4px;
// //   color: #b7c6d4;
// //   margin: 0;
// // }

// // /* MOBILE */
// // @media(max-width:900px) {
// //   .grid {
// //     grid-template-columns: 1fr;
// //   }

// //   .form {
// //     padding: 17px;
// //   }

// //   .page-title {
// //     font-size: 22px;
// //   }
// // }

// // /* A4 PRINT */
// // @page {
// //   size: A4 portrait;
// //   margin: 0;
// // }

// // @media print {
// //   html, body {
// //     margin: 0 !important;
// //     padding: 0 !important;
// //     background: #fff !important;
// //   }

// //   .form,
// //   .page-title,
// //   .subtitle,
// //   .preview-title {
// //     display: none !important;
// //   }

// //   .wrap {
// //     max-width: none;
// //     margin: 0;
// //   }

// //   .sheet-holder {
// //     overflow: visible;
// //   }

// //   .sheet {
// //     width: 210mm;
// //     height: 297mm;
// //     margin: 0;
// //     padding: 15mm 10mm;
// //     box-shadow: none;
// //     page-break-after: avoid;
// //   }

// //   .pvc-card,
// //   .front,
// //   .back,
// //   .front-top,
// //   .front-footer,
// //   .back-frame,
// //   .contact-bar {
// //     print-color-adjust: exact !important;
// //     -webkit-print-color-adjust: exact !important;
// //   }
// // }
// // </style>
// // </head>

// // <body>
// // <div class="wrap">

// // <h1 class="page-title">
// //   Premium PVC Card Maker
// // </h1>

// // <p class="subtitle">
// //   APNA WORK | Professional Personal Card Printing
// // </p>

// // <div class="form">

// // <h3>कार्ड की जानकारी भरें</h3>

// // <div class="grid">

// // <div class="field">
// // <label>पहला Head of Family</label>
// // <input id="name1" placeholder="Enter Name">
// // </div>

// // <div class="field">
// // <label>Mobile Number</label>
// // <input id="mobile"
// //        maxlength="10"
// //        inputmode="numeric"
// //        placeholder="Enter Mobile Number">
// // </div>

// // <div class="field">
// // <label>पहला Ration Card Number</label>
// // <input id="ration1"
// //        placeholder="Enter Ration Card Number">
// // </div>

// // <div class="field">
// // <label>पहला Aadhaar Number</label>
// // <input id="aadhaar1"
// //        maxlength="12"
// //        inputmode="numeric"
// //        placeholder="12 Digit Aadhaar">
// // </div>

// // <div class="field">
// // <label>दूसरा Head of Family</label>
// // <input id="name2"
// //        placeholder="Enter Second Name">
// // </div>

// // <div class="field">
// // <label>दूसरा Ration Card Number</label>
// // <input id="ration2"
// //        placeholder="Enter Second Ration Card Number">
// // </div>

// // <div class="field">
// // <label>दूसरा Aadhaar Number</label>
// // <input id="aadhaar2"
// //        maxlength="12"
// //        inputmode="numeric"
// //        placeholder="12 Digit Aadhaar">
// // </div>

// // <div class="field">
// // <label>फोटो अपलोड करें</label>
// // <input id="photoInput"
// //        type="file"
// //        accept="image/*">
// // </div>

// // <div class="field">
// // <label>Shop Name</label>
// // <input id="shopName" value="APNA WORK">
// // </div>

// // <div class="field">
// // <label>Shop Contact Number</label>
// // <input id="shopMobile"
// //        value="9142264714"
// //        maxlength="10"
// //        inputmode="numeric">
// // </div>

// // </div>

// // <div class="actions">

// // <button class="print-btn"
// //         type="button"
// //         onclick="window.print()">
// //   🖨 Print / Save PDF
// // </button>

// // <button class="reset-btn"
// //         type="button"
// //         onclick="resetFields()">
// //   Reset Form
// // </button>

// // </div>

// // <p class="note">
// //   A4 Portrait | PVC 86 × 54mm |
// //   Print Scale 100% | Background Graphics ON
// // </p>

// // </div>

// // <h3 class="preview-title">
// //   A4 Premium Print Preview
// // </h3>

// // <div class="sheet-holder">
// // <div class="sheet">
// // <div class="cards">

// // <!-- FRONT CARD -->
// // <div class="pvc-card front">

// // <div class="front-top">
// // <h2>RATION CARD</h2>
// // <small>PERSONAL REFERENCE CARD</small>
// // </div>

// // <div class="front-content">

// // <div class="front-row">

// // <div class="front-info">

// // <div class="info-line">
// // <span class="info-label">HEAD OF FAMILY</span>
// // <span class="info-value" id="vname1">—</span>
// // </div>

// // <div class="info-line">
// // <span class="info-label">MOBILE NUMBER</span>
// // <span class="info-value" id="vmobile">—</span>
// // </div>

// // <div class="info-line">
// // <span class="info-label">RATION CARD NUMBER</span>
// // <span class="info-value" id="vration1">—</span>
// // </div>

// // <div class="info-line">
// // <span class="info-label">AADHAAR NUMBER</span>
// // <span class="info-value" id="vaadhaar1">—</span>
// // </div>

// // </div>

// // <div class="photo-box">
// // <img id="vphoto" alt="Holder Photo">
// // <div class="photo-placeholder" id="photoPlaceholder">
// // PHOTO
// // </div>
// // </div>

// // </div>

// // <div class="front-bottom">

// // <div class="info-line">
// // <span class="info-label">SECOND FAMILY HEAD</span>
// // <span class="info-value" id="vname2">—</span>
// // </div>

// // <div class="info-line">
// // <span class="info-label">AADHAAR NUMBER</span>
// // <span class="info-value" id="vaadhaar2">—</span>
// // </div>

// // <div class="info-line wide">
// // <span class="info-label">RATION CARD NUMBER</span>
// // <span class="info-value" id="vration2">—</span>
// // </div>

// // </div>

// // </div>

// // <div class="front-footer">
// // <span>PERSONAL REFERENCE COPY</span>
// // <span>Not a Government-Issued Card</span>
// // </div>

// // </div>

// // <!-- BACK CARD -->
// // <div class="pvc-card back">

// // <div class="back-frame">

// // <h2 class="back-brand" id="vshopName">
// // APNA WORK
// // </h2>

// // <p class="back-tagline">
// // Premium PVC Card Printing Service
// // </p>

// // <div class="gold-divider"></div>

// // <p class="back-heading">
// // आपका भरोसा, हमारी पहचान
// // </p>

// // <p class="back-sub">
// // शानदार डिजाइन और बेहतरीन फिनिश के साथ
// // अपना पर्सनल कार्ड बनवाएँ।
// // </p>

// // <div class="contact-bar">
// // ☎ <span id="vshopMobile">9142264714</span>
// // </div>

// // <div class="services">
// // <span>✓ PVC कार्ड</span>
// // <span>✓ फोटो कार्ड</span>
// // <span>✓ आईडी कार्ड</span>
// // <span>✓ कस्टम डिजाइन</span>
// // </div>

// // <div class="gold-divider"></div>

// // <p class="back-footer">
// // आज ही संपर्क करें!<br>
// // Premium Quality • Beautiful Finish
// // </p>

// // <p class="back-disclaimer">
// // Personal printing service • Not an official ID
// // </p>

// // </div>
// // </div>

// // </div>
// // </div>
// // </div>

// // </div>

// // <script>
// // (function() {

// //   const idList = [
// //     'name1',
// //     'mobile',
// //     'ration1',
// //     'aadhaar1',
// //     'name2',
// //     'ration2',
// //     'aadhaar2',
// //     'shopName',
// //     'shopMobile'
// //   ];

  
// // function maskAadhaar(value) {
// //   const digits = String(value || '')
// //     .replace(/\D/g, '');

// //   return digits.length === 12
// //     ? digits.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')
// //     : '—';
// // }


// //   function update() {
// //     idList.forEach(function(id) {
// //       const input = document.getElementById(id);
// //       const output = document.getElementById('v' + id);

// //       if (!input || !output) return;

// //       let value = input.value.trim();

// //       if (id.startsWith('aadhaar')) {
// //         value = maskAadhaar(value);
// //       }

// //       output.textContent = value || '—';
// //     });
// //   }

// //   idList.forEach(function(id) {
// //     const input = document.getElementById(id);

// //     if (input) {
// //       input.addEventListener('input', update);
// //     }
// //   });

// //   document.getElementById('photoInput')
// //     .addEventListener('change', function(event) {

// //       const file = event.target.files[0];
// //       if (!file) return;

// //       if (!file.type.startsWith('image/')) {
// //         alert('कृपया सही फोटो चुनें।');
// //         this.value = '';
// //         return;
// //       }

// //       const reader = new FileReader();

// //       reader.onload = function() {
// //         const photo = document.getElementById('vphoto');
// //         const placeholder =
// //           document.getElementById('photoPlaceholder');

// //         photo.src = reader.result;
// //         photo.style.display = 'block';
// //         placeholder.style.display = 'none';
// //       };

// //       reader.readAsDataURL(file);
// //     });

// //   window.resetFields = function() {

// //     idList.forEach(function(id) {
// //       const input = document.getElementById(id);
// //       if (input) input.value = '';
// //     });

// //     document.getElementById('photoInput').value = '';

// //     const photo = document.getElementById('vphoto');
// //     photo.removeAttribute('src');
// //     photo.style.display = 'none';

// //     document.getElementById('photoPlaceholder')
// //       .style.display = 'flex';

// //     document.getElementById('shopName').value =
// //       'APNA WORK';

// //     document.getElementById('shopMobile').value =
// //       '9142264714';

// //     update();
// //   };

// //   update();

// // })();
// // </script>

// // </body>
// // </html>
// // `;
// // }

// // module.exports = RationCardMaker;



// function RationCardMaker() {
// return `
// <!DOCTYPE html>
// <html lang="hi">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width,initial-scale=1">
// <title>Premium Ration PVC Card Maker</title>

// <style>
// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   padding: 20px;
//   background: #edf2f8;
//   font-family: Arial, sans-serif;
//   color: #172b45;
// }

// .wrap {
//   max-width: 1100px;
//   margin: auto;
// }

// .page-title {
//   text-align: center;
//   margin: 0 0 6px;
//   color: #10365b;
//   font-size: 27px;
// }

// .subtitle {
//   text-align: center;
//   color: #64748b;
//   margin-bottom: 23px;
// }

// .form {
//   background: white;
//   padding: 23px;
//   border-radius: 14px;
//   box-shadow: 0 5px 25px #0001;
// }

// .form h3 {
//   margin-top: 0;
//   padding-bottom: 12px;
//   border-bottom: 2px solid #cba35a;
// }

// .grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 15px 20px;
// }

// .field label {
//   display: block;
//   font-size: 13px;
//   font-weight: 700;
//   margin-bottom: 6px;
// }

// .field input {
//   width: 100%;
//   padding: 11px;
//   border: 1px solid #cbd5e1;
//   border-radius: 8px;
//   font-size: 14px;
//   outline: none;
// }

// .field input:focus {
//   border-color: #cba35a;
// }

// .actions {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-top: 20px;
// }

// button {
//   border: 0;
//   border-radius: 8px;
//   padding: 12px 20px;
//   cursor: pointer;
//   font-weight: bold;
// }

// .print-btn {
//   background: #103c68;
//   color: white;
// }

// .reset-btn {
//   background: #e2e8f0;
//   color: #334155;
// }

// .note {
//   font-size: 12px;
//   color: #64748b;
//   line-height: 1.6;
// }

// .preview-title {
//   text-align: center;
//   margin: 25px 0 15px;
// }

// /* A4 PREVIEW */

// .sheet-holder {
//   overflow-x: auto;
// }

// .sheet {
//   width: 210mm;
//   height: 297mm;
//   padding: 5mm 10mm 0;
//   margin: auto;
//   background: white;
//   box-shadow: 0 7px 28px #0002;
// }

// .cards {
//   width: 190mm;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// }

// /* PVC SIZE */

// .pvc-card {
//   width: 86mm;
//   height: 54mm;
//   flex: 0 0 86mm;
//   position: relative;
//   overflow: hidden;
//   border-radius: 2.5mm;
//   border: 0.3mm solid #bd9850;
//   print-color-adjust: exact;
//   -webkit-print-color-adjust: exact;
// }

// /* FRONT */

// .front {
//   background: linear-gradient(
//     145deg,
//     #ffffff,
//     #e7f0f9,
//     #c5d9e9
//   );
// }

// .front-top {
//   height: 12mm;
//   text-align: center;
//   padding-top: 1.5mm;
//   background: linear-gradient(
//     120deg,
//     #071c33,
//     #17517e,
//     #092a4b
//   );
//   border-bottom: 0.8mm solid #d9b36a;
// }

// .front-top h2 {
//   margin: 0;
//   font-size: 15px;
//   color: #f5d68e;
//   letter-spacing: 1px;
//   font-family: Georgia, serif;
// }

// .front-top small {
//   font-size: 6px;
//   color: #e0eaf5;
// }

// .front-content {
//   padding: 2mm 2.6mm 0;
// }

// .front-row {
//   display: flex;
//   gap: 1.8mm;
// }

// .front-info {
//   flex: 1;
//   min-width: 0;
// }

// .info-line {
//   margin-bottom: 1.15mm;
//   overflow-wrap: anywhere;
// }

// .info-label {
//   display: block;
//   font-size: 5.8px;
//   color: #536779;
//   font-weight: 700;
//   margin-bottom: 0.25mm;
// }

// .info-value {
//   display: block;
//   font-size: 8px;
//   font-weight: 800;
//   color: #0e2945;
//   line-height: 1.15;
// }

// .photo-box {
//   width: 18mm;
//   height: 22mm;
//   flex: none;
//   border: 1.5px solid #bf984e;
//   background: white;
//   border-radius: 1mm;
//   overflow: hidden;
// }

// .photo-box img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: none;
// }

// .photo-placeholder {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #94a3b8;
//   font-size: 8px;
// }

// .front-bottom {
//   margin-top: 1.1mm;
//   padding-top: 1mm;
//   border-top: 1px solid #b9c9d6;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1mm 2mm;
// }

// .front-bottom .info-line {
//   margin: 0;
// }

// .front-bottom .wide {
//   grid-column: 1 / -1;
// }

// .front-footer {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   background: #103553;
//   color: white;
//   padding: 1mm 2.5mm;
//   font-size: 5.3px;
//   display: flex;
//   justify-content: space-between;
//   gap: 2mm;
// }

// /* PREMIUM BACK */

// .back {
//   background: linear-gradient(
//     145deg,
//     #06182e,
//     #17476d,
//     #071c34
//   );
//   padding: 1.5mm;
//   color: white;
// }

// .back-frame {
//   width: 100%;
//   height: 100%;
//   border: 0.25mm solid #d7ae62;
//   border-radius: 2mm;
//   padding: 1.5mm 2mm;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   gap: 0.4mm;
//   text-align: center;
//   overflow: hidden;
// }

// .back-brand {
//   margin: 0;
//   font-family: Georgia, serif;
//   font-size: 15px;
//   line-height: 1.1;
//   color: #f7d58b;
//   letter-spacing: 0.5px;
//   overflow-wrap: anywhere;
// }

// .back-tagline {
//   font-size: 7px;
//   color: #e2ebf5;
//   margin: 0;
//   line-height: 1.2;
// }

// .gold-divider {
//   height: 0.25mm;
//   width: 75%;
//   background: #cda55b;
//   flex: none;
// }

// .back-heading {
//   margin: 0;
//   font-size: 9px;
//   color: #ffe0a0;
//   line-height: 1.2;
//   font-weight: bold;
// }

// .back-sub {
//   font-size: 7px;
//   margin: 0;
//   color: #f8fafc;
//   line-height: 1.2;
// }

// .contact-bar {
//   width: 95%;
//   background: #06182c;
//   color: #ffe3a0;
//   border: 1px solid #d1ab67;
//   border-radius: 2mm;
//   padding: 0.9mm 2mm;
//   font-size: 10px;
//   font-weight: bold;
//   line-height: 1.2;
//   white-space: nowrap;
// }

// .services {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1mm 2mm;
//   width: 100%;
//   text-align: left;
//   padding: 0 2mm;
//   font-size: 7.5px;
//   font-weight: bold;
//   line-height: 1.2;
// }

// .back-footer {
//   margin: 0;
//   font-size: 7px;
//   line-height: 1.2;
//   color: #f4d38d;
//   font-weight: bold;
// }

// .back-disclaimer {
//   margin: 0;
//   font-size: 5.2px;
//   color: #cbd5e1;
//   line-height: 1.1;
// }

// /* MOBILE */

// @media screen and (max-width:900px) {
//   .grid {
//     grid-template-columns: 1fr;
//   }

//   .form {
//     padding: 15px;
//   }
// }

// /* FINAL A4 PRINT */

// @page {
//   size: A4 portrait;
//   margin: 0;
// }

// @media print {

//   html,
//   body {
//     width: 210mm !important;
//     margin: 0 !important;
//     padding: 0 !important;
//     background: white !important;
//   }

//   .page-title,
//   .subtitle,
//   .form,
//   .preview-title {
//     display: none !important;
//   }

//   .wrap {
//     width: 210mm !important;
//     max-width: none !important;
//     margin: 0 !important;
//     padding: 0 !important;
//   }

//   .sheet-holder {
//     width: 210mm !important;
//     margin: 0 !important;
//     padding: 0 !important;
//     overflow: visible !important;
//   }

//   .sheet {
//     width: 210mm !important;
//     height: 297mm !important;
//     padding: 5mm 10mm 0 !important;
//     margin: 0 !important;
//     box-shadow: none !important;
//     break-after: avoid !important;
//   }

//   .cards {
//     width: 190mm !important;
//     display: flex !important;
//     justify-content: space-between !important;
//     align-items: flex-start !important;
//   }

//   .pvc-card {
//     width: 86mm !important;
//     height: 54mm !important;
//     flex: 0 0 86mm !important;
//     break-inside: avoid !important;
//   }

//   .pvc-card,
//   .front,
//   .back,
//   .front-top,
//   .front-footer,
//   .back-frame,
//   .contact-bar {
//     print-color-adjust: exact !important;
//     -webkit-print-color-adjust: exact !important;
//   }
// }
// </style>
// </head>

// <body>

// <div class="wrap">

// <h1 class="page-title">
// Premium Ration PVC Card Maker
// </h1>

// <p class="subtitle">
// APNA WORK | Premium Personal Card Printing
// </p>

// <div class="form">

// <h3>कार्ड की जानकारी भरें</h3>

// <div class="grid">

// <div class="field">
// <label>First Head of Family</label>
// <input id="name1" placeholder="Enter Name">
// </div>

// <div class="field">
// <label>Mobile Number</label>
// <input id="mobile" maxlength="10"
// inputmode="numeric" placeholder="Mobile Number">
// </div>

// <div class="field">
// <label>First Ration Card Number</label>
// <input id="ration1" placeholder="Ration Number">
// </div>

// <div class="field">
// <label>First Aadhaar Number</label>
// <input id="aadhaar1" maxlength="12"
// inputmode="numeric" placeholder="12 Digit Aadhaar">
// </div>

// <div class="field">
// <label>Second Head of Family</label>
// <input id="name2" placeholder="Second Name">
// </div>

// <div class="field">
// <label>Second Ration Card Number</label>
// <input id="ration2" placeholder="Ration Number">
// </div>

// <div class="field">
// <label>Second Aadhaar Number</label>
// <input id="aadhaar2" maxlength="12"
// inputmode="numeric" placeholder="12 Digit Aadhaar">
// </div>

// <div class="field">
// <label>Photo Upload</label>
// <input id="photoInput" type="file" accept="image/*">
// </div>

// <div class="field">
// <label>Shop Name</label>
// <input id="shopName" value="APNA WORK">
// </div>

// <div class="field">
// <label>Shop Mobile Number</label>
// <input id="shopMobile" value="9142264714"
// maxlength="10" inputmode="numeric">
// </div>

// </div>

// <div class="actions">

// <button type="button" class="print-btn"
// onclick="window.print()">
// 🖨 Print / Save PDF
// </button>

// <button type="button" class="reset-btn"
// onclick="resetFields()">
// Reset Form
// </button>

// </div>

// <p class="note">
// A4 Portrait | Top 5mm | Left-Right 10mm |
// PVC 86 × 54mm | Scale 100% |
// Background Graphics ON
// </p>

// </div>

// <h3 class="preview-title">
// A4 Premium Print Preview
// </h3>

// <div class="sheet-holder">
// <div class="sheet">
// <div class="cards">

// <!-- FRONT -->

// <div class="pvc-card front">

// <div class="front-top">
// <h2>RATION CARD</h2>
// <small>PERSONAL REFERENCE CARD</small>
// </div>

// <div class="front-content">

// <div class="front-row">

// <div class="front-info">

// <div class="info-line">
// <span class="info-label">HEAD OF FAMILY</span>
// <span class="info-value" id="vname1">—</span>
// </div>

// <div class="info-line">
// <span class="info-label">MOBILE NUMBER</span>
// <span class="info-value" id="vmobile">—</span>
// </div>

// <div class="info-line">
// <span class="info-label">RATION CARD NUMBER</span>
// <span class="info-value" id="vration1">—</span>
// </div>

// <div class="info-line">
// <span class="info-label">AADHAAR NUMBER</span>
// <span class="info-value" id="vaadhaar1">—</span>
// </div>

// </div>

// <div class="photo-box">

// <img id="vphoto" alt="Photo">

// <div class="photo-placeholder"
// id="photoPlaceholder">
// PHOTO
// </div>

// </div>

// </div>

// <div class="front-bottom">

// <div class="info-line">
// <span class="info-label">SECOND FAMILY HEAD</span>
// <span class="info-value" id="vname2">—</span>
// </div>

// <div class="info-line">
// <span class="info-label">AADHAAR NUMBER</span>
// <span class="info-value" id="vaadhaar2">—</span>
// </div>

// <div class="info-line wide">
// <span class="info-label">RATION CARD NUMBER</span>
// <span class="info-value" id="vration2">—</span>
// </div>

// </div>

// </div>

// <div class="front-footer">
// <span>PERSONAL REFERENCE COPY</span>
// <span>Not Government Issued</span>
// </div>

// </div>

// <!-- BACK -->

// <div class="pvc-card back">

// <div class="back-frame">

// <h2 class="back-brand" id="vshopName">
// GLOBAL SERVICES
// </h2>

// <p class="back-tagline">
// Premium PVC Card Printing Service
// </p>

// <div class="gold-divider"></div>

// <p class="back-heading">
// आपका भरोसा, हमारी पहचान
// </p>

// <p class="back-sub">
// शानदार डिजाइन और बेहतरीन फिनिश के साथ<br>
// अपना पर्सनल कार्ड बनवाएँ।
// </p>

// <div class="contact-bar">
// ☎ <span id="vshopMobile">9142264714</span>
// </div>

// <div class="services">
// <span>✓ PVC कार्ड</span>
// <span>✓ फोटो कार्ड</span>
// <span>✓ आईडी कार्ड</span>
// <span>✓ कस्टम डिजाइन</span>
// </div>

// <div class="gold-divider"></div>

// <p class="back-footer">
// आज ही संपर्क करें!<br>
// Premium Quality • Beautiful Finish
// </p>

// <p class="back-disclaimer">
// Personal printing service • Not an official ID
// </p>

// </div>
// </div>

// </div>
// </div>
// </div>
// </div>

// <script>
// (function() {

// const fields = [
//   'name1',
//   'mobile',
//   'ration1',
//   'aadhaar1',
//   'name2',
//   'ration2',
//   'aadhaar2',
//   'shopName',
//   'shopMobile'
// ];

// function onlyDigits(value) {
//   return String(value || '')
//     .split('')
//     .filter(function(char) {
//       return char >= '0' && char <= '9';
//     })
//     .join('');
// }

// function formatAadhaar(value) {
//   const digits = onlyDigits(value);

//   if (digits.length !== 12) return '—';

//   return digits.slice(0,4) + ' ' +
//          digits.slice(4,8) + ' ' +
//          digits.slice(8,12);
// }

// function update() {

//   fields.forEach(function(id) {

//     const input = document.getElementById(id);
//     const output = document.getElementById('v' + id);

//     if (!input || !output) return;

//     let value = input.value.trim();

//     if (id.startsWith('aadhaar')) {
//       value = formatAadhaar(value);
//     }

//     output.textContent = value || '—';

//   });

// }

// fields.forEach(function(id) {
//   const input = document.getElementById(id);

//   if (input) {
//     input.addEventListener('input', update);
//   }
// });

// ['aadhaar1','aadhaar2'].forEach(function(id) {
//   const input = document.getElementById(id);

//   input.addEventListener('input', function() {
//     input.value = onlyDigits(input.value).slice(0,12);
//     update();
//   });
// });

// const photoInput = document.getElementById('photoInput');

// photoInput.addEventListener('change', function(event) {

//   const file = event.target.files[0];
//   if (!file) return;

//   if (!file.type.startsWith('image/')) {
//     alert('कृपया सही फोटो चुनें।');
//     photoInput.value = '';
//     return;
//   }

//   const reader = new FileReader();

//   reader.onload = function() {
//     const photo = document.getElementById('vphoto');

//     photo.src = reader.result;
//     photo.style.display = 'block';

//     document.getElementById('photoPlaceholder')
//       .style.display = 'none';
//   };

//   reader.readAsDataURL(file);

// });

// window.resetFields = function() {

//   fields.forEach(function(id) {
//     document.getElementById(id).value = '';
//   });

//   document.getElementById('shopName').value = 'GLOBAL SERVICES';
//   document.getElementById('shopMobile').value = '9142264714';

//   photoInput.value = '';

//   const photo = document.getElementById('vphoto');
//   photo.removeAttribute('src');
//   photo.style.display = 'none';

//   document.getElementById('photoPlaceholder')
//     .style.display = 'flex';

//   update();
// };

// update();

// })();
// </script>

// </body>
// </html>
// `;
// }

// module.exports = RationCardMaker;




function RationCardMaker() {
return `
<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Premium Ration Card Maker - GLOBAL SERVICES</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px;
  background: #edf2f7;
  color: #182d46;
  font-family: Arial, sans-serif;
}

.wrap {
  max-width: 1100px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #123c66;
  margin-bottom: 5px;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
}

.form {
  background: #ffffff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 6px 25px #0001;
}

.form h3 {
  border-bottom: 2px solid #d1a75d;
  padding-bottom: 12px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.field label {
  display: block;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 6px;
}

.field input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}

.field input:focus {
  outline: none;
  border-color: #d1a75d;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

button {
  border: none;
  border-radius: 9px;
  padding: 13px 22px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.print-btn {
  background: #123f69;
  color: white;
}

.reset-btn {
  background: #e2e8f0;
  color: #334155;
}

.note {
  color: #64748b;
  font-size: 12px;
  line-height: 1.6;
}

.preview-title {
  text-align: center;
  margin: 25px 0 15px;
}

/* A4 PORTRAIT PAPER */

.sheet-holder {
  overflow-x: auto;
  padding-bottom: 8px;
}

.sheet {
  width: 210mm;
  height: 297mm;
  margin: auto;
  padding: 5mm 6mm 0;
  background: #fff;
  box-shadow: 0 5px 25px #0002;
}

/* FRONT LEFT - BACK RIGHT */

.cards {
  width: 198mm;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4mm;
}

/* CARD SIZE 97 x 65 MM */

.pvc-card {
  position: relative;
  width: 97mm;
  height: 65mm;
  flex: 0 0 97mm;
  overflow: hidden;
  border: 0.3mm solid #cba25a;
  border-radius: 3mm;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

/* FRONT DESIGN */

.front {
  background: linear-gradient(
    145deg,
    #ffffff,
    #e5eff8,
    #c6ddec
  );
}

.front-top {
  height: 16mm;
  background: linear-gradient(
    120deg,
    #071b32,
    #174d79,
    #092842
  );
  border-bottom: 0.7mm solid #d9b36a;
  padding: 1.5mm 3mm;
}

.front-top-inner {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 3mm;
}

.front-logo {
  height: 12mm;
  width: 12mm;
  flex: 0 0 12mm;
  border-radius: 50%;
  border: 1px solid #d9b36a;
  background: #fff;
  object-fit: contain;
}

.front-title {
  flex: 1;
  text-align: center;
}

.front-title h2 {
  margin: 0;
  color: #f5d68e;
  font-family: Georgia, serif;
  font-size: 18px;
  letter-spacing: 1px;
}

.front-title small {
  color: #e2ebf5;
  font-size: 7px;
  letter-spacing: 0.5px;
}

.front-content {
  padding: 4mm 3.5mm 2mm;
}

.front-row {
  display: flex;
  gap: 3mm;
}

.front-info {
  flex: 1;
  min-width: 0;
}


/* BIG AND BOLD CARD TEXT */

.info-line {
  margin-bottom: 2.5mm;
}

.info-label {
  display: block;
  font-size: 11px;
  font-weight: 900;
  color: #102c49;
  margin-bottom: 0.7mm;
  line-height: 1.2;
  text-transform: uppercase;
}

.info-value {
  display: block;
  font-size: 13px;
  font-weight: 800;
  color: #071c33;
  line-height: 1.2;
  overflow-wrap: anywhere;
}


.photo-box {
  width: 23mm;
  height: 29mm;
  flex: 0 0 23mm;
  border: 1.5px solid #b8934e;
  border-radius: 1mm;
  background: #fff;
  overflow: hidden;
}

.photo-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
}

.photo-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 9px;
}

.front-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #123854;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 2mm;
  padding: 1.3mm 3mm;
  font-size: 6px;
}

/* PREMIUM BACK DESIGN */

.back {
  background: linear-gradient(
    145deg,
    #06172b,
    #17446a,
    #071a31
  );
  padding: 1.7mm;
  color: #fff;
}

.back-frame {
  width: 100%;
  height: 100%;
  border: 0.3mm solid #d6ac62;
  border-radius: 2.3mm;
  padding: 1.7mm 2.5mm;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5mm;
  text-align: center;
  overflow: hidden;
}

.back-logo {
  width: 13mm;
  height: 13mm;
  flex-shrink: 0;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #d9b36a;
  object-fit: contain;
}

.back-brand {
  color: #f5d68e;
  font-family: Georgia, serif;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.15;
  margin: 0;
  overflow-wrap: anywhere;
}

.back-tagline {
  margin: 0;
  color: #e2ebf5;
  font-size: 7px;
}

.gold-line {
  height: 0.25mm;
  width: 70%;
  background: #d6ac62;
  flex-shrink: 0;
}

.back-heading {
  margin: 0;
  font-size: 9px;
  color: #ffe0a0;
  line-height: 1.2;
}

.back-sub {
  margin: 0;
  font-size: 7px;
  line-height: 1.2;
}

.contact-bar {
  width: 95%;
  background: #071a31;
  color: #ffe0a0;
  border: 1px solid #d6ac62;
  border-radius: 2mm;
  padding: 0.9mm 2mm;
  font-size: 10px;
  font-weight: bold;
}

.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 0.8mm 2mm;
  padding: 0 3mm;
  font-size: 7px;
  font-weight: bold;
  text-align: left;
}

.back-footer {
  margin: 0;
  color: #f5d68e;
  font-size: 7px;
  line-height: 1.2;
  font-weight: bold;
}

.disclaimer {
  font-size: 5.5px;
  color: #d5dfeb;
  margin: 0;
}

/* DOWNLOAD BUTTON BELOW PAPER */

.download-section {
  text-align: center;
  padding: 20px 0 30px;
}

.download-btn {
  padding: 15px 32px;
  background: linear-gradient(
    135deg,
    #0c8052,
    #075137
  );
  color: white;
  border-radius: 10px;
  font-size: 15px;
  box-shadow: 0 5px 16px #07513730;
}

.download-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

/* MOBILE */

@media screen and (max-width:900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .form {
    padding: 16px;
  }
}

/* FINAL PRINT */

@page {
  size: A4 portrait;
  margin: 0;
}

@media print {
  html, body {
    width: 210mm !important;
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }

  h1,
  .subtitle,
  .form,
  .preview-title,
  .download-section {
    display: none !important;
  }

  .wrap,
  .sheet-holder {
    width: 210mm !important;
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: visible !important;
  }

  .sheet {
    width: 210mm !important;
    height: 297mm !important;
    padding: 5mm 6mm 0 !important;
    margin: 0 !important;
    box-shadow: none !important;
  }

  .cards {
    width: 198mm !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    gap: 4mm !important;
  }

  .pvc-card {
    width: 97mm !important;
    height: 65mm !important;
    flex: 0 0 97mm !important;
    break-inside: avoid !important;
  }

  .pvc-card,
  .front,
  .back,
  .front-top,
  .front-footer,
  .back-frame,
  .contact-bar {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }
}
</style>

</head>
<body>

<div class="wrap">

<h1>Premium Ration Card Maker</h1>

<p class="subtitle">
GLOBAL SERVICES | Premium Personal Card Printing
</p>

<!-- INPUT FORM -->

<div class="form">

<h3>कार्ड की जानकारी भरें</h3>

<div class="grid">

<div class="field">
<label>Head of Family Name</label>
<input id="name1" placeholder="Enter Full Name">
</div>

<div class="field">
<label>Mobile Number</label>
<input id="mobile"
       maxlength="10"
       inputmode="numeric"
       placeholder="10 Digit Mobile">
</div>

<div class="field">
<label>Ration Card Number</label>
<input id="ration1"
       placeholder="Enter Ration Card Number">
</div>

<div class="field">
<label>Aadhaar Number</label>
<input id="aadhaar1"
       maxlength="12"
       inputmode="numeric"
       placeholder="12 Digit Aadhaar">
</div>

<div class="field">
<label>Photo Upload</label>
<input id="photoInput" type="file" accept="image/*">
</div>

<div class="field">
<label>Shop Name</label>
<input id="shopName" value="APNA WORK">
</div>

<div class="field">
<label>Shop Mobile Number</label>
<input id="shopMobile"
       value="9142264714"
       maxlength="10"
       inputmode="numeric">
</div>

</div>

<div class="actions">

<button type="button"
        class="print-btn"
        onclick="window.print()">
🖨 Print / Save PDF
</button>

<button type="button"
        class="reset-btn"
        onclick="resetFields()">
Reset Form
</button>

</div>

<p class="note">
A4 Portrait | Front Left | Back Right |
97 × 65mm | Top 5mm | Left/Right 6mm |
Gap 4mm | Print Scale 100%
</p>

</div>

<h3 class="preview-title">
A4 Premium Print Preview
</h3>

<!-- A4 PAPER -->

<div class="sheet-holder">

<div class="sheet" id="a4Sheet">

<div class="cards">

<!-- FRONT CARD -->

<div class="pvc-card front">

<div class="front-top">

<div class="front-top-inner">


<img
  src="/images/apna-work-logo.png"
  alt="APNA WORK Logo"
  class="front-logo"
>


<div class="front-title">
<h2>RATION CARD</h2>
<small>PERSONAL REFERENCE CARD</small>
</div>

</div>
</div>

<div class="front-content">

<div class="front-row">

<div class="front-info">

<div class="info-line">
<span class="info-label">HEAD OF FAMILY</span>
<span class="info-value" id="vname1">—</span>
</div>

<div class="info-line">
<span class="info-label">MOBILE NUMBER</span>
<span class="info-value" id="vmobile">—</span>
</div>

<div class="info-line">
<span class="info-label">RATION CARD NUMBER</span>
<span class="info-value" id="vration1">—</span>
</div>

<div class="info-line">
<span class="info-label">AADHAAR NUMBER</span>
<span class="info-value" id="vaadhaar1">—</span>
</div>

</div>

<div class="photo-box">

<img id="vphoto" alt="Holder Photo">

<div id="photoPlaceholder"
     class="photo-placeholder">
PHOTO
</div>

</div>
</div>
</div>

<div class="front-footer">

<span>PERSONAL REFERENCE COPY</span>
<span>NOT GOVERNMENT ISSUED</span>

</div>
</div>

<!-- BACK CARD -->

<div class="pvc-card back">

<div class="back-frame">


<img
  src="/images/apna-work-logo.png"
  alt="APNA WORK Logo"
  class="front-logo"
>


<h2 class="back-brand" id="vshopName">
GLOBAL SERVICES
</h2>

<p class="back-tagline">
Premium PVC Card Printing Service
</p>

<div class="gold-line"></div>

<p class="back-heading">
आपका भरोसा, हमारी पहचान
</p>

<p class="back-sub">
शानदार डिजाइन और बेहतरीन फिनिश के साथ<br>
अपना पर्सनल कार्ड बनवाएँ।
</p>

<div class="contact-bar">
☎ <span id="vshopMobile">9142264714</span>
</div>

<div class="services">
<span>✓ PVC कार्ड</span>
<span>✓ फोटो कार्ड</span>
<span>✓ आईडी कार्ड</span>
<span>✓ कस्टम डिजाइन</span>
</div>

<div class="gold-line"></div>

<p class="back-footer">
आज ही संपर्क करें!<br>
Premium Quality • Beautiful Finish
</p>

<p class="disclaimer">
Personal printing service • Not an official ID
</p>

</div>
</div>

</div>
</div>
</div>

<!-- DOWNLOAD BELOW A4 PAPER -->

<div class="download-section">

<button type="button"
        id="downloadPdfBtn"
        class="download-btn"
        onclick="downloadA4PDF()">
⬇ Download A4 PDF
</button>

</div>

</div>

<!-- PDF LIBRARIES -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
(function() {

  const fields = [
    'name1',
    'mobile',
    'ration1',
    'aadhaar1',
    'shopName',
    'shopMobile'
  ];

  function onlyDigits(value) {
    return String(value || '')
      .split('')
      .filter(function(char) {
        return char >= '0' && char <= '9';
      })
      .join('');
  }

  function formatAadhaar(value) {
    const digits = onlyDigits(value);

    if (digits.length !== 12) {
      return '—';
    }

    return digits.slice(0,4) + ' ' +
           digits.slice(4,8) + ' ' +
           digits.slice(8,12);
  }

  function update() {

    fields.forEach(function(id) {

      const input = document.getElementById(id);
      const output = document.getElementById('v' + id);

      if (!input || !output) return;

      let value = input.value.trim();

      if (id === 'aadhaar1') {
        value = formatAadhaar(value);
      }

      output.textContent = value || '—';

    });

  }

  fields.forEach(function(id) {
    const input = document.getElementById(id);

    if (input) {
      input.addEventListener('input', update);
    }
  });

  /* AADHAAR INPUT */

  const aadhaarInput =
    document.getElementById('aadhaar1');

  aadhaarInput.addEventListener('input', function() {
    this.value = onlyDigits(this.value).slice(0,12);
    update();
  });

  /* PHOTO UPLOAD */

  const photoInput =
    document.getElementById('photoInput');

  photoInput.addEventListener('change', function(event) {

    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('कृपया सही फोटो चुनें।');
      photoInput.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = function() {
      const photo = document.getElementById('vphoto');

      photo.src = reader.result;
      photo.style.display = 'block';

      document.getElementById('photoPlaceholder')
        .style.display = 'none';
    };

    reader.readAsDataURL(file);

  });

  /* RESET */

  window.resetFields = function() {

    fields.forEach(function(id) {
      document.getElementById(id).value = '';
    });

    document.getElementById('shopName').value =
      'GLOBAL SERVICES';

    document.getElementById('shopMobile').value =
      '9142264714';

    photoInput.value = '';

    const photo = document.getElementById('vphoto');

    photo.removeAttribute('src');
    photo.style.display = 'none';

    document.getElementById('photoPlaceholder')
      .style.display = 'flex';

    update();
  };

  /* DOWNLOAD A4 PDF */

  window.downloadA4PDF = async function() {

    const btn =
      document.getElementById('downloadPdfBtn');

    const sheet =
      document.getElementById('a4Sheet');

    if (!window.html2canvas || !window.jspdf) {
      alert('PDF Library Load नहीं हुई। Internet Check करें।');
      return;
    }

    btn.disabled = true;
    btn.textContent = 'PDF बन रहा है...';

    try {

      if (document.fonts) {
        await document.fonts.ready;
      }

      const images = Array.from(
        sheet.querySelectorAll('img')
      );

      await Promise.all(
        images.filter(function(img) {
          return !img.complete;
        }).map(function(img) {
          return new Promise(function(resolve) {
            img.addEventListener('load', resolve, {
              once: true
            });
            img.addEventListener('error', resolve, {
              once: true
            });
          });
        })
      );

      const canvas = await html2canvas(sheet, {
        scale: 3,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
        width: sheet.scrollWidth,
        height: sheet.scrollHeight,
        windowWidth: Math.max(
          document.documentElement.scrollWidth,
          1100
        )
      });

      const image = canvas.toDataURL('image/png');

      const pdf = new window.jspdf.jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      pdf.addImage(
        image,
        'PNG',
        0,
        0,
        210,
        297
      );

      pdf.save('Ration-Card-A4.pdf');

    } catch (error) {

      console.error('PDF Error:', error);
      alert('PDF Download Failed. फिर से प्रयास करें।');

    } finally {

      btn.disabled = false;
      btn.textContent = '⬇ Download A4 PDF';

    }

  };

  update();

})();
</script>

</body>
</html>
`;
}

module.exports = RationCardMaker;
