import './App.css'

function App() {
  return (
    <>
      <img src="images/SPLITTER.png" className='headİmg' alt="splitter logo" />
      <div className="tip-calc">
        <TipEntry />
        <TipShow />
      </div>
    </>
  )
}



function TipEntry() {
  let totaltip = 0;
  let peopletip = 0;
  let totalpaytip = 0;
  let totalpeopletip = 0;

  let customerPay = document.querySelector(".customer-pay");
  let btns = document.querySelectorAll(".tip-list button");
  let numberPeople = document.querySelector(".number-people-input");
  let tipAmount = document.querySelector(".tip-amount-show");
  let total = document.querySelector(".total-show");
  let uyari = document.querySelector(".uyari");
  let uyari1 = document.querySelector(".uyari1");


  function handleTipClick() {
    let tip = 0;
    tip += this.innerText;
    totaltip = (customerPay.value * tip) / 100;
    totalpaytip = Number(customerPay.value) + totaltip;
    totalpeopletip = totalpaytip / numberPeople.value;
    total.innerText = "$" + totalpeopletip;
    peopletip = totaltip / numberPeople.value;
    tipAmount.innerText = "$" + peopletip;

    if (total.value !== "") {
      reset.style.background = "rgba(38, 194, 174, 1)";
    }
    if (customerPay.value === "") {
      uyari.innerText = "Sıfır olamaz";
      customerPay.style.border = "2px solid rgba(225, 116, 87, 1)";
    } else {
      uyari.innerText = "";
      customerPay.style.border = "transparent";
    }
    if (numberPeople.value === "") {
      uyari1.innerText = "Sıfır olamaz";
      numberPeople.style.border = "2px solid rgba(225, 116, 87, 1)";
    } else {
      uyari1.innerText = "";
      numberPeople.style.border = "transparent";
    }

    return tip = 0;
  }


  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleTipClick);
  }


  TipShow();
  return (
    <div className="tip-entry">
      <div className="customer">
        <div className="customer-header">
          <h5>Hesap Tutarı</h5>
          <p className="uyari"></p>
        </div>
        <input type="number" className="customer-pay" placeholder="$0" />
      </div>

      <div className="select-tip">
        <p>Bahşiş %'sini Seçin</p>
        <div className="tip-list">
          <button>5</button>
          <button>10</button>
          <button>15</button>
          <button>25</button>
          <button>50</button>
          <form className="customform">
            <input type="number" placeholder="ÖZEL" className="custom-tip" />
          </form>
        </div>
      </div>

      <div className="number-people">
        <div className="number-people-header">
          <h5>Kişi Sayısı</h5>
          <p className="uyari1"></p>
        </div>
        <input type="number" className="number-people-input" placeholder="$0" required />
      </div>
    </div>
  )
}

function TipShow() {
  let customerPay = document.querySelector(".customer-pay");
  let tipCustom = document.querySelector(".custom-tip");
  let numberPeople = document.querySelector(".number-people-input");
  let tipAmount = document.querySelector(".tip-amount-show");
  let total = document.querySelector(".total-show");
  let uyari = document.querySelector(".uyari");
  let uyari1 = document.querySelector(".uyari1");

  function handleResetClick() {
    customerPay.value = "";
    tipCustom.value = "";
    total.innerText = "$0.00";
    numberPeople.value = "";
    tipAmount.innerText = "$0.00";
    uyari1.innerText = "";
    uyari.innerText = "";
    customerPay.style.border = "transparent";
    numberPeople.style.border = "transparent";
  }


  return (
    <div className="tip-show">
      <div className="tip-amount">
        <div className="tip-amount-text">Bahşiş Miktarı <span>/ kişi</span></div>
        <div className="tip-amount-show">$0.00</div>
      </div>

      <div className="total">
        <div className="total-text">Toplam <span>/ kişi</span></div>
        <div className="total-show">$0.00</div>
      </div>

      <button className="reset-button" onClick={handleResetClick}>Sıfırla</button>

    </div>
  )
}

export default App
