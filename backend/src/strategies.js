class StrategieEmail {
  envoyer(locataire, message) {
    console.log(`Email envoyé à ${locataire.email}: ${message}`);
  }
}

class StrategieSMS {
  envoyer(locataire, message) {
    console.log(`SMS envoyé à ${locataire.telephone}: ${message}`);
  }
}

module.exports = { StrategieEmail, StrategieSMS };