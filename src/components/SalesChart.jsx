import {
    AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
    { month: 'Jan', revenue: 42000, target: 38000 },
    { month: 'Feb', revenue: 48000, target: 42000 },
    { month: 'Mar', revenue: 45000, target: 44000 },
    { month: 'Apr', revenue: 61000, target: 48000 },
    { month: 'May', revenue: 55000, target: 50000 },
    { month: 'Jun', revenue: 67000, target: 54000 },
    { month: 'Jul', revenue: 72000, target: 58000 },
    { month: 'Aug', revenue: 69000, target: 62000 },
    { month: 'Sep', revenue: 84000, target: 66000 },
    { month: 'Oct', revenue: 79000, target: 70000 },
    { month: 'Nov', revenue: 91000, target: 74000 },
    { month: 'Dec', revenue: 96000, target: 80000 },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null
    return (
        <div className="bg-[#1f1320] border border-[#f43f5e]/20 rounded-xl p-3 shadow-xl text-xs">
            <p className="font-semibold mb-2 text-[#9f5a6e]">{label}</p>
            <p className="text-[#fb7185]">Revenue: ${payload[0]?.value?.toLocaleString()}</p>
            <p className="text-[#6b3a4a]">Target:  ${payload[1]?.value?.toLocaleString()}</p>
        </div>
    )
}

export default function SalesChart() {
    return (
        <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10 h-full">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-semibold text-base text-[#fff1f2]">Revenue Overview</h3>
                    <p className="text-xs text-[#9f5a6e] mt-0.5">Monthly revenue vs target</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-[#fff1f2]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e] inline-block" />
                        Revenue
                    </span>
                    <span className="flex items-center gap-1.5 text-[#6b3a4a]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6b3a4a] inline-block" />
                        Target
                    </span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                    <defs>
                        <linearGradient id="rose-revenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="rose-target" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6b3a4a" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#6b3a4a" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(244,63,94,0.06)" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#6b3a4a' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="revenue" stroke="#f43f5e" strokeWidth={2} fill="url(#rose-revenue)" />
                    <Area type="monotone" dataKey="target" stroke="#6b3a4a" strokeWidth={1.5} strokeDasharray="4 4" fill="url(#rose-target)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}