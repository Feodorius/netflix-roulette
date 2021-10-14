import React from "react";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

import { filterGenres } from "../../utils/constants";
import "./filter-bar.styles.scss";

const FilterBar = () => {
    const [value, setValue] = React.useState(0);

    const filterByGenre = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={filterByGenre}>
            {filterGenres.map(( { name }, index) => (
                <Tab
                    disableRipple
                    key={index}
                    className="filter-tab"
                    label={name} />
            ))}

        </Tabs>
    );
};


export default FilterBar;