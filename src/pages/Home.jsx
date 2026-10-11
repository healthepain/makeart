import Button from "../components/Button"


const Home = () => {
    return (
        <section className="min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <p className="py-3 px-6 font-light text-xs text-gray-500">Selamat datang di suplier rokok original terpercaya</p>
                <nav className="bg-white w-full h-20 rounded-2xl shadow-md flex items-center justify-between px-20">
                    <div className="text-3xl font-extrabold">Logo</div>
                    <div className="flex gap-6">
                        <Button name={"Beranda"}/>
                        <Button name={"Akun"}/>
                        <Button name={"Keranjang"}/>
                        <Button name={"Cara Belanja"}/>
                        <Button name={"Kontak"}/>
                    </div>
                </nav>

                <header className="grid grid-cols-2 gap-10 my-10">
                    <div className="flex flex-col items-start justify-center gap-6">
                        <h1 className="text-4xl font-extrabold text-shadow-md">Jual Rokok <br /> Import Original</h1>
                        <h3 className="text-slate-600 text-sm font-thin ">Nikmati sensasi rasa premium dengan koleksi rokok import original terbaik kami. Kami menghadirkan beragam pilihan merek kelas dunia yang dijamin 100% autentik, siap memanjakan selera Anda.</h3>
                        </div>
                    <div className="w-full rounded-2xl shadow-md h-80 bg-white">gambar</div>
                </header>


            </div>
        </section>
    )
}

export default Home
