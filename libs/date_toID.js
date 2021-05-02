let monthID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

exports.dateid = (date) => {
    let month = date.getMonth();
    let years = date.getFullYear();
    return  monthID[month] + ' ' + years;
}

exports.monthid = (month, sub) => {
    let monthInId = monthID[month];
    if(typeof sub === 'number') monthInId.slice(0, sub);
    return monthInId;
}