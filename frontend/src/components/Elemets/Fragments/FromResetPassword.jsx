import React, { useState } from "react";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FormResetPassword = () => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const handleResetPassword = async (event) => {
        event.preventDefault();
        setError(""); // Reset pesan error
    
        // Validasi input
        if (!email || !oldPassword || !newPassword) {
            setError("Semua kolom harus diisi!");
            return;
        }
        if (newPassword.length < 6) {
            setError("Kata sandi harus minimal 6 karakter.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3000/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, oldPassword, newPassword }),
            });
    
            if (!response.ok) {
                const textResponse = await response.text(); // Ambil respon dalam bentuk teks untuk debug
                console.log("Response text:", textResponse);
                throw new Error("Terjadi kesalahan dengan server.");
            }
    
            // Coba parsing response sebagai JSON
            const data = await response.json();
            console.log("Response data:", data); // Debug log
    
            if (response.ok) {
                alert("Kata sandi berhasil diubah! Silakan login kembali.");
                window.location.href = "/login";
            } else {
                setError(data.message || "Terjadi kesalahan saat mereset kata sandi.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
        }
    };
    
    return (
        <form onSubmit={handleResetPassword} className="flex flex-col">
            <InputForm
                type="email"
                name="email"
                placeholder="Email Terdaftar"
                htmlFor="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <InputForm
                type="password"
                name="oldpassword"
                placeholder="Old Password"
                htmlFor="oldpassword"
                id="oldpassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />

            <InputForm
                type="password"
                name="resetpassword"
                placeholder="New Password"
                htmlFor="resetpassword"
                id="resetpassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            <div className="flex justify-center w-full mt-20">
                <Button
                    type="submit"
                    classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                >
                    Confirm
                </Button>
            </div>
        </form>
    );
};

export default FormResetPassword;
