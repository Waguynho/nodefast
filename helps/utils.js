module.exports.getByPage = (array, startPage, sizePage)=>{
    --startPage;
    return array.slice((startPage * sizePage), (startPage + 1) * sizePage);
}