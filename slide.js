let slideIndex = 0;
let slideTimer; // Zamanlayıcıyı kontrol etmek için değişken

// Sayfa yüklendiğinde başlat
showSlides();

// İleri-Geri butonları için
function plusSlides(n) {
  // Taramalı tüfek etkisini engellemek için mevcut beklemeyi iptal et
  clearTimeout(slideTimer); 
  
  // İndeksi güncelle ve slaytı göster
  slideIndex += n;
  updateSlides();
}

// Noktalar (dots) için (eğer kullanıyorsan)
function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n;
  updateSlides();
}

// Ana fonksiyon: Otomatik ilerleme
function showSlides() {
  slideIndex++;
  updateSlides();
}

// Görüntülemeyi ve zamanlayıcıyı yöneten yardımcı fonksiyon
function updateSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Başa veya sona sarma kontrolleri
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}

  // Tüm slaytları gizle
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tüm noktaların aktifliğini kaldır (varsa)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Aktif slaytı göster
  slides[slideIndex-1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }

  // Eski zamanlayıcıyı her ihtimale karşı temizle ve yenisini kur
  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 2000); // 3 saniyede bir geçiş
}