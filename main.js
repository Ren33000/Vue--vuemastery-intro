const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: "https://www.nordstrom.com/browse/men/clothing/socks?filterByColor=green",
            inventory: 100,
            onSale: true,
        }
    }
})