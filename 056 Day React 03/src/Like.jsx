import { useState } from "react";

function Like() {
    let [isLiked, setIsLiked] = useState(false);
    let [color, setColor] = useState("");

    let styles = "color: {color}"
    return (
        <div>
            <p onClick={() => setIsLiked(!isLiked) } style={{ fontSize: "60px" }} >


                {/* {!isLiked && <i class="fa-regular fa-heart"  ></i>}
                {isLiked && <i class="fa-solid fa-heart" style={{ color: "red" }}  ></i>} */}

                {/* If-else : with the help of ternary operaters*/}

                {isLiked ? (<i class="fa-solid fa-heart" style={{ color: "red" }}  ></i>) : (<i class="fa-regular fa-heart"  ></i>)}

            </p>
        </div>
    );
}
export default Like;