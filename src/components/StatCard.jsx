const colors = {
    rose: { icon: 'bg-[#f43f5e]/15', badge: 'bg-[#f43f5e]/15 text-[#fb7185]' },
    pink: { icon: 'bg-[#ec4899]/15', badge: 'bg-[#ec4899]/15 text-[#f472b6]' },
    fuchsia: { icon: 'bg-[#a21caf]/15', badge: 'bg-[#a21caf]/15 text-[#e879f9]' },
    red: { icon: 'bg-[#dc2626]/15', badge: 'bg-[#dc2626]/15 text-[#f87171]' },
}

export default function StatCard({ title, value, change, up, icon, color }) {
    const c = colors[color] || colors.rose
    return (
        <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 hover:border-[#f43f5e]/25 hover:shadow-lg hover:shadow-[#f43f5e]/5 transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-[#9f5a6e] font-medium">{title}</p>
                <div className={`w-9 h-9 rounded-xl ${c.icon} flex items-center justify-center text-lg`}>
                    {icon}
                </div>
            </div>
            <p className="text-2xl font-bold text-[#fff1f2] mb-2">{value}</p>
            <div className="flex items-center gap-1.5">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                    {change}
                </span>
                <span className="text-xs text-[#6b3a4a]">vs last month</span>
            </div>
        </div>
    )
}