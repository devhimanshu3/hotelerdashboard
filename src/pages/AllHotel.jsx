import React from 'react'
import GenericTable from "../components/GenericTable.jsx";
import { data } from "../assets/data.js";

const AllHotel = () => {
    const columns = [
        { key: "images", label: "Hotel Images" },
        { key: "name", label: "Hotel Name" },
        { key: "city", label: "City" },
        { key: "country", label: "Country" },
        { key: "rating", label: "Rating" },
        { key: "price_range", label: "Price Range" },
        { key: "available_rooms", label: "Available Rooms" },
        { key: "facilities", label: "Facilities" },
        { key: "contact_phone", label: "Contact Phone" },
        { key: "contact_email", label: "Contact Email" }
    ];
    

    const handleView = (id) => {
        console.log("View flight Detail:", id);
    };

    const table_heading = {
        heading: "All Available Hotels",
        para: "Browse through our extensive list of hotels to find the perfect stay for your next trip."
    };

    return (
        <GenericTable
            data={data.hotels}
            columns={columns}
            onActionClick={handleView}
            table_heading={table_heading}
        />
    );
};


export default AllHotel