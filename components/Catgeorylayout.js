import React from "react";
import { ScrollView, Text } from "react-native";
import Furniturecatgeory from "./Furniturecatgeory";
import Sofasandseatings from "./Sofasandseatings";
import Mattresses from "./Mattresses";
import Homedecor from "./Homedecor";
import Furnishings from "./Furnishings";
import Kitchenanddining from "./Kitchenanddining";
import Lampsandlighting from "./Lampsandlighting";
import Homeutility from "./Homeutility";
import Appliances from "./Appliances";
import Modular from "./Modular";

const Catgeorylayout = () => {
    return (
        <ScrollView>
        <Furniturecatgeory />
        <Sofasandseatings/>
        <Mattresses/>
        <Homedecor/>
        <Furnishings/>
        <Kitchenanddining/>
        <Lampsandlighting/>
        <Homeutility/>
        <Appliances/>
        <Modular/>
        </ScrollView>
    )
}

export default Catgeorylayout