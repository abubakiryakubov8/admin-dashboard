import { NavLink } from 'react-router-dom'
import { LayoutDashboard, BarChart2, Users, ShoppingCart, Settings, HelpCircle, Flame } from 'lucide-react'

const nav = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', to: '/analytics' },
    { icon: Users, label: 'Users', to: '/users' },
    { icon: ShoppingCart, label: 'Orders', to: '/orders' },
    { icon: Settings, label: 'Settings', to: '/settings' },
]

export default function Sidebar() {
    return (
        <aside className="w-60 shrink-0 hidden md:flex flex-col bg-[#180f16] border-r border-[#f43f5e]/10 h-full">

            {/* Logo */}
            <div className="flex items-center gap-2.5 px-6 py-5 border-b border-[#f43f5e]/10">
                <div className="w-8 h-8 rounded-lg bg-[#f43f5e] flex items-center justify-center shadow-lg shadow-[#f43f5e]/30">
                    <Flame size={15} className="text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight text-[#fff1f2]">Noir</span>
                <span className="ml-auto text-[10px] font-semibold bg-[#f43f5e]/20 text-[#fb7185] px-2 py-0.5 rounded-full">
                    Pro
                </span>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-0.5">
                <p className="text-[10px] font-semibold text-[#6b3a4a] uppercase tracking-widest px-3 mb-2">
                    Main
                </p>
                {nav.map(({ icon: Icon, label, to }) => (
                    <NavLink
                        key={label}
                        to={to}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${isActive
                                ? 'bg-[#f43f5e] text-white shadow-lg shadow-[#f43f5e]/25'
                                : 'text-[#9f5a6e] hover:bg-[#f43f5e]/10 hover:text-[#fff1f2]'
                            }`
                        }
                    >
                        <Icon size={17} />
                        {label}
                        {label === 'Orders' && (
                            <span className="ml-auto text-[10px] font-bold bg-white/20 text-white px-1.5 py-0.5 rounded-full">
                                12
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* User */}
            <div className="px-3 pb-4 border-t border-[#f43f5e]/10 pt-4 space-y-0.5">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#9f5a6e] hover:bg-[#f43f5e]/10 hover:text-[#fff1f2] transition-all">
                    <HelpCircle size={17} /> Help & Support
                </button>
                <div className="flex items-center gap-3 px-3 py-2.5 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#9f1239] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        AY
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#fff1f2] truncate">AbuBakr Yakubov</p>
                        <p className="text-xs text-[#9f5a6e] truncate">mcdissian8@gmail.com</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}