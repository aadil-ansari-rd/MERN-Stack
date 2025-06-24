import Card from "./Card";
function Cards() {

    let prop = [
        {
            title: "Logitex MX Master",
            des1: "8000 DPI",
            des2: "5 Programmable Buttons",
            p1: "12,495",
            p2: "8,999"

        },
        {
            title: "Apple Pencil (2nd Gen )",
            des1: "Intutive Touch Service",
            des2: "Designed for iPad Pro",
            p1: "11,900",
            p2: "9,199"

        },
        {
            title: "Zebronics",
            des1: "Designed for iPad Pro",
            des2: "Intutive Touch Service",
            p1: "1,599",
            p2: "899"

        },
        {
            title: "Petronics Toad",
            des1: "Wireless Mouse 2.4GHz",
            des2: "Optical Orientation",
            p1: "599",
            p2: "278"

        },

    ]
    let styles = { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Blockbuster Deals on Computer Accessories | Shop Now</h1>
            <div style={styles}>
                {prop.map((pro, index) => (
                    <div key={index}>
                        <Card props={pro} />
                    </div>
                ))}
            </div>

        </>

    );
}
export default Cards;