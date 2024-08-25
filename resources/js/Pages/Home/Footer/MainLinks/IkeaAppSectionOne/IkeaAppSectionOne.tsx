import ImagePhone from "../../../../../../img/home-footer-iphone.png";

function IkeaAppSectionOne() {
    return (
        <div className="w-[50%] bg-yellow-200 flex">
            <div className="max-w-[170px]">
                <img src={ImagePhone} alt="Image Phone" />
            </div>
            <div>
                <h4>Aplikasi IKEA Indonesia</h4>
            </div>
        </div>
    );
}

export default IkeaAppSectionOne;
