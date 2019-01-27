/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var dates=new Date(date);
    let permissibleValues = ['years', 'months', 'days', 'hours', 'minutes'];
        return {
            add: function (cout,type) {
                if (!permissibleValues.includes(type)) {
                    throw new TypeError('Unpermissible type');
                }
                if (isNaN(cout) || cout < 0) {
                    throw new TypeError('Unpermissible number');
                }
                switch (type) {
                    case 'hours':
                        dates.setHours(dates.getHours()+cout);
                        break;
                    case 'months':
                        dates.setMonth(dates.getMonth()+cout);
                        break;
                    case 'days':
                        dates.setDate(dates.getDate()+cout);
                        break;
                    case 'minutes':
                        dates.setMinutes(dates.getMinutes()+cout);
                        break;
                    case 'years':
                        dates.setYear(dates.getFullYear()+cout);
                        break;
                }
                return this;
            },
            subtract: function (cout,type) {
                if (!permissibleValues.includes(type)) {
                    throw new TypeError('Unpermissible type');
                }
                if (isNaN(cout) || cout < 0) {
                    throw new TypeError('Unpermissible number');
                }
                switch (type) {
                    case 'hours':
                        dates.setHours(dates.getHours()-cout);
                        break;
                    case 'months':
                        dates.setMonth(dates.getMonth()-cout);
                        break;
                    case 'days':
                        dates.setDate(dates.getDate()-cout);
                        break;
                    case 'minutes':
                        dates.setMinutes(dates.getMinutes()-cout);
                        break;
                    case 'years':
                        dates.setYear(dates.getFullYear()-cout);
                        break;
                }
                return this;
            },
          get value(){
              var min=dates.getMinutes()
                    ,h=dates.getHours()
                    ,day=dates.getDate()
                    ,mon=dates.getMonth()+1
                    ,year=dates.getFullYear();
                if(h<10)h='0'+h;
                if(mon<10)mon='0'+mon;
                if(day<10)day='0'+day;
                if(min<10)min='0'+min;
                return year+'-'+mon+'-'+day+' '+h+':'+min;
            },
        };
};
