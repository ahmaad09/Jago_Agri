import React, { useState } from "react";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FormResetEmail = () => {
    const [oldEmail, setOldEmail] = useState(""); // Email lama
    const [newEmail, setNewEmail] = useState(""); // Email baru
    const [password, setPassword] = useState(""); // Password untuk verifikasi
    const [error, setError] = useState(""); // Pesan error

    const handleResetEmail = async (event) => {
        event.preventDefault();
        setError(""); // Reset pesan error saat submit form

        // Validasi input secara eksplisit
        if (!oldEmail.trim() || !newEmail.trim() || !password.trim()) {
            setError("Semua kolom harus diisi!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/reset-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: oldEmail, newEmail, password }),
            });

            console.log("Response status:", response.status);
            const textResponse = await response.text(); // Ambil respons dalam bentuk teks
            console.log("Response text:", textResponse);

            // Parsing respons teks sebagai JSON jika perlu
            let data;
            try {
                data = JSON.parse(textResponse);
            } catch (error) {
                console.error("Gagal parsing JSON:", error);
                setError("Terjadi kesalahan saat mereset email.");
                return;
            }

            console.log("Parsed Response data:", data);

            if (response.ok) {
                alert("Email berhasil diubah! Silakan login kembali.");
                window.location.href = "/login"; // Arahkan ke halaman login
            } else {
                setError(data.message || "Terjadi kesalahan saat mereset email.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
        }
    };

    return (
        <form onSubmit={handleResetEmail} className="flex flex-col">
            <InputForm
                type="email"
                name="oldEmail"
                placeholder="Email Lama"
                htmlFor="oldEmail"
                id="oldEmail"
                value={oldEmail}
                onChange={(e) => setOldEmail(e.target.value)}
                required
            />

            <InputForm
                type="email"
                name="newEmail"
                placeholder="Email Baru"
                htmlFor="newEmail"
                id="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
            />

            <InputForm
                type="password"
                name="password"
                placeholder="Password untuk Verifikasi"
                htmlFor="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            <div className="flex justify-center w-full mt-20">
                <Button
                    type="submit"
                    className="text-white w-1/3 hover:bg-yellow-600 bg-kuning"
                >
                    Confirm
                </Button>
            </div>
        </form>
    );
};

export default FormResetEmail;
