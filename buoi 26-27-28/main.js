class product {
    id;
    name;
    price;


    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }


    display() {
        document.write(this.id + ":" + this.name + ":" + this.price+"<br>")
    }
}