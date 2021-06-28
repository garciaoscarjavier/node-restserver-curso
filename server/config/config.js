/// ===========================
// puerto
//========================
process.env.PORT = process.env.PORT || 3000;

/// ===========================
// ENTORNOo
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
/// ===========================
// base de datos
//========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://strinder:1098743036.Oscar@cluster0.gmenl.mongodb.net/cafe';
}
process.env.URLDB = urlDB;