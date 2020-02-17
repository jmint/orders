const fs = require("fs");
const path = require("path");

const DBath =  path.join(__dirname, "orders.json");
const DB = fs.readFileSync(DBath, { encoding: "utf-8"});

const getOrder = () => JSON.parse(DB);
const saveOrder = order => {
    return fs.writeFileSync(
        DBath,
        JSON.stringify(
            {
                ...getOrder(),
                [order.order]: order,
            },
            null,
            2,
        ),
    );
};

module.exports = {
    path: DBath,
    getOrder,
    saveOrder,
};