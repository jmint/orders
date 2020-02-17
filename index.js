const program = require("commander");
const prompt = require("inquirer");
const {newOrderPrompts} = require("./prompts");
const {getOrder, saveOrder} = require("./utils");

program.version("0.0.1").description("Take order program");

program
    .command("new")
    .alias("o")
    .description("add a new order")
    .action(() => {
        prompt(newOrderPrompts).then(order => {
            saveOrder(order);
        });
    });

program
    .command("list")
    .alias("l")
    .description("list all orders")
    .action(() => {
        const orders = getOrder();
        prompt([
            {
                type:"list",
                name: "selected",
                message: "Select an order",
                choices: Object.keys(students),
            },
        ]).then(({selected}) => {
            const ord = orders[selected];
            console.log(JSON.stringify(ord, null, 2));
        });
    });

    program.parse(process.argv);