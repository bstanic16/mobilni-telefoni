// const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//     service: 'gmail',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'stanicbogdan1@gmail.com',
//         pass: '0656606189b'
//     }
// });

// const sendConfirmMail = (obj) => {
//     transport.sendMail({
//         to: obj.to ? obj.to : 'Prazan',
//         from: obj.from ? obj.from : 'Prazan',
//         subject: obj.subject ? obj.subject : 'Prazan',
//         html: obj.html ? obj.html : `<h1> Prazan </h1>`
//     })
// }

// sendConfirmMail({
//     to: 'stanicbogdan1@gmail.com',
//     from: 'stanicbogdan1@gmail.com',
//     subject: 'Proba',
//     html: `
//         <h1>
//             Poslato od sa 'mejla's
//         </h1>
//     `
// });