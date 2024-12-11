import Button from "../Button/Index";
import InputForm from "../Input/Index";
import { Link } from "react-router-dom";

const FromRegister = (props) => {
    const hendelRegister = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        // Validasi password dan konfirmasi password
        if (password !== confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok!");
            return;
        }

        // Kirim data ke backend menggunakan Fetch API
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username, 
                    email: email,
                    password: password,
                }),
            });

            // Parsing respons dari backend
            const data = await response.json();

            // Jika registrasi berhasil
            if (response.ok) {
                alert(data.message);
                window.location.href = "/login"; // ke halaman login
            } else {
                alert(data.message || "Registrasi gagal!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat registrasi.");
        }
    };

    return (
        <form action="" method="post" onSubmit={hendelRegister}>
            {/* Input untuk username */}
            <InputForm
                type="text"
                name="username"
                placeholder="Username"
                required
            />

            {/* Input untuk email */}
            <InputForm
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            {/* Input untuk password */}
            <InputForm
                type="password"
                name="password"
                placeholder="Password"
                required
            />

            {/* Input untuk konfirmasi password */}
            <InputForm
                type="password"
                name="confirmPassword" 
                placeholder="Confirm Password"
                required
            />
            {/* Tombol submit */}
            <div className="flex justify-center w-full mt-10"> 
                <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600" type="submit">
                    Sign Up
                </Button>
            </div>
        </form>
    );
};

export default FromRegister;