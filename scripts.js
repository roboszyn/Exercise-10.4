var iPhone6S = new Telefon("Apple", 2250, "srebrny", "iOS 9");
var SamsungGalaxyS6 = new Telefon("Samsung", 1950, "złoty", "Android 5.0 Lollipop");
var DTEK60 = new Telefon("BlackBerry", 2500, "czarny", "Android");

function Telefon(marka, cena, kolor, systemOperacyjny) {
  this.marka= marka;
  this.cena = cena;
  this.kolor = kolor;
  this.systemOperacyjny = systemOperacyjny;
}

Telefon.prototype.printInfo = function() {
 console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", system operacyjny to " + this.systemOperacyjny + ", a cena to " + this.cena + "."); 
}

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
DTEK60.printInfo();