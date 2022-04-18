import React, { useEffect, useState } from "react";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import classes from "./App.less";
import { EditItemForm } from "./components/EdiItemForm/EditItemForm";
import { AddNewList } from "./models/productsList/ProductsListStore";

const App: React.FC = () => {
    const [openedForm, setOpenedForm] = useState(false);
    useEffect(() => {
        AddNewList({
            name: "Продукты",
            id: 1,
            boughtProducts: [],
            pendingProducts: [],
        });
    }, []);

    return (
        <div className={classes.appWrapper}>
            <div className={classes.appContainer}>
                <ShoppingList listId={1} onOpenForm={() => setOpenedForm(true)} />
                {openedForm && <EditItemForm onCloseForm={() => setOpenedForm(false)} />}
            </div>
        </div>
    );
};

export default App;
