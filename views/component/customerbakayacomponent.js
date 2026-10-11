
// module.exports = function CustomerBakayaSection(
//   customers = []
// ) {
//   const esc = v => String(v ?? "")
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");

//   const money = n => "₹" + Number(n || 0).toFixed(2);

//   const visibleCustomers = Array.isArray(customers)
//   ? customers.filter(c =>
//       c.active !== false &&
//       c.publicBalanceVisible === true
//     )
//   : [];

// const rows = visibleCustomers.map((c, i) => {
//     const due = (c.entries || [])
//       .filter(e => e.type === "DUE")
//       .reduce((s, e) => s + Number(e.amount || 0), 0);

//     const paid = (c.entries || [])
//       .filter(e => e.type === "PAID")
//       .reduce((s, e) => s + Number(e.amount || 0), 0);

//     return `
//       <tr data-search="${esc(c.phoneLast4)} ${esc(c.aadhaarLast4)}">
//         <td>${i + 1}</td>
//         <td>******${esc(c.phoneLast4)}</td>
//         <td>XXXX-XXXX-${esc(c.aadhaarLast4)}</td>
//         <td>${money(due)}</td>
//         <td style="color:green">${money(paid)}</td>
//         <td style="color:#dc2626">
//           ${money(Math.max(0, due - paid))}
//         </td>
//       </tr>
//     `;
//   }).join("");

//   return `
//   <section id="customer-bakaya-home" style="
//     max-width:1100px;
//     margin:25px auto;
//     padding:20px;
//     background:white;
//     border:1px solid #d1e7dc;
//     border-radius:18px;
//     font-family:Arial,sans-serif;
//   ">
//     <h2 style="color:#065f46">
//       GLOBAL SERVICES – बकाया भुगतान
//     </h2>

//     <p>मोबाइल या आधार के आखिरी 4 अंक से हिसाब देखें।</p>

//     <a href="/customer-bakaya" style="
//       display:inline-block;
//       padding:13px 22px;
//       background:#047857;
//       color:white;
//       border-radius:10px;
//       text-decoration:none;
//       font-weight:bold;
//     ">₹ Check My Payment</a>

//     <h3 style="margin-top:25px">
//       All Customers
//     </h3>

//     <input
//       id="bakayaHomeSearch"
//       type="search"
//       maxlength="4"
//       inputmode="numeric"
//       placeholder="Search Last 4 Digits"
//       style="
//         width:100%;
//         padding:13px;
//         border:1px solid #cbd5e1;
//         border-radius:10px;
//         margin-bottom:15px;
//       "
//     >

//     <div style="overflow-x:auto">
//       <table style="
//         width:100%;
//         border-collapse:collapse;
//         min-width:670px;
//         text-align:left;
//       ">
//         <thead style="background:#ecfdf5">
//           <tr>
//             <th>S.No.</th>
//             <th>Mobile</th>
//             <th>Aadhaar</th>
//             <th>Total Due</th>
//             <th>Total Paid</th>
//             <th>Bakaya</th>
//           </tr>
//         </thead>

//         <tbody id="bakayaHomeRows">
//           ${rows || `
//             <tr><td colspan="6">
//               No Customer Found
//             </td></tr>
//           `}
//         </tbody>
//       </table>
//     </div>
//   </section>

//   <script>
//     (function() {
//       const search = document.getElementById("bakayaHomeSearch");
//       const rows = document.querySelectorAll(
//         "#bakayaHomeRows tr[data-search]"
//       );

//       if (!search) return;

//       search.addEventListener("input", function() {
//         const term = this.value.replace(/\\D/g, "").slice(0,4);
//         this.value = term;

//         rows.forEach(row => {
//           row.style.display =
//             row.dataset.search.includes(term) ? "" : "none";
//         });
//       });
//     })();
//   </script>
//   `;
// };




