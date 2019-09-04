//MVC = Model View Controller
const app = new App("#app");

app.addComponent({
    name: "dogs",
    model: {
        dogs: []
    },
    view(model) {
        return "There are ${model.dogs.length} dogs";
    }
});

const router = new Router(app);

router.addRoute("dogs", "^#/dogs$");
