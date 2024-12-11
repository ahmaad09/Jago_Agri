import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [value, onChange] = useState(new Date());
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState("");

    const handleDateClick = (date) => {
        onChange(date);
        setIsModalOpen(true);
    };

    const handleNoteChange = (event) => {
        setCurrentNote(event.target.value);
    };

    const saveNote = () => {
        const newNote = {
            date: value.toLocaleDateString(),
            day: value.toLocaleDateString('id-ID', { weekday: 'long' }),
            content: currentNote,
        };

        setNotes([...notes, newNote]); // Tambahkan catatan baru ke dalam array notes
        setCurrentNote(""); // Reset input
        setIsModalOpen(false); // Tutup modal
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className=" rounded-4xl h-screen">
            <div className="flex">
                {/* Kalender */}
                <div className="max-w-md mx-5 my-10 flex-shrink-0">
                    <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-8 ">Calender</h2>
                    <div className="react-calendar-container">
                        <Calendar
                            onClickDay={handleDateClick} // Fungsi untuk menangani klik pada tanggal
                            value={value}
                            className="react-calendar rounded-lg shadow-md border border-gray-200 p-5"
                        />
                    </div>
                </div>

                {/* Catatan */}
                <div className="ml-10 max-w-lg p-4 border border-gray-300 rounded-md shadow-sm flex-shrink-0 h-full w-full mt-36">
                    <h3 className="text-gray-700 mb-2">Catatan Tersimpan</h3>
                    {notes.length > 0 ? (
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-2 text-left">Tanggal</th>
                                    <th className="border p-2 text-left">Hari</th>
                                    <th className="border p-2 text-left">Catatan</th>
                                    <th className="border p-2 text-left">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">{note.date}</td>
                                        <td className="border p-2">{note.day}</td>
                                        <td className="border p-2">{note.content}</td>
                                        <td className="border p-2 text-center">
                                            <button
                                                onClick={() => deleteNote(index)}
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">Tidak ada catatan yang tersimpan.</p>
                    )}
                </div>

                {/* Modal untuk menambah catatan */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                            <h3 className="text-gray-700 mb-2">Tambah Catatan untuk {value.toDateString()}</h3>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md"
                                rows="4"
                                value={currentNote}
                                onChange={handleNoteChange}
                                placeholder="Tulis catatan di sini..."
                            ></textarea>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={saveNote}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Simpan Catatan
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyCalendar;