module.exports = {
    
    formatPrice (price) {

        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(price/100)
    }
}