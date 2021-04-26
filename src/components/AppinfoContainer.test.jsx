import React from "react";
import AppinfoContainer from "./AppinfoContainer";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

describe("<AppinfoContainer />", () => {
    beforeEach(() => {
        rtl.render(<AppinfoContainer />);
    })
})