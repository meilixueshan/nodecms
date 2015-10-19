var crypto = require('crypto');

exports.trimStart = function (value, str) {
    if (str && this.startWith(value, str)) {
        return value.substr(str.length);
    }
    return value;
};

exports.trimEnd = function (value, str) {
    if (str && this.endWith(value, str)) {
        return value.substr(0, value.length - str.length);
    }
    return value;
};

exports.startWith = function (value, str) {
    if (str == null || str == "" || value.length == 0 || str.length > value.length)
        return false;

    return (value.substr(0, str.length) == str);
};

exports.endWith = function (value, str) {
    if (str == null || str == "" || value.length == 0 || str.length > value.length)
        return false;

    return (value.substring(value.length - str.length) == str);
};

exports.replaceAll = function (value, str1, str2) {
    return value.replace(new RegExp(str1, "gm"), str2);
};

exports.htmlEncode = function (value) {
    var str = value.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#39;');
    return str;
};

//isEmail方法，检测字符串是否是邮件地址
exports.isEmail = function (value) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(value);
};

//isDate方法，检测是否是日期时间
exports.isDate = function (value) {
    var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
    if (reg.test(value)) {
        return true;
    }
    return false;
};

//isValidUserName方法（检测是否是合法的用户名，即只能是6-18位字母、数字和下划线组成）
exports.isValidUserName = function (value) {
    var reg = /^[a-zA-Z0-9-_]{6,18}$/g;
    return reg.test(value);
};

//isNaturalNumber方法（检测是否是正整数）
exports.isNaturalNumber = function (value) {
    var reg = /^([0-9]{1,8})$/g;
    return reg.test(value);
};

//isInteger方法（检查是否是整数）
exports.isInteger = function (value) {
    var reg = /^(-?[0-9]{1,8})$/g;
    return reg.test(value);
};

//isMoney方法（检测是否是货币数值，可以为负）
exports.isMoney = function (value, allowNegative) {
    var reg = /^(\d+|[1-9])\.{0,1}\d{0,2}$/;
    if (allowNegative) {
        reg = /^(-?\d+|[1-9])\.{0,1}\d{0,2}$/;
    }
    return reg.test(value);
};

//判断是否有值（如果是字符串，而且字符串为empty，也表示无值）注：可以当isNullOrEmpty
exports.hasValue = function (value) {
    if (value) {
        return true;
    }
    return false;
};

//判断字符串是否是空值或null
exports.isNullOrEmpty = function (value) {
    return !this.hasValue(value);
};

//actualLength方法（字符串的实际长度，一个全角按2个字节长度计算）
exports.actualLength = function (value) {
    return value.replace(/[^\x00-\xff]/g, "**").length;
};

//format方法（用于模仿C#中的format）
exports.format = function (value, args) {
    var result = value;
    if (arguments.length > 1) {
        if (arguments.length == 2 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 1; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + (i - 1) + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

//格式化日期时间
exports.formatDate = function (value, format) {
    var o = {
        "M+": value.getMonth() + 1, //month
        "d+": value.getDate(), //day
        "h+": value.getHours(), //hour
        "m+": value.getMinutes(), //minute
        "s+": value.getSeconds(), //second
        "q+": Math.floor((value.getMonth() + 3) / 3), //quarter
        "S": value.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (value.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }

    return format;
};

//格式化数字（在前面用0填充空位）
exports.formatNumber = function (value, format) {
    var val = value.toString();
    var formatLen = format.length;
    var valueLen = val.length;
    var prefix = "";
    if (valueLen < formatLen) {
        for (var i = 0; i < (formatLen - valueLen); i++) {
            prefix += "0";
        }
    }
    return prefix + val;

    return format;
};

//字符串转float，转换失败时输出0
exports.toFloat = function (value) {
    if (this.isMoney(value)) {
        return parseFloat(value);
    }
    return 0;
};

//字符串转换成数字，转换失败时输出0
exports.toInt = function (value) {
    if (this.isInteger(value)) {
        return parseInt(value);
    }
    return 0;
};

//四舍五入，参数num代表小说位数
exports.toRound = function (value, num) {
    return this.toFloat(toFloat(x).toFixed(num));
};

//整除运算
exports.division = function (value1, value2) {
    var n1 = Math.round(value1); //四舍五入  
    var n2 = Math.round(value2); //四舍五入  

    var result = n1 / n2; //除  

    if (result >= 0) {
        result = Math.floor(result); //返回小于等于原rslt的最大整数。  
    } else {
        result = Math.ceil(result); //返回大于等于原rslt的最小整数。  
    }

    return result;
};

//通过md5加密，不可逆
exports.md5 = function (value) {
    var hasher = crypto.createHash("md5");
    hasher.update(value);
    var hashmsg = hasher.digest('hex'); //hashmsg为加密之后的数据
    return hashmsg;
};