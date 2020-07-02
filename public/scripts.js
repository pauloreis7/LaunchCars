
const Mask = {
    apply(target, func) {

        setTimeout(function () {

            target.value = Mask[func](target.value)

        }, 1)

    },

    formatUSD (value) {

        value = value.replace(/\D/g, "")

        return value = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)
    }
}