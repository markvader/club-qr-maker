// Club themes. Add a new club by copying an entry below.
//   brand  - main club colour, used for the QR dots and the page header
//   eyes   - colour of the three corner squares
//   accent - secondary club colour, used for the header stripe and dark buttons
//   logoSize - share of the QR the logo may take up (0.15-0.4)
//   logo   - optional path to a crest image in this repo (e.g. 'logos/glenavy.png');
//            leave as null to upload one in the app instead
window.QR_THEMES = {
  default: {
    name: 'QR Code Maker',
    tagline: 'Custom QR codes with your logo in the centre',
    brand: '#2563EB',
    eyes: '#2563EB',
    accent: '#111111',
    background: '#FFFFFF',
    dotStyle: 'rounded',
    eyeStyle: 'extra-rounded',
    logo: null,
    fileName: 'qr-code'
  },
  glenavy: {
    name: "St Joseph's GAC Glenavy",
    tagline: 'Club-branded QR codes with the crest in the centre',
    brand: '#F58A1F',
    eyes: '#F58A1F',
    accent: '#111111',
    background: '#FFFFFF',
    dotStyle: 'rounded',
    eyeStyle: 'extra-rounded',
    logoSize: 0.4,
    logo: 'logos/glenavy.png',
    fileName: 'glenavy-qr'
  }
};
