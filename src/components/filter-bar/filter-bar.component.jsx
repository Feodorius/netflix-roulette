import React from "react";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

import { filterGenres } from "../../utils/constants";
import "./filter-bar.styles.scss";

const FilterBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange}>
            {filterGenres.map(({ index, name }) => (
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