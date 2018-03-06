const digitsRE = /(\d{3})(?=\d)/g

export function currency (value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '￥'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}
//验证规则函数
const rules = {
  request: (obj) => {
    return obj.value != '';
  },
  moblie : (obj) => {
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(obj.value);
  },
  post: (obj) => {
    return /^[0-9]{6}$/.test(obj.value);
  }
}
export function rulesCheck (arr) {
  let judgeList = [];
  [...arr].map((key,val) => {
    let isTrue = rules[`${key.getAttribute('rule')}`](key);
    judgeList.push(isTrue);
    if(!isTrue)key.classList.add('form-section-warm');
  })
  return judgeList.includes(false)?false:true;
}
