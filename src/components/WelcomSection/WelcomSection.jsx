import { Link } from "react-router-dom";
import css from "./WelcomSection.module.css";
import { useNavigate } from "react-router-dom";

const WelcomSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/catalog");
    };

    return (
        <div className={css.container}>
            <div className={css.title}>
                <h1>Welcome</h1>
                <p>Do you love mobile travel? Come to us</p>
            </div>
            <div className={css.image}></div>
            <div className={css.button}>
                <button onClick={handleClick} className={css.btn}>
                    Let's Go
                </button>
            </div>
        </div >
    );
};

export default WelcomSection;