import { Fragment } from "react";

// Card Newas
const CardNews = (props) => {
    const CardNews = [
        {
            id: 1,
            title: "Harga Jagung Domestik Naik, Petani Mulai Optimis",
            img: "/img/news/1.png",
            date: "11 November 2024",
            desc: "Sejak awal musim panen, harga jagung di pasar lokal menunjukkan kenaikan sebesar 15% dibandingkan tahun lalu. Kenaikan ini dipicu oleh meningkatnya permintaan jagung untuk pakan ternak dan industri makanan. Beberapa petani menyatakan optimisme mereka terhadap pendapatan musim ini, meskipun masih menghadapi tantangan cuaca yang tidak menentu."
        },
        {
            id: 2,
            title: "Penemuan Varietas Jagung Baru yang Tahan Kekeringan",
            img: "/img/news/2.png",
            date: "11 November 2024",
            desc: "Para peneliti agrikultur di Indonesia berhasil mengembangkan varietas jagung yang tahan terhadap kekeringan. Varietas ini diklaim dapat tumbuh dengan baik meskipun curah hujan rendah. Uji coba dilakukan di daerah Jawa Tengah dengan hasil panen mencapai 7 ton per hektar. Petani yang mengadopsi teknologi ini diproyeksikan mampu mengurangi risiko gagal panen."
        },
        {
            id: 3,
            title: "Ekspor Jagung Indonesia ke Filipina Meningkat Tajam",
            img: "/img/news/3.png",
            date: "11 November 2024",
            desc: "Indonesia mencatat peningkatan ekspor jagung sebesar 20% ke Filipina dalam tiga bulan terakhir. Kualitas jagung yang dihasilkan petani lokal semakin diminati di pasar internasional. Pemerintah melalui Kementerian Pertanian menyatakan komitmen untuk mendukung petani dengan memperluas program subsidi pupuk dan pelatihan teknologi pertanian."
        },
        {
            id: 4,
            title: "Penggunaan Drone untuk Memantau Tanaman Jagung Mulai Marak",
            img: "/img/news/4.png",
            date: "11 November 2024",
            desc: "Teknologi modern semakin memudahkan petani dalam mengelola lahan. Beberapa komunitas petani jagung di Jawa Tengah mulai menggunakan drone untuk memantau kesehatan tanaman dan mendeteksi area yang membutuhkan perawatan. Dengan teknologi ini, efisiensi waktu dan biaya dapat meningkat hingga 30%."
        },
        {
            id: 5,
            title: "Peringatan Dini Serangan Hama pada Lahan Jagung",
            img: "/img/news/5.png",
            date: "11 November 2024",
            desc: "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mengingatkan petani di wilayah Jawa dan Sumatera untuk waspada terhadap potensi serangan hama ulat grayak, terutama selama musim pancaroba. Diharapkan petani segera menerapkan langkah pencegahan, seperti rotasi tanaman dan penggunaan pestisida nabati."
        },

    ]
    return (
        <Fragment>
            <h1 className="mx-5 font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-12">News</h1>
            {CardNews.map((item) => (
                <disv key={item.id} className="grid grid-cols-2 gap-5 items-center">
                    <div className="bg-hijau w-60 h-60 rounded-xl flex items-center mb-5">
                        <img src={item.img} alt="" className="w-full h-full object-fit rounded-xl p-3" />
                    </div>
                    <div className=" flex flex-col mb-9 -left-60 relative">
                        <h2 className="font-semibold text-black text-xl">{item.title}</h2>
                        <span className="italic text-sm text-hijau">{item.date}</span>
                        <p>{item.desc}</p>
                        <p className="bg-hijau text-white w-fit py-1 px-3 rounded-xl mt-2">selengkapnya</p>
                    </div>
                </disv>
            ))}
        </Fragment>
    )
};
export default CardNews;