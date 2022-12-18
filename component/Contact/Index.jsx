import dynamic from "next/dynamic";
const LocationMap = dynamic(() => import("./Location"), {
    ssr: false,
});

export default LocationMap;
