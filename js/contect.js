//import emailjs from 'emailjs-com'
//import apiKeys from './apikeys'

const sendEmail = e => {
  e.preventDefault()
/*
  emailjs
    .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
        alert('send success！')
      },
      error => {
        console.log(error.text)
        alert('send faild！')
      }
    )
	*/
	//emailjs.sendForm(serviceID, templateID, templateParams, publicKey);
  emailjs
    //.sendForm('outlook', 'template_ci2jumm', e.target, '6LbhFe_Gq4UbYQFer')
	.sendForm('gmail', 'template_ci2jumm', e.target, '6LbhFe_Gq4UbYQFer')
    .then(
      result => {
        console.log(result.text)
        alert('お問い合わせが完了しました。')
      },
      error => {
        console.log(error.text)
        alert('送信エラー！')
      }
    )
}

const form = document.querySelector('.form')
form.addEventListener('submit', sendEmail)

Date.prototype.toString= function()
 {
    var d = new Date();
    var ret = d.getYear();
    var m = d.getMonth()+1;
    ret+=m.length>1?m:'0'+m;
    var date= d.getDate();
    ret+=date.length>1?date:'0'+date;
    return ret;    
}
 var initSubject='test'+ new Date().toString(),initTo='sample@163.com',initBody='use mailto sample';

 function submitHandler()
 {
    var subject = subText.value;
    var to = toText.value;
    var body = bodyText.value;
    mailTo.href="mailto:"+to+"?cc="+subject+"&body="+body;
    mailTo.click();
}
 function init()
 {
    subText.value=initSubject;
    toText.value=initTo;
    bodyText.value=initBody;
}