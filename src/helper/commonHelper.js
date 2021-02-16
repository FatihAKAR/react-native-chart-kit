export const helper = {
    avoidScientificNumber: (number) => {
        if (Math.abs(number) < 1.0) {
          const e = parseInt(number.toString().split('e-')[1])
          if (e) {
            number = new Decimal(number)
              .mul(new Decimal(10).pow(new Decimal(e).sub(1)))
              .toString()
            number = '0.' + new Array(e).join('0') + number.toString().substring(2)
          }
        } else {
          let e = parseInt(number.toString().split('+')[1])
          if (e > 20) {
            e -= 20
            number = new Decimal(number).div(new Decimal(10).pow(e)).toString()
            number = new Decimal(number).add(new Array(e + 1).join('0')).toString()
          }
        }
        return number
      },
}