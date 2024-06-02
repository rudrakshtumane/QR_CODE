const readline = require('readline');
const fs = require('fs');
const QRCode = require('qrcode');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function generateQRCode(input, fileName) {
  try {
    await QRCode.toFile(fileName, input);
    console.log('QR Code generated and saved as', fileName);
  } catch (error) {
    console.error('Error generating QR Code:', error);
  }
}

// Prompt user to enter data for the QR Code
rl.question('Enter the data for the QR Code: ', async (data) => {
  const fileName = `${data.replace(/\s/g, '_')}.png`; 
  await generateQRCode(data, fileName);

  
  rl.close();
});