import { RadialBarChart, RadialBar, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    { name: 'New', value: 4200, color: '#f43f5e' },
    { name: 'Returning', value: 8100, color: '#fb7185' },
    { name: 'Churned', value: 1200, color: '#9f1239' },
]

export default function UsersChart() {
    const total = data.reduce((s, d) => s + d.value, 0)

    return (
        <div className="bg-[#180f16] rounded-2xl p-5 border border-[#f43f5e]/10">
            <h3 className="font-semibold text-base text-[#fff1f2] mb-0.5">User Breakdown</h3>
            <p className="text-xs text-[#9f5a6e] mb-4">Active users this month</p>

            <div className="relative h-44 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%" cy="50%"
                        innerRadius="55%" outerRadius="90%"
                        data={data} startAngle={90} endAngle={-270}
                    >
                        <RadialBar dataKey="value" cornerRadius={6} background={{ fill: 'rgba(244,63,94,0.05)' }}>
                            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
                        </RadialBar>
                        <Tooltip
                            formatter={(v, n) => [`${v.toLocaleString()} users`, n]}
                            contentStyle={{ background: '#1f1320', border: '1px solid rgba(244,63,94,0.2)', borderRadius: 10 }}
                            labelStyle={{ color: '#9f5a6e' }}
                            itemStyle={{ color: '#fb7185' }}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute text-center pointer-events-none">
                    <p className="text-2xl font-bold text-[#fff1f2]">{(total / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-[#9f5a6e]">Total</p>
                </div>
            </div>

            <div className="space-y-2.5 mt-4">
                {data.map(({ name, value, color }) => (
                    <div key={name} className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
                        <span className="text-sm text-[#9f5a6e] flex-1">{name}</span>
                        <span className="text-sm font-semibold text-[#fff1f2]">{value.toLocaleString()}</span>
                        <span className="text-xs text-[#6b3a4a] w-10 text-right">
                            {Math.round(value / total * 100)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
