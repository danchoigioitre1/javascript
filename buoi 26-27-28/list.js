class list {
    list = [];
    add (product){
        this.list.push(product);
    }
    hienSP() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].display();
        }

    }

    
}