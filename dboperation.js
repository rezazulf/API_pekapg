var config = require("./dbconfig");
const sql = require("mssql");

async function getdata(){
    try{
        let pool = await sql.connect(config);
        console.log("sql server connected...");
    } catch (error){
console.log("error:" +error);
    }
}


async function getdata_withQuery(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM dbo.Users");
        return res.recordsets;
    }catch(error){
        console.log("error : "+error);
    }
}

async function getdata_mstpertanyaan(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM dbo.Mst_Pertanyaan");
        return res.recordsets;
    }catch(error){
        console.log("error : "+error);
    }
}

async function getdata_mstjawaban(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM dbo.Mst_Jawaban");
        return res.recordsets;
    }catch(error){
        console.log("error : "+error);
    }
}

async function getdata_hasiljawaban(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM dbo.Hasil_Jawaban");
        return res.recordsets;
    }catch(error){
        console.log("error : "+error);
    }
}

async function getdata_karyawan(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT * FROM dbo.Karyawan");
        return res.recordsets;
    }catch(error){
        console.log("error : "+error);
    }
}


module.exports = {
    getdata: getdata,
    getdata_withQuery:getdata_withQuery,
    getdata_mstpertanyaan:getdata_mstpertanyaan,
    getdata_mstjawaban:getdata_mstjawaban,
    getdata_hasiljawaban:getdata_hasiljawaban,
    getdata_karyawan:getdata_karyawan
};
