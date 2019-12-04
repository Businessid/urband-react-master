import React, { useState } from "react";
import HeaderTypeOne from '../uiComponents/headerTypeOne.component';
import ButtonTypeOne from '../uiComponents/buttonType1.component';
import AddressRow from '../uiComponents/addressRow.component';
import AddNewAddress from '../uiComponents/addNewAddress.component';

const profileAddresses = () => {

    return (
        <div>
            <div className="HdrBxc1 positionRelativeBox">
                <HeaderTypeOne heading="Addresses" subheading="Add, remove and select preferred addresses" />
                <div className="positionAbsTopRight">
                    <ButtonTypeOne buttonText="Add New Address" />
                </div>
            </div>
            <AddressRow />

        </div>
    )
}
export default profileAddresses;

