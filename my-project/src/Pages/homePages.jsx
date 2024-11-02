import { Fragment } from "react"
import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi"

const HomePages = () => {
    return (
        <Fragment>
            <Header>
                <Navigasi
                    tentangKami="Tentang Kami"
                    kontakKamiText="Kontak Kami"
                    signIn="Sign In"
                    
                    />
            </Header>
            <div className="mt-32 mx-5 mb-32">
                <div className="flex gap-5">
                    <img src="/img/jagung-1.png" alt="" />
                    <div className="flex flex-col gap-4">
                        <h2 className="p-4 bg-hijau rounded-full text-white font-bold text-xl w-fit">Selamat Datang di JagoAgri!</h2>
                        <p className="text-xl">
                            Jagung adalah tanaman pangan penting yang termasuk dalam keluarga rumput-rumputan (Poaceae) dan memiliki peran utama sebagai sumber karbohidrat di banyak negara. Selain sebagai makanan pokok, jagung juga digunakan dalam industri pakan ternak dan bahan baku produk olahan seperti minyak jagung, tepung, dan pati. Tanaman ini mudah dibudidayakan di berbagai kondisi iklim, terutama di daerah tropis. Jagung juga memiliki siklus panen yang relatif cepat dan produktivitas tinggi, menjadikannya pilihan ideal dalam mendukung ketahanan pangan dan industri pertanian.
                        </p>
                        <div className="bg-hijau h-10 w-fit rounded-xl p-3 flex items-center shadow-xl shadow-slate-400 mt-10">
                            <img src="/icons/panah.png" alt="joni" />
                            <p className="text-white font-bold text-md p-5">Berhabung Sekarang</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-center mt-72 text-black text-2xl font-semibold"> Download <span className="text-hijau font-bold">JagoAgri</span></h1>
                    <img src="/icons/playstore.png" alt="" width={"200px"} className="" />
                </div>
            </div>
        </Fragment>
    )
}
export default HomePages;