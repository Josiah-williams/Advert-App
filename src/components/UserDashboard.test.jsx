import React from "react";
import UserDashboard from "./UserDashboard";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

describe("<UserDashboard />", () => {
    beforeEach(() => {
        rtl.render(<UserDashboard />);
    })
})