module.exports = function CustomerBakayaSection() {

  
return `
<section id="customer-bakaya-home" style="
  max-width:1100px;
  margin:30px auto;
  padding:24px;
  background:linear-gradient(145deg,#ffffff,#f0fdf4);
  border:1px solid #bbf7d0;
  border-radius:22px;
  box-shadow:0 12px 35px rgba(0,0,0,0.07);
  font-family:Arial,sans-serif;
  color:#1e293b;
">

  <!-- HEADER -->
  <div style="
    background:linear-gradient(135deg,#064e3b,#059669);
    padding:28px 20px;
    text-align:center;
    border-radius:17px;
    color:white;
  ">
    <div style="font-size:32px;margin-bottom:8px">
      💳
    </div>

    <h2 style="
      margin:0;
      color:white;
      font-size:clamp(21px,4vw,29px);
      font-weight:800;
    ">
      GLOBAL SERVICES
    </h2>

    <p style="
      margin:8px 0 0;
      font-size:17px;
      font-weight:bold;
    ">
      बकाया भुगतान सेवा
    </p>

    <p style="
      margin:12px auto 0;
      max-width:650px;
      font-size:14px;
      line-height:1.8;
      color:#ecfdf5;
    ">
      अपने मोबाइल या आधार नंबर के अंतिम 4 अंक
      डालकर अपना भुगतान और बकाया राशि देखें।
    </p>
  </div>

  <!-- IMPORTANT NOTICE -->
  <div style="
    background:#fffbeb;
    border:1px solid #fcd34d;
    border-left:5px solid #f59e0b;
    border-radius:13px;
    padding:20px;
    margin-top:20px;
  ">

    <h3 style="
      margin:0 0 12px;
      color:#92400e;
      font-size:18px;
    ">
      ⚠️ महत्वपूर्ण सूचना
    </h3>

    <p style="
      font-size:15px;
      line-height:1.9;
      color:#78350f;
      margin:0;
    ">
      प्रिय ग्राहक, कृपया अपनी
      <strong>बकाया राशि का भुगतान समय पर करें।</strong>

      समय पर भुगतान नहीं करने से
      भविष्य में हमारी सेवाएँ प्राप्त करने में
      असुविधा हो सकती है।
    </p>

    <p style="
      margin:12px 0 0;
      font-size:13px;
      line-height:1.8;
      color:#92400e;
    ">
      नोट: यदि आपका भुगतान किसी बैंक या
      क्रेडिट संस्थान से जुड़े लोन का है,
      तो भुगतान में देरी से आपका
      <strong>CIBIL Score</strong> प्रभावित हो सकता है।
      सामान्य सर्विस के बकाया पर यह लागू नहीं होता।
    </p>

  </div>

  <!-- PAYMENT MESSAGE -->
  <div style="
    text-align:center;
    margin-top:20px;
    padding:17px;
    background:#ecfdf5;
    border:1px solid #a7f3d0;
    border-radius:13px;
  ">
    <strong style="
      color:#065f46;
      font-size:17px;
      line-height:1.7;
    ">
      ✅ समय पर भुगतान करें और
      अपना भरोसा बनाए रखें।
    </strong>
  </div>

  <!-- PAYMENT BUTTON -->
  <div style="
    text-align:center;
    margin:24px 0;
  ">

    <a href="/customer-bakaya" style="
      display:inline-block;
      background:linear-gradient(135deg,#059669,#047857);
      color:white;
      padding:16px 30px;
      border-radius:12px;
      font-size:16px;
      font-weight:800;
      text-decoration:none;
      box-shadow:0 6px 18px rgba(5,150,105,0.25);
    ">
      ₹ अपना बकाया चेक करें
    </a>

  </div>

  <!-- CUSTOMER LIST -->
  <div style="
    border-top:1px solid #d1fae5;
    padding-top:22px;
  ">

    <h3 style="
      margin:0 0 8px;
      color:#065f46;
      font-size:21px;
    ">
      📋 सभी ग्राहकों का भुगतान विवरण
    </h3>

    <p style="
      font-size:13px;
      color:#64748b;
      line-height:1.6;
    ">
      मोबाइल या आधार के अंतिम 4 अंक से
      ग्राहक का भुगतान रिकॉर्ड खोजें।
      केवल सार्वजनिक किए गए रिकॉर्ड यहाँ दिखाई देंगे।
    </p>

    <!-- SEARCH INPUT -->
    <input
      id="bakayaHomeSearch"
      type="search"
      maxlength="4"
      inputmode="numeric"
      placeholder="🔍 मोबाइल / आधार के अंतिम 4 अंक"
      style="
        width:100%;
        padding:15px;
        margin:12px 0 18px;
        border:2px solid #d1fae5;
        background:white;
        border-radius:12px;
        font-size:15px;
        outline:none;
        box-sizing:border-box;
      "
    >

    <!-- TABLE -->
    <div style="
      overflow-x:auto;
      border:1px solid #e2e8f0;
      border-radius:13px;
    ">

      <table style="
        width:100%;
        min-width:680px;
        border-collapse:collapse;
        text-align:left;
        font-size:14px;
      ">

        <thead style="
          background:#065f46;
          color:white;
        ">
          <tr>
            <th style="padding:15px 12px">S.No.</th>
            <th style="padding:15px 12px">Mobile</th>
            <th style="padding:15px 12px">Aadhaar</th>
            <th style="padding:15px 12px">Total Due</th>
            <th style="padding:15px 12px">Total Paid</th>
            <th style="padding:15px 12px">Bakaya</th>
          </tr>
        </thead>

        <tbody id="bakayaHomeRows">
          <tr>
            <td colspan="6" style="
              padding:25px;
              text-align:center;
              color:#64748b;
            ">
              ⏳ ग्राहकों का विवरण लोड हो रहा है...
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>

  <!-- FOOTER -->
  <div style="
    margin-top:25px;
    text-align:center;
    padding-top:15px;
    border-top:1px solid #d1fae5;
    font-size:12px;
    color:#64748b;
  ">
    🔒 GLOBAL SERVICES – सुरक्षित भुगतान विवरण
  </div>

</section>


<script>
(function () {

  const search = document.getElementById(
    "bakayaHomeSearch"
  );

  const tbody = document.getElementById(
    "bakayaHomeRows"
  );

  if (!search || !tbody) return;

  let allCustomers = [];

  function money(n) {
    return "₹" + Number(n || 0).toFixed(2);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderCustomers() {

    const term = search.value.trim();

    const filtered = allCustomers.filter(c => {

      if (!term) return true;

      return (
        String(c.phoneLast4).includes(term) ||
        String(c.aadhaarLast4).includes(term)
      );

    });

    if (!filtered.length) {
      tbody.innerHTML =
        '<tr><td colspan="6">No Customer Found</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map((c, i) => {

      return \`
        <tr>
          <td>\${i + 1}</td>
          <td>******\${escapeHTML(c.phoneLast4)}</td>
          <td>XXXX-XXXX-\${escapeHTML(c.aadhaarLast4)}</td>
          <td>\${money(c.totalDue)}</td>
          <td style="color:#047857;font-weight:bold">
            \${money(c.totalPaid)}
          </td>
          <td style="color:#dc2626;font-weight:bold">
            \${money(c.bakaya)}
          </td>
        </tr>
      \`;

    }).join("");
  }

  async function loadCustomers() {

    try {

      const response = await fetch(
        "/api/public-bakaya",
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error("API failed");
      }

      allCustomers = Array.isArray(result.customers)
        ? result.customers
        : [];

      renderCustomers();

    } catch (err) {

      console.error("Bakaya Load Error:", err);

      tbody.innerHTML =
        '<tr><td colspan="6">Customer Data Load Failed</td></tr>';
    }
  }

  search.addEventListener("input", function () {
    this.value = this.value
      .replace(/\\D/g, "")
      .slice(0, 4);

    renderCustomers();
  });

  loadCustomers();

})();
</script>
`;
};
