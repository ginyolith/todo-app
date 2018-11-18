const app = new Vue({
    el : '#app',
    data : {
        newItem : "",
        items : []
    },

    methods : {
        addItem : function() {
            if (this.newItem === "") {
                return
            }

            const todo = {
                title : this.newItem,
                checked : false
            }

            this.items.push(todo)
            this.newItem = ""
        },

        deleteItem : function(index) {
            this.items.splice(index, 1)
        }
    }
})