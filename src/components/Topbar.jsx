import { Bell, Search, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Topbar() {
    const { dark, setDark } = useTheme()

    return (
        <header className="h-16 shrink-0 flex items-center gap-4 px-6 bg-[#180f16] border-b border-[#f43f5e]/10">

            {/* Search */}
            <div className="flex-1 flex items-center gap-3 bg-[#0f0a0e] border border-[#f43f5e]/10 rounded-xl px-4 py-2.5 max-w-sm">
                <Search size={15} className="text-[#9f5a6e] shrink-0" />
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="bg-transparent text-sm outline-none w-full text-[#fff1f2] placeholder-[#6b3a4a]"
                />
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-2">
                <button
                    onClick={() => setDark(!dark)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#0f0a0e] border border-[#f43f5e]/10 hover:border-[#f43f5e]/30 transition-all text-[#9f5a6e] hover:text-[#fb7185]"
                >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <button className="relative w-9 h-9 rounded-xl flex items-center justify-center bg-[#0f0a0e] border border-[#f43f5e]/10 hover:border-[#f43f5e]/30 transition-all text-[#9f5a6e] hover:text-[#fb7185]">
                    <Bell size={16} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f43f5e] rounded-full shadow-sm shadow-[#f43f5e]/50" />
                </button>

                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f43f5e] to-[#9f1239] flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg shadow-[#f43f5e]/20">
                    AY
                </div>
            </div>
        </header>
    )
}