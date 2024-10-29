import Button from "../Button/Index"
import InputForm from "../Input/Index"

const FromResetPassword = () => {
    return (
        <form  className="flex flex-col">
        <InputForm
            type="password"
            name="resetpassword"
            placeholder="New Password"
            htmlFor="resetpassword"
            id="resetpassword"
        />

        <InputForm
            type="password"
            name="password"
            placeholder="Confirm New Password"
        />
        <div className="flex justify-center w-full mt-20">
            <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600">
                Confirm
            </Button>
        </div>
    </form>

    )
}
export default FromResetPassword;