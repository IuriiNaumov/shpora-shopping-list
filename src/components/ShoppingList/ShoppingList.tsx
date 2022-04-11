import React from "react";
import {ShoppingListItem} from "./ShoppingListItem/ShoppingListItem";
import styles from "./ShoppingList.less";
import {useState} from "react";
import {$products} from "../../models/filteredProducts/FilteredProductStore";
import {useStore} from "effector-react";
import {ShoppingListFilter} from "./ShoppingListFilter/ShoppingListFilter";
import {ShoppingListSort} from "./ShoppingListSort/ShoppingListSort";
import {sortingFunctions} from "../../utils/Utils";
import {AddNewItemIcon, FilterIcon, SortIcon} from "../Common/Icons/Icons";
import {SortByType} from "../../types/types";

interface ShoppingListProps {
    onOpenForm: (state: boolean) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = (props) => {
    const [openedSort, setOpenedSort] = useState(false);
    const [openedFilter, setOpenedFilter] = useState(false);
    const [sortOrder, setSortOrder] = useState<SortByType>(SortByType.firstNew);

    const changeSortOrderHandler = (sortByType: SortByType) => {
        setSortOrder(sortByType);
        setOpenedSort(false);
    };

    const openFilterHandler = () => {
        if (openedSort) {
            setOpenedSort(false);
        }
        setOpenedFilter(true);
    };

    const closeFilterHandler = () => {
        setOpenedFilter(false);
    };

    const openSortHandler = () => {
        if (openedFilter) {
            setOpenedFilter(false);
        }
        setOpenedSort(true);
    };

    const products = useStore($products);
    const total = products.reduce((sum, {price, amount}) => (price ? sum + price * amount : sum), 0);

    return (
        <div className={styles.shoppingList}>
            <div className={styles.shoppingListHeader}>
                <h2>Список покупок</h2>
                <FilterIcon onClick={openFilterHandler}/>
                {openedFilter && <ShoppingListFilter onCloseFilter={closeFilterHandler}
                                                     onAbort={() => setOpenedFilter(false)}/>}
                <SortIcon onClick={openSortHandler}/>
                {openedSort && <ShoppingListSort currentSortOrder={sortOrder} onChangeSortOrder={changeSortOrderHandler}
                                                 onAbort={() => setOpenedSort(false)}/>}
            </div>
            <div className={styles.shoppingListTotal}>{products.length > 0 ? <p>Общая сумма: {total}₽</p> : null}</div>
            <div className={styles.shoppingListItems}>
                {products
                    .filter((product) => !product.bought)
                    .sort(sortingFunctions[sortOrder])
                    .map((product) => (
                        <ShoppingListItem {...product} key={product.id}/>
                    ))}
                {products
                    .filter((product) => product.bought)
                    .sort(sortingFunctions[sortOrder])
                    .map((product) => (
                        <ShoppingListItem {...product} key={product.id}/>
                    ))}
            </div>
            <div className={styles.addNewItemButton} onClick={() => props.onOpenForm(true)}>
                <div className={styles.addNewItemButtonBackground}>
                    <AddNewItemIcon/>
                </div>
            </div>
        </div>
    );
};
