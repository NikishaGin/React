import React from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: "select",
    component: Select
}


export const baseExample = () => <Select onChange={action("Value change")}
                                         value={"1"}
                                         items={[
                                             {value: "1", title: "MSK"},
                                             {value: "2", title: "London"},
                                             {value: "3", title: "USA"},
                                         ]}/>
