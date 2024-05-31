<!-- skrip google sheets -->
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ938J5f9-KQyImSaHykl9gpQsT8vKipj5Ke9Vj980dMoB2ZDefFDUuQST0hEuynbF/exec';
      const form = document.forms['submit-to-google-sheet'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      //const myAlert = document.querySelector('.my-alert');
    
      form.addEventListener('submit', e => {
        e.preventDefault();

        //klik tombol submit->tombol loading muncul
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            //klik tombol submit->tombol kirim muncul
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            //direct link
            window.location.href = "index.html";

            //tampil alert
            //myAlert.classList.toggle('d-none');
            //reset form input jadi kosong
            //form.reset();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
      })